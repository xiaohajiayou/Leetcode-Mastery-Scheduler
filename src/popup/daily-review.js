// 原有导入
import { renderAll } from './view/view.js';
import { getAllProblems } from "./service/problemService.js";
import { isInCnMode } from "./service/modeService.js";
import { setLocalStorageData } from "./delegate/localStorageDelegate.js";
import { handleAddBlankProblem, handleAddProblem } from './script/submission.js';
import './popup.css';
import { isCloudSyncEnabled, loadConfigs, setCloudSyncEnabled, setProblemSorter, setDefaultCardLimit, setReminderEnabled } from "./service/configService";
import { store, daily_store } from './store';
import { descriptionOf, idOf, problemSorterArr } from "./util/sort";
import { getAllRevlogs, exportRevlogsToCSV, saveFSRSParams } from './util/fsrs.js';
import { getRevlogCount, optimizeParameters, updateFSRSInstance } from './service/fsrsService.js';
import { webdavService } from './service/webdavService.js';
import { syncManager } from './service/syncManager.js';
import { conflictResolver } from './component/conflictResolver.js';

// 新增服务导入
import {
    loadDailyReviewData,
    isReviewedToday
} from './service/reviewService.js';

import {
    calculateCompletionStats,
    updateRetrievabilityTrend,
    setCurrentDate
} from './service/statsService.js';

import {
    createReviewCards,
    updateCardLimitDisplay,
    changeCardLimit,
    updateProgressCircle,
    showEmptyState
} from './service/cardDisplayService.js';

import {
    showSuccess,
    showError,
    showWarning,
    showConfirm,
    showModal,
    showSelect,
    testNotification
} from './service/notificationService.js';




async function loadProblemList() {
    await renderAll();
}




// 更新顶部统计信息
function updateStats() {
    console.log('更新统计信息');

    // 计算完成统计
    const stats = calculateCompletionStats();

    if (stats.totalProblems === 0) {
        // 更新显示
        document.getElementById('completedCount').textContent = 0;
        document.getElementById('totalCount').textContent = 0;
        document.getElementById('completionRate').textContent = '0%';
        updateProgressCircle(0);
        showEmptyState();
        return;
    }

    // 显示空状态
    showEmptyState();

    // 更新显示的已复习数量
    document.getElementById('completedCount').textContent = stats.completedCount;
    document.getElementById('totalCount').textContent = stats.cardLimit;

    // 更新进度条
    updateProgressCircle(stats.completionRate);
    document.getElementById('completionRate').textContent = `${stats.completionRate}%`;

    // 更新可检索性趋势
    const trendData = updateRetrievabilityTrend();
    const retrievabilityElement = document.getElementById('retrievabilityAverage');
    retrievabilityElement.textContent = trendData.currentAverage;

    // 更新趋势图标
    const trendIcon = document.getElementById('trendIcon');
    if (trendData.trend === 'up') {
        trendIcon.className = 'fas fa-arrow-up trend-icon trend-up';
    } else if (trendData.trend === 'down') {
        trendIcon.className = 'fas fa-arrow-down trend-icon trend-down';
    } else {
        trendIcon.className = '';
    }

    // 根据可检索性均值调整颜色和背景提示
    const lowMemoryWarning = document.getElementById('lowMemoryWarning');
    if (trendData.currentAverage < 0.90) {
        retrievabilityElement.classList.add('low');
        lowMemoryWarning.classList.add('active');
    } else {
        retrievabilityElement.classList.remove('low');
        lowMemoryWarning.classList.remove('active');
    }

    updateCardLimitDisplay();
}






// 更新卡片显示
export function updateCardDisplay() {
    console.log('更新卡片显示');
    updateStats(); // 更新统计信息
    createReviewCards(); // 创建新的卡片
}


















// 显示/隐藏添加题目弹窗
function toggleAddProblemDialog(show) {
    const dialog = document.getElementById('addProblemDialog');
    if (!dialog) return;
    
    if (show) {
        dialog.style.display = 'block';
    } else {
        dialog.style.display = 'none';
        
        // 清除所有输入字段
        const problemUrl = document.getElementById('problemUrl');
        const problemName = document.getElementById('problemName');
        const customUrl = document.getElementById('customUrl');
        
        if (problemUrl) problemUrl.value = '';
        if (problemName) problemName.value = '';
        if (customUrl) customUrl.value = '';
        
        // 重置选项卡到默认状态
        const urlTabButton = document.getElementById('urlTabButton');
        const manualTabButton = document.getElementById('manualTabButton');
        const urlTab = document.getElementById('urlTab');
        const manualTab = document.getElementById('manualTab');
        
        if (urlTabButton && manualTabButton && urlTab && manualTab) {
            urlTabButton.classList.add('active');
            manualTabButton.classList.remove('active');
            urlTab.classList.add('active');
            manualTab.classList.remove('active');
        }
    }
}



