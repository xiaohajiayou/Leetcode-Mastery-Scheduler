/**
 * WebDAV Enhanced Settings Component
 * Handles UI interactions for the enhanced WebDAV service
 */

import { webdavEnhancedService } from '../service/webdavEnhancedService';
import { syncManager } from '../service/syncManager';
import EventBus from '../../core/events/EventBus';

class WebDAVEnhancedSettings {
    constructor() {
        this.elements = {};
        this.isInitialized = false;
    }

    /**
     * 初始化组件
     */
    async initialize() {
        if (this.isInitialized) return;

        this.cacheElements();
        this.attachEventListeners();
        await this.loadCurrentConfig();

        // 监听认证状态变化
        webdavEnhancedService.onAuthStatusChange = (isAuthenticated) => {
            this.updateConnectionStatus(isAuthenticated);
        };

        this.isInitialized = true;
    }

    /**
     * 缓存 DOM 元素
     */
    cacheElements() {
        this.elements = {
            toggle: document.getElementById('webdavToggle'),
            settings: document.getElementById('webdavSettings'),
            username: document.getElementById('webdavUsername'),
            password: document.getElementById('webdavPassword'),

            // 连接模式
            modeRadios: document.querySelectorAll('input[name="webdavMode"]'),

            // 高级设置
            advanced: document.getElementById('webdavAdvanced'),
            disguise: document.getElementById('webdavDisguise'),
            retries: document.getElementById('webdavRetries'),
            timeout: document.getElementById('webdavTimeout'),

            // 按钮
            testBtn: document.getElementById('testWebdav'),
            backupBtn: document.getElementById('backupNow'),
            restoreBtn: document.getElementById('restoreData'),
            logoutBtn: document.getElementById('logoutWebdav'),

            // 状态显示
            status: document.getElementById('webdavStatus'),
            statusText: document.getElementById('webdavStatusText')
        };
    }

    /**
     * 绑定事件监听器
     */
    attachEventListeners() {
        // 开关切换
        this.elements.toggle?.addEventListener('change', () => this.handleToggle());

        // 测试连接按钮
        this.elements.testBtn?.addEventListener('click', () => this.testConnection());

        // 备份按钮
        this.elements.backupBtn?.addEventListener('click', () => this.backupData());

        // 恢复按钮
        this.elements.restoreBtn?.addEventListener('click', () => this.restoreData());

        // 登出按钮
        this.elements.logoutBtn?.addEventListener('click', () => this.logout());

        // 监听输入变化，自动保存
        this.elements.username?.addEventListener('change', () => this.autoSave());
        this.elements.password?.addEventListener('change', () => this.autoSave());

        // 监听配置变化
        this.elements.modeRadios?.forEach(radio => {
            radio.addEventListener('change', () => this.autoSave());
        });

        this.elements.disguise?.addEventListener('change', () => this.autoSave());
        this.elements.retries?.addEventListener('change', () => this.autoSave());
        this.elements.timeout?.addEventListener('change', () => this.autoSave());
    }

    /**
     * 加载当前配置
     */
    async loadCurrentConfig() {
        const hasConfig = await webdavEnhancedService.loadConfig();

        if (hasConfig) {
            // 设置开关状态
            if (this.elements.toggle) {
                this.elements.toggle.checked = true;
                this.elements.settings.style.display = 'block';
            }

            // 立即显示当前认证状态
            const status = webdavEnhancedService.getConnectionStatus();
            this.updateConnectionStatus(status.isAuthenticated);

            // 如果已认证但没有最新状态，后台更新一次
            if (status.isAuthenticated && (!status.strategy || !status.strategy.timestamp ||
                Date.now() - new Date(status.strategy.timestamp).getTime() > 5 * 60 * 1000)) {
                // 超过5分钟或没有状态记录，后台静默测试连接
                webdavEnhancedService.testConnection().then(result => {
                    this.updateConnectionStatus(result.success);
                }).catch(() => {
                    // 静默失败，保持当前状态
                });
            }

            // 加载配置值
            const config = await chrome.storage.local.get('webdavEnhancedConfig');
            if (config.webdavEnhancedConfig) {
                const savedConfig = config.webdavEnhancedConfig;

                // 基本信息
                if (this.elements.username) {
                    this.elements.username.value = savedConfig.username || '';
                }
                // 显示密码（像原来的设计一样）
                if (this.elements.password && savedConfig.password) {
                    this.elements.password.value = atob(savedConfig.password);
                }

                // 连接策略
                if (savedConfig.connectionStrategy) {
                    const protocol = savedConfig.connectionStrategy.protocol || 'auto';
                    const methodDisguise = savedConfig.connectionStrategy.method === 'disguised';

                    // 设置协议模式
                    this.elements.modeRadios?.forEach(radio => {
                        if (radio.value === protocol) {
                            radio.checked = true;
                        }
                    });

                    // 设置方法伪装
                    if (this.elements.disguise) {
                        this.elements.disguise.checked = methodDisguise ||
                                                          savedConfig.connectionStrategy.method === 'auto';
                    }
                }

                // 重试配置
                if (savedConfig.retryConfig) {
                    if (this.elements.retries) {
                        this.elements.retries.value = savedConfig.retryConfig.maxRetries || 3;
                    }
                    if (this.elements.timeout) {
                        this.elements.timeout.value = (savedConfig.retryConfig.timeout || 10000) / 1000;
                    }
                }
            }
        }
    }

