/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
console.log('Background service worker started');

// 默认配置
const DEFAULT_SETTINGS = {
    reminderEnabled: false,
    reminderInterval: 60, // 默认60分钟
    reminderStartTime: '09:00',
    reminderEndTime: '22:00',
    reminderDays: [1, 2, 3, 4, 5, 6, 0] // 默认每天
};

// 初始化扩展
chrome.runtime.onInstalled.addListener(async () => {
    console.log('Extension installed/updated');
    
    // 在 Manifest V3 中，notifications 权限在 manifest 中声明后直接可用
    console.log('Notifications API ready');
    
    // 初始化设置
    const settings = await chrome.storage.local.get(Object.keys(DEFAULT_SETTINGS));
    const needsInit = Object.keys(DEFAULT_SETTINGS).some(key => !(key in settings));
    
    if (needsInit) {
        await chrome.storage.local.set(DEFAULT_SETTINGS);
        console.log('Initialized default settings');
    }
    
    // 设置定时器
    setupAlarms();
});

// 监听存储变化
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local' && changes.reminderEnabled) {
        console.log('Reminder setting changed:', changes.reminderEnabled.newValue);
        setupAlarms();
    }
});

// 设置闹钟
async function setupAlarms() {
    const { reminderEnabled, reminderInterval } = await chrome.storage.local.get([
        'reminderEnabled',
        'reminderInterval'
    ]);
    
    // 清除现有闹钟
    await chrome.alarms.clear('dailyReminder');
    
    if (reminderEnabled) {
        // 创建周期性闹钟
        chrome.alarms.create('dailyReminder', {
            delayInMinutes: 1, // 1分钟后首次触发
            periodInMinutes: reminderInterval || 60
        });
        console.log(`Reminder alarm set with interval: ${reminderInterval || 60} minutes`);
    } else {
        console.log('Reminder disabled, alarms cleared');
    }
}

// 监听闹钟
chrome.alarms.onAlarm.addListener(async (alarm) => {
    if (alarm.name === 'dailyReminder') {
        await checkAndShowReminder();
    }
});

// 检查并显示提醒
async function checkAndShowReminder() {
    const settings = await chrome.storage.local.get([
        'reminderEnabled',
        'reminderStartTime',
        'reminderEndTime',
        'reminderDays',
        'lastReminderTime',
        'nextReminderDelay'
    ]);
    
    if (!settings.reminderEnabled) {
        return;
    }
    
    // 检查时间范围
    const now = new Date();
    const currentDay = now.getDay();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    // 检查是否在允许的日期
    const reminderDays = settings.reminderDays || DEFAULT_SETTINGS.reminderDays;
    if (!reminderDays.includes(currentDay)) {
        console.log('Not a reminder day');
        return;
    }
    
    // 检查是否在允许的时间范围
    const startTime = parseTime(settings.reminderStartTime || DEFAULT_SETTINGS.reminderStartTime);
    const endTime = parseTime(settings.reminderEndTime || DEFAULT_SETTINGS.reminderEndTime);
    
    if (currentTime < startTime || currentTime > endTime) {
        console.log('Outside reminder time range');
        return;
    }
    
    // 检查延迟
    const lastReminderTime = settings.lastReminderTime || 0;
    const nextReminderDelay = settings.nextReminderDelay || 0;
    
    if (nextReminderDelay > 0 && (now.getTime() - lastReminderTime) < nextReminderDelay) {
        console.log('Still in delay period');
        return;
    }
    
    // 获取待复习题目数量
    const problems = await getReviewProblems();
    const reviewCount = problems.length;
    
    if (reviewCount > 0) {
        console.log(`Found ${reviewCount} problems need review today`);
        // 显示通知
        showNotification(reviewCount);
        
        // 更新最后提醒时间
        await chrome.storage.local.set({
            lastReminderTime: now.getTime(),
            nextReminderDelay: 0
        });
    } else {
        console.log('All problems for today have been reviewed!');
    }
}

