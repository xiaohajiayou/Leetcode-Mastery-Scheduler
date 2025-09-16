/**
 * WebDAV Service for Nutstore (坚果云) Integration
 * Provides unlimited cloud storage for LeetCode problem data
 */

class WebDAVService {
    constructor() {
        this.baseUrl = null;
        this.username = null;
        this.password = null;
        this.isConfigured = false;
        this.isAuthenticated = false; // 添加认证状态
        this.folderPath = '/LeetcodeMasteryScheduler/'; // 坚果云中的存储路径
        this.onAuthStatusChange = null; // 认证状态变更回调
    }

    /**
     * 配置坚果云 WebDAV 连接
     * @param {Object} config - 配置对象
     * @param {string} config.username - 坚果云账号邮箱
     * @param {string} config.password - 应用授权密码（非账号密码）
     * @param {string} [config.serverUrl] - WebDAV 服务器地址，默认为坚果云
     */
    async configure(config) {
        // 坚果云 WebDAV 地址：https://dav.jianguoyun.com/dav/
        this.baseUrl = config.serverUrl || 'https://dav.jianguoyun.com/dav';
        this.username = config.username;
        this.password = config.password;
        
        // 先保存配置（即使验证失败也保存）
        await this.saveConfig(config);
        this.isConfigured = true;
        
        // 验证连接
        const isValid = await this.testConnection();
        this.isAuthenticated = isValid;
        
        if (isValid) {
            // 确保文件夹存在
            await this.ensureFolderExists();
            if (this.onAuthStatusChange) {
                this.onAuthStatusChange(true);
            }
        } else {
            if (this.onAuthStatusChange) {
                this.onAuthStatusChange(false);
            }
        }
        return isValid;
    }

    /**
     * 测试 WebDAV 连接
     */
    async testConnection() {
        try {
            const response = await this.request('PROPFIND', '/', {
                headers: {
                    'Depth': '0'
                }
            });
            return response.ok;
        } catch (error) {
            console.error('WebDAV connection test failed:', error);
            return false;
        }
    }

    /**
     * 发送 WebDAV 请求（通过 background script）
     */
    async request(method, path, options = {}) {
        const url = `${this.baseUrl}${path}`;
        const auth = btoa(`${this.username}:${this.password}`);
        
        const defaultHeaders = {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/xml; charset=utf-8'
        };
        
        // 通过 background script 发送请求以避免 CORS 问题
        const response = await chrome.runtime.sendMessage({
            action: 'webdavRequest',
            params: {
                method,
                url,
                headers: {
                    ...defaultHeaders,
                    ...options.headers
                },
                body: options.body
            }
        });
        
        if (!response.success) {
            throw new Error(response.error || 'WebDAV request failed');
        }
        
        // 模拟 Response 对象的接口
        // response.data 包含 {ok, status, statusText, data, headers}
        // 其中 response.data.data 是实际的响应内容
        return {
            ok: response.data.ok,
            status: response.data.status,
            statusText: response.data.statusText,
            data: response.data.data,  // 直接暴露 data 属性
            text: async () => {
                // 如果数据是对象，转换为字符串
                if (typeof response.data.data === 'object') {
                    return JSON.stringify(response.data.data);
                }
                return response.data.data;
            },
            json: async () => {
                if (typeof response.data.data === 'string') {
                    try {
                        return JSON.parse(response.data.data);
                    } catch {
                        throw new Error('Invalid JSON response');
                    }
                }
                return response.data.data;
            }
        };
    }

    /**
     * 确保存储文件夹存在
     */
    async ensureFolderExists() {
        try {
            // 检查文件夹是否存在
            const response = await this.request('PROPFIND', this.folderPath, {
                headers: {
                    'Depth': '0'
                }
            });
            
            if (!response.ok && response.status === 404) {
                // 创建文件夹
                await this.request('MKCOL', this.folderPath);
                console.log('Created folder:', this.folderPath);
            }
        } catch (error) {
            console.error('Error ensuring folder exists:', error);
        }
    }

    /**
     * 上传数据到坚果云
     * @param {string} filename - 文件名
     * @param {Object} data - 要保存的数据
     */
    async uploadData(filename, data) {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }
        
        const path = `${this.folderPath}${filename}`;
        const jsonData = JSON.stringify(data, null, 2);
        
