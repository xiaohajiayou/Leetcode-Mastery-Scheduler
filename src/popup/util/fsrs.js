import { FSRS, Rating, createEmptyCard, generatorParameters } from 'ts-fsrs';

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

        // 如果没有 fsrsState，创建一个默认的
        if (!problem.fsrsState) {
            problem.fsrsState = {
                difficulty: null,
                quality: null,
                lastReview: problem.submissionTime || now.getTime(),
                nextReview: null,
                reviewCount: 0,
                stability: 0,
                state: 'New',
                lapses: 0
            };
        }

        const lastReview = problem.fsrsState.lastReview 
            ? new Date(problem.fsrsState.lastReview)
            : new Date(problem.submissionTime || now.getTime());

        let card = createEmptyCard(lastReview);
        
        if (problem.fsrsState.state !== 'New') {
            card = {
                ...card,
                state: problem.fsrsState.state,
                stability: problem.fsrsState.stability || 0,
                difficulty: problem.fsrsState.difficulty || 0,
                reps: problem.fsrsState.reviewCount || 0,
                lapses: problem.fsrsState.lapses || 0,
                // 添加时间相关字段
                elapsed_days: problem.fsrsState.lastReview 
                    ? (now - new Date(problem.fsrsState.lastReview)) / (24 * 60 * 60 * 1000)
                    : 0,
                scheduled_days: problem.fsrsState.nextReview 
                    ? (new Date(problem.fsrsState.nextReview) - new Date(problem.fsrsState.lastReview)) / (24 * 60 * 60 * 1000)
                    : 0
            };
        }
        
        const rating = qualityToRating(feedback.quality);
        const scheduling_cards = fsrs.repeat(card, now);
        const result = scheduling_cards[rating];

        if (!result || !result.card) {
            console.error('FSRS calculation failed:', result);
            // 默认间隔
            const defaultDays = {
                [Rating.Again]: 1,
                [Rating.Hard]: 3,
                [Rating.Good]: 7,
                [Rating.Easy]: 14
            }[rating] || 1;

            return {
                nextReview: now.getTime() + (defaultDays * 24 * 60 * 60 * 1000),
                stability: card.stability,
                difficulty: card.difficulty,
                state: card.state,
                reps: card.reps + 1,
                lapses: card.lapses
            };
        }

        // 确保间隔至少为1天
        const nextReviewTime = Math.max(
            result.card.due.getTime(),
            now.getTime() + (24 * 60 * 60 * 1000)
        );

        return {
            nextReview: nextReviewTime,
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
            stability: problem.fsrsState.stability || 0,
            difficulty: problem.fsrsState.difficulty || 0,
            state: problem.fsrsState.state || 'New',
            reps: (problem.fsrsState.reviewCount || 0) + 1,
            lapses: problem.fsrsState.lapses || 0
        };
    }
};

// 5. 更新问题状态
export const updateProblemWithFSRS = (problem, feedback) => {
    const now = Date.now();
    const fsrsResult = calculateNextReview(problem, feedback);

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