    /**
     * 处理开关切换
     */
    async handleToggle() {
        const isEnabled = this.elements.toggle.checked;

        if (isEnabled) {
            this.elements.settings.style.display = 'block';
            // 如果有保存的配置，自动连接
            const hasConfig = await webdavEnhancedService.loadConfig();
            if (hasConfig) {
                await this.testConnection();
            }
        } else {
            this.elements.settings.style.display = 'none';
            await webdavEnhancedService.clearConfig();
            this.updateConnectionStatus(false);
        }
    }

    /**
     * 自动保存配置（防抖）
     */
    autoSave = (() => {
        let timer;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                this.saveConfig();
            }, 1000);
        };
    })();

    /**
     * 尝试使用保存的配置自动连接
     */
    async tryAutoConnect() {
        const savedConfig = await chrome.storage.local.get('webdavEnhancedConfig');
        if (savedConfig.webdavEnhancedConfig && savedConfig.webdavEnhancedConfig.enabled) {
            const config = savedConfig.webdavEnhancedConfig;
            if (config.username && config.password) {
                const actualConfig = {
                    username: config.username,
                    password: atob(config.password),
                    connectionMode: config.connectionStrategy || { protocol: 'auto', method: 'auto' },
                    retryConfig: config.retryConfig || { maxRetries: 3, timeout: 10000 }
                };
                return await webdavEnhancedService.configure(actualConfig);
            }
        }
        return false;
    }

    /**
     * 保存配置
     */
    async saveConfig() {
        const username = this.elements.username?.value;
        const password = this.elements.password?.value;

        if (!username || !password) {
            return;
        }

        // 获取连接模式
        let protocol = 'auto';
        this.elements.modeRadios?.forEach(radio => {
            if (radio.checked) {
                protocol = radio.value;
            }
        });

        // 获取方法模式
        const methodDisguise = this.elements.disguise?.checked;
        const method = methodDisguise ? 'auto' : 'native';

        // 获取重试配置
        const retries = parseInt(this.elements.retries?.value || 3);
        const timeout = parseInt(this.elements.timeout?.value || 10) * 1000;

        const config = {
            username,
            password,
            connectionMode: {
                protocol,
                method
            },
            retryConfig: {
                maxRetries: retries,
                timeout: timeout
            }
        };

        // 保存配置但不立即连接
        await webdavEnhancedService.saveConfig(config);
    }

    /**
     * 测试连接
     */
    async testConnection() {
        const username = this.elements.username?.value?.trim();
        const password = this.elements.password?.value?.trim();

        if (!username || !password) {
            this.showMessage('请输入账号和密码', 'error');
            return;
        }

        this.showMessage('正在测试连接...', 'info');
        this.setButtonsDisabled(true);

        // 获取配置
        let protocol = 'auto';
        this.elements.modeRadios?.forEach(radio => {
            if (radio.checked) {
                protocol = radio.value;
            }
        });

        const methodDisguise = this.elements.disguise?.checked;
        const method = methodDisguise ? 'auto' : 'native';

        const retries = parseInt(this.elements.retries?.value || 3);
        const timeout = parseInt(this.elements.timeout?.value || 10) * 1000;

        try {
            const config = {
                username,
                password,
                connectionMode: {
                    protocol,
                    method
                },
                retryConfig: {
                    maxRetries: retries,
                    timeout: timeout
                }
            };

            const success = await webdavEnhancedService.configure(config);

            if (success) {
                const status = webdavEnhancedService.getConnectionStatus();
                let strategyText = '';

                if (status.currentProtocol && status.currentMethod) {
                    const protocolText = status.currentProtocol === 'https' ? 'HTTPS' : 'HTTP';
                    const methodText = status.currentMethod === 'disguised' ? '伪装' : '原生';
                    strategyText = ` (${protocolText} + ${methodText})`;
                }

                this.showMessage(`连接成功${strategyText}`, 'success');
                this.updateConnectionStatus(true);

                // 触发同步
                EventBus.emit('webdav:connected');
            } else {
                this.showMessage('连接失败，请检查账号密码和网络设置', 'error');
                this.updateConnectionStatus(false);
            }
        } catch (error) {
            console.error('Connection test failed:', error);
            this.showMessage(`连接失败: ${error.message}`, 'error');
            this.updateConnectionStatus(false);
        } finally {
            this.setButtonsDisabled(false);
        }
    }

    /**
     * 备份数据
     */
    async backupData() {
        if (!webdavEnhancedService.isAuthenticated) {
            // 尝试使用保存的配置自动连接
            const connected = await this.tryAutoConnect();
            if (!connected) {
                this.showMessage('请先连接 WebDAV', 'error');
                return;
            }
        }

        this.showMessage('正在备份...', 'info');
        this.setButtonsDisabled(true);

        try {
            const { getAllProblems } = await import('../service/problemService');
            const problems = await getAllProblems();
            // 转换为数组
            const problemsArray = Object.values(problems);
            const filename = await webdavEnhancedService.backupProblems(problemsArray);
            this.showMessage(`备份成功: ${filename}`, 'success');

            // 触发备份完成事件
            EventBus.emit('webdav:backup:complete', { filename });
        } catch (error) {
            console.error('Backup failed:', error);
            this.showMessage(`备份失败: ${error.message}`, 'error');
        } finally {
            this.setButtonsDisabled(false);
        }
    }

    /**
     * 恢复数据
     */
    async restoreData() {
        if (!webdavEnhancedService.isAuthenticated) {
            this.showMessage('请先连接 WebDAV', 'error');
            return;
        }

        // 获取备份列表
        this.showMessage('正在获取备份列表...', 'info');
        this.setButtonsDisabled(true);

        try {
            const backups = await webdavEnhancedService.getBackupList();

            if (backups.length === 0) {
                this.showMessage('没有找到备份文件', 'warning');
                return;
            }

            // 显示备份选择对话框
            const selectedBackup = await this.showBackupSelector(backups);

            if (selectedBackup) {
                this.showMessage('正在恢复数据...', 'info');
                const problemsArray = await webdavEnhancedService.restoreProblems(selectedBackup);

                // 转换数组为对象格式（以 index 为 key）
                const problemsObj = {};
                problemsArray.forEach(problem => {
                    if (problem.index) {
                        problemsObj[problem.index] = problem;
                    }
                });

                // 使用 setProblems 直接覆盖本地存储（会自动处理当前模式）
                const { setProblems } = await import('../service/problemService');
                await setProblems(problemsObj);

                this.showMessage('数据恢复成功', 'success');

                // 触发恢复完成事件
                EventBus.emit('webdav:restore:complete', { filename: selectedBackup });

                // 刷新页面显示
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            }
        } catch (error) {
            console.error('Restore failed:', error);
            this.showMessage(`恢复失败: ${error.message}`, 'error');
        } finally {
            this.setButtonsDisabled(false);
        }
    }

    /**
     * 显示备份选择对话框
     */
    async showBackupSelector(backups) {
        // 导入 SweetAlert2
        const Swal = (await import('sweetalert2')).default;

        // 构建备份列表 HTML
        const backupOptions = backups.slice(0, 5).map(backup => {
            const date = new Date(backup.lastModified).toLocaleString();
            const size = (backup.size / 1024).toFixed(2);
            return `
                <div style="padding: 10px; border: 1px solid #ddd; margin: 5px 0; border-radius: 5px; cursor: pointer;"
                     class="backup-option" data-filename="${backup.name}">
                    <strong>${backup.name}</strong><br>
                    <small>时间: ${date} | 大小: ${size} KB</small>
                </div>
            `;
        }).join('');

        const result = await Swal.fire({
            title: '选择要恢复的备份',
            html: `
                <div style="max-height: 300px; overflow-y: auto;">
                    ${backupOptions}
                </div>
                <p style="margin-top: 10px; color: #ff6b6b;">
                    <strong>⚠️ 警告：恢复将覆盖当前所有数据！</strong>
                </p>
            `,
            showCancelButton: true,
            confirmButtonText: '确认恢复',
            cancelButtonText: '取消',
            confirmButtonColor: '#ff6b6b',
            didOpen: () => {
                // 添加点击选择效果
                const options = Swal.getHtmlContainer().querySelectorAll('.backup-option');
                let selectedFilename = backups[0].name; // 默认选择第一个

                options.forEach(option => {
                    option.addEventListener('click', () => {
                        options.forEach(opt => opt.style.background = '');
                        option.style.background = '#e3f2fd';
                        selectedFilename = option.dataset.filename;
                    });
                });

                // 默认选中第一个
                if (options[0]) {
                    options[0].style.background = '#e3f2fd';
                }

                // 保存选中的文件名
                Swal.selectedFilename = selectedFilename;
            },
            preConfirm: () => {
                const options = Swal.getHtmlContainer().querySelectorAll('.backup-option');
                let selectedFilename = null;
                options.forEach(option => {
                    if (option.style.background) {
                        selectedFilename = option.dataset.filename;
                    }
                });
                return selectedFilename || backups[0].name;
            }
        });

        return result.isConfirmed ? result.value : null;
    }

    /**
     * 登出
     */
    async logout() {
        if (confirm('确定要退出 WebDAV 账号吗？')) {
            await webdavEnhancedService.clearConfig();
            this.elements.username.value = '';
            this.elements.password.value = '';
            this.updateConnectionStatus(false);
            this.showMessage('已退出账号', 'info');

            // 触发登出事件
            EventBus.emit('webdav:logout');
        }
    }

    /**
     * 更新连接状态显示
     */
    updateConnectionStatus(isConnected) {
        if (!this.elements.status) return;

        if (isConnected) {
            const status = webdavEnhancedService.getConnectionStatus();
            let statusText = '已连接';

            if (status.currentProtocol && status.currentMethod) {
                const protocolText = status.currentProtocol === 'https' ? 'HTTPS' : 'HTTP';
                const methodText = status.currentMethod === 'disguised' ? '伪装' : '原生';
                statusText = `已连接 (${protocolText} + ${methodText})`;
            }

            this.elements.status.style.display = 'block';
            this.elements.status.style.background = '#d4edda';
            this.elements.status.style.border = '1px solid #c3e6cb';
            this.elements.status.style.padding = '8px';
            this.elements.status.style.borderRadius = '4px';
            this.elements.statusText.textContent = statusText;
            this.elements.statusText.style.color = '#155724';
            this.elements.statusText.style.fontWeight = '500';
        } else {
            // 未连接时也显示状态
            this.elements.status.style.display = 'block';
            this.elements.status.style.background = '#f8d7da';
            this.elements.status.style.border = '1px solid #f5c6cb';
            this.elements.status.style.padding = '8px';
            this.elements.status.style.borderRadius = '4px';
            this.elements.statusText.textContent = '未连接';
            this.elements.statusText.style.color = '#721c24';
            this.elements.statusText.style.fontWeight = '500';
        }
    }

    /**
     * 显示消息
     */
    showMessage(message, type = 'info') {
        // 清除之前的定时器
        if (this.messageTimer) {
            clearTimeout(this.messageTimer);
        }

        // 使用状态区域显示临时消息
        if (this.elements.status && this.elements.statusText) {
            this.elements.status.style.display = 'block';

            // 使用更明显的颜色和更好的对比度
            const colors = {
                success: '#d4edda',  // 浅绿色背景
                error: '#f8d7da',    // 浅红色背景
                warning: '#fff3cd',  // 浅黄色背景
                info: '#d1ecf1'      // 浅蓝色背景
            };

            const textColors = {
                success: '#155724',  // 深绿色文字
                error: '#721c24',    // 深红色文字
                warning: '#856404',  // 深黄色文字
                info: '#0c5460'      // 深蓝色文字
            };

            // 添加边框以增强可见性
            const borderColors = {
                success: '#c3e6cb',
                error: '#f5c6cb',
                warning: '#ffeeba',
                info: '#bee5eb'
            };

            this.elements.status.style.background = colors[type] || colors.info;
            this.elements.status.style.border = `1px solid ${borderColors[type] || borderColors.info}`;
            this.elements.status.style.padding = '8px';
            this.elements.status.style.borderRadius = '4px';
            this.elements.statusText.textContent = message;
            this.elements.statusText.style.color = textColors[type] || textColors.info;
            this.elements.statusText.style.fontWeight = '500';

            // 根据消息类型决定显示时长
            const displayTime = type === 'error' ? 5000 : 3000;

            // 如果是成功连接，不自动隐藏
            if (type === 'success' && message.includes('连接成功')) {
                // 更新为持久的连接状态
                this.messageTimer = setTimeout(() => {
                    this.updateConnectionStatus(true);
                }, displayTime);
            } else {
                // 其他消息过后恢复正常状态
                this.messageTimer = setTimeout(() => {
                    const status = webdavEnhancedService.getConnectionStatus();
                    this.updateConnectionStatus(status.isAuthenticated);
                }, displayTime);
            }
        }
    }

    /**
     * 设置按钮禁用状态
     */
    setButtonsDisabled(disabled) {
        const buttons = [
            this.elements.testBtn,
            this.elements.backupBtn,
            this.elements.restoreBtn,
            this.elements.logoutBtn
        ];

        buttons.forEach(btn => {
            if (btn) {
                btn.disabled = disabled;
            }
        });
    }
}

// 导出单例
export const webdavEnhancedSettings = new WebDAVEnhancedSettings();