        try {
            const response = await this.request('PUT', path, {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            });
            
            if (response.ok || response.status === 201 || response.status === 204) {
                console.log(`Data uploaded to ${path}`);
                return true;
            } else {
                throw new Error(`Upload failed: ${response.status}`);
            }
        } catch (error) {
            console.error('Error uploading data:', error);
            throw error;
        }
    }

    /**
     * 从坚果云下载数据
     * @param {string} filename - 文件名
     */
    async downloadData(filename) {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }
        
        const path = `${this.folderPath}${filename}`;
        
        try {
            const response = await this.request('GET', path, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                // 尝试直接使用 data 属性（如果已经是解析后的数据）
                if (response.data !== undefined) {
                    if (typeof response.data === 'string') {
                        try {
                            return JSON.parse(response.data);
                        } catch {
                            return response.data;
                        }
                    }
                    return response.data;
                }
                // 否则使用 json() 方法
                return await response.json();
            } else if (response.status === 404) {
                return null; // 文件不存在
            } else {
                throw new Error(`Download failed: ${response.status}`);
            }
        } catch (error) {
            console.error('Error downloading data:', error);
            throw error;
        }
    }

    /**
     * 列出文件夹中的所有文件
     */
    async listFiles() {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }
        
        try {
            const response = await this.request('PROPFIND', this.folderPath, {
                headers: {
                    'Depth': '1'
                }
            });
            
            if (response.ok) {
                // 获取 XML 文本
                let xmlText;
                if (response.data !== undefined) {
                    xmlText = typeof response.data === 'object' ? JSON.stringify(response.data) : response.data;
                } else {
                    xmlText = await response.text();
                }
                // 解析 XML 响应获取文件列表
                return this.parseFileList(xmlText);
            } else {
                throw new Error(`List files failed: ${response.status}`);
            }
        } catch (error) {
            console.error('Error listing files:', error);
            throw error;
        }
    }

    /**
     * 解析 PROPFIND 响应中的文件列表
     */
    parseFileList(xmlText) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlText, 'text/xml');
        const responses = doc.getElementsByTagNameNS('DAV:', 'response');
        
        const files = [];
        for (let i = 1; i < responses.length; i++) { // Skip first (folder itself)
            const response = responses[i];
            const href = response.getElementsByTagNameNS('DAV:', 'href')[0]?.textContent;
            const displayName = response.getElementsByTagNameNS('DAV:', 'displayname')[0]?.textContent;
            const lastModified = response.getElementsByTagNameNS('DAV:', 'getlastmodified')[0]?.textContent;
            const contentLength = response.getElementsByTagNameNS('DAV:', 'getcontentlength')[0]?.textContent;
            
            if (href && displayName) {
                files.push({
                    name: displayName,
                    path: href,
                    lastModified: lastModified ? new Date(lastModified) : null,
                    size: contentLength ? parseInt(contentLength) : 0
                });
            }
        }
        
        return files;
    }

    /**
     * 删除文件
     */
    async deleteFile(filename) {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }
        
        const path = `${this.folderPath}${filename}`;
        
        try {
            const response = await this.request('DELETE', path);
            return response.ok || response.status === 204;
        } catch (error) {
            console.error('Error deleting file:', error);
            throw error;
        }
    }

    /**
     * 保存配置到本地存储（加密敏感信息）
     */
    async saveConfig(config) {
        // 简单的 Base64 编码，实际使用应该用更安全的加密方式
        const encryptedConfig = {
            username: config.username,
            password: btoa(config.password), // Base64 编码密码
            serverUrl: config.serverUrl || 'https://dav.jianguoyun.com/dav',
            enabled: true
        };
        
        await chrome.storage.local.set({
            webdavConfig: encryptedConfig
        });
    }

    /**
     * 从本地存储加载配置
     */
    async loadConfig() {
        try {
            const result = await chrome.storage.local.get('webdavConfig');
            if (result.webdavConfig && result.webdavConfig.enabled) {
                const config = result.webdavConfig;
                
                // 直接设置配置，不测试连接（避免网络问题导致配置丢失）
                this.baseUrl = config.serverUrl || 'https://dav.jianguoyun.com/dav';
                this.username = config.username;
                this.password = atob(config.password); // Base64 解码密码
                this.isConfigured = true;
                this.isAuthenticated = false; // 添加认证状态标识
                
                // 异步测试连接，更新认证状态
                this.testConnection().then(isValid => {
                    this.isAuthenticated = isValid;
                    if (!isValid) {
                        console.warn('WebDAV authentication failed - need to login');
                        // 触发认证状态变更事件
                        if (this.onAuthStatusChange) {
                            this.onAuthStatusChange(false);
                        }
                    } else {
                        // 连接成功，确保文件夹存在
                        this.ensureFolderExists().catch(console.error);
                        if (this.onAuthStatusChange) {
                            this.onAuthStatusChange(true);
                        }
                    }
                }).catch(error => {
                    console.error('WebDAV connection test error:', error);
                    this.isAuthenticated = false;
                    if (this.onAuthStatusChange) {
                        this.onAuthStatusChange(false);
                    }
                });
                
                return true;
            }
        } catch (error) {
            console.error('Error loading WebDAV config:', error);
        }
        return false;
    }

    /**
     * 清除配置
     */
    async clearConfig() {
        this.baseUrl = null;
        this.username = null;
        this.password = null;
        this.isConfigured = false;
        
        await chrome.storage.local.remove('webdavConfig');
    }

    /**
     * 备份所有问题数据到坚果云
     */
    async backupProblems(problems) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `problems_backup_${timestamp}.json`;
        
        const backupData = {
            version: '1.0',
            timestamp: new Date().toISOString(),
            problemCount: problems.length,
            problems: problems
        };
        
        await this.uploadData(filename, backupData);
        
        // 保持最近的备份记录
        await this.maintainBackupHistory();
        
        return filename;
    }

    /**
     * 恢复问题数据
     */
    async restoreProblems(filename) {
        const data = await this.downloadData(filename);
        if (data && data.problems) {
            return data.problems;
        }
        throw new Error('Invalid backup file');
    }

    /**
     * 获取所有备份文件列表
     */
    async getBackupList() {
        const files = await this.listFiles();
        return files.filter(file => 
            file.name.startsWith('problems_backup_') && 
            file.name.endsWith('.json')
        ).sort((a, b) => b.lastModified - a.lastModified);
    }

    /**
     * 维护备份历史（保留最近10个备份）
     */
    async maintainBackupHistory() {
        const backups = await this.getBackupList();
        if (backups.length > 10) {
            // 删除旧的备份
            for (let i = 10; i < backups.length; i++) {
                await this.deleteFile(backups[i].name);
            }
        }
    }

    /**
     * 同步数据（上传当前数据并下载最新数据）
     */
    async syncData(localProblems, lastSyncTime) {
        const syncFilename = 'problems_sync.json';
        
        // 下载云端数据
        const cloudData = await this.downloadData(syncFilename);
        
        if (!cloudData) {
            // 云端没有数据，上传本地数据
            await this.uploadData(syncFilename, {
                lastSync: new Date().toISOString(),
                problems: localProblems
            });
            return { problems: localProblems, conflicts: [] };
        }
        
        // 合并数据（简单策略：以最新修改时间为准）
        const mergedData = this.mergeProblems(localProblems, cloudData.problems);
        
        // 上传合并后的数据
        await this.uploadData(syncFilename, {
            lastSync: new Date().toISOString(),
            problems: mergedData.problems
        });
        
        return mergedData;
    }

    /**
     * 合并本地和云端的问题数据
     */
    mergeProblems(localProblems, cloudProblems) {
        const merged = new Map();
        const conflicts = [];
        
        // 添加所有云端问题
        cloudProblems.forEach(problem => {
            merged.set(problem.id || problem.name, problem);
        });
        
        // 合并本地问题
        localProblems.forEach(problem => {
            const key = problem.id || problem.name;
            const cloudProblem = merged.get(key);
            
            if (!cloudProblem) {
                // 只在本地存在
                merged.set(key, problem);
            } else {
                // 比较修改时间，保留最新的
                const localTime = new Date(problem.lastModified || 0).getTime();
                const cloudTime = new Date(cloudProblem.lastModified || 0).getTime();
                
                if (localTime > cloudTime) {
                    merged.set(key, problem);
                } else if (localTime < cloudTime) {
                    // 云端更新，保持云端版本
                } else if (JSON.stringify(problem) !== JSON.stringify(cloudProblem)) {
                    // 时间相同但内容不同，记录冲突
                    conflicts.push({
                        problemId: key,
                        local: problem,
                        cloud: cloudProblem
                    });
                }
            }
        });
        
        return {
            problems: Array.from(merged.values()),
            conflicts
        };
    }
}

// 导出单例
export const webdavService = new WebDAVService();