// 初始化添加题目功能
function initializeAddProblem() {
    const addButton = document.querySelector('.gear-button.add-problem');
    if (!addButton) return;

    // 添加选项卡切换样式
    const style = document.createElement('style');
    style.textContent = `
        .tab-container {
            margin-bottom: 15px;
        }
        
        .tab-buttons {
            display: flex;
            border-bottom: 1px solid #3a4a5c;
            margin-bottom: 15px;
        }
        
        .tab-button {
            background: none;
            border: none;
            padding: 8px 15px;
            color: #a0aec0;
            cursor: pointer;
            transition: all 0.3s;
            border-bottom: 2px solid transparent;
        }
        
        .tab-button.active {
            color: #4a9d9c;
            border-bottom: 2px solid #4a9d9c;
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        /* 修复弹窗背景色 - 使用更强的选择器 */
        #addProblemDialog .modal-content {
            background-color: #1d2e3d !important;
            color: #ffffff !important;
        }
        
        #addProblemDialog .tab-content,
        #addProblemDialog .form-group {
            background-color: #1d2e3d !important;
            color: #ffffff !important;
        }
        
        #addProblemDialog input.form-control, 
        #addProblemDialog select.form-control {
            background-color: #2d3e4d !important;
            color: #ffffff !important;
            border: 1px solid #3a4a5c !important;
        }
        
        #addProblemDialog input.form-control::placeholder {
            color: #8096a8 !important;
        }
        
        #addProblemDialog label {
            color: #a0aec0 !important;
        }
    `;
    document.head.appendChild(style);

    // 点击添加按钮显示弹窗
    addButton.addEventListener('click', () => {
        toggleAddProblemDialog(true);
    });

    // 选项卡切换功能
    const urlTabButton = document.getElementById('urlTabButton');
    const manualTabButton = document.getElementById('manualTabButton');
    const urlTab = document.getElementById('urlTab');
    const manualTab = document.getElementById('manualTab');

    if (urlTabButton && manualTabButton) {
        urlTabButton.addEventListener('click', () => {
            urlTabButton.classList.add('active');
            manualTabButton.classList.remove('active');
            urlTab.classList.add('active');
            manualTab.classList.remove('active');
        });

        manualTabButton.addEventListener('click', () => {
            manualTabButton.classList.add('active');
            urlTabButton.classList.remove('active');
            manualTab.classList.add('active');
            urlTab.classList.remove('active');
        });
    }

    // 取消按钮
    const cancelButton = document.getElementById('cancelAdd');
    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            toggleAddProblemDialog(false);
        });
    }

    // 确认添加按钮
    const confirmButton = document.getElementById('confirmAdd');
    if (confirmButton) {
        confirmButton.addEventListener('click', async () => {
            try {
                let result;
                
                // 判断当前激活的是哪个选项卡
                if (urlTab.classList.contains('active')) {
                    // 从URL添加
                    const url = document.getElementById('problemUrl').value.trim();
                    if (!url) {
                        throw new Error('Please enter a valid problem URL.');
                    }
                    result = await handleAddProblem(url);
                } else {
                    // 创建空白卡片
                    const name = document.getElementById('problemName').value.trim();
                    const level = document.getElementById('problemLevel').value;
                    const customUrl = document.getElementById('customUrl').value.trim();
                    
                    if (!name) {
                        throw new Error('Please enter the problem name.');
                    }
                    
                    if (!level) {
                        throw new Error('Please select a difficulty level.');
                    }
                    
                    // 如果提供了URL，检查其格式是否有效
                    if (customUrl && !customUrl.match(/^https?:\/\/.+/)) {
                        throw new Error('Please enter a valid URL starting with http:// or https://');
                    }
                    
                    result = await handleAddBlankProblem(name, level, customUrl);
                }
                
                toggleAddProblemDialog(false);
                await loadDailyReviewData();
                updateCardDisplay();
                
                // 显示成功提示
                showSuccess('SUCCESS', 'Problem added to review list.');
            } catch (error) {
                // 显示错误提示
                showError('ADD FAIL', error.message);
            }
        });
    }

    // 点击弹窗外部关闭弹窗
    const dialog = document.getElementById('addProblemDialog');
    if (dialog) {
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                toggleAddProblemDialog(false);
            }
        });
    }
}


