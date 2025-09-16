/**
 * Enhanced WebDAV Service with Auto-fallback and Method Disguise
 * Supports automatic HTTPS->HTTP fallback and PROPFIND->POST disguise
 */

class WebDAVEnhancedService {
    constructor() {
        this.baseUrl = null;
        this.username = null;
        this.password = null;
        this.isConfigured = false;
        this.isAuthenticated = false;
        this.folderPath = '/LeetcodeMasteryScheduler/';
        this.onAuthStatusChange = null;

        // 连接策略配置
        this.connectionStrategy = {
            protocol: 'auto', // 'auto', 'https', 'http'
            method: 'auto',    // 'auto', 'native', 'disguised'
            currentProtocol: null,
            currentMethod: null,
            lastSuccessfulStrategy: null
        };

        // 错误检测模式
        this.errorPatterns = {
            encryptionBlocked: ['ECONNRESET', 'ETIMEDOUT', 'CERT', 'SSL', 'TLS'],
            methodBlocked: ['405', '403', 'Method Not Allowed', 'Forbidden'],
            networkError: ['ENOTFOUND', 'ECONNREFUSED', 'Network']
        };

        // 重试配置
        this.retryConfig = {
            maxRetries: 3,
            retryDelay: 1000,
            timeout: 10000
        };
    }

