/**
 * Sync Manager for coordinating data synchronization between local, Chrome Sync, and WebDAV
 */

import { webdavEnhancedService } from './webdavEnhancedService';
import { getAllProblems, setProblems, getAllProblemsInCloud, setProblemsToCloud } from './problemService';
import { isInCnMode } from './modeService';
import { CN_PROBLEM_KEY, PROBLEM_KEY } from '../util/keys';
import { getLocalStorageData, setLocalStorageData } from '../delegate/localStorageDelegate';
import cloudStorageDelegate from '../delegate/cloudStorageDelegate';
import { store } from '../store';

class SyncManager {
    constructor() {
        this.syncTimer = null;
        this.syncQueue = new Set();
        this.SYNC_DELAY = 2000; // 2秒防抖
        this.AUTO_SYNC_INTERVAL = 5 * 60 * 1000; // 5分钟自动同步
        this.isSyncing = false;
        this.lastSyncTime = null;
        this.syncStatus = 'idle'; // idle, syncing, success, error
        this.syncListeners = new Set();
        this.conflictResolver = null;
        this.autoSyncTimer = null;
    }

    /**
     * 初始化同步管理器
     */
    async initialize() {
        // 加载 WebDAV 配置
        const webdavLoaded = await webdavEnhancedService.loadConfig();
        this.activeWebdavService = webdavEnhancedService;

        // 启动时异步执行一次同步，不阻塞初始化
        if (webdavLoaded || store.isCloudSyncEnabled) {
            setTimeout(() => {
                this.performSync().catch(error => {
                    console.error('Initial sync failed:', error);
                });
            }, 1000); // 延迟1秒执行，让UI先加载完成
        }
        
        // 启动自动同步
        this.startAutoSync();
        
        // 监听窗口关闭事件
        window.addEventListener('beforeunload', async (e) => {
            if (this.hasPendingChanges()) {
                e.preventDefault();
                await this.immediateSync();
            }
        });
    }

    /**
     * 启动自动同步
     */
    startAutoSync() {
        this.stopAutoSync();
        this.autoSyncTimer = setInterval(() => {
            this.performSync();
        }, this.AUTO_SYNC_INTERVAL);
    }

    /**
     * 停止自动同步
     */
    stopAutoSync() {
        if (this.autoSyncTimer) {
            clearInterval(this.autoSyncTimer);
            this.autoSyncTimer = null;
        }
    }

    /**
     * 添加同步状态监听器
     */
    addSyncListener(listener) {
        this.syncListeners.add(listener);
    }

    /**
     * 移除同步状态监听器
     */
    removeSyncListener(listener) {
        this.syncListeners.delete(listener);
    }

    /**
     * 通知同步状态变化
     */
    notifySyncStatusChange(status, data = {}) {
        this.syncStatus = status;
        this.syncListeners.forEach(listener => {
            try {
                listener({ status, ...data });
            } catch (error) {
                console.error('Sync listener error:', error);
            }
        });
    }

    /**
     * 设置冲突解决器
     */
    setConflictResolver(resolver) {
        this.conflictResolver = resolver;
    }

    /**
     * 防抖同步
     */
    debouncedSync(problemId = null) {
        if (problemId) {
            this.syncQueue.add(problemId);
        }
        
        clearTimeout(this.syncTimer);
        this.syncTimer = setTimeout(() => {
            this.performSync();
        }, this.SYNC_DELAY);
    }

    /**
     * 立即同步
     */
    async immediateSync() {
        clearTimeout(this.syncTimer);
        await this.performSync();
    }

    /**
     * 检查是否有待同步的更改
     */
    hasPendingChanges() {
        return this.syncQueue.size > 0 || this.syncTimer !== null;
    }