// 初始化同步状态指示器
function initializeSyncStatusIndicator() {
    // 防止重复初始化
    if (syncStatusIndicatorInitialized) {
        console.log('Sync status indicator already initialized, skipping');
        return;
    }
    
    const syncIndicator = document.getElementById('syncIndicator');
    const syncIcon = document.getElementById('syncIcon');
    const syncStatus = document.getElementById('syncStatus');
    
    if (!syncIndicator || !syncIcon || !syncStatus) return;
    
    // 只有在启用了同步功能时才显示
    const showIndicator = webdavService.isConfigured || store.isCloudSyncEnabled;
    if (showIndicator) {
        syncIndicator.style.display = 'flex';
        
        // 根据认证状态设置初始显示
        if (webdavService.isConfigured && !webdavService.isAuthenticated) {
            syncIndicator.className = 'sync-indicator warning';
            syncStatus.textContent = 'Login Required';
        } else {
            syncIndicator.className = 'sync-indicator';
            syncStatus.textContent = 'Synced';
        }
    } else {
        syncIndicator.style.display = 'none';
        return;
    }
    
    // 监听认证状态变化
    webdavService.onAuthStatusChange = (isAuthenticated) => {
        if (!isAuthenticated) {
            syncIndicator.className = 'sync-indicator warning';
            syncStatus.textContent = 'Login Required';
        } else {
            syncIndicator.className = 'sync-indicator';
            syncStatus.textContent = 'Synced';
            
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
    
    // 添加同步状态监听器
    syncManager.addSyncListener((event) => {
        console.log('Sync event received in daily-review:', event);
        switch (event.status) {
            case 'syncing':
                syncIndicator.className = 'sync-indicator syncing';
                syncStatus.textContent = 'Syncing...';
                console.log('Sync status: syncing');
                break;
            case 'success':
                syncIndicator.className = 'sync-indicator success';
                syncStatus.textContent = 'Synced';
                // 同步成功后自动刷新当前视图
                console.log('Sync success - checking active tab for refresh');
                const activeTab = document.querySelector('.nav-btn.active');
                console.log('Active tab found:', activeTab ? activeTab.textContent : 'none');
                if (activeTab && activeTab.textContent.includes('Review')) {
                    console.log('Refreshing Review page data');
                    // 强制重新初始化整个review页面
                    initializeReviewPage().then(() => {
                        console.log('Review page re-initialized after sync');
                    }).catch(error => {
                        console.error('Failed to re-initialize review page:', error);
                    });
                } else if (activeTab && activeTab.textContent.includes('Problems')) {
                    console.log('Refreshing Problems page data');
                    loadProblemList();
                }
                // 3秒后恢复正常状态
                setTimeout(() => {
                    syncIndicator.className = 'sync-indicator';
                    syncStatus.textContent = 'Synced';
                }, 3000);
                break;
            case 'error':
                syncIndicator.className = 'sync-indicator error';
                syncStatus.textContent = 'Sync Error';
                console.log('Sync error:', event.error);
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
        // 如果未认证，跳转到设置页面
        if (webdavService.isConfigured && !webdavService.isAuthenticated) {
            const tabs = document.querySelectorAll('.nav-btn');
            const contents = document.querySelectorAll('[id$="View"]');
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            const settingsTab = Array.from(tabs).find(t => t.textContent.includes('Settings'));
            const settingsContent = document.getElementById('settingsView');
            if (settingsTab && settingsContent) {
                settingsTab.classList.add('active');
                settingsContent.classList.add('active');
                
                // 滚动到WebDAV设置部分
                const webdavToggle = document.getElementById('webdavToggle');
                if (webdavToggle) {
                    webdavToggle.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        } else {
            // 已认证，执行同步
            await syncManager.immediateSync();
            // 同步完成后刷新当前视图
            const activeTab = document.querySelector('.nav-btn.active');
            if (activeTab && activeTab.textContent.includes('Review')) {
                console.log('Manual sync completed, re-initializing review page');
                await initializeReviewPage();
            } else if (activeTab && activeTab.textContent.includes('Problems')) {
                await loadProblemList();
            }
        }
    });
    
    // 添加提示
    syncIndicator.title = webdavService.isAuthenticated ? 'Click to sync now' : 'Click to login';
    
    // 标记已初始化
    syncStatusIndicatorInitialized = true;
    console.log('Sync status indicator initialized');
}

// 初始化FSRS参数优化卡片
async function initializeFSRSOptimization() {
    try {
        // 获取并显示复习记录数量
        const count = await getRevlogCount();
        const revlogCountElement = document.getElementById('revlogCount');
        const revlogCountEnElement = document.getElementById('revlogCount_en');
        if (revlogCountElement) {
            revlogCountElement.textContent = count;
        }
        if (revlogCountEnElement) {
            revlogCountEnElement.textContent = count;
        }
        
        // 添加导出按钮点击事件
        const exportRevlogsBtn = document.getElementById('exportRevlogsBtn');
        if (exportRevlogsBtn) {
            exportRevlogsBtn.addEventListener('click', async () => {
                // 保存原始按钮内容
                const originalContent = exportRevlogsBtn.innerHTML;
                
                try {
                    // 显示加载中提示
                    exportRevlogsBtn.disabled = true;
                    exportRevlogsBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="font-size: 0.85em;"></i>';
                    
                    // 导出CSV
                    const csvContent = await exportRevlogsToCSV();
                    
                    // 创建下载链接
                    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.setAttribute('href', url);
                    link.setAttribute('download', `fsrs_revlogs_${new Date().toISOString().slice(0, 10)}.csv`);
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    // 显示成功提示
                    showSuccess('Export Success', '', {
                        html: `
                            <div>
                                已成功导出 ${count} 条复习记录
                                <br>
                                <small class="text-muted">
                                    Successfully exported ${count} review records to CSV file
                                </small>
                            </div>
                        `,
                        confirmButtonColor: '#4a9d9c',
                        confirmButtonText: 'OK',
                        showConfirmButton: true,
                        timer: null
                    });
                } catch (error) {
                    console.error('Error exporting revlogs:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Export Failed',
                        html: `
                            <div>
                                导出复习记录时发生错误
                                <br>
                                <small class="text-muted">
                                    Error occurred while exporting review records:
                                </small>
                                <br>
                                <small class="text-danger">
                                    ${error.message}
                                </small>
                            </div>
                        `,
                        background: '#1d2e3d',
                        color: '#ffffff',
                        confirmButtonColor: '#4a9d9c',
                        confirmButtonText: 'OK'
                    });
                } finally {
                    // 恢复按钮状态
                    exportRevlogsBtn.disabled = false;
                    exportRevlogsBtn.innerHTML = originalContent;
                }
            });
        }
        
        // 添加优化按钮点击事件
        const optimizeParamsBtn = document.getElementById('optimizeParamsBtn');
        if (optimizeParamsBtn) {
            optimizeParamsBtn.addEventListener('click', async () => {
                // 保存原始按钮内容
                const originalContent = optimizeParamsBtn.innerHTML;
                
                // 创建进度显示元素
                const progressContainer = document.createElement('div');
                progressContainer.className = 'progress optimize-progress';
                progressContainer.innerHTML = `
                    <div class="progress-bar progress-bar-striped progress-bar-animated" 
                         role="progressbar" 
                         style="width: 10%" 
                         aria-valuenow="10" 
                         aria-valuemin="0" 
                         aria-valuemax="100">
                    </div>
                `;
                optimizeParamsBtn.parentNode.appendChild(progressContainer);

                // 更改按钮状态
                optimizeParamsBtn.disabled = true;
                optimizeParamsBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="font-size: 0.85em;"></i>';

                try {
                    // 进度回调函数
                    const onProgress = (progress) => {
                        console.log('Progress update:', progress);
                        const percent = Math.round(progress.percent * 100);
                        const progressBar = progressContainer.querySelector('.progress-bar');
                        if (progressBar) {
                            progressBar.style.width = `${percent}%`;
                            progressBar.setAttribute('aria-valuenow', percent);
                            progressBar.textContent = `${percent}%`;
                        }
                    };
                    
                    // 调用优化API
                    const result = await optimizeParameters(onProgress);
                    
                    // 显示结果弹窗
                    if (result && result.type === 'Success' && result.params) {
                        // 生成唯一ID
                        const detailId = `paramsDetail_${Date.now()}`;
                        
                        // 显示优化后的参数，并添加保存按钮
                        const modalResult = await Swal.fire({
                            title: 'SUCCESS',
                            html: `
                                <div>
                                    <div class="alert alert-success">
                                        <i class="fas fa-check-circle"></i> 参数优化完成！点击确认将自动保存并应用新参数。
                                        <br>
                                        <small >
                                            Optimization done! Click OK to save and use the new settings.
                                        </small>
                                    </div>
                                    <div class="mt-3">
                                        <button class="btn btn-link text-info p-0" 
                                                type="button" 
                                                id="toggleDetail_${detailId}">
                                            <i class="fas fa-chevron-right me-1"></i> 查看详细参数/View all parameters
                                        </button>
                                        <div id="${detailId}" class="mt-2 d-none">
                                            <div class="bg-dark p-2 rounded" style="max-height: 200px; overflow-y: auto;">
                                                <pre class="mb-0" style="color: #61dafb; white-space: pre-wrap; word-break: break-all;">${JSON.stringify(result.params, null, 2)}</pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `,
                            background: '#1d2e3d',
                            color: '#ffffff',
                            confirmButtonColor: '#4a9d9c',
                            confirmButtonText: 'OK',
                            showCloseButton: true,
                            closeButtonHtml: '<i class="fas fa-times"></i>',
                            didRender: () => {
                                // 在弹窗渲染后绑定事件
                                const toggleBtn = document.getElementById(`toggleDetail_${detailId}`);
                                const detailDiv = document.getElementById(detailId);
                                if (toggleBtn && detailDiv) {
                                    toggleBtn.addEventListener('click', () => {
                                        detailDiv.classList.toggle('d-none');
                                        const icon = toggleBtn.querySelector('i');
                                        if (icon) {
                                            icon.classList.toggle('fa-chevron-right');
                                            icon.classList.toggle('fa-chevron-down');
                                        }
                                    });
                                }
                            }
                        });

                        if (modalResult.isConfirmed) {
                            try {
                                // 保存参数到本地存储
                                await saveFSRSParams(result.params);
                                // 更新FSRS实例
                                await updateFSRSInstance(result.params);
                                // 显示成功提示
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Save Success',
                                    text: '参数已成功应用 /New settings applied.',
                                    background: '#1d2e3d',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    color: '#ffffff',
                                    toast: true,
                                    position: 'center-end',
                                    customClass: {
                                        popup: 'colored-toast'
                                    }
                                });
                            } catch (error) {
                                console.error('Error saving FSRS parameters:', error);
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Save Failed',
                                    text: `Error saving parameters: ${error.message}`,
                                    background: '#1d2e3d',
                                    color: '#ffffff',
                                    confirmButtonColor: '#4a9d9c'
                                });
                            }
                        }
                    } else {
                        // 显示其他类型的结果
                        showModal('FSRS参数优化结果', `
                            <div style="max-height: 300px; overflow-y: auto;">
                                <pre style="white-space: pre-wrap; word-break: break-all;">${JSON.stringify(result, null, 2)}</pre>
                            </div>
                        `);
                    }
                } catch (error) {
                    console.error('Error optimizing FSRS parameters:', error);
                    showModal('Error', `Error optimizing parameters: ${error.message}`);
                } finally {
                    // 恢复按钮状态
                    optimizeParamsBtn.disabled = false;
                    optimizeParamsBtn.innerHTML = originalContent;
                    // 移除进度条
                    progressContainer.remove();
                }
            });
        }
    } catch (error) {
        console.error('Error initializing FSRS optimization:', error);
    }
}

