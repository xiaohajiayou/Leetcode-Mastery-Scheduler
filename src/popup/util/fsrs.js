import { FSRS, Rating, S_MIN, State, TypeConvert, createEmptyCard, dateDiffInDays, generatorParameters } from 'ts-fsrs';
import localStorageDelegate from '../delegate/localStorageDelegate.js';
import cloudStorageDelegate from '../delegate/cloudStorageDelegate.js';
import { webdavEnhancedService } from '../service/webdavEnhancedService.js';
import { store } from '../store';
import { mergeRevlogs } from './utils';

export const FSRS_PARAMS_FILENAME = 'fsrs_params.json';
export const FSRS_REVLOGS_FILENAME = 'fsrs_revlogs.json';

export const parseFSRSParamsData = (rawData) => {
    if (!rawData) {
        return null;
    }

    if (typeof rawData === 'string') {
        try {
            return JSON.parse(rawData);
        } catch (error) {
            console.error('解析 FSRS 参数失败:', error);
            return null;
        }
    }

    return rawData;
};

export const parseRevlogsData = (rawData) => {
    if (!rawData) {
        return {};
    }

    if (typeof rawData === 'string') {
        try {
            return JSON.parse(rawData);
        } catch (error) {
            console.error('解析复习日志失败:', error);
            return {};
        }
    }

    return typeof rawData === 'object' ? rawData : {};
};

// 1. 创建自定义参数
export const defaultParams = generatorParameters({
    request_retention: 0.9,          // 期望记忆保持率 90%
    maximum_interval: 365,           // 最大间隔天数
    enable_fuzz: false,              // 禁用时间模糊化
    enable_short_term: false          // 启用短期记忆影响
});

// 2. 评分映射（4个等级）
export const qualityToRating = (quality) => {
    switch(quality) {
        case 1: return Rating.Again;  // 完全不会
        case 2: return Rating.Hard;   // 有点难
        case 3: return Rating.Good;   // 正常
        case 4: return Rating.Easy;   // 简单
        default: return Rating.Good;
    }
};

// 3. 获取本地FSRS参数
export const getFSRSParams = async () => {
    try {
        const result = await localStorageDelegate.get('fsrs_params');
        console.log('找到本地FSRS参数:', result);
        if (!result) {
            console.log('未找到本地FSRS参数，使用默认参数');
            return defaultParams;
        }
        
        // 如果结果是字符串，尝试解析它
        const parsedParams = parseFSRSParamsData(result);
        if (parsedParams) {
            console.log('获取到本地FSRS参数:', parsedParams);
            return parsedParams;
        }
        
        // 如果结果已经是对象，直接返回
        return result;
    } catch (error) {
        console.error('获取本地FSRS参数失败:', error);
        return defaultParams;
    }
};

// 4. 保存FSRS参数到本地存储
export const saveFSRSParams = async (newParams) => {
    try {
        // 为参数添加时间戳
        const paramsWithTimestamp = {
            ...newParams,
            timestamp: Date.now()
        };
        
        // 保存到本地存储（字符串格式）
        await localStorageDelegate.set('fsrs_params', JSON.stringify(paramsWithTimestamp));
        console.log('FSRS参数已保存到本地存储');
        
        // 保存到云端存储（对象格式）
        if (store.isCloudSyncEnabled) {
            await cloudStorageDelegate.set('fsrs_params', paramsWithTimestamp);
            console.log('FSRS参数已保存到云端存储');
        }

        if (webdavEnhancedService.isConfigured) {
            await webdavEnhancedService.uploadData(FSRS_PARAMS_FILENAME, {
                params: paramsWithTimestamp,
                lastSync: new Date().toISOString()
            });
            console.log('FSRS参数已保存到 WebDAV');
        }
        
        return true;
    } catch (error) {
        console.error('保存FSRS参数失败:', error);
        return false;
    }
};

// 5. 保存单个复习日志
export const saveRevlog = async (cardId, revlog) => {
    try {
        // 从 localStorage 获取现有的复习日志
        const existingRevlogsStr = await new Promise((resolve) => {
            chrome.storage.local.get(['fsrs_revlogs'], (result) => {
                resolve(result.fsrs_revlogs || '{}');
            });
        });
        
        let existingRevlogs;
        try {
            existingRevlogs = JSON.parse(existingRevlogsStr);
        } catch (e) {
            console.error('Error parsing revlogs:', e);
            existingRevlogs = {};
        }
        
        // 确保该卡片的日志数组存在
        if (!existingRevlogs[cardId]) {
            existingRevlogs[cardId] = [];
        }
        
        // 添加新的复习日志
        existingRevlogs[cardId].push(revlog);
        
        // 保存到本地存储
        await new Promise((resolve) => {
            chrome.storage.local.set({ 'fsrs_revlogs': JSON.stringify(existingRevlogs) });
            resolve();
        });
        
        // 如果启用了云同步，同时保存到云端
        if (store.isCloudSyncEnabled) {
            await cloudStorageDelegate.set('fsrs_revlogs', existingRevlogs);
        }

        if (webdavEnhancedService.isConfigured) {
            await webdavEnhancedService.uploadData(FSRS_REVLOGS_FILENAME, {
                revlogs: existingRevlogs,
                lastSync: new Date().toISOString()
            });
        }
        
        return true;
    } catch (error) {
        console.error('Error saving revlog:', error);
        return false;
    }
};

// 6. 获取所有复习日志
export const getAllRevlogs = async () => {
    try {
        let mergedRevlogs = {};

        const localResult = await new Promise((resolve) => {
            chrome.storage.local.get(['fsrs_revlogs'], (result) => {
                resolve(result.fsrs_revlogs || '{}');
            });
        });
        mergedRevlogs = mergeRevlogs(mergedRevlogs, parseRevlogsData(localResult));

        if (store.isCloudSyncEnabled) {
            const cloudResult = await cloudStorageDelegate.get('fsrs_revlogs');
            mergedRevlogs = mergeRevlogs(mergedRevlogs, parseRevlogsData(cloudResult));
        }

        if (webdavEnhancedService.isConfigured) {
            const webdavResult = await webdavEnhancedService.downloadData(FSRS_REVLOGS_FILENAME);
            mergedRevlogs = mergeRevlogs(mergedRevlogs, parseRevlogsData(webdavResult?.revlogs));
        }

        return mergedRevlogs;
    } catch (error) {
        console.error('Error getting revlogs:', error);
        return {};
    }
};

// 7. 导出复习日志为CSV格式
export const exportRevlogsToCSV = async () => {
    try {
        // 获取所有复习日志
        const allRevlogs = await getAllRevlogs();
        
        // CSV 头部 - 只包含必要字段
        const csvHeader = 'card_id,review_time,review_rating,review_state\n';
        
        // 收集所有卡片的复习日志
        let csvContent = csvHeader;
        
        Object.keys(allRevlogs).forEach(cardId => {
            const cardRevlogs = allRevlogs[cardId] || [];
            cardRevlogs.forEach(log => {
                // 只导出必要字段
                csvContent += `${log.card_id},${log.review_time},${log.review_rating},${log.review_state}\n`;
            });
        });
        
        return csvContent;
    } catch (error) {
        console.error('Error exporting revlogs to CSV:', error);
        return '';
    }
};
