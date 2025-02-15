// 检测是否为 Edge 浏览器
const isEdge = navigator.userAgent.indexOf("Edg") !== -1;

// 设置更短的超时时间
const TIMEOUT_DURATION = isEdge ? 1000 : 3000;

function loadGithubStar() {
    const container = document.getElementById('github-star-container');
    if (!container) return;

    // 如果是 Edge 浏览器且无法快速加载，直接显示静态按钮
    const timeout = setTimeout(() => {
        container.innerHTML = `
            <a href="https://github.com/xiaohajiayou/Leetcode-Mastery-Scheduler" 
               target="_blank" 
               style="text-decoration: none;">
                <button class="btn custom-btn" style="padding: 4px 12px;">
                    <i class="fab fa-github"></i> Star
                </button>
            </a>
        `;
    }, TIMEOUT_DURATION);

    const iframe = document.createElement('iframe');
    iframe.src = "https://ghbtns.com/github-btn.html?user=xiaohajiayou&repo=Leetcode-Mastery-Scheduler&type=star&count=true";
    iframe.frameBorder = "0";
    iframe.scrolling = "0";
    iframe.width = "100";
    iframe.height = "20";
    
    iframe.onload = () => {
        clearTimeout(timeout);
        requestAnimationFrame(() => {
            iframe.style.opacity = "0.9";
        });
    };

    container.appendChild(iframe);
}

// Edge 浏览器使用更快的加载策略
if (isEdge) {
    setTimeout(loadGithubStar, 100);
} else {
    // 其他浏览器使用 requestIdleCallback
    if ('requestIdleCallback' in window) {
        requestIdleCallback(loadGithubStar, { timeout: 1000 });
    } else {
        setTimeout(loadGithubStar, 500);
    }
}