// 标记是否已初始化
let webdavInitialized = false;
let syncManagerInitialized = false;
let syncStatusIndicatorInitialized = false;

// 初始化坚果云 WebDAV
async function initializeWebDAV() {
    const webdavToggle = document.getElementById('webdavToggle');
    const webdavSettings = document.getElementById('webdavSettings');
    const webdavUsername = document.getElementById('webdavUsername');
    const webdavPassword = document.getElementById('webdavPassword');
    const testWebdavBtn = document.getElementById('testWebdav');
    const backupNowBtn = document.getElementById('backupNow');
    const restoreDataBtn = document.getElementById('restoreData');
    const logoutWebdavBtn = document.getElementById('logoutWebdav');
    
    if (!webdavToggle) return;
    
    // 如果已经初始化过，直接返回
    if (webdavInitialized) {
        return;
    }
    webdavInitialized = true;
    
    // 只初始化一次同步管理器
    if (!syncManagerInitialized) {
        syncManager.setConflictResolver(async (conflict) => {
            return await conflictResolver.resolveConflict(conflict);
        });
        
        // 设置同步状态监听器
        initializeSyncStatusIndicator();
        
        // 异步初始化同步管理器，不阻塞UI
        setTimeout(() => {
            syncManager.initialize().then(() => {
                console.log('Sync manager initialized');
            });
        }, 100);
        
        syncManagerInitialized = true;
    }
    
    // 快速加载已保存的配置
    const hasConfig = await webdavService.loadConfig();
    webdavToggle.checked = hasConfig;
    
    if (hasConfig) {
        webdavSettings.style.display = 'block';
        // 显示已配置的用户名和密码
        const config = await chrome.storage.local.get('webdavConfig');
        if (config.webdavConfig) {
            webdavUsername.value = config.webdavConfig.username;
            // 解码并显示密码
            webdavPassword.value = atob(config.webdavConfig.password);
        }
    }
    
    // 切换显示/隐藏
    webdavToggle.addEventListener('change', () => {
        webdavSettings.style.display = webdavToggle.checked ? 'block' : 'none';
        if (!webdavToggle.checked) {
            // 禁用时清除配置
            webdavService.clearConfig();
            // 更新同步指示器
            const syncIndicator = document.getElementById('syncIndicator');
            if (syncIndicator) {
                syncIndicator.style.display = 'none';
            }
        }
    });
    
    // 自动保存用户名和密码
    let saveTimer = null;
    const autoSaveCredentials = async () => {
        clearTimeout(saveTimer);
        saveTimer = setTimeout(async () => {
            const username = webdavUsername.value.trim();
            const password = webdavPassword.value.trim();
            
            if (username && password) {
                // 自动保存并测试连接
                try {
                    const isValid = await webdavService.configure({
                        username,
                        password
                    });
                    // 更新同步指示器
                    initializeSyncStatusIndicator();
                    
                    // 如果是首次成功连接，立即同步本地数据
                    if (isValid) {
                        setTimeout(() => {
                            syncManager.immediateSync().then(() => {
                                console.log('Auto-save sync completed');
                            }).catch(error => {
                                console.error('Auto-save sync failed:', error);
                            });
                        }, 1000);
                    }
                } catch (error) {
                    console.error('Auto-save failed:', error);
                }
            }
        }, 1000); // 输入停止1秒后自动保存
    };
    
    if (webdavUsername) {
        webdavUsername.addEventListener('input', autoSaveCredentials);
    }
    
    if (webdavPassword) {
        webdavPassword.addEventListener('input', autoSaveCredentials);
    }
    
    // 测试连接
    if (testWebdavBtn) {
        testWebdavBtn.addEventListener('click', async () => {
            const username = webdavUsername.value.trim();
            const password = webdavPassword.value.trim();
            
            if (!username || !password) {
                Swal.fire({
                    icon: 'error',
                    title: 'Missing Info',
                    text: 'Please enter username and password',
                    timer: 2000
                });
                return;
            }
            
            testWebdavBtn.disabled = true;
            testWebdavBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Testing...</span>';
            
            try {
                const isValid = await webdavService.configure({
                    username,
                    password
                });
                
                if (isValid) {
                    // 配置成功后显示同步指示器
                    const syncIndicator = document.getElementById('syncIndicator');
                    if (syncIndicator) {
                        syncIndicator.style.display = 'flex';
                        initializeSyncStatusIndicator();
                    }
                    
                    // 立即触发一次同步，上传本地数据到云端
                    setTimeout(() => {
                        syncManager.immediateSync().then(() => {
                            console.log('Manual test sync completed');
                        }).catch(error => {
                            console.error('Manual test sync failed:', error);
                        });
                    }, 1000); // 延迟1秒确保UI更新完成
                    
                    Swal.fire({
                        icon: 'success',
                        title: 'Connected!',
                        text: 'Successfully connected to Nutstore. Syncing local data...',
                        timer: 3000
                    });
                } else {
                    throw new Error('Connection failed');
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Connection Failed',
                    text: 'Please check your credentials',
                    timer: 3000
                });
            } finally {
                testWebdavBtn.disabled = false;
                testWebdavBtn.innerHTML = '<i class="fas fa-check"></i><span>Test</span>';
            }
        });
    }
    
    // 立即备份
    if (backupNowBtn) {
        backupNowBtn.addEventListener('click', async () => {
            if (!webdavService.isConfigured) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Not Configured',
                    text: 'Please configure WebDAV first',
                    timer: 2000
                });
                return;
            }
            
            backupNowBtn.disabled = true;
            backupNowBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Backing up...</span>';
            
            try {
                const problems = await getAllProblems();
                const filename = await webdavService.backupProblems(Object.values(problems));
                
                Swal.fire({
                    icon: 'success',
                    title: 'Backup Complete',
                    text: `Saved ${Object.keys(problems).length} problems to Nutstore`,
                    timer: 2000
                });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Backup Failed',
                    text: error.message,
                    timer: 3000
                });
            } finally {
                backupNowBtn.disabled = false;
                backupNowBtn.innerHTML = '<i class="fas fa-upload"></i><span>Backup</span>';
            }
        });
    }
    
    // 恢复数据
    if (restoreDataBtn) {
        restoreDataBtn.addEventListener('click', async () => {
            if (!webdavService.isConfigured) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Not Configured',
                    text: 'Please configure WebDAV first',
                    timer: 2000
                });
                return;
            }
            
            try {
                // 获取备份列表
                const backups = await webdavService.getBackupList();
                
                if (backups.length === 0) {
                    Swal.fire({
                        icon: 'info',
                        title: 'No Backups',
                        text: 'No backup files found in Nutstore',
                        timer: 2000
                    });
                    return;
                }
                
                // 按时间排序，最新的在前
                backups.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
                
                // 默认选择最新的备份
                const latestBackup = backups[0];
                
                // 显示备份列表，让用户确认或选择其他
                const backupOptions = {};
                backups.forEach((backup, index) => {
                    const date = new Date(backup.lastModified);
                    const isLatest = index === 0;
                    backupOptions[backup.name] = `${date.toLocaleString()}${isLatest ? ' (Latest)' : ''}`;
                });
                
                const { value: selectedBackup } = await Swal.fire({
                    title: 'Restore from Backup',
                    html: `
                        <div style="text-align: left; margin-bottom: 10px;">
                            <strong>Latest backup:</strong><br>
                            ${new Date(latestBackup.lastModified).toLocaleString()}
                        </div>
                    `,
                    input: 'select',
                    inputOptions: backupOptions,
                    inputValue: latestBackup.name, // 默认选中最新的
                    showCancelButton: true,
                    confirmButtonText: 'Restore',
                    cancelButtonText: 'Cancel'
                });
                
                if (selectedBackup) {
                    // 确认恢复
                    const { isConfirmed } = await Swal.fire({
                        title: 'Confirm Restore',
                        text: 'This will replace all current data. Continue?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, restore',
                        cancelButtonText: 'Cancel'
                    });
                    
                    if (isConfirmed) {
                        restoreDataBtn.disabled = true;
                        restoreDataBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Restoring...</span>';
                        
                        const problemsArray = await webdavService.restoreProblems(selectedBackup);
                        
                        // 转换为对象格式并保存
                        const problemsObj = {};
                        problemsArray.forEach(problem => {
                            if (problem.index) {
                                problemsObj[problem.index] = problem;
                            }
                        });
                        
                        // 根据当前模式保存
                        const cnMode = await isInCnMode();
                        const key = cnMode ? 'cnProblems' : 'problems';
                        await setLocalStorageData(key, problemsObj);
                        
                        Swal.fire({
                            icon: 'success',
                            title: 'Restore Complete',
                            text: `Restored ${Object.keys(problemsObj).length} problems from backup`,
                            timer: 2000
                        }).then(() => {
                            // 刷新页面
                            window.location.reload();
                        });
                    }
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Restore Failed',
                    text: error.message,
                    timer: 3000
                });
            } finally {
                restoreDataBtn.disabled = false;
                restoreDataBtn.innerHTML = '<i class="fas fa-download"></i><span>Restore</span>';
            }
        });
    }
    
    // 登出按钮
    if (logoutWebdavBtn) {
        logoutWebdavBtn.addEventListener('click', async () => {
            const result = await Swal.fire({
                title: 'Logout from Nutstore?',
                text: 'Your saved credentials will be removed',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, logout',
                cancelButtonText: 'Cancel'
            });
            
            if (result.isConfirmed) {
                // 清除配置
                await webdavService.clearConfig();
                
                // 清空输入框
                webdavUsername.value = '';
                webdavPassword.value = '';
                
                // 隐藏同步指示器
                const syncIndicator = document.getElementById('syncIndicator');
                if (syncIndicator) {
                    syncIndicator.style.display = 'none';
                }
                
                // 取消勾选
                webdavToggle.checked = false;
                webdavSettings.style.display = 'none';
                
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out',
                    text: 'Successfully logged out from Nutstore',
                    timer: 2000
                });
            }
        });
    }
}

