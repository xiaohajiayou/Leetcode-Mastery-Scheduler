const WORKER_STARTUP_TIME = Date.now();
const CHECK_INTERVAL_MINUTES = 1;
const CHECK_INTERVAL_MS = CHECK_INTERVAL_MINUTES * 60 * 1000;
const KEEP_ALIVE_INTERVAL_MS = 30 * 1000;  // 30秒

console.log('背景脚本启动 -', new Date(WORKER_STARTUP_TIME).toLocaleString());

// 保持 Service Worker 活跃
function keepAlive() {
    const lifetimeInMinutes = (Date.now() - WORKER_STARTUP_TIME) / (1000 * 60);
    console.log(`Service Worker 运行时间: ${lifetimeInMinutes.toFixed(2)} 分钟`);
}

// 每30秒执行一次保活
// setInterval(keepAlive, KEEP_ALIVE_INTERVAL_MS);

// 创建定时器
function setupAlarm() {
    // 先清除所有已存在的 alarm
    chrome.alarms.clearAll(() => {
        console.log('清除所有已存在的定时器');
        
        // 创建新的 alarm，确保只有一个
        chrome.alarms.create('reviewReminder', {
            periodInMinutes: CHECK_INTERVAL_MINUTES
        });
        
        // 验证 alarm 是否正确创建
        chrome.alarms.getAll(alarms => {
            const alarm = alarms.find(a => a.name === 'reviewReminder');
            if (alarm) {
                console.log('定时器创建成功:', {
                    名称: alarm.name,
                    周期: alarm.periodInMinutes + '分钟',
                    下次触发: new Date(alarm.scheduledTime).toLocaleString('zh-CN', {
                        timeZone: 'Asia/Shanghai',
                        hour12: false
                    })
                });
            }
        });
    });
}

// 初始化函数
function initialize() {
    console.log('Service Worker 初始化 -', new Date().toLocaleString());
    setupAlarm();
}

// 浏览器启动时
chrome.runtime.onStartup.addListener(() => {
    console.log('浏览器启动，Service Worker 唤醒 -', new Date().toLocaleString());
    setupAlarm();
});

// 执行初始化
initialize();

// 获取存储的数据
async function getStorageData(keys) {
    return new Promise(resolve => {
        chrome.storage.local.get(keys, resolve);
    });
}

// 检查提醒设置
async function isReminderEnabled() {
    const { reminderEnabled } = await getStorageData(['reminderEnabled']);
    return reminderEnabled || false;
}

// 检查上次提醒时间
async function checkLastReminder() {
    const { lastReminderTime, nextReminderDelay } = await getStorageData([
        'lastReminderTime',
        'nextReminderDelay'
    ]);
    
    const now = Date.now();
    const lastTime = lastReminderTime || 0;
    const delay = nextReminderDelay || CHECK_INTERVAL_MS;

    console.log('检查提醒时间:', {
        现在: new Date(now).toLocaleString(),
        上次提醒: new Date(lastTime).toLocaleString(),
        延迟时间: Math.round(delay / (60 * 1000)) + '分钟',
        是否可以提醒: now - lastTime >= delay
    });

    // 如果时间到了，清除自定义延迟时间
    if (now - lastTime >= delay) {
        chrome.storage.local.remove('nextReminderDelay', () => {
            console.log('延迟时间已重置为默认值');
        });
    }

    return now - lastTime >= delay;
}

// 检查今日是否有复习记录
// 检查今日是否有复习记录
function hasReviewedToday() {
    return new Promise(resolve => {
        chrome.storage.local.get(['lastReviewDate', 'reviewCount'], data => {
            const today = new Date().toDateString();
            
            // 添加空值检查
            const lastReviewDate = data?.lastReviewDate || '';
            const reviewCount = data?.reviewCount || 0;
            const hasReviewed = lastReviewDate === today && reviewCount > 0;
            
            console.log('检查复习状态:', {
                今天: today,
                上次复习日期: lastReviewDate || '无记录',
                复习数量: reviewCount,
                是否已复习: hasReviewed,
                原始数据: data
            });
            
            resolve(hasReviewed);
        });
    });
}


