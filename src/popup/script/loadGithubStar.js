// 设置超时时间
const TIMEOUT_DURATION = 800;

// 主函数：加载GitHub Star按钮
function loadGithubStar() {
    console.log('开始加载GitHub Star按钮');
    
    const container = document.getElementById('github-star-container');
    if (!container) {
        console.error('找不到github-star-container元素');
        return;
    }
    
    // 如果无法快速加载，直接显示静态按钮
    const timeout = setTimeout(() => {
        console.log('GitHub Star加载超时，显示静态按钮');
        addStaticButton(container);
    }, TIMEOUT_DURATION);

    try {
        const iframe = document.createElement('iframe');
        iframe.src = "https://ghbtns.com/github-btn.html?user=xiaohajiayou&repo=Leetcode-Mastery-Scheduler&type=star&count=true";
        iframe.frameBorder = "0";
        iframe.scrolling = "0";
        iframe.width = "100";
        iframe.height = "20";
        
        iframe.onload = () => {
            console.log('GitHub Star iframe加载成功');
            clearTimeout(timeout);
            requestAnimationFrame(() => {
                iframe.style.opacity = "0.9";
            });
        };
        
        iframe.onerror = () => {
            console.error('GitHub Star iframe加载失败');
            clearTimeout(timeout);
            addStaticButton(container);
        };

        container.appendChild(iframe);
    } catch (error) {
        console.error('加载GitHub Star时发生错误:', error);
        clearTimeout(timeout);
        addStaticButton(container);
    }
}

// 添加静态按钮的辅助函数
function addStaticButton(container) {
    container.innerHTML = `
        <a href="https://github.com/xiaohajiayou/Leetcode-Mastery-Scheduler" 
           target="_blank" 
           style="text-decoration: none;">
            <button class="btn custom-btn" style="padding: 4px 12px;">
                <i class="fab fa-github"></i> Star
            </button>
        </a>
    `;
}

// 在DOMContentLoaded事件触发时执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM已加载，准备加载GitHub Star按钮');
    
    // 立即尝试加载
    loadGithubStar();
    
    // 添加备份检查，如果5秒后容器仍然为空，则使用静态按钮
    setTimeout(function() {
        const container = document.getElementById('github-star-container');
        if (container && container.children.length === 0) {
            console.log('5秒后容器仍为空，添加静态按钮');
            addStaticButton(container);
        }
    }, 3000);
});