// 标记选项是否已初始化
let optionsInitialized = false;

// 快速更新选项显示
function updateOptionsDisplay() {
    const problemSorterSelect = document.getElementById('problemSorterSelect');
    if (problemSorterSelect && store.problemSorter) {
        problemSorterSelect.value = store.problemSorter;
    }
    
    const defaultCardLimitInput = document.getElementById('defaultCardLimit');
    if (defaultCardLimitInput && store.defaultCardLimit) {
        defaultCardLimitInput.value = store.defaultCardLimit;
    }
    
    const reminderToggle = document.getElementById('reminderToggle');
    if (reminderToggle) {
        reminderToggle.checked = store.reminderEnabled || false;
    }
}

// 添加设置相关的初始化函数
async function initializeOptions() {
    // 如果已经初始化过，只更新显示
    if (optionsInitialized) {
        updateOptionsDisplay();
        return;
    }
    
    await loadConfigs();

    const optionsForm = document.getElementById('optionsForm');
    if (!optionsForm) return; // 如果找不到表单元素，直接返回
    
    // 初始化题目排序选择器
    const problemSorterSelect = document.getElementById('problemSorterSelect');
    if (problemSorterSelect) {
        const problemSorterMetaArr = problemSorterArr.map(sorter => ({
            id: idOf(sorter), 
            text: descriptionOf(sorter)
        }));

        problemSorterMetaArr.forEach(sorterMeta => {
            const optionElement = document.createElement('option');
            optionElement.value = sorterMeta.id;
            optionElement.textContent = sorterMeta.text;
            problemSorterSelect.append(optionElement);
        });
    }

    // 初始化云同步开关
    const syncToggle = document.getElementById('syncToggle');
    if (syncToggle) {
        syncToggle.checked = store.isCloudSyncEnabled || false;
    }


    // 初始化坚果云 WebDAV 设置
    await initializeWebDAV();

    // 初始化提醒开关和配置
    const reminderToggle = document.getElementById('reminderToggle');
    const reminderSettings = document.getElementById('reminderSettings');
    const reminderInterval = document.getElementById('reminderInterval');
    const reminderStartTime = document.getElementById('reminderStartTime');
    const reminderEndTime = document.getElementById('reminderEndTime');
    const testNotificationBtn = document.getElementById('testNotification');
    
    if (reminderToggle) {
        // 加载提醒设置
        chrome.storage.local.get([
            'reminderEnabled',
            'reminderInterval',
            'reminderStartTime',
            'reminderEndTime',
            'reminderDays'
        ]).then(config => {
            reminderToggle.checked = config.reminderEnabled || false;
            if (reminderInterval) reminderInterval.value = config.reminderInterval || 60;
            if (reminderStartTime) reminderStartTime.value = config.reminderStartTime || '09:00';
            if (reminderEndTime) reminderEndTime.value = config.reminderEndTime || '22:00';
            
            // 加载星期选择
            const reminderDays = config.reminderDays || [1, 2, 3, 4, 5, 6, 0];
            for (let i = 0; i <= 6; i++) {
                const dayCheckbox = document.getElementById(`day${i}`);
                if (dayCheckbox) {
                    dayCheckbox.checked = reminderDays.includes(i);
                }
            }
            
            // 显示/隐藏设置
            if (reminderSettings) {
                reminderSettings.style.display = reminderToggle.checked ? 'block' : 'none';
            }
        });
        
        // 切换显示/隐藏
        reminderToggle.addEventListener('change', () => {
            if (reminderSettings) {
                reminderSettings.style.display = reminderToggle.checked ? 'block' : 'none';
            }
        });
        
        // 测试通知按钮
        if (testNotificationBtn) {
            testNotificationBtn.addEventListener('click', async () => {
                await testNotification();
            });
        }
    }
    
    // 初始化FSRS参数优化卡片
    await initializeFSRSOptimization();
    
    // 修改保存成功提示
    // 标记已初始化
    optionsInitialized = true;
    
    optionsForm.addEventListener('submit', async e => {
        e.preventDefault();
        const selectedSorterId = problemSorterSelect.value;
        const isCloudSyncEnabled = syncToggle.checked;
        const isReminderEnabled = reminderToggle.checked;

        await setProblemSorter(Number(selectedSorterId));
        await setCloudSyncEnabled(isCloudSyncEnabled);
        await setReminderEnabled(isReminderEnabled);
        
        // 保存提醒详细设置
        if (reminderToggle) {
            const selectedDays = [];
            for (let i = 0; i <= 6; i++) {
                const dayCheckbox = document.getElementById(`day${i}`);
                if (dayCheckbox && dayCheckbox.checked) {
                    selectedDays.push(i);
                }
            }
            
            await chrome.storage.local.set({
                reminderEnabled: isReminderEnabled,
                reminderInterval: parseInt(reminderInterval?.value || 60),
                reminderStartTime: reminderStartTime?.value || '09:00',
                reminderEndTime: reminderEndTime?.value || '22:00',
                reminderDays: selectedDays
            });
        }

        // 使用 SweetAlert2 显示保存成功提示
        Swal.fire({
            icon: 'success',
            title: 'Settings Saved',
            text: 'Your settings have been successfully updated',
            showConfirmButton: false,
            timer: 1500,
            background: '#1d2e3d',
            color: '#ffffff',
            toast: true,
            position: 'center-end',
            customClass: {
                popup: 'colored-toast'
            }
        });
    });
}