    /**
     * 配置 WebDAV 连接，支持自动降级
     */
    async configure(config) {
        // 保存基础配置
        this.username = config.username;
        this.password = config.password;

        // 设置连接策略
        if (config.connectionMode) {
            this.connectionStrategy.protocol = config.connectionMode.protocol || 'auto';
            this.connectionStrategy.method = config.connectionMode.method || 'auto';
        }

        // 设置重试配置
        if (config.retryConfig) {
            Object.assign(this.retryConfig, config.retryConfig);
        }

        // 构建基础 URL（不含协议）
        const baseHost = config.serverUrl || 'dav.jianguoyun.com/dav';
        this.baseUrl = baseHost.replace(/^https?:\/\//, '');

        // 保存配置
        await this.saveConfig({
            ...config,
            connectionStrategy: this.connectionStrategy
        });
        this.isConfigured = true;

        // 智能连接测试
        const isValid = await this.smartConnect();
        this.isAuthenticated = isValid;

        if (isValid) {
            await this.ensureFolderExists();
            if (this.onAuthStatusChange) {
                this.onAuthStatusChange(true);
            }
            console.log('WebDAV connected successfully with strategy:', this.connectionStrategy.lastSuccessfulStrategy);
        } else {
            if (this.onAuthStatusChange) {
                this.onAuthStatusChange(false);
            }
        }
        return isValid;
    }

    /**
     * 智能连接测试，自动尝试不同策略
     */
    async smartConnect() {
        const strategies = this.generateStrategies();

        for (const strategy of strategies) {
            console.log(`Trying connection strategy: ${strategy.protocol} + ${strategy.method}`);

            try {
                const success = await this.testConnectionWithStrategy(strategy);
                if (success) {
                    // 保存成功的策略
                    this.connectionStrategy.currentProtocol = strategy.protocol;
                    this.connectionStrategy.currentMethod = strategy.method;
                    this.connectionStrategy.lastSuccessfulStrategy = {
                        protocol: strategy.protocol,
                        method: strategy.method,
                        timestamp: new Date().toISOString()
                    };
                    await this.saveStrategy();
                    return true;
                }
            } catch (error) {
                console.log(`Strategy failed: ${error.message}`);
                continue;
            }
        }

        return false;
    }

    /**
     * 生成连接策略列表
     */
    generateStrategies() {
        const strategies = [];

        // 根据配置生成策略
        const protocols = this.connectionStrategy.protocol === 'auto'
            ? ['https', 'http']
            : [this.connectionStrategy.protocol];

        const methods = this.connectionStrategy.method === 'auto'
            ? ['native', 'disguised']
            : [this.connectionStrategy.method];

        // 如果不是自动模式，用户的选择优先
        if (this.connectionStrategy.protocol !== 'auto') {
            // 用户指定了协议，严格按照用户选择
            for (const method of methods) {
                strategies.push({ protocol: protocols[0], method, priority: 0 });
            }
            return strategies; // 直接返回，只使用用户选择的协议
        }

        // 自动模式：如果有上次成功的策略，优先尝试
        if (this.connectionStrategy.lastSuccessfulStrategy) {
            strategies.push({
                protocol: this.connectionStrategy.lastSuccessfulStrategy.protocol,
                method: this.connectionStrategy.lastSuccessfulStrategy.method,
                priority: 0
            });
        }

        // 然后添加其他策略
        for (const protocol of protocols) {
            for (const method of methods) {
                // 跳过已经添加的优先策略
                if (this.connectionStrategy.lastSuccessfulStrategy &&
                    protocol === this.connectionStrategy.lastSuccessfulStrategy.protocol &&
                    method === this.connectionStrategy.lastSuccessfulStrategy.method) {
                    continue;
                }
                strategies.push({ protocol, method, priority: 1 });
            }
        }

        return strategies;
    }

    /**
     * 使用特定策略测试连接
     */
    async testConnectionWithStrategy(strategy) {
        try {
            const response = await this.requestWithStrategy('PROPFIND', '/', {
                headers: { 'Depth': '0' }
            }, strategy);

            return response.ok;
        } catch (error) {
            // 分析错误类型，用于优化后续策略
            this.analyzeError(error);
            return false;
        }
    }

    /**
     * 使用特定策略发送请求
     */
    async requestWithStrategy(method, path, options = {}, strategy = null) {
        // 如果没有指定策略，使用当前策略
        if (!strategy) {
            strategy = {
                protocol: this.connectionStrategy.currentProtocol || 'https',
                method: this.connectionStrategy.currentMethod || 'native'
            };
        }

        // 构建 URL
        const protocol = strategy.protocol;
        const url = `${protocol}://${this.baseUrl}${path}`;

        // 准备请求参数
        let actualMethod = method;
        let headers = this.buildHeaders(options.headers);

        // 如果使用伪装模式
        if (strategy.method === 'disguised' && ['PROPFIND', 'PROPPATCH', 'MKCOL'].includes(method)) {
            actualMethod = 'POST';
            headers['X-HTTP-Method-Override'] = method;
            headers['X-Original-Method'] = method;
            // 添加自定义标记，后端可以识别
            headers['X-WebDAV-Disguised'] = 'true';
        }

        // 通过 background script 发送请求
        const response = await this.sendRequest(actualMethod, url, headers, options.body);
        return response;
    }

    /**
     * 发送实际请求（通过 background script）
     */
    async sendRequest(method, url, headers, body) {
        const response = await chrome.runtime.sendMessage({
            action: 'webdavRequest',
            params: {
                method,
                url,
                headers,
                body,
                timeout: this.retryConfig.timeout
            }
        });

        if (!response.success) {
            const error = new Error(response.error || 'WebDAV request failed');
            error.details = response;
            throw error;
        }

        return this.wrapResponse(response.data);
    }

    /**
     * 包装响应对象
     */
    wrapResponse(data) {
        return {
            ok: data.ok,
            status: data.status,
            statusText: data.statusText,
            data: data.data,
            text: async () => {
                if (typeof data.data === 'object') {
                    return JSON.stringify(data.data);
                }
                return data.data;
            },
            json: async () => {
                if (typeof data.data === 'string') {
                    try {
                        return JSON.parse(data.data);
                    } catch {
                        throw new Error('Invalid JSON response');
                    }
                }
                return data.data;
            }
        };
    }

    /**
     * 构建请求头
     */
    buildHeaders(customHeaders = {}) {
        const auth = btoa(`${this.username}:${this.password}`);

        return {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/xml; charset=utf-8',
            'User-Agent': 'LeetcodeMasteryScheduler/1.0',
            ...customHeaders
        };
    }

    /**
     * 分析错误类型，优化后续策略
     */
    analyzeError(error) {
        const errorMsg = error.message.toLowerCase();

        for (const [type, patterns] of Object.entries(this.errorPatterns)) {
            if (patterns.some(pattern => errorMsg.includes(pattern.toLowerCase()))) {
                console.log(`Detected error type: ${type}`);

                // 根据错误类型调整策略
                if (type === 'encryptionBlocked') {
                    // 加密被阻止，优先使用 HTTP
                    this.connectionStrategy.currentProtocol = 'http';
                } else if (type === 'methodBlocked') {
                    // 方法被阻止，使用伪装模式
                    this.connectionStrategy.currentMethod = 'disguised';
                }
                break;
            }
        }
    }

    /**
     * 智能请求方法 - 带自动重试和降级
     */
    async request(method, path, options = {}) {
        let retries = 0;
        let lastError = null;

        while (retries < this.retryConfig.maxRetries) {
            try {
                // 如果有当前成功的策略，先尝试
                if (this.connectionStrategy.currentProtocol && this.connectionStrategy.currentMethod) {
                    try {
                        return await this.requestWithStrategy(method, path, options);
                    } catch (error) {
                        console.log('Current strategy failed, trying alternatives...');
                        lastError = error;
                    }
                }

                // 尝试所有可能的策略
                const strategies = this.generateStrategies();

                for (const strategy of strategies) {
                    try {
                        const response = await this.requestWithStrategy(method, path, options, strategy);

                        // 如果成功，更新当前策略
                        if (response.ok || response.status < 500) {
                            this.connectionStrategy.currentProtocol = strategy.protocol;
                            this.connectionStrategy.currentMethod = strategy.method;
                            return response;
                        }
                    } catch (error) {
                        lastError = error;
                        continue;
                    }
                }

                retries++;
                if (retries < this.retryConfig.maxRetries) {
                    await this.delay(this.retryConfig.retryDelay * retries);
                }
            } catch (error) {
                lastError = error;
                retries++;
            }
        }

        // 所有策略都失败
        throw lastError || new Error('All connection strategies failed');
    }

    /**
     * 延迟函数
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * 确保文件夹存在
     */
    async ensureFolderExists() {
        try {
            const response = await this.request('PROPFIND', this.folderPath, {
                headers: { 'Depth': '0' }
            });

            if (!response.ok && response.status === 404) {
                await this.request('MKCOL', this.folderPath);
                console.log('Created folder:', this.folderPath);
            }
        } catch (error) {
            console.error('Error ensuring folder exists:', error);
        }
    }

    /**
     * 上传数据
     */
    async uploadData(filename, data) {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }

        const path = `${this.folderPath}${filename}`;
        const jsonData = JSON.stringify(data, null, 2);

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
    }

