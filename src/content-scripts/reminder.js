console.log('Reminder content script loaded');

// 初始化提醒功能
function initializeReminder() {
    const CHECK_INTERVAL_MINUTES = 1; // 检查间隔（分钟）
    const CHECK_INTERVAL_MS = CHECK_INTERVAL_MINUTES * 60 * 1000;

    // 检查是否应该显示提醒
    async function shouldShowReminder() {
        try {

            // 检查提醒功能是否启用
            const { reminderEnabled } = await getStorageData(['reminderEnabled']);
            if (!reminderEnabled) {
                console.log('提醒功能未启用');
                return false;
            }

            // 检查上次提醒时间
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

            if (now - lastTime >= delay) {
                chrome.storage.local.remove('nextReminderDelay', () => {
                    console.log('延迟时间已重置为默认值');
                });
            }

            return now - lastTime >= delay;
        } catch (error) {
            console.error('检查提醒条件时出错:', error);
            return false;
        }
    }

    // 显示提醒
    async function showReminder() {
        try {
            console.log('准备显示提醒');
            await createReminderPopup();
            console.log('提醒弹窗已创建');
        } catch (error) {
            console.error('显示提醒失败:', error);
        }
    }

    // 创建提醒弹窗
    function createReminderPopup() {
        console.log('开始创建提醒弹窗');
    
        // 检查是否已存在提醒弹窗
        const existingPopup = document.getElementById('leetcode-reminder-popup');
        if (existingPopup) {
            console.log('已存在提醒弹窗，不重复创建');
            return;
        }
        
        // 创建一个 style 元素
        const style = document.createElement('style');
        style.textContent = `
        .header-section {
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            background-color: #1d2e3d;
            border: 1px solid rgba(74, 157, 156, 0.1);
            box-shadow: 0 0 8px rgba(74, 157, 156, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 10px;
            margin: 10px 15px;
        }
    
        .header-section:hover {
            border-color: rgba(74, 157, 156, 0.2);
            box-shadow: 
                0 0 12px rgba(74, 157, 156, 0.15),
                inset 0 0 8px rgba(74, 157, 156, 0.05);
            transform: translateY(-1px);
        }
    
        .header-section::before {
            content: '';
            position: absolute;
            top: -1px;
            left: -1px;
            right: -1px;
            bottom: -1px;
            border-radius: 15px;
            background: linear-gradient(45deg, 
                rgba(74, 157, 156, 0.05),
                rgba(74, 157, 156, 0.1),
                rgba(74, 157, 156, 0.05)
            );
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
    
        .header-section:hover::before {
            opacity: 1;
        }
    
        `;
    
        const popup = document.createElement('div');
        popup.id = 'leetcode-reminder-popup';  // 添加唯一ID
        popup.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: #1d2e3d;
                border: 1px solid #4a9d9c;
                border-radius: 8px;
                padding: 20px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                z-index: 999999;
                color: #ffffff;
                font-family: Arial, sans-serif;
                max-width: 300px;
            ">
                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                ">
                    <h3 style="margin: 0; color: #61dafb;">Daily Progress</h3>
                    <button id="closeReminder" style="
                        background: none;
                        border: none;
                        color: #888;
                        cursor: pointer;
                        font-size: 18px;
                    ">&times;</button>
                </div>
                <!-- Header Section -->
                <div class="header-section text-center">
                    <!-- 赛博朋克风格的进度条 -->
                    <div style="position: relative; width: 100%; height: 20px; background: #1d2e3d; border-radius: 10px; overflow: hidden;">
                        <div id="progressBar" style="height: 100%; width: 0%; min-width: 5%; background: linear-gradient(90deg, #61dafb, #4a9d9c); transition: width 0.5s;"></div>
                        <div id="progressText" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #FFD700; font-size: 14px;">0%</div>
                    </div>
                </div>
    
                <p style="margin: 15px 0 15px 0;">Time for your daily practice session. Keep your skills sharp!</p>
                <div style="
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                ">
                    <div style="display: flex; gap: 8px;">
                        <button id="remindLater" style="
                            background: #0D6E6E;
                            border: none;
                            color: white;
                            padding: 8px 12px;
                            border-radius: 4px;
                            cursor: pointer;
                        ">Remind Later</button>
                        <button id="remindTomorrow" style="
                            background: #666;
                            border: none;
                            color: white;
                            padding: 8px 12px;
                            border-radius: 4px;
                            cursor: pointer;
                        ">Not Today</button>
                    </div>
                </div>
            </div>
        `;
    
        document.body.appendChild(popup);

        document.getElementById('closeReminder').addEventListener('click', () => {
            popup.remove();
            console.log('提醒已关闭');
        });

        document.getElementById('remindLater').addEventListener('click', () => {
            const delay = 30 * 60 * 1000; // 30分钟
            updateReminderDelay(delay);
            popup.remove();
            console.log(`提醒已推迟 ${delay / (60 * 1000)} 分钟`);
        });

        document.getElementById('remindTomorrow').addEventListener('click', () => {
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(9, 0, 0, 0); // 明天早上9点
            const delay = tomorrow - now;

            updateReminderDelay(delay);
            popup.remove();
            console.log(`提醒已推迟到明天早上9点`);
        });
    }

    // 检查提醒并显示
    async function checkAndRemind() {
        console.log('开始检查提醒条件');
        const shouldRemind = await shouldShowReminder();
        if (shouldRemind) {
            await showReminder();
        } else {
            console.log('当前不需要显示提醒');
        }

        // await showReminder();

    }

    // 设置定时器
    setInterval(checkAndRemind, CHECK_INTERVAL_MS);
    console.log('内容脚本定时器已启动，检查间隔:', CHECK_INTERVAL_MINUTES, '分钟');
}

// 获取存储的数据
function getStorageData(keys) {
    return new Promise(resolve => {
        chrome.storage.local.get(keys, resolve);
    });
}

// 更新提醒延迟时间
function updateReminderDelay(delay) {
    chrome.storage.local.set({
        lastReminderTime: Date.now(),
        nextReminderDelay: delay
    }, () => {
        console.log(`已设置延迟时间为 ${delay / (60 * 1000)} 分钟`);
    });
}



// 初始化提醒功能
initializeReminder();