// 解析时间字符串
function parseTime(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

// 获取待复习题目（未完成的）
async function getReviewProblems() {
    try {
        const { problems } = await chrome.storage.local.get('problems');
        if (!problems || !Array.isArray(problems)) {
            return [];
        }
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // 过滤出今天需要复习但还未复习的题目
        return problems.filter(problem => {
            // 跳过已删除的题目
            if (problem.isDeleted) return false;
            
            // 检查是否有 FSRS 状态
            if (!problem.fsrsState) return false;
            
            // 检查是否今天已经复习过
            if (problem.fsrsState.lastReview) {
                const lastReview = new Date(problem.fsrsState.lastReview);
                lastReview.setHours(0, 0, 0, 0);
                // 如果今天已经复习过，则不需要提醒
                if (lastReview.getTime() === today.getTime()) {
                    return false;
                }
            }
            
            // 检查是否到了复习时间
            if (problem.fsrsState.nextReview) {
                const nextReview = new Date(problem.fsrsState.nextReview);
                nextReview.setHours(0, 0, 0, 0);
                // 如果复习时间是今天或之前，需要复习
                return nextReview.getTime() <= today.getTime();
            }
            
            return false;
        });
    } catch (error) {
        console.error('Error getting review problems:', error);
        return [];
    }
}

// 显示通知
async function showNotification(reviewCount, isTest = false) {
    // 先清除旧的通知（如果存在）
    try {
        await chrome.notifications.clear('leetcodeReminder');
    } catch (error) {
        // 忽略清除错误
    }
    
    // 为测试通知使用不同的 ID，避免冲突
    const notificationId = isTest ? `leetcodeTest_${Date.now()}` : 'leetcodeReminder';
    
    const notificationOptions = {
        type: 'basic',
        iconUrl: chrome.runtime.getURL('assets/bear.png'),
        title: isTest ? '🎉 Test Notification' : 'LeetCode Review Reminder',
        message: isTest 
            ? 'Great! Notifications are working properly. When enabled, you\'ll receive reminders about your LeetCode review tasks at your scheduled intervals.'
            : `You have ${reviewCount} unfinished problem${reviewCount > 1 ? 's' : ''} to review today. Keep your skills sharp!`,
        priority: 2,
        requireInteraction: !isTest, // 测试通知不需要手动关闭
        buttons: isTest ? [] : [
            { title: 'Review Now' },
            { title: 'Remind in 30 min' }
        ]
    };
    
    chrome.notifications.create(notificationId, notificationOptions, (createdId) => {
        if (chrome.runtime.lastError) {
            console.error('Notification error:', chrome.runtime.lastError);
        } else {
            console.log('Notification created:', createdId);
            // 测试通知60秒后自动清除
            if (isTest) {
                setTimeout(() => {
                    chrome.notifications.clear(createdId);
                }, 60000);  // 改为60秒（1分钟）
            }
        }
    });
}

// 处理通知点击
chrome.notifications.onClicked.addListener((notificationId) => {
    if (notificationId === 'leetcodeReminder') {
        // 打开扩展弹窗
        chrome.action.openPopup();
        chrome.notifications.clear(notificationId);
    }
});

// 处理通知按钮点击
chrome.notifications.onButtonClicked.addListener(async (notificationId, buttonIndex) => {
    if (notificationId === 'leetcodeReminder') {
        if (buttonIndex === 0) {
            // Review Now - 打开扩展
            chrome.action.openPopup();
        } else if (buttonIndex === 1) {
            // Remind Later - 延迟30分钟
            const delay = 30 * 60 * 1000; // 30分钟
            await chrome.storage.local.set({
                lastReminderTime: Date.now(),
                nextReminderDelay: delay
            });
            console.log('Reminder delayed for 30 minutes');
        }
        chrome.notifications.clear(notificationId);
    }
});

// 监听来自popup的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'testNotification') {
        // 在 Manifest V3 中，notifications 权限在 manifest 中声明后直接可用
        try {
            showNotification(5, true); // true 表示这是测试通知
            sendResponse({ success: true, message: 'Test notification sent!' });
        } catch (error) {
            console.error('Error showing notification:', error);
            sendResponse({ success: false, message: 'Failed to show notification: ' + error.message });
        }
        return true; // 保持消息通道开放
    }
});
/******/ })()
;
//# sourceMappingURL=background.js.map