/**
 * 事件总线系统 - 用于解耦组件间通信
 */
class EventBus {
    constructor() {
        this.events = new Map();
        this.onceEvents = new Map();
    }

    /**
     * 订阅事件
     * @param {string} event - 事件名称
     * @param {Function} callback - 回调函数
     * @returns {Function} 取消订阅函数
     */
    on(event, callback) {
        if (!this.events.has(event)) {
            this.events.set(event, new Set());
        }
        this.events.get(event).add(callback);
        
        // 返回取消订阅函数
        return () => this.off(event, callback);
    }

    /**
     * 订阅一次性事件
     * @param {string} event - 事件名称
     * @param {Function} callback - 回调函数
     */
    once(event, callback) {
        const onceWrapper = (...args) => {
            callback(...args);
            this.off(event, onceWrapper);
        };
        this.on(event, onceWrapper);
    }

    /**
     * 取消订阅
     * @param {string} event - 事件名称
     * @param {Function} callback - 回调函数
     */
    off(event, callback) {
        if (this.events.has(event)) {
            this.events.get(event).delete(callback);
            if (this.events.get(event).size === 0) {
                this.events.delete(event);
            }
        }
    }

    /**
     * 触发事件
     * @param {string} event - 事件名称
     * @param {...any} args - 事件参数
     */
    emit(event, ...args) {
        if (this.events.has(event)) {
            this.events.get(event).forEach(callback => {
                try {
                    callback(...args);
                } catch (error) {
                    console.error(`Error in event handler for ${event}:`, error);
                }
            });
        }
    }

    /**
     * 清空所有事件监听器
     */
    clear() {
        this.events.clear();
        this.onceEvents.clear();
    }

    /**
     * 获取事件监听器数量
     * @param {string} event - 事件名称
     * @returns {number} 监听器数量
     */
    listenerCount(event) {
        return this.events.has(event) ? this.events.get(event).size : 0;
    }
}

// 创建全局事件总线实例
const globalEventBus = new EventBus();

// 定义事件类型常量
export const Events = {
    // 数据事件
    PROBLEM_ADDED: 'problem:added',
    PROBLEM_UPDATED: 'problem:updated',
    PROBLEM_DELETED: 'problem:deleted',
    PROBLEMS_LOADED: 'problems:loaded',
    
    // 同步事件
    SYNC_STARTED: 'sync:started',
    SYNC_COMPLETED: 'sync:completed',
    SYNC_FAILED: 'sync:failed',
    SYNC_PROGRESS: 'sync:progress',
    
    // WebDAV事件
    WEBDAV_CONNECTED: 'webdav:connected',
    WEBDAV_DISCONNECTED: 'webdav:disconnected',
    WEBDAV_AUTH_CHANGED: 'webdav:auth:changed',
    
    // UI事件
    VIEW_CHANGED: 'ui:view:changed',
    MODAL_OPENED: 'ui:modal:opened',
    MODAL_CLOSED: 'ui:modal:closed',
    TAB_CHANGED: 'ui:tab:changed',
    
    // 复习事件
    REVIEW_STARTED: 'review:started',
    REVIEW_COMPLETED: 'review:completed',
    REVIEW_RATED: 'review:rated',
    
    // 设置事件
    SETTINGS_UPDATED: 'settings:updated',
    THEME_CHANGED: 'settings:theme:changed'
};

export default globalEventBus;