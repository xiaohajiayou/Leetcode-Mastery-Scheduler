/**
 * Card Display Service
 * 管理复习卡片的显示逻辑
 */

import { daily_store, store } from '../store.js';
import { getCurrentRetrievability } from '../util/utils.js';
import {
    isReviewedToday,
    handleReviewButtonClick,
    getNextReviewTips,
    markAsReviewed
} from './reviewService.js';
import { setDefaultCardLimit } from './configService.js';

/**
 * 更新卡片限制显示
 */
export function updateCardLimitDisplay() {
    const input = document.getElementById('cardLimit');
    const totalDisplay = document.querySelector('.total-problems');
    const totalProblems = daily_store.dailyReviewProblems?.length || 0;

    // 更新最大值和总数显示
    input.max = Math.max(totalProblems, 1);
    totalDisplay.textContent = `/ ${totalProblems}`;

    // 使用保存的默认值或回退到3
    let currentValue = store.defaultCardLimit || 1;
    if (currentValue > totalProblems && totalProblems > 0) {
        currentValue = totalProblems;
    }
    input.value = currentValue;

    // 禁用条件
    if (totalProblems === 0) {
        input.value = 0;
        input.disabled = true;
        totalDisplay.textContent = "/ 0";
    } else {
        input.disabled = false;
    }

    console.log('更新卡片限制显示:', {
        currentValue: input.value,
        max: input.max,
        totalProblems
    });
}

/**
 * 改变卡片数量
 */
export async function changeCardLimit(delta) {
    console.log('执行 changeCardLimit, delta:', delta);
    const input = document.getElementById('cardLimit');
    const currentValue = parseInt(input.value, 10);
    const newValue = currentValue + delta;
    const maxValue = daily_store.dailyReviewProblems?.length || 0;

    if (newValue >= 1 && newValue <= maxValue) {
        input.value = newValue;
        await setDefaultCardLimit(newValue);
        store.defaultCardLimit = newValue;
        // 触发更新
        const event = new Event('cardLimitChanged');
        document.dispatchEvent(event);
    }
}

/**
 * 更新进度圆圈
 */
export function updateProgressCircle(completionRate) {
    const progressCircle = document.querySelector('.completion-circle');
    const radius = 54; // 圆的半径
    const circumference = 2 * Math.PI * radius; // 圆的周长

    // 计算偏移量
    const offset = circumference - (completionRate / 100) * circumference;
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = offset;

    // 更新显示的百分比
    document.querySelector('.completion-circle').style.setProperty('--percentage', `${completionRate}%`);

    // 添加动画效果
    const innerCircle = document.querySelector('.inner-circle');
    innerCircle.style.transform = `scale(1.1)`; // 放大内圈
    setTimeout(() => {
        innerCircle.style.transform = `scale(1)`; // 恢复原状
    }, 500); // 动画持续时间
}

/**
 * 创建题目卡片
 */
export function createReviewCards() {
    console.log('开始创建卡片');
    const reviewList = document.getElementById('reviewList');
    const template = document.getElementById('reviewCardTemplate');
    const cardLimit = parseInt(document.getElementById('cardLimit').value, 10);

    reviewList.innerHTML = '';

    const problems = daily_store.dailyReviewProblems || [];
    problems.slice(0, cardLimit).forEach((problem, index) => {
        const cardNode = template.content.cloneNode(true);
        const card = cardNode.querySelector('.review-card');

        // 安全地访问 fsrsState
        const fsrsState = problem.fsrsState || {};

        // 设置题目信息
        const problemName = card.querySelector('.problem-name');
        problemName.textContent = problem.name || 'unknown';

        // 设置难度和复习信息
        const difficultySpan = card.querySelector('.difficulty');
        const level = problem.level || 'Unknown';
        difficultySpan.textContent = level;
        // 使用现有的 CSS 类
        difficultySpan.classList.add(`difficulty-${level}`);

        // 设置可检索性
        const retrievability = getCurrentRetrievability(problem);
        const retrievabilitySpan = card.querySelector('.retrievability');
        retrievabilitySpan.textContent = `${retrievability.toFixed(1)}`;
        retrievabilitySpan.classList.add(retrievability < 0.9 ? 'text-danger' : 'text-success');

        // 设置下次复习时间
        const nextReviewTips = getNextReviewTips(fsrsState);
        card.querySelector('.next-review').textContent = nextReviewTips;

        // 格式化上次复习时间
        const lastReviewText = fsrsState.lastReview
            ? new Date(fsrsState.lastReview).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
            : 'Never reviewed';

        // 格式化下次复习时间
        const nextReviewText = fsrsState.nextReview
            ? new Date(fsrsState.nextReview).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
            : 'Never reviewed';

        // 设置hover提示
        const tooltipContent = [
            `Last Review: ${lastReviewText}`,
            `Next Review: ${nextReviewText}`,
            problem.url ? 'Click to open problem' : ''
        ].filter(Boolean).join('\n');

        card.title = tooltipContent;

        // 检查今日是否已复习
        const isReviewedTodayFlag = fsrsState.lastReview &&
            new Date(fsrsState.lastReview).toDateString() === new Date().toDateString();

        // 设置按钮状态
        const reviewButton = card.querySelector('.btn-review');
        if (reviewButton) {
            if (isReviewedTodayFlag) {
                const icon = reviewButton.querySelector('i');
                icon.classList.remove('fa-check-circle');
                icon.classList.add('fa-circle-check');
                icon.style.color = '#0D6E6E';
                reviewButton.disabled = true;
                card.style.opacity = '0.4';
            }

            reviewButton.onclick = async function (e) {
                e.preventDefault();
                e.stopPropagation();
                const updatedProblem = await handleReviewButtonClick(this, problem);
                if (updatedProblem) {
                    // 触发更新事件
                    const event = new Event('cardReviewed');
                    document.dispatchEvent(event);
                }
            };
        }

        // 添加题目链接功能
        if (problem.url) {
            card.style.cursor = 'pointer';
            card.onclick = function (e) {
                if (!e.target.closest('.btn-review')) {
                    window.open(problem.url, '_blank');
                }
            };
        }

        reviewList.appendChild(cardNode);
    });
}

/**
 * 显示空状态提示
 */
export function showEmptyState() {
    const addProblemWrapper = document.querySelector('.add-problem-wrapper');
    // 先移除可能存在的空状态提示
    const existingEmptyState = document.querySelector('.empty-state');
    if (existingEmptyState) {
        existingEmptyState.remove();
    }

    const totalProblems = daily_store.dailyReviewProblems?.length || 0;
    const cardLimit = parseInt(document.getElementById('cardLimit')?.value, 10) || 0;

    if (totalProblems === 0 || cardLimit === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <i class="fas fa-lightbulb"></i>
            Time to learn something new!
        `;
        addProblemWrapper.insertAdjacentElement('beforebegin', emptyState);
    }
}