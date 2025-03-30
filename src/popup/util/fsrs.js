import { FSRS, Rating, S_MIN, State, TypeConvert, createEmptyCard, dateDiffInDays, generatorParameters } from 'ts-fsrs';

// 1. 创建自定义参数
const params = generatorParameters({
    request_retention: 0.9,          // 期望记忆保持率 90%
    maximum_interval: 365,           // 最大间隔天数
    enable_fuzz: false,              // 禁用时间模糊化
    enable_short_term: false          // 启用短期记忆影响
});

// 2. 创建 FSRS 实例
const fsrs = new FSRS(params);

// 3. 评分映射（4个等级）
const qualityToRating = (quality) => {
    switch(quality) {
        case 1: return Rating.Again;  // 完全不会
        case 2: return Rating.Hard;   // 有点难
        case 3: return Rating.Good;   // 正常
        case 4: return Rating.Easy;   // 简单
        default: return Rating.Good;
    }
};

// 4. 计算下次复习时间
export const calculateNextReview = (problem, feedback) => {
    try {
        const now = new Date();
        const lastReview = problem.fsrsState && problem.fsrsState.lastReview
            ? new Date(problem.fsrsState.lastReview)
            : new Date(problem.submissionTime || now.getTime());

        // 如果没有 fsrsState，创建一个默认的
        if (!problem.fsrsState) {
            problem.fsrsState = createEmptyCard(lastReview, (card) => {
                return {
                    nextReview: +card.due,
                    stability: card.stability,
                    difficulty: card.difficulty,
                    state: card.state,
                    reps: card.reps,
                    lapses: card.lapses
                }
            });
        }
        let card = problem.fsrsState

        const rating = qualityToRating(feedback.quality);
        const result = fsrs.next({
            due: card.nextReview,
            stability: card.stability,
            difficulty: card.difficulty,
            elapsed_days: (now.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24),
            scheduled_days: Math.floor((card.nextReview - card.lastReview) / (1000 * 60 * 60 * 24)),
            reps: card.reviewCount,
            lapse_count: card.lapses,
            state: card.state,
            last_review: card.lastReview || undefined,
        }, now, rating);


        return {
            /**长期调度模式，ivl一定大于1d */
            nextReview: +result.card.due,
            stability: result.card.stability,
            difficulty: result.card.difficulty,
            state: result.card.state,
            reps: result.card.reps,
            lapses: result.card.lapses
        };
    } catch (error) {
        console.error('Error in calculateNextReview:', error);
        return {
            nextReview: now.getTime() + (24 * 60 * 60 * 1000),
            stability: problem.fsrsState.stability || S_MIN,
            /** ref: https://github.com/open-spaced-repetition/ts-fsrs/blob/5eabd189d4740027ce1018cc968e67ca46c048a3/src/fsrs/default.ts#L20-L40 */
            difficulty: problem.fsrsState.difficulty || params.w[4],
            /** 长期调度下状态一定是New或Review */
            state: problem.fsrsState.state || State.Review,
            reps: (problem.fsrsState.reviewCount || 0) + 1,
            lapses: problem.fsrsState.lapses || 0
        };
    }
};


// 5. 更新问题状态
export const updateProblemWithFSRS = (problem, feedback) => {
    const now = Date.now();
    const fsrsResult = calculateNextReview(problem, feedback);
    
    // 创建新的复习日志条目，只包含必要字段
    const newRevlog = {
        card_id: problem.index, // 使用问题索引作为卡片ID
        review_time: now, // 复习时间（毫秒时间戳）
        review_rating: qualityToRating(feedback.quality), // 复习评分 (1-4)
        review_state: TypeConvert.state(problem.fsrsState ? problem.fsrsState?.state ?? State.New : 'New') // 复习状态 (0-3)
    };
    
    // 将复习日志存储到单独的 localStorage 键中
    saveRevlog(problem.index, newRevlog);
    
    // 更新问题状态（不修改原有结构）
    problem.fsrsState = {
        ...problem.fsrsState,
        difficulty: fsrsResult.difficulty,
        stability: fsrsResult.stability,
        state: fsrsResult.state,
        lastReview: fsrsResult.lastReview,
        nextReview: fsrsResult.nextReview,
        reviewCount: fsrsResult.reps,
        lapses: fsrsResult.lapses,
        quality: feedback.quality
    };

    problem.modificationTime = now;
    return problem;
};

// 保存单个复习日志
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
        
        // 保存回 localStorage
        await new Promise((resolve) => {
            chrome.storage.local.set({ 'fsrs_revlogs': JSON.stringify(existingRevlogs) });
            resolve();
        });
        
        return true;
    } catch (error) {
        console.error('Error saving revlog:', error);
        return false;
    }
};

// 获取所有复习日志
export const getAllRevlogs = async () => {
    try {
        const revlogsStr = await new Promise((resolve) => {
            chrome.storage.local.get(['fsrs_revlogs'], (result) => {
                resolve(result.fsrs_revlogs || '{}');
            });
        });
        
        let allRevlogs;
        try {
            allRevlogs = JSON.parse(revlogsStr);
        } catch (e) {
            console.error('Error parsing revlogs:', e);
            return {};
        }
        
        return allRevlogs;
    } catch (error) {
        console.error('Error getting revlogs:', error);
        return {};
    }
};

// 导出复习日志为CSV格式
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