    /**
     * 执行同步
     */
    async performSync() {
        if (this.isSyncing) return;
        
        // 检查是否有任何同步方式启用
        if (!webdavEnhancedService.isConfigured && !store.isCloudSyncEnabled) {
            return;
        }
        
        this.isSyncing = true;
        this.notifySyncStatusChange('syncing');
        
        try {
            const cnMode = await isInCnMode();
            const key = cnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
            
            // 1. 获取本地数据
            const localData = await this.getLocalData(key);
            
            // 2. 获取所有云端数据（Chrome Sync + WebDAV）
            const cloudData = await this.getAllCloudData(key);
            
            // 3. 合并数据
            const mergedData = await this.mergeAllData(localData, cloudData);
            
            // 4. 处理冲突
            if (mergedData.conflicts.length > 0) {
                await this.handleConflicts(mergedData.conflicts);
            }
            
            // 5. 保存合并后的数据到所有位置
            await this.saveDataEverywhere(key, mergedData.problems);
            
            // 6. 清空同步队列
            this.syncQueue.clear();
            this.lastSyncTime = new Date().toISOString();
            
            this.notifySyncStatusChange('success', { 
                syncedCount: Object.keys(mergedData.problems).length 
            });
        } catch (error) {
            console.error('Sync failed:', error);
            this.notifySyncStatusChange('error', { error: error.message });
            this.handleSyncError(error);
        } finally {
            this.isSyncing = false;
        }
    }

    /**
     * 获取本地数据
     */
    async getLocalData(key) {
        const data = await getLocalStorageData(key);
        return data || {};
    }

    /**
     * 获取所有云端数据
     */
    async getAllCloudData(key) {
        const cloudData = {
            chromeSync: null,
            webdav: null
        };
        
        // 获取Chrome Sync数据
        if (store.isCloudSyncEnabled) {
            try {
                cloudData.chromeSync = await cloudStorageDelegate.get(key);
            } catch (error) {
                console.warn('Failed to get Chrome Sync data:', error);
            }
        }
        
        // 获取WebDAV数据
        if (webdavEnhancedService.isConfigured) {
            try {
                const webdavData = await webdavEnhancedService.downloadData('problems_sync.json');
                if (webdavData && webdavData.problems) {
                    cloudData.webdav = webdavData.problems;
                }
            } catch (error) {
                console.warn('Failed to get WebDAV data:', error);
            }
        }
        
        return cloudData;
    }

    /**
     * 合并所有数据源
     */
    async mergeAllData(localData, cloudData) {
        const merged = new Map();
        const conflicts = [];
        const allProblems = {};
        
        // 收集所有数据源
        const dataSources = [
            { name: 'local', data: localData },
            { name: 'chromeSync', data: cloudData.chromeSync },
            { name: 'webdav', data: cloudData.webdav }
        ].filter(source => source.data);
        
        // 收集所有问题ID
        const allIds = new Set();
        dataSources.forEach(source => {
            if (source.data) {
                Object.keys(source.data).forEach(id => allIds.add(id));
            }
        });
        
        // 对每个问题进行合并
        for (const id of allIds) {
            const versions = dataSources
                .filter(source => source.data && source.data[id])
                .map(source => ({
                    source: source.name,
                    problem: source.data[id]
                }));
            
            if (versions.length === 0) continue;
            
            if (versions.length === 1) {
                // 只有一个版本，直接使用
                merged.set(id, versions[0].problem);
            } else {
                // 多个版本，需要合并
                const mergedProblem = this.mergeSingleProblem(versions);
                if (mergedProblem.hasConflict) {
                    conflicts.push({
                        id,
                        versions: versions
                    });
                } else {
                    merged.set(id, mergedProblem.data);
                }
            }
        }
        
        // 转换为对象格式
        merged.forEach((value, key) => {
            allProblems[key] = value;
        });
        
        return {
            problems: allProblems,
            conflicts
        };
    }

    /**
     * 合并单个问题的多个版本
     */
    mergeSingleProblem(versions) {
        // 找出最新修改的版本
        let latestVersion = versions[0];
        let latestTime = this.getModificationTime(versions[0].problem);
        
        for (let i = 1; i < versions.length; i++) {
            const time = this.getModificationTime(versions[i].problem);
            if (time > latestTime) {
                latestTime = time;
                latestVersion = versions[i];
            }
        }
        
        // 检查是否有冲突（相同时间但不同内容）
        const hasConflict = versions.some(v => {
            const time = this.getModificationTime(v.problem);
            return time === latestTime && 
                   JSON.stringify(v.problem) !== JSON.stringify(latestVersion.problem);
        });
        
        // 特殊字段合并
        const mergedProblem = { ...latestVersion.problem };
        
        // 合并笔记（保留最长的）
        versions.forEach(v => {
            if (v.problem.note && v.problem.note.length > (mergedProblem.note || '').length) {
                mergedProblem.note = v.problem.note;
            }
        });
        
        // 合并复习记录（合并所有记录）
        const allReviews = new Set();
        versions.forEach(v => {
            if (v.problem.reviews && Array.isArray(v.problem.reviews)) {
                v.problem.reviews.forEach(review => {
                    allReviews.add(JSON.stringify(review));
                });
            }
        });
        if (allReviews.size > 0) {
            mergedProblem.reviews = Array.from(allReviews).map(r => JSON.parse(r));
        }
        
        return {
            hasConflict,
            data: mergedProblem
        };
    }

