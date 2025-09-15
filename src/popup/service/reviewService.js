/**
 * Review Service
 * 管理复习相关的业务逻辑
 */

import { getAllProblems } from './problemService.js';
import { getCurrentRetrievability } from '../util/utils.js';
import { daily_store } from '../store.js';
import { handleFeedbackSubmission } from '../script/submission.js';

/**
 * 判断题目是否在今天复习过
 */
export function isReviewedToday(problem) {
    if (!problem.fsrsState?.lastReview) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastReview = new Date(problem.fsrsState.lastReview);
    lastReview.setHours(0, 0, 0, 0);

    return lastReview.getTime() === today.getTime();
}

/**
 * 判断题目是否是今天需要复习的
 */
export function isReviewDueToday(problem) {
    if (!problem.fsrsState?.nextReview) {
        console.log('题目没有下次复习时间:', problem.name);
        return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const nextReview = new Date(problem.fsrsState.nextReview);
    nextReview.setHours(0, 0, 0, 0);

    const isDue = nextReview <= today;

    console.log('复习时间检查:', {
        problemName: problem.name,
        nextReview: nextReview.toISOString(),
        today: today.toISOString(),
        isDue: isDue
    });

    return isDue;
}

/**
 * 加载每日复习数据
 */
export async function loadDailyReviewData() {
    const problems = Object.values(await getAllProblems()).filter(p => p.isDeleted !== true);

    // 按可检索性排序所有题目
    daily_store.reviewScheduledProblems = problems
        .sort((a, b) => {
            const retrievabilityA = getCurrentRetrievability(a);
            const retrievabilityB = getCurrentRetrievability(b);
            return retrievabilityA - retrievabilityB; // 升序排序，最小值在前
        });

    // 获取今天已复习和待复习的题目
    daily_store.dailyReviewProblems = daily_store.reviewScheduledProblems
        .filter(problem => isReviewedToday(problem) || isReviewDueToday(problem))
        .sort((a, b) => {
            // 首先按照是否已复习排序（已复习的排在前面）
            const aReviewed = isReviewedToday(a);
            const bReviewed = isReviewedToday(b);
            if (aReviewed !== bReviewed) {
                return bReviewed ? 1 : -1;
            }
            // 如果复习状态相同，则按可检索性排序
            const retrievabilityA = getCurrentRetrievability(a);
            const retrievabilityB = getCurrentRetrievability(b);
            return retrievabilityA - retrievabilityB;
        });

    console.log('总题目数:', problems.length);
    console.log('今日待复习题目数:', daily_store.dailyReviewProblems.length);

    // 添加调试日志
    daily_store.dailyReviewProblems.forEach(problem => {
        const isReviewed = isReviewedToday(problem);
        const isDue = isReviewDueToday(problem);
        console.log('题目状态:', {
            name: problem.name,
            lastReview: problem.fsrsState?.lastReview,
            nextReview: problem.fsrsState?.nextReview,
            isReviewedToday: isReviewed,
            isDueToday: isDue,
            retrievability: getCurrentRetrievability(problem)
        });
    });
}

/**
 * 标记题目为已复习
 */
export async function markAsReviewed(button, problem) {
    console.log('执行 markAsReviewed', button, problem);

    const card = button.closest('.review-card');
    if (!card) {
        console.log('未找到对应的卡片');
        return;
    }

    console.log('找到卡片，开始更新状态');

    // 更换图标并更改样式
    const icon = button.querySelector('i');
    icon.classList.remove('fa-check-circle');
    icon.classList.add('fa-circle-check');
    icon.style.color = '#0D6E6E';

    // 禁用按钮
    button.disabled = true;
    card.style.opacity = '0.4';

    console.log('更新完成');
}

/**
 * 处理复习按钮点击
 */
export async function handleReviewButtonClick(button, problem) {
    console.log('复习按钮被点击');
    const updatedProblem = await handleFeedbackSubmission(problem, true);
    if (updatedProblem) {
        await markAsReviewed(button, updatedProblem);
    }
    return updatedProblem;
}

/**
 * 获取下次复习提示文本
 */
export function getNextReviewTips(fsrsState) {
    if (!fsrsState?.nextReview) {
        return 'Not scheduled';
    }

    const nextReviewDate = new Date(fsrsState.nextReview);
    const now = new Date();

    // 获取当前日期和下次复习日期（不含时间）
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const reviewDay = new Date(nextReviewDate.getFullYear(), nextReviewDate.getMonth(), nextReviewDate.getDate());

    // 计算日期差（天数）
    const diffTime = reviewDay.getTime() - today.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
        // 已经过了计划复习日期
        const daysOverdue = Math.abs(diffDays);
        return `Delay by ${daysOverdue} day${daysOverdue > 1 ? 's' : ''}`;
    } else if (diffDays === 0) {
        // 今天需要复习
        return 'Review today';
    } else if (diffDays === 1) {
        // 明天需要复习
        return 'Review tomorrow';
    } else {
        // x天后复习
        return `Review in ${diffDays} days`;
    }
}