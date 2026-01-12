import browser from '../shared/browser.js';

console.log('Background service worker started - v2.0 with records support');

// 默认配置
const DEFAULT_SETTINGS = {
    reminderEnabled: false,
    reminderInterval: 60, // 默认60分钟
    reminderStartTime: '00:00',
    reminderEndTime: '23:59',
    reminderDays: [1, 2, 3, 4, 5, 6, 0] // 默认每天
};

// 初始化扩展
browser.runtime.onInstalled.addListener(async () => {
    console.log('Extension installed/updated');
    
    // 在 Manifest V3 中，notifications 权限在 manifest 中声明后直接可用
    console.log('Notifications API ready');
    
    // 初始化设置
    const settings = await browser.storage.local.get(Object.keys(DEFAULT_SETTINGS));
    const needsInit = Object.keys(DEFAULT_SETTINGS).some(key => !(key in settings));
    
    if (needsInit) {
        await browser.storage.local.set(DEFAULT_SETTINGS);
        console.log('Initialized default settings');
    }
    
    // 设置定时器
    setupAlarms();
});

// 监听存储变化
browser.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local') {
        // 监听提醒开关或间隔时间的变化
        if (changes.reminderEnabled || changes.reminderInterval) {
            console.log('Reminder settings changed:', {
                enabled: changes.reminderEnabled?.newValue,
                interval: changes.reminderInterval?.newValue
            });
            setupAlarms();
        }
    }
});

// 设置闹钟
async function setupAlarms() {
    const { reminderEnabled, reminderInterval } = await browser.storage.local.get([
        'reminderEnabled',
        'reminderInterval'
    ]);

    // 清除现有闹钟
    await browser.alarms.clear('dailyReminder');

    if (reminderEnabled) {
        const interval = parseFloat(reminderInterval) || 60;

        // 创建周期性闹钟
        // 注意：Chrome要求periodInMinutes最小为1，但可以设置更小的值让Chrome自动调整
        browser.alarms.create('dailyReminder', {
            delayInMinutes: interval === 0.5 ? 0.5 : 1, // 调试模式30秒后首次触发
            periodInMinutes: interval
        });
        console.log(`Reminder alarm set with interval: ${interval} minutes`);
    } else {
        console.log('Reminder disabled, alarms cleared');
    }
}

// 监听闹钟
browser.alarms.onAlarm.addListener(async (alarm) => {
    if (alarm.name === 'dailyReminder') {
        console.log(`[Alarm Triggered] ${new Date().toLocaleTimeString()} - Running reminder check`);
        await checkAndShowReminder();
    }
});

