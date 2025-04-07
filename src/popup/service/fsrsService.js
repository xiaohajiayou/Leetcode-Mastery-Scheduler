import { FSRS, Rating, S_MIN, State, TypeConvert, createEmptyCard } from 'ts-fsrs';
import { defaultParams, qualityToRating, getFSRSParams, saveFSRSParams, saveRevlog, getAllRevlogs, exportRevlogsToCSV } from '../util/fsrs.js';
import { optimizeFSRSParams } from '../delegate/fsrsDelegate.js';
import { syncLocalAndCloudStorage } from '../util/utils.js';
import localStorageDelegate from '../delegate/localStorageDelegate.js';
import { store } from "../store";
import { mergeFSRSParams, mergeRevlogs } from '../util/utils';



// 创建FSRS实例
let fsrsInstance = null;

// 获取FSRS实例
export const getFSRSInstance = async () => {
    if (fsrsInstance) {
        return fsrsInstance;
    }
    
    // 获取本地参数
    const localParams = await getFSRSParams();
    
    // 创建新的FSRS实例
    fsrsInstance = new FSRS(localParams);
    console.log('创建新的FSRS实例，参数:', localParams);
    
    return fsrsInstance;
};

// 更新FSRS实例
export const updateFSRSInstance = async (newParams) => {
    // 创建新的FSRS实例
    fsrsInstance = new FSRS(newParams);
    console.log('更新FSRS实例，新参数:', newParams);
    
    return fsrsInstance;
};

// 计算下次复习时间
export const calculateNextReview = async (problem, feedback) => {
    try {
        const now = new Date();
        
        // 确保有一个有效的 lastReview 日期
        let lastReview;
        if (problem.fsrsState && problem.fsrsState.lastReview) {
            lastReview = new Date(problem.fsrsState.lastReview);
        } else if (problem.submissionTime) {
            lastReview = new Date(problem.submissionTime);
        } else {
            lastReview = new Date(now.getTime()); // 默认为昨天
        }
        
        // 检查日期是否有效
        if (isNaN(lastReview.getTime())) {
            lastReview = new Date(now.getTime()); // 如果无效，使用昨天
        }

        // 如果没有 fsrsState，创建一个默认的
        if (!problem.fsrsState) {
            problem.fsrsState = createEmptyCard(lastReview, (card) => {
                return {
                    nextReview: +card.due,
                    stability: card.stability,
                    difficulty: card.difficulty,
                    state: card.state,
                    reviewCount: card.reps,
                    lapses: card.lapses,
                    lastReview: +lastReview  // 存储为时间戳
                }
            });
        }
        let card = problem.fsrsState;
        
        // 确保 nextReview 有效
        if (!card.nextReview || isNaN(card.nextReview)) {
            card.nextReview = +lastReview; // 默认为一天后
        }

        const rating = qualityToRating(feedback.quality);
        
        // 确保所有参数都有有效值
        const scheduledDays = Math.max(0, Math.floor((card.nextReview - card.lastReview) / (1000 * 60 * 60 * 24)));
        const elapsedDays = Math.max(0, (now.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24));
        
        // 获取FSRS实例
        const fsrs = await getFSRSInstance();
        
        const result = fsrs.next({
            due: card.nextReview,
            stability: card.stability,
            difficulty: card.difficulty,
            elapsed_days: elapsedDays,
            scheduled_days: scheduledDays,
            reps: card.reviewCount,
            lapse_count: card.lapses,
            state: card.state,
            last_review: lastReview,  // 使用已经转换好的 Date 对象
        }, now, rating);

        return {
            /**长期调度模式，ivl一定大于1d */
            nextReview: +result.card.due,
            stability: result.card.stability,
            difficulty: result.card.difficulty,
            state: result.card.state,
            reviewCount: result.card.reps,
            lapses: result.card.lapses
        };
    } catch (error) {
        console.error('Error in calculateNextReview:', error);
        const now = new Date(); // 在 catch 块中定义 now 变量
        return {
            nextReview: now.getTime() + (24 * 60 * 60 * 1000),
            stability: problem.fsrsState.stability || S_MIN,
            /** ref: https://github.com/open-spaced-repetition/ts-fsrs/blob/5eabd189d4740027ce1018cc968e67ca46c048a3/src/fsrs/default.ts#L20-L40 */
            difficulty: problem.fsrsState.difficulty || defaultParams.w[4],
            /** 长期调度下状态一定是New或Review */
            state: problem.fsrsState.state || State.Review,
            reviewCount: (problem.fsrsState.reviewCount || 0) + 1,
            lapses: problem.fsrsState.lapses || 0
        };
    }
};

// 更新问题状态
export const updateProblemWithFSRS = async (problem, feedback) => {
    const now = Date.now();
    const fsrsResult = await calculateNextReview(problem, feedback);
    
    // 创建新的复习日志条目，只包含必要字段
    const newRevlog = {
        card_id: problem.index, // 使用问题索引作为卡片ID
        review_time: now, // 复习时间（毫秒时间戳）
        review_rating: qualityToRating(feedback.quality), // 复习评分 (1-4)
        review_state: TypeConvert.state(problem.fsrsState ? problem.fsrsState?.state ?? State.New : 'New') // 复习状态 (0-3)
    };
    
    // 将复习日志存储到单独的 localStorage 键中
    await saveRevlog(problem.index, newRevlog);
    
    // 更新问题状态（不修改原有结构）
    problem.fsrsState = {
        ...problem.fsrsState,
        difficulty: fsrsResult.difficulty,
        stability: fsrsResult.stability,
        state: fsrsResult.state,
        lastReview: now,
        nextReview: fsrsResult.nextReview,
        reviewCount: fsrsResult.reps,
        lapses: fsrsResult.lapses,
        quality: feedback.quality
    };

    problem.modificationTime = now;
    return problem;
};

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
        
        // 检查结果是否包含params字段（来自done标签）
        if (result && result.params) {
            console.log('获取到优化后的FSRS参数:', result.params);
            
            // 不再自动保存参数，而是返回结果供用户确认
            return {
                type: 'Success',
                params: result.params,
                metrics: result.metrics || {}
            };
        }
        
        // 如果是进度信息
        if (result && result.type === 'Progress') {
            return result;
        }
        
        // 如果是训练结果
        if (result && result.type === 'Train') {
            return {
                type: 'Train',
                message: '训练完成，但未获取到完整参数'
            };
        }
        
        // 其他情况
        return result;
    } catch (error) {
        console.error('Error optimizing parameters:', error);
        throw error;
    }
};

// 同步FSRS历史记录
export const syncFSRSHistory = async () => {
    try {
        // 检查是否启用了云同步
        if (!store.isCloudSyncEnabled) {
            console.log('云同步未启用，跳过FSRS历史记录同步');
            return;
        }

        // 同步FSRS参数和复习日志
        await syncFSRSParams();
        await syncRevlogs();
        
        // 更新FSRS实例
        const updatedParams = await getFSRSParams();
        await updateFSRSInstance(updatedParams);
        
        console.log('FSRS历史记录同步完成');
    } catch (error) {
        console.error('同步FSRS历史记录失败:', error);
    }
}; 


export const syncFSRSParams = async () => {
    if (!store.isCloudSyncEnabled) return;
    await syncLocalAndCloudStorage('fsrs_params', mergeFSRSParams);
}

export const syncRevlogs = async () => {
    if (!store.isCloudSyncEnabled) return;
    await syncLocalAndCloudStorage('fsrs_revlogs', mergeRevlogs);
}