// 初始化函数
export async function initializeReviewPage() {
    console.log('初始化复习页面');
    // 首先加载配置
    await loadConfigs();
    console.log('加载的默认卡片数量:', store.defaultCardLimit);
    await loadDailyReviewData(); // 加载真实数据

    // 清理旧的事件监听器
    const gearButtons = document.querySelectorAll('.gear-button');
    gearButtons.forEach(button => {
        button.replaceWith(button.cloneNode(true));
    });

    // 绑定齿轮按钮事件
    document.querySelectorAll('.gear-button').forEach(button => {
        button.addEventListener('click', function() {
            console.log('齿轮按钮被点击');
            const delta = this.classList.contains('left') ? -1 : 1;
            changeCardLimit(delta);
        });
    });

    // 绑定卡片数量输入框变化事件
    const cardLimitInput = document.getElementById('cardLimit');
    cardLimitInput.addEventListener('change', function() {
        console.log('卡片数量改变');
        updateCardDisplay();
    });

    // 监听卡片限制变化事件
    document.addEventListener('cardLimitChanged', updateCardDisplay);

    // 监听卡片复习事件
    document.addEventListener('cardReviewed', updateCardDisplay);

    // 初始化显示
    setCurrentDate();
    updateStats();
    createReviewCards();
    initializeAddProblem();
}

