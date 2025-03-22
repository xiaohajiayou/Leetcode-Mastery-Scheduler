import { loadConfigs } from "../service/configService";
import { addRecordButton } from "./submission";

console.log(`Hello Leetcode-Mastery-Scheduler!`);

await loadConfigs();



document.addEventListener('DOMContentLoaded', addRecordButton);

// 检查并确保按钮存在
const ensureButton = () => {
    // 如果按钮不存在，添加按钮
    if (!document.querySelector('.Leetcode-Mastery-Scheduler-record-btn')) {
        addRecordButton();
    }
};

// 创建观察器实例
const observer = new MutationObserver(() => {
    // 每次 DOM 变化时检查按钮
    ensureButton();
});

// 开始观察
const startObserving = () => {
    if (document.body) {
        observer.observe(document.body, {
            childList: true,  // 观察子节点变化
            subtree: true     // 观察所有后代节点
        });
        // 初始检查
        ensureButton();
    } else {
        // 如果 body 还不存在，等待后重试
        setTimeout(startObserving, 100);
    }
};

// 启动观察
startObserving();

// 在页面卸载时停止观察
window.addEventListener('unload', () => {
    observer.disconnect();
});


