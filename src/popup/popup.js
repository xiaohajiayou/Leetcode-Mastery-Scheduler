import './popup.css';
import { renderAll } from './view/view.js';
import { syncManager } from './service/syncManager.js';
import { webdavEnhancedService } from './service/webdavEnhancedService.js';
import { webdavEnhancedSettings } from './component/webdavEnhancedSettings.js';
import { store } from './store.js';

console.log("Hello Leetcode-Mastery-Scheduler!");

// 初始渲染
await renderAll();

// 初始化同步管理器
await syncManager.initialize();

// 初始化增强版 WebDAV 设置
await webdavEnhancedSettings.initialize();

// 初始化同步状态指示器
function initializeSyncStatusIndicator() {
    const syncIndicator = document.getElementById('syncIndicator');

    if (!syncIndicator) return;

    // 检查 WebDAV 或云同步是否启用
    const showIndicator = webdavEnhancedService.isConfigured || store.isCloudSyncEnabled;
    if (showIndicator) {
        syncIndicator.style.display = 'flex';
        
        // 根据认证状态显示不同的内容
        const initialStatus = webdavEnhancedService.isAuthenticated ? 'Synced' : 'Login Required';
        const initialClass = webdavEnhancedService.isAuthenticated ? 'sync-indicator' : 'sync-indicator warning';

        syncIndicator.className = initialClass;
        syncIndicator.innerHTML = `
            <span id="syncIcon">🔄</span>
            <span id="syncStatus">${initialStatus}</span>
        `;
    } else {
        syncIndicator.style.display = 'none';
        return;
    }

    const syncIcon = document.getElementById('syncIcon');
    const syncStatus = document.getElementById('syncStatus');

    // 监听两个服务的认证状态变化
    const updateAuthStatus = (isAuthenticated) => {
        if (!isAuthenticated) {
            syncIndicator.className = 'sync-indicator warning';
            syncStatus.textContent = 'Login Required';
            syncIndicator.title = 'Click to open settings and login';
        } else {
            syncIndicator.className = 'sync-indicator';
            syncStatus.textContent = 'Synced';
            syncIndicator.title = 'Click to sync now';
            
            // 认证成功后立即触发一次完整同步，确保本地数据上传到云端
            setTimeout(() => {
                syncManager.immediateSync().then(() => {
                    console.log('Initial sync completed after authentication');
                }).catch(error => {
                    console.error('Initial sync failed after authentication:', error);
                });
            }, 500); // 延迟500ms确保认证完全完成
        }
    };
    
    // 监听认证状态变化
    webdavEnhancedService.onAuthStatusChange = updateAuthStatus;

    // 添加同步状态监听器
    syncManager.addSyncListener((event) => {
        // 检查认证状态
        if (!webdavEnhancedService.isAuthenticated && webdavEnhancedService.isConfigured) {
            return;
        }
        
        switch (event.status) {
            case 'syncing':
                syncIndicator.className = 'sync-indicator syncing';
                syncStatus.textContent = 'Syncing...';
                break;
            case 'success':
                syncIndicator.className = 'sync-indicator success';
                syncStatus.textContent = 'Synced';
                // 同步成功后自动刷新视图
                renderAll().catch(console.error);
                // 3秒后恢复正常状态
                setTimeout(() => {
                    syncIndicator.className = 'sync-indicator';
                    syncStatus.textContent = 'Synced';
                }, 3000);
                break;
            case 'error':
                syncIndicator.className = 'sync-indicator error';
                syncStatus.textContent = 'Sync Error';
                // 5秒后恢复正常状态
                setTimeout(() => {
                    syncIndicator.className = 'sync-indicator';
                    syncStatus.textContent = 'Synced';
                }, 5000);
                break;
            default:
                syncIndicator.className = 'sync-indicator';
                syncStatus.textContent = 'Synced';
        }
    });
    
    // 点击同步指示器的行为
    syncIndicator.addEventListener('click', async () => {
        if (!webdavEnhancedService.isAuthenticated && webdavEnhancedService.isConfigured) {
            // 如果未认证，跳转到设置页面
            const tabs = document.querySelectorAll('.nav-btn');
            const contents = document.querySelectorAll('[id$="View"]');
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            const settingsTab = Array.from(tabs).find(t => t.textContent.includes('Settings'));
            const settingsContent = document.getElementById('settingsView');
            if (settingsTab && settingsContent) {
                settingsTab.classList.add('active');
                settingsContent.classList.add('active');
            }
        } else {
            // 已认证，执行同步
            await syncManager.immediateSync();
        }
    });
    
    // 添加提示
    syncIndicator.title = webdavEnhancedService.isAuthenticated ? 'Click to sync now' : 'Click to open settings and login';
}

// 初始化同步指示器
initializeSyncStatusIndicator();