export function initializeFeedbackButton() {
    const button = document.querySelector('.feedback-btn');  // 使用新的类名
    if (!button) return;

    button.addEventListener('mouseenter', function() {
        this.style.background = '#1a3244';
        this.style.borderColor = '#61dafb';
        this.style.boxShadow = '0 0 10px rgba(97, 218, 251, 0.5)';
        this.style.color = '#61dafb';
        this.querySelector('.btn-content').style.transform = 'translateX(2px)';
        this.querySelector('i').style.color = '#61dafb';
    });

    button.addEventListener('mouseleave', function() {
        this.style.background = '#1d2e3d';
        this.style.borderColor = 'rgba(97, 218, 251, 0.3)';
        this.style.boxShadow = 'none';
        this.style.color = '#61dafb';
        this.querySelector('.btn-content').style.transform = 'translateX(0)';
        this.querySelector('i').style.color = '#61dafb';
    });
    const buttonReview = document.querySelector('.feedback-btn-review');  // 使用新的类名
    if (!buttonReview) return;

    buttonReview.addEventListener('mouseenter', function() {
        this.style.background = '#1a3244';
        this.style.borderColor = '#61dafb';
        this.style.boxShadow = '0 0 10px rgba(97, 218, 251, 0.5)';
        this.style.color = '#61dafb';
        this.querySelector('.btn-content').style.transform = 'translateX(2px)';
        this.querySelector('i').style.color = '#61dafb';
    });

    buttonReview.addEventListener('mouseleave', function() {
        this.style.background = '#1d2e3d';
        this.style.borderColor = 'rgba(97, 218, 251, 0.3)';
        this.style.boxShadow = 'none';
        this.style.color = '#61dafb';
        this.querySelector('.btn-content').style.transform = 'translateX(0)';
        this.querySelector('i').style.color = '#61dafb';
    });
}