// 检查并显示提醒
async function checkAndShowReminder() {
    console.log('[checkAndShowReminder] Starting reminder check...');

    const settings = await browser.storage.local.get([
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
    console.log('[checkAndShowReminder] Calling getReviewProblems...');
    let problems = [];
    try {
        problems = await getReviewProblems();
        console.log('[checkAndShowReminder] getReviewProblems returned:', problems.length, 'problems');
    } catch (error) {
        console.error('[checkAndShowReminder] Error in getReviewProblems:', error);
        problems = [];
    }
    const reviewCount = problems.length;

    console.log(`[Reminder Check] ${new Date().toLocaleTimeString()}`);
    console.log(`  - Reminder enabled: ${settings.reminderEnabled}`);
    console.log(`  - Current day: ${currentDay}, allowed days: ${reminderDays}`);
    console.log(`  - Current time: ${Math.floor(currentTime/60)}:${currentTime%60}, allowed: ${settings.reminderStartTime}-${settings.reminderEndTime}`);
    console.log(`  - Problems need review: ${reviewCount}`);

    if (reviewCount > 0) {
        console.log(`[NOTIFICATION] Showing reminder for ${reviewCount} problems`);
        // 显示通知
        showNotification(reviewCount);

        // 更新最后提醒时间
        await browser.storage.local.set({
            lastReminderTime: now.getTime(),
            nextReminderDelay: 0
        });
    } else {
        console.log('[NO NOTIFICATION] All problems reviewed or no problems due');
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
        // 获取所有存储数据来调试
        const allData = await browser.storage.local.get(null);
        console.log('All storage keys:', Object.keys(allData));

        // 检查 configs 中是否有题目数据
        if (allData.configs) {
            console.log('Configs exists, checking for problems inside configs...');
            if (allData.configs.problems) {
                console.log('Found problems in configs.problems:', Object.keys(allData.configs.problems).length, 'problems');
            }
            if (allData.configs.cnProblems) {
                console.log('Found problems in configs.cnProblems:', Object.keys(allData.configs.cnProblems).length, 'problems');
            }
        }

        // 获取题目数据，支持中英文模式
        // 注意：实际存储使用的是 'records' 和 'cn_records'，不是 'problems'！
        const data = await browser.storage.local.get(['records', 'cn_records', 'cn_mode', 'currentMode', 'configs']);

        // 先检查是否在 configs 中
        let problemsData = {};
        // 检查模式：cn_mode 或 currentMode
        let currentMode = data.cn_mode || data.currentMode || 'en';
        if (typeof currentMode === 'boolean') {
            currentMode = currentMode ? 'cn' : 'en';
        }

        // 题目数据直接存储在 records 或 cn_records 中
        const problemsKey = currentMode === 'cn' ? 'cn_records' : 'records';
        problemsData = data[problemsKey] || {};

        console.log(`Using key: ${problemsKey}, found ${Object.keys(problemsData).length} problems`);

        // 如果当前模式没有数据，检查另一个模式
        if (Object.keys(problemsData).length === 0) {
            const otherKey = currentMode === 'cn' ? 'records' : 'cn_records';
            const otherData = data[otherKey] || {};
            if (Object.keys(otherData).length > 0) {
                console.log(`Note: Found ${Object.keys(otherData).length} problems in ${otherKey}`);
                // 使用另一个模式的数据
                problemsData = otherData;
            }
        }

        console.log(`Current mode: ${currentMode}`);
        console.log(`Problems data type:`, typeof problemsData);
        console.log(`Problems keys count:`, Object.keys(problemsData).length);

        // 将对象转换为数组
        const problems = Object.values(problemsData);

        if (problems.length === 0) {
            console.log('No problems found in storage');
            // 尝试显示一些示例数据
            if (Object.keys(otherData).length > 0) {
                console.log(`Found ${Object.keys(otherData).length} problems in ${otherKey}, first problem:`, Object.values(otherData)[0]);
            }
            return [];
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // 过滤出今天需要复习但还未复习的题目
        const reviewProblems = problems.filter(problem => {
            // 跳过已删除的题目
            if (problem.isDeleted) return false;

            // 如果没有 FSRS 状态（新添加的题目），需要复习
            if (!problem.fsrsState) {
                console.log(`New problem without FSRS state needs review: ${problem.name}`);
                return true;
            }

            // 如果从未复习过（新题目），需要复习
            if (!problem.fsrsState.lastReview) {
                console.log(`New problem needs review: ${problem.name} (never reviewed)`);
                return true;
            }

            // 检查是否今天已经复习过
            const lastReview = new Date(problem.fsrsState.lastReview);
            lastReview.setHours(0, 0, 0, 0);
            // 如果今天已经复习过，则不需要提醒
            if (lastReview.getTime() === today.getTime()) {
                return false;
            }

            // 检查是否到了复习时间
            if (problem.fsrsState.nextReview) {
                const nextReview = new Date(problem.fsrsState.nextReview);
                nextReview.setHours(0, 0, 0, 0);
                // 如果复习时间是今天或之前，需要复习
                const needsReview = nextReview.getTime() <= today.getTime();
                if (needsReview) {
                    console.log(`Problem due for review: ${problem.name} (due: ${nextReview.toDateString()})`);
                }
                return needsReview;
            }

            // 如果有 lastReview 但没有 nextReview（异常情况），也算需要复习
            console.log(`Problem with missing nextReview: ${problem.name}`);
            return true;
        });

        console.log(`Found ${reviewProblems.length} problems need review from ${problems.length} total problems`);
        return reviewProblems;
    } catch (error) {
        console.error('Error getting review problems:', error);
        return [];
    }
}

// 显示通知
async function showNotification(reviewCount, isTest = false) {
    // 先清除旧的通知（如果存在）
    try {
        await browser.notifications.clear('leetcodeReminder');
    } catch (error) {
        // 忽略清除错误
    }
    
    // 为测试通知使用不同的 ID，避免冲突
    const notificationId = isTest ? `leetcodeTest_${Date.now()}` : 'leetcodeReminder';
    const isFirefox = typeof browser.runtime.getBrowserInfo === 'function';
    const supportsButtons = !isFirefox;
    
    const notificationOptions = {
        type: 'basic',
        iconUrl: browser.runtime.getURL('assets/bear.png'),
        title: isTest ? '🎉 Test Notification' : 'LeetCode Review Reminder',
        message: isTest 
            ? 'Great! Notifications are working properly. When enabled, you\'ll receive reminders about your LeetCode review tasks at your scheduled intervals.'
            : `You have ${reviewCount} unfinished problem${reviewCount > 1 ? 's' : ''} to review today. Keep your skills sharp!`,
        priority: 2,
        ...(supportsButtons && !isTest ? {
            buttons: [
                { title: 'Review Now' },
                { title: 'Remind Later' }
            ]
        } : {})
    };
    
    try {
        const createdId = await browser.notifications.create(notificationId, notificationOptions);
        console.log('Notification created:', createdId);
        // 测试通知60秒后自动清除
        if (isTest) {
            setTimeout(() => {
                browser.notifications.clear(createdId);
            }, 60000);  // 改为60秒（1分钟）
        }
    } catch (error) {
        console.error('Notification error:', error);
    }
}

// 处理通知点击
browser.notifications.onClicked.addListener((notificationId) => {
    if (notificationId === 'leetcodeReminder') {
        // 在 Manifest V3 中，不能直接调用 openPopup
        // 改为创建新标签页或聚焦现有标签页
        browser.tabs.create({
            url: browser.runtime.getURL('popup.html')
        });
        browser.notifications.clear(notificationId);
    }
});

// 处理通知按钮点击
browser.notifications.onButtonClicked.addListener(async (notificationId, buttonIndex) => {
    if (notificationId === 'leetcodeReminder') {
        if (buttonIndex === 0) {
            // Review Now - 在新标签页打开扩展
            browser.tabs.create({
                url: browser.runtime.getURL('popup.html')
            });
            console.log('Review Now clicked - opening popup');
        } else if (buttonIndex === 1) {
            // Remind Later - 按用户设置的间隔延迟
            const settings = await browser.storage.local.get(['reminderInterval']);
            const interval = parseFloat(settings.reminderInterval) || 60;
            const delay = interval * 60 * 1000; // 转换为毫秒

            await browser.storage.local.set({
                lastReminderTime: Date.now(),
                nextReminderDelay: delay
            });
            console.log(`Reminder delayed for ${interval} minutes (user setting)`);
        }
        browser.notifications.clear(notificationId);
    }
});

// 监听来自popup的消息
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
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

    // 手动触发提醒检查（用于调试）
    if (request.action === 'checkReminder') {
        checkAndShowReminder()
            .then(() => {
                sendResponse({ success: true, message: 'Reminder check completed' });
            })
            .catch(error => {
                console.error('Error checking reminder:', error);
                sendResponse({ success: false, message: error.message });
            });
        return true; // 保持消息通道开放
    }
    
    // 处理 WebDAV 请求
    if (request.action === 'webdavRequest') {
        handleWebDAVRequest(request.params)
            .then(response => sendResponse({ success: true, data: response }))
            .catch(error => sendResponse({ success: false, error: error.message }));
        return true; // 保持消息通道开放用于异步响应
    }
});

// 处理 WebDAV 请求的增强函数 - 支持超时和更好的错误处理
async function handleWebDAVRequest(params) {
    const { method, url, headers, body, timeout = 10000 } = params;

    try {
        // 创建 AbortController 用于超时控制
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: body,
            signal: controller.signal,
            // 忽略 SSL 证书错误（仅在开发环境）
            mode: 'cors',
            credentials: 'omit'
        }).finally(() => {
            clearTimeout(timeoutId);
        });

        const contentType = response.headers.get('content-type');
        let data;

        // 根据内容类型解析响应
        if (contentType) {
            if (contentType.includes('application/json')) {
                data = await response.json();
            } else if (contentType.includes('application/xml') || contentType.includes('text/xml')) {
                data = await response.text();
            } else if (contentType.includes('text')) {
                data = await response.text();
            } else {
                // 二进制数据或未知类型
                data = await response.text();
            }
        } else {
            // 没有 Content-Type，尝试作为文本处理
            data = await response.text();
        }

        return {
            ok: response.ok,
            status: response.status,
            statusText: response.statusText,
            data: data,
            headers: Object.fromEntries(response.headers.entries())
        };
    } catch (error) {
        // 提供更详细的错误信息
        let errorMessage = error.message;
        let errorType = 'unknown';

        if (error.name === 'AbortError') {
            errorMessage = `Request timeout after ${timeout}ms`;
            errorType = 'timeout';
        } else if (error.message.includes('Failed to fetch')) {
            errorMessage = 'Network error - possibly blocked by firewall or CORS';
            errorType = 'network';
        } else if (error.message.includes('SSL') || error.message.includes('certificate')) {
            errorMessage = 'SSL/TLS error - try using HTTP instead';
            errorType = 'ssl';
        }

        console.error('WebDAV request failed:', {
            url,
            method,
            error: errorMessage,
            type: errorType,
            originalError: error
        });

        // 抛出包含更多信息的错误
        const enhancedError = new Error(errorMessage);
        enhancedError.type = errorType;
        enhancedError.originalError = error;
        throw enhancedError;
    }
}