// 检查是否应该显示提醒
async function shouldShowReminder() {
    // 1. 检查浏览器状态
    const checkBrowserState = () => {
        return new Promise(resolve => {
            chrome.idle.queryState(30, state => {
                console.log('浏览器状态:', state);
                resolve(state === 'active');
            });
        });
    };

    // 2. 按顺序检查所有条件
    try {
        // 检查浏览器是否活跃
        if (!await checkBrowserState()) {
            console.log('浏览器不活跃，跳过提醒');
            return false;
        }

        // 检查是否可以显示提醒
        // const canShowReminder = await checkLastReminder();
        // console.log('是否可以显示提醒:', canShowReminder);
        // if (!canShowReminder) return false;

        // 检查今日是否已复习
        // const hasReviewed = await hasReviewedToday();
        // console.log('今日是否已复习:', hasReviewed);
        // if (hasReviewed) return false;

        return true;
    } catch (error) {
        console.error('检查提醒条件时出错:', error);
        return false;
    }
}

// 显示提醒
async function showReminder(retryCount = 0) {
    const MAX_RETRIES = 2;
    
    try {
        // 先获取当前活动标签页
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (!tab) {
            console.log('没有找到活动标签页');
            return;
        }

        // 检查当前页面是否是目标网站
        const isTargetWebsite = tab.url.match(/\.(bilibili|youtube)\.com/);
        if (!isTargetWebsite) {
            console.log('当前页面不是目标网站:', tab.url);
            return;
        }

        // 确保页面已完全加载
        if (tab.status !== 'complete') {
            console.log('页面尚未完全加载，等待重试...');
            if (retryCount < MAX_RETRIES) {
                setTimeout(() => showReminder(retryCount + 1), 1000);
            }
            return;
        }

        console.log(`准备发送显示提醒消息 (重试次数: ${retryCount}/${MAX_RETRIES})`);
        await chrome.tabs.sendMessage(tab.id, {
            action: 'showReminder'
        });
        console.log('提醒消息发送成功');
    } catch (error) {
        console.error('发送提醒消息失败:', error);
        if (retryCount < MAX_RETRIES) {
            console.log(`将在 ${retryCount + 1} 秒后重试...`);
            setTimeout(() => showReminder(retryCount + 1), (retryCount + 1) * 1000);
        } else {
            console.log('达到最大重试次数，放弃重试');
        }
    }
}

// 初始化检查
async function initialCheck() {
    const { lastReminderTime } = await getStorageData(['lastReminderTime']);
    
    if (!lastReminderTime) {
        console.log('首次启动，执行初始检查');
        const enabled = await isReminderEnabled();
        
        if (enabled) {
            await checkAndRemind();
        } else {
            console.log('提醒功能未启用');
        }
    } else {
        console.log('非首次启动，等待定时器触发检查');
    }
}

// 主检查函数
async function checkAndRemind() {
    console.log('开始检查提醒条件');

    // 检查提醒功能是否启用
    const enabled = await isReminderEnabled();
    if (!enabled) {
        console.log('提醒功能未启用');
        return;
    }

    const shouldRemind = await shouldShowReminder();
    if (shouldRemind) {
        await showReminder();
    } else {
        console.log('当前不需要显示提醒');
    }
}

// 执行初始化检查
initialCheck();

// 监听定时器
chrome.alarms.onAlarm.addListener((alarm) => {
    const now = new Date().toLocaleString();
    console.log(`定时器触发 [${now}]:`, {
        名称: alarm.name,
        计划时间: new Date(alarm.scheduledTime).toLocaleString(),
        下次触发时间: new Date(alarm.scheduledTime + CHECK_INTERVAL_MS).toLocaleString(),
        Service_Worker存活时间: ((Date.now() - WORKER_STARTUP_TIME) / (1000 * 60)).toFixed(2) + '分钟'
    });
    
    if (alarm.name === 'reviewReminder') {
        console.log(`[${now}] 开始执行 checkAndRemind`);
        checkAndRemind();
    }
});

// 添加消息监听处理
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('收到消息:', request);
    
    switch (request.action) {
        case 'postponeReminder':
            chrome.storage.local.set({
                lastReminderTime: Date.now(),
                nextReminderDelay: request.delay || CHECK_INTERVAL_MS
            }, () => {
                const minutes = Math.round(request.delay / (60 * 1000));
                console.log(`已设置${minutes}分钟后提醒`);
                sendResponse({ success: true });
            });
            break;
            
        case 'updateReviewStatus':
            chrome.storage.local.set({
                lastReviewDate: new Date().toDateString(),
                reviewCount: request.count || 1
            });
            break;
    }
    
    // 返回 true 表示会异步发送响应
    return true;
});