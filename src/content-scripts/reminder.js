function createReminderPopup() {
    console.log('开始创建提醒弹窗');
    
    // 检查是否已存在提醒弹窗
    const existingPopup = document.getElementById('leetcode-reminder-popup');
    if (existingPopup) {
        console.log('已存在提醒弹窗，不重复创建');
        return;
    }
    
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
            <p style="margin: 0 0 15px 0;">Time for your daily practice session. Keep your skills sharp!</p>
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

createReminderPopup(); 