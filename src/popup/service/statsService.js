/**
 * Statistics Service
 * 管理统计相关的业务逻辑
 */

import { daily_store, store } from '../store.js';
import { getCurrentRetrievability } from '../util/utils.js';
import { isReviewedToday } from './reviewService.js';

const LAST_AVERAGE_KEY = 'lastRetrievabilityAverage';
const LAST_UPDATE_TIME_KEY = 'lastUpdateTime';

/**
 * 获取上次存储的平均值和时间
 */
export function loadLastAverageData() {
    const lastData = {
        average: parseFloat(localStorage.getItem(LAST_AVERAGE_KEY)) || 0.00,
        timestamp: parseInt(localStorage.getItem(LAST_UPDATE_TIME_KEY)) || 0
    };
    return lastData;
}

/**
 * 存储当前的平均值和时间
 */
export function saveCurrentAverageData(average) {
    localStorage.setItem(LAST_AVERAGE_KEY, average.toString());
    localStorage.setItem(LAST_UPDATE_TIME_KEY, Date.now().toString());
}

/**
 * 计算可检索性均值
 */
export function calculateRetrievabilityAverage() {
    const problems = daily_store.reviewScheduledProblems;
    if (!problems || problems.length === 0) return 0;

    const totalRetrievability = problems.reduce((sum, problem) => {
        const retrievability = getCurrentRetrievability(problem);
        return sum + retrievability;
    }, 0);

    return Number((totalRetrievability / problems.length).toFixed(2));
}

/**
 * 计算完成统计
 */
export function calculateCompletionStats() {
    let completedCount = 0;
    let totalProblems = 0;

    if (!daily_store || !daily_store.dailyReviewProblems) {
        console.log('daily_store 或 dailyReviewProblems 为空:', {
            daily_store: daily_store,
            problems: daily_store?.dailyReviewProblems
        });
        return { completedCount, totalProblems, completionRate: 0 };
    }

    // 获取当前显示的卡片数量
    let cardLimit = parseInt(document.getElementById('cardLimit')?.value, 10) || store.defaultCardLimit || 1;

    // 计算今日已复习的题目数量
    completedCount = daily_store.dailyReviewProblems.filter(problem =>
        isReviewedToday(problem)
    ).length;

    totalProblems = daily_store.dailyReviewProblems?.length || 0;
    if (cardLimit > totalProblems) {
        cardLimit = totalProblems;
    }

    const completionRate = cardLimit > 0 ? Math.round((completedCount / cardLimit) * 100) : 0;

    return {
        completedCount,
        totalProblems,
        cardLimit,
        completionRate
    };
}

/**
 * 更新可检索性趋势
 */
export function updateRetrievabilityTrend() {
    // 计算当前的可检索性均值
    const currentRetrievabilityAverage = parseFloat(calculateRetrievabilityAverage()) || 0;

    // 获取上次存储的数据
    const lastData = loadLastAverageData();
    const hoursSinceLastUpdate = (Date.now() - lastData.timestamp) / (1000 * 60 * 60);

    let yesterdayRetrievabilityAverage = lastData.average;

    // 如果超过24小时，更新存储的数据
    if (hoursSinceLastUpdate >= 24) {
        console.log('距离上次更新已超过24小时:', {
            hoursSinceLastUpdate: hoursSinceLastUpdate.toFixed(2) + '小时',
            lastUpdateTime: new Date(lastData.timestamp).toLocaleString(),
            lastAverage: lastData.average.toFixed(2),
            currentAverage: currentRetrievabilityAverage.toFixed(2)
        });

        saveCurrentAverageData(currentRetrievabilityAverage);

        console.log('已更新存储数据:', {
            newYesterdayAverage: yesterdayRetrievabilityAverage.toFixed(2),
            savedCurrentAverage: currentRetrievabilityAverage.toFixed(2),
            saveTime: new Date().toLocaleString()
        });
    } else {
        console.log('距离上次更新未超过24小时:', {
            hoursSinceLastUpdate: hoursSinceLastUpdate.toFixed(2) + '小时',
            lastUpdateTime: new Date(lastData.timestamp).toLocaleString(),
            usingLastAverage: lastData.average.toFixed(2)
        });
    }

    return {
        currentAverage: currentRetrievabilityAverage,
        yesterdayAverage: yesterdayRetrievabilityAverage,
        trend: currentRetrievabilityAverage > yesterdayRetrievabilityAverage ? 'up' :
            currentRetrievabilityAverage < yesterdayRetrievabilityAverage ? 'down' : 'same'
    };
}

/**
 * 设置当前日期
 */
export function setCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    const element = document.getElementById('currentDate');
    if (element) {
        element.textContent = today;
    }
}