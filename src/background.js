const WORKER_STARTUP_TIME = Date.now();
const CHECK_INTERVAL_MINUTES = 5;
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

// 检查上次提醒时间
function checkLastReminder() {
    return new Promise(resolve => {
        chrome.storage.local.get(['lastReminderTime', 'nextReminderDelay'], data => {
            const now = Date.now();
            const lastTime = data.lastReminderTime || 0;
            const delay = data.nextReminderDelay || CHECK_INTERVAL_MS;  // 默认使用常量定义的间隔
            
            console.log('检查提醒时间:', {
                现在: new Date(now).toLocaleString(),
                上次提醒: new Date(lastTime).toLocaleString(),
                延迟时间: Math.round(delay / (60 * 1000)) + '分钟',
                是否可以提醒: now - lastTime >= delay
            });
            
            resolve(now - lastTime >= delay);
        });
    });
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
        const canShowReminder = await checkLastReminder();
        console.log('是否可以显示提醒:', canShowReminder);
        if (!canShowReminder) return false;

        // 检查今日是否已复习
        const hasReviewed = await hasReviewedToday();
        console.log('今日是否已复习:', hasReviewed);
        if (hasReviewed) return false;

        return true;
    } catch (error) {
        console.error('检查提醒条件时出错:', error);
        return false;
    }
}

// 显示提醒
async function showReminder() {
    try {
        // 先获取当前活动标签页
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (!tab) {
            console.log('没有找到活动标签页');
            return;
        }

        console.log('准备注入提醒脚本');
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['dist/reminder.js']
        });
        console.log('提醒脚本注入成功');
    } catch (error) {
        console.error('提醒脚本注入失败:', error);
    }
}

// 主检查函数
async function checkAndRemind() {
    console.log('开始检查提醒条件');
    
    if (await shouldShowReminder()) {
        await showReminder();
    }
}

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

// 立即执行一次检查
console.log('执行初始检查');
checkAndRemind();