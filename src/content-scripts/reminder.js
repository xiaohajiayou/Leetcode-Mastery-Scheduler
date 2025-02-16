console.log('Reminder content script loaded');

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

    // 关闭按钮
    document.getElementById('closeReminder').addEventListener('click', () => {
        popup.remove();
        console.log('提醒已关闭');
    });

    // 更新进度条
    // const completionRate = Math.max(5, 0); // 这里可以替换为实际的完成率，确保至少为 5
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    progressBar.style.width = `${5}%`; // 更新进度条宽度
    progressText.textContent = `${0}%`; // 更新百分比文本

    // 延迟提醒
    document.getElementById('remindLater').addEventListener('click', () => {
        chrome.runtime.sendMessage({ 
            action: 'postponeReminder',
            delay: 30 * 60 * 1000  // 30分钟
        }, () => {
            popup.remove();
        });
    });

    document.getElementById('remindTomorrow').addEventListener('click', () => {
        // 计算到明天早上9点的毫秒数
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(9, 0, 0, 0);
        const delay = tomorrow - now;

        chrome.runtime.sendMessage({ 
            action: 'postponeReminder',
            delay: delay
        }, () => {
            popup.remove();
        });
    });
}

// 改为监听消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('收到消息:', request);
    if (request.action === 'showReminder') {
        console.log('准备创建弹窗');
        createReminderPopup();
    }
}); 