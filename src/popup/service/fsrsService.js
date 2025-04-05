import { getAllRevlogs, exportRevlogsToCSV } from '../util/fsrs.js';
import { optimizeFSRSParams } from '../delegate/fsrsDelegate.js';

// 获取复习记录数量
export const getRevlogCount = async () => {
    try {
        const allRevlogs = await getAllRevlogs();
        let totalCount = 0;
        
        // 计算所有卡片的复习记录总数
        Object.values(allRevlogs).forEach(cardRevlogs => {
            totalCount += cardRevlogs.length;
        });
        
        return totalCount;
    } catch (error) {
        console.error('Error getting revlog count:', error);
        return 0;
    }
};

// 优化FSRS参数
export const optimizeParameters = async (onProgress) => {
    try {
        // 获取并导出CSV格式的复习记录
        const csvContent = await exportRevlogsToCSV();
        
        // 调用API进行参数优化
        const result = await optimizeFSRSParams(csvContent, onProgress);
        
        return result;
    } catch (error) {
        console.error('Error optimizing parameters:', error);
        throw error;
    }
}; 