    /**
     * 获取问题的修改时间
     */
    getModificationTime(problem) {
        return problem.modificationTime || 
               problem.lastModified || 
               problem.submissionTime || 
               0;
    }

    /**
     * 处理冲突
     */
    async handleConflicts(conflicts) {
        if (!this.conflictResolver) {
            console.warn('No conflict resolver set, using latest version');
            return;
        }
        
        for (const conflict of conflicts) {
            try {
                const resolved = await this.conflictResolver(conflict);
                if (resolved) {
                    // 更新解决后的数据
                    conflict.resolved = resolved;
                }
            } catch (error) {
                console.error('Conflict resolution failed:', error);
            }
        }
    }

    /**
     * 保存数据到所有位置
     */
    async saveDataEverywhere(key, problems) {
        const savePromises = [];
        
        // 保存到本地
        savePromises.push(setLocalStorageData(key, problems));
        
        // 保存到Chrome Sync
        if (store.isCloudSyncEnabled) {
            savePromises.push(cloudStorageDelegate.set(key, problems).catch(error => {
                console.warn('Failed to save to Chrome Sync:', error);
            }));
        }
        
        // 保存到WebDAV
        if (webdavEnhancedService.isConfigured) {
            const syncData = {
                version: '2.0',
                lastSync: new Date().toISOString(),
                deviceId: await this.getDeviceId(),
                problems: problems,
                metadata: {
                    totalProblems: Object.keys(problems).length,
                    lastModified: new Date().toISOString(),
                    syncVersion: 1
                }
            };
            
            savePromises.push(
                webdavEnhancedService.uploadData('problems_sync.json', syncData).catch(error => {
                    console.warn('Failed to save to WebDAV:', error);
                })
            );
        }
        
        await Promise.all(savePromises);
    }

    /**
     * 获取设备ID
     */
    async getDeviceId() {
        let deviceId = await getLocalStorageData('deviceId');
        if (!deviceId) {
            deviceId = `device-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            await setLocalStorageData('deviceId', deviceId);
        }
        return deviceId;
    }

    /**
     * 处理同步错误
     */
    handleSyncError(error) {
        // 记录错误
        console.error('Sync error:', error);
        
        // 可以在这里添加错误重试逻辑
        // 或者通知用户同步失败
    }

    /**
     * 增量同步（性能优化）
     */
    async incrementalSync() {
        if (!this.lastSyncTime) {
            // 首次同步，执行完整同步
            return this.performSync();
        }
        
        const cnMode = await isInCnMode();
        const key = cnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
        
        // 获取自上次同步以来的更改
        const changes = await this.getChangesSince(this.lastSyncTime);
        
        if (changes.length === 0) return;
        
        // 只同步变化的数据
        const syncData = {
            changes: changes,
            lastSyncTime: new Date().toISOString(),
            deviceId: await this.getDeviceId()
        };
        
        if (webdavEnhancedService.isConfigured) {
            await webdavEnhancedService.uploadData('incremental.json', syncData);
        }
    }

    /**
     * 获取指定时间后的更改
     */
    async getChangesSince(timestamp) {
        const problems = await getAllProblems();
        const changes = [];
        
        Object.entries(problems).forEach(([id, problem]) => {
            const modTime = this.getModificationTime(problem);
            if (modTime > new Date(timestamp).getTime()) {
                changes.push({
                    id,
                    problem,
                    timestamp: modTime
                });
            }
        });
        
        return changes;
    }
}

// 导出单例
export const syncManager = new SyncManager();