// 页面切换功能
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM加载完成,开始初始化复习页面和切换绑定');
    await initializeReviewPage();
    // 添加设置初始化
    initializeFeedbackButton();
    
    
    // 检查是否找到导航按钮
    const navButtons = document.querySelectorAll('.nav-btn');
    console.log('找到导航按钮数量:', navButtons.length);
    
    // 检查是否找到视图
    const views = document.querySelectorAll('.view');
    console.log('找到视图数量:', views.length);
    
    // 打印所有视图的ID
    views.forEach(view => console.log('视图ID:', view.id));
    
    navButtons.forEach((button, index) => {
        console.log(`为第 ${index + 1} 个按钮绑定点击事件:`, button.textContent);
        
        button.addEventListener('click', async function(e) {
            e.preventDefault(); // 阻止默认行为
            e.stopPropagation(); // 阻止事件冒泡
            
            console.log('按钮被点击:', this.textContent);
            
            // 移除所有按钮的激活状态
            navButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的激活状态
            this.classList.add('active');
            
            // 获取目标视图
            const targetView = this.textContent.trim();
            console.log('目标视图:', targetView);
            
            let viewId;
            switch(targetView) {
                case 'Review':
                    viewId = 'reviewView';
                    await initializeReviewPage();
                    break;
                case 'Problems':
                    viewId = 'problemListView';
                    await loadProblemList(); // 加载题目列表
                    initializeFeedbackButton();
                    // renderAll();
                    break;
                case 'Settings':
                    viewId = 'moreView';
                    // 并行初始化，不阻塞UI
                    Promise.all([
                        initializeOptions(),
                        initializeWebDAV()
                    ]).catch(error => {
                        console.error('Settings initialization error:', error);
                    });
                    break;
            }
            
            console.log('切换到视图ID:', viewId);
            
            // 切换视图
            views.forEach(view => {
                console.log('检查视图:', view.id);
                if(view.id === viewId) {
                    view.classList.add('active');
                    view.style.display = 'block';
                    console.log('激活视图:', view.id);
                } else {
                    view.classList.remove('active');
                    view.style.display = 'none';
                    console.log('隐藏视图:', view.id);
                }
            });
        });
    });

    // 调试 revlogs
    try {
        console.log('===== 开始调试 revlogs =====');
        const allRevlogs = await getAllRevlogs();
        console.log('所有复习日志:', allRevlogs);
        
        // 计算总复习次数
        let totalReviews = 0;
        Object.keys(allRevlogs).forEach(cardId => {
            totalReviews += allRevlogs[cardId]?.length || 0;
        });
        console.log(`总复习次数: ${totalReviews}`);
        
        // 导出 CSV 并打印
        const csvContent = await exportRevlogsToCSV();
        console.log('CSV 格式的复习日志:');
        console.log(csvContent);
        console.log('===== 结束调试 revlogs =====');
    } catch (error) {
        console.error('调试 revlogs 时出错:', error);
    }
});








// 以防万一，也添加 window.onload
window.onload = function() {
    console.log('页面完全加载完成');
    if (!document.querySelector('.review-card')) {
        console.log('卡片未创建，重新初始化');
        setCurrentDate();
        updateStats();
        updateCardLimitDisplay();
        createReviewCards();
    }
    

};