    /**
     * 下载数据
     */
    async downloadData(filename) {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }

        const path = `${this.folderPath}${filename}`;
        const response = await this.request('GET', path, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
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
            return await response.json();
        } else if (response.status === 404) {
            return null;
        } else {
            throw new Error(`Download failed: ${response.status}`);
        }
    }

    /**
     * 列出文件
     */
    async listFiles() {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }

        const response = await this.request('PROPFIND', this.folderPath, {
            headers: { 'Depth': '1' }
        });

        if (response.ok) {
            let xmlText;
            if (response.data !== undefined) {
                xmlText = typeof response.data === 'object' ? JSON.stringify(response.data) : response.data;
            } else {
                xmlText = await response.text();
            }
            return this.parseFileList(xmlText);
        } else {
            throw new Error(`List files failed: ${response.status}`);
        }
    }

    /**
     * 解析文件列表
     */
    parseFileList(xmlText) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlText, 'text/xml');
        const responses = doc.getElementsByTagNameNS('DAV:', 'response');

        const files = [];
        for (let i = 1; i < responses.length; i++) {
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
        const response = await this.request('DELETE', path);
        return response.ok || response.status === 204;
    }

    /**
     * 保存配置
     */
    async saveConfig(config) {
        const encryptedConfig = {
            username: config.username,
            password: btoa(config.password),
            serverUrl: config.serverUrl || 'dav.jianguoyun.com/dav',
            connectionStrategy: config.connectionStrategy || this.connectionStrategy,
            retryConfig: config.retryConfig || this.retryConfig,
            enabled: true
        };

        await chrome.storage.local.set({
            webdavEnhancedConfig: encryptedConfig
        });
    }

    /**
     * 保存连接策略
     */
    async saveStrategy() {
        const result = await chrome.storage.local.get('webdavEnhancedConfig');
        if (result.webdavEnhancedConfig) {
            result.webdavEnhancedConfig.connectionStrategy = this.connectionStrategy;
            await chrome.storage.local.set({
                webdavEnhancedConfig: result.webdavEnhancedConfig
            });
        }
    }

    /**
     * 加载配置
     */
    async loadConfig() {
        try {
            // 优先加载增强版配置
            let result = await chrome.storage.local.get('webdavEnhancedConfig');
            let config = result.webdavEnhancedConfig;

            // 如果没有增强版配置，尝试迁移旧版配置
            if (!config || !config.enabled) {
                const oldResult = await chrome.storage.local.get('webdavConfig');
                if (oldResult.webdavConfig && oldResult.webdavConfig.enabled) {
                    console.log('Migrating from old WebDAV config to enhanced config');
                    // 迁移旧配置
                    config = {
                        ...oldResult.webdavConfig,
                        connectionStrategy: this.connectionStrategy,
                        retryConfig: this.retryConfig
                    };
                    // 保存为增强版配置
                    await chrome.storage.local.set({ webdavEnhancedConfig: config });
                    // 删除旧配置
                    await chrome.storage.local.remove('webdavConfig');
                }
            }

            if (config && config.enabled) {

                this.baseUrl = config.serverUrl || 'dav.jianguoyun.com/dav';
                this.baseUrl = this.baseUrl.replace(/^https?:\/\//, '');
                this.username = config.username;
                this.password = atob(config.password);
                this.isConfigured = true;

                // 恢复连接策略
                if (config.connectionStrategy) {
                    this.connectionStrategy = config.connectionStrategy;
                    // 如果有成功的策略记录，认为已认证
                    if (config.connectionStrategy.lastSuccessfulStrategy) {
                        this.isAuthenticated = true;

                        // 如果策略较老（超过1小时），后台静默验证
                        const strategyTime = new Date(config.connectionStrategy.lastSuccessfulStrategy.timestamp).getTime();
                        if (Date.now() - strategyTime > 60 * 60 * 1000) {
                            // 后台验证，不影响当前状态显示
                            this.smartConnect().then(isValid => {
                                this.isAuthenticated = isValid;
                                if (this.onAuthStatusChange && !isValid) {
                                    // 只在认证失败时通知
                                    this.onAuthStatusChange(false);
                                }
                            }).catch(error => {
                                console.error('WebDAV background connection test error:', error);
                            });
                        }
                    } else {
                        // 没有成功的策略记录，需要测试连接
                        this.isAuthenticated = false;
                    }
                }

                // 恢复重试配置
                if (config.retryConfig) {
                    this.retryConfig = config.retryConfig;
                }

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
        this.connectionStrategy = {
            protocol: 'auto',
            method: 'auto',
            currentProtocol: null,
            currentMethod: null,
            lastSuccessfulStrategy: null
        };

        await chrome.storage.local.remove('webdavEnhancedConfig');
    }

    /**
     * 获取连接状态信息
     */
    getConnectionStatus() {
        return {
            isConfigured: this.isConfigured,
            isAuthenticated: this.isAuthenticated,
            strategy: this.connectionStrategy.lastSuccessfulStrategy,
            currentProtocol: this.connectionStrategy.currentProtocol,
            currentMethod: this.connectionStrategy.currentMethod
        };
    }

    // 保留原有的备份、恢复、同步等方法...
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
        await this.maintainBackupHistory();

        return filename;
    }

    async restoreProblems(filename) {
        const data = await this.downloadData(filename);
        if (data && data.problems) {
            return data.problems;
        }
        throw new Error('Invalid backup file');
    }

    async getBackupList() {
        const files = await this.listFiles();
        return files.filter(file =>
            file.name.startsWith('problems_backup_') &&
            file.name.endsWith('.json')
        ).sort((a, b) => b.lastModified - a.lastModified);
    }

    async maintainBackupHistory() {
        const backups = await this.getBackupList();
        if (backups.length > 10) {
            for (let i = 10; i < backups.length; i++) {
                await this.deleteFile(backups[i].name);
            }
        }
    }

    async syncData(localProblems, lastSyncTime) {
        const syncFilename = 'problems_sync.json';
        const cloudData = await this.downloadData(syncFilename);

        if (!cloudData) {
            await this.uploadData(syncFilename, {
                lastSync: new Date().toISOString(),
                problems: localProblems
            });
            return { problems: localProblems, conflicts: [] };
        }

        const mergedData = this.mergeProblems(localProblems, cloudData.problems);

        await this.uploadData(syncFilename, {
            lastSync: new Date().toISOString(),
            problems: mergedData.problems
        });

        return mergedData;
    }

    mergeProblems(localProblems, cloudProblems) {
        const merged = new Map();
        const conflicts = [];

        cloudProblems.forEach(problem => {
            merged.set(problem.id || problem.name, problem);
        });

        localProblems.forEach(problem => {
            const key = problem.id || problem.name;
            const cloudProblem = merged.get(key);

            if (!cloudProblem) {
                merged.set(key, problem);
            } else {
                const localTime = new Date(problem.lastModified || 0).getTime();
                const cloudTime = new Date(cloudProblem.lastModified || 0).getTime();

                if (localTime > cloudTime) {
                    merged.set(key, problem);
                } else if (localTime < cloudTime) {
                    // Keep cloud version
                } else if (JSON.stringify(problem) !== JSON.stringify(cloudProblem)) {
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
export const webdavEnhancedService = new WebDAVEnhancedService();