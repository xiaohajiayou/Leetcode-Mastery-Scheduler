/**
 * 存储接口定义
 * 所有存储实现必须遵循此接口
 */
export class StorageInterface {
    /**
     * 获取数据
     * @param {string} key - 键名
     * @returns {Promise<any>} 数据
     */
    async get(key) {
        throw new Error('Method get() must be implemented');
    }

    /**
     * 设置数据
     * @param {string} key - 键名
     * @param {any} value - 值
     * @returns {Promise<void>}
     */
    async set(key, value) {
        throw new Error('Method set() must be implemented');
    }

    /**
     * 删除数据
     * @param {string} key - 键名
     * @returns {Promise<void>}
     */
    async remove(key) {
        throw new Error('Method remove() must be implemented');
    }

    /**
     * 清空所有数据
     * @returns {Promise<void>}
     */
    async clear() {
        throw new Error('Method clear() must be implemented');
    }

    /**
     * 获取所有键
     * @returns {Promise<string[]>}
     */
    async keys() {
        throw new Error('Method keys() must be implemented');
    }

    /**
     * 批量获取
     * @param {string[]} keys - 键名数组
     * @returns {Promise<Object>}
     */
    async getMultiple(keys) {
        const result = {};
        for (const key of keys) {
            result[key] = await this.get(key);
        }
        return result;
    }

    /**
     * 批量设置
     * @param {Object} items - 键值对象
     * @returns {Promise<void>}
     */
    async setMultiple(items) {
        for (const [key, value] of Object.entries(items)) {
            await this.set(key, value);
        }
    }
}