import { renderAll } from './view/view.js';
import { getAllProblems, syncProblems } from "./service/problemService.js";
import { getLevelColor,getCurrentRetrievability } from './util/utils.js';
import { handleFeedbackSubmission, handleAddBlankProblem } from './script/submission.js';
import './popup.css';
import { isCloudSyncEnabled, loadConfigs, setCloudSyncEnabled, setProblemSorter,setDefaultCardLimit,setReminderEnabled } from "./service/configService";
import { store,daily_store } from './store';
import { optionPageFeedbackMsgDOM } from './util/doms';
import { descriptionOf, idOf, problemSorterArr } from "./util/sort";
import {handleAddProblem} from "./script/submission.js"
// 在文件顶部导入 SweetAlert2
import Swal from 'sweetalert2';

// 在文件开头添加
const LAST_AVERAGE_KEY = 'lastRetrievabilityAverage';
const LAST_UPDATE_TIME_KEY = 'lastUpdateTime';
let yesterdayRetrievabilityAverage = 0.00;



async function loadProblemList() {
    await renderAll();
}


// 获取上次存储的平均值和时间
function loadLastAverageData() {
    const lastData = {
        average: parseFloat(localStorage.getItem(LAST_AVERAGE_KEY)) || 0.00,
        timestamp: parseInt(localStorage.getItem(LAST_UPDATE_TIME_KEY)) || 0
    };
    return lastData;
}

async function loadDailyReviewData() {
    const problems = Object.values(await getAllProblems()).filter(p => p.isDeleted !== true);
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

// 存储当前的平均值和时间
function saveCurrentAverageData(average) {
    localStorage.setItem(LAST_AVERAGE_KEY, average.toString());
    localStorage.setItem(LAST_UPDATE_TIME_KEY, Date.now().toString());
}

// 设置当前日期
function setCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    document.getElementById('currentDate').textContent = today;
}


// 判断是否是今天需要复习的题目
function isReviewDueToday(problem) {
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

function isReviewedToday(problem) {
    if (!problem.fsrsState?.lastReview) return false;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const lastReview = new Date(problem.fsrsState.lastReview);
    lastReview.setHours(0, 0, 0, 0);
    
    return lastReview.getTime() === today.getTime();
}




// 计算可检索性均值
function calculateRetrievabilityAverage() {
    const problems = daily_store.reviewScheduledProblems;
    if (!problems || problems.length === 0) return 0;
    
    const totalRetrievability = problems.reduce((sum, problem) => {
        const retrievability = getCurrentRetrievability(problem);
        return sum + retrievability;
    }, 0);
    
    return Number((totalRetrievability / problems.length).toFixed(2));
}


// 更新顶部统计信息
function updateStats() {
    console.log('更新统计信息');
    // 设置默认值
    let completedCount = 0;
    let totalProblems = 0;
    // 添加空值检查
    if (!daily_store || !daily_store.dailyReviewProblems) {
        console.log('daily_store 或 dailyReviewProblems 为空:', {
            daily_store: daily_store,
            problems: daily_store?.dailyReviewProblems
        });

        
        // 更新显示
        document.getElementById('completedCount').textContent = completedCount;
        document.getElementById('totalCount').textContent = totalProblems;
        document.getElementById('completionRate').textContent = '0%';
        updateProgressCircle(0);
        return;
    }



    // 获取当前显示的卡片数量
    let cardLimit = parseInt(document.getElementById('cardLimit').value, 10)|| store.defaultCardLimit || 1;
    console.log('当前卡片限制值:', {
        rawValue: document.getElementById('cardLimit').value,
        parsedCardLimit: cardLimit,
        element: document.getElementById('cardLimit')
    });



    // 计算今日已复习的题目数量
    completedCount = daily_store.dailyReviewProblems.filter(problem => 
        isReviewedToday(problem)
    ).length;

    
    totalProblems = daily_store.dailyReviewProblems?.length || 0;
    if (cardLimit > totalProblems) {
        cardLimit = totalProblems;
    }

    // 添加空状态提示
    const addProblemWrapper = document.querySelector('.add-problem-wrapper');
    // 先移除可能存在的空状态提示
    const existingEmptyState = document.querySelector('.empty-state');
    if (existingEmptyState) {
        existingEmptyState.remove();
    }
    
    if (totalProblems === 0 || cardLimit === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `

        <i class="fas fa-lightbulb"></i>
            Time to learn something new!
        `;
        addProblemWrapper.insertAdjacentElement('beforebegin', emptyState);
    }

    
    // 更新显示的已复习数量
    document.getElementById('completedCount').textContent = completedCount;
    document.getElementById('totalCount').textContent = cardLimit; // 使用当前的卡片数量

    // 更新进度条
    const completionRate = cardLimit > 0 ? Math.round((completedCount / cardLimit) * 100) : 0;
    updateProgressCircle(completionRate);
    document.getElementById('completionRate').textContent = `${completionRate}%`;
    // document.querySelector('.completion-circle').style.setProperty('--percentage', `${completionRate}%`);
    // 计算当前的可检索性均值，并确保是数字类型
    const currentRetrievabilityAverage = parseFloat(calculateRetrievabilityAverage()) || 0;
    console.log('当前可检索性均值:', {
        raw: calculateRetrievabilityAverage(),
        parsed: currentRetrievabilityAverage,
        type: typeof currentRetrievabilityAverage
    });
    const retrievabilityElement = document.getElementById('retrievabilityAverage');
    retrievabilityElement.textContent = currentRetrievabilityAverage;


    // 获取上次存储的数据
    const lastData = loadLastAverageData();
    const hoursSinceLastUpdate = (Date.now() - lastData.timestamp) / (1000 * 60 * 60);
    
    // 如果超过24小时，更新存储的数据
    if (hoursSinceLastUpdate >= 24) {
        console.log('距离上次更新已超过24小时:', {
            hoursSinceLastUpdate: hoursSinceLastUpdate.toFixed(2) + '小时',
            lastUpdateTime: new Date(lastData.timestamp).toLocaleString(),
            lastAverage: lastData.average.toFixed(2),
            currentAverage: currentRetrievabilityAverage.toFixed(2)
        });
        
        yesterdayRetrievabilityAverage = lastData.average;
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
        yesterdayRetrievabilityAverage = lastData.average;
    }

    // 更新趋势图标
    const trendIcon = document.getElementById('trendIcon');
    if (currentRetrievabilityAverage > yesterdayRetrievabilityAverage) {
        trendIcon.className = 'fas fa-arrow-up trend-icon trend-up';
    } else if (currentRetrievabilityAverage < yesterdayRetrievabilityAverage) {
        trendIcon.className = 'fas fa-arrow-down trend-icon trend-down';
    } else {
        trendIcon.className = '';
    }

    // 根据可检索性均值调整颜色和背景提示
    const lowMemoryWarning = document.getElementById('lowMemoryWarning');
    if (currentRetrievabilityAverage < 0.90) {
        retrievabilityElement.classList.add('low');
        lowMemoryWarning.classList.add('active');
    } else {
        retrievabilityElement.classList.remove('low');
        lowMemoryWarning.classList.remove('active');
    }
    updateCardLimitDisplay(); // 这里也添加一次调用
}

function updateProgressCircle(completionRate) {
    const progressCircle = document.querySelector('.completion-circle');
    const radius = 54; // 圆的半径
    const circumference = 2 * Math.PI * radius; // 圆的周长

    // 计算偏移量
    const offset = circumference - (completionRate / 100) * circumference;
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = offset;

    // 更新显示的百分比
    // document.getElementById('completionRate').textContent = `${completionRate}%`;
    document.querySelector('.completion-circle').style.setProperty('--percentage', `${completionRate}%`);

    // 添加动画效果
    const innerCircle = document.querySelector('.inner-circle');
    innerCircle.style.transform = `scale(1.1)`; // 放大内圈
    setTimeout(() => {
        innerCircle.style.transform = `scale(1)`; // 恢复原状
    }, 500); // 动画持续时间
}




// 更新卡片限制和显示
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
        // store.defaultCardLimit = totalProblems;
        // setDefaultCardLimit(totalProblems);
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

// 更新卡片显示
export function updateCardDisplay() {
    console.log('更新卡片显示');
    
    updateStats(); // 更新统计信息，传递当前显示的卡片数量

    createReviewCards(); // 创建新的卡片
}




// 改变卡片数量
// 所有功能函数
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
        updateCardDisplay();
    }
}




// 标记题目为已复习
async function markAsReviewed(button, problem) {
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



    // 更新统计信息
    updateCardDisplay();
    console.log('更新完成');
}


// 创建题目卡片时的事件绑定
function createReviewCards() {
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
        const nextReviewTips = fsrsState.nextReview 
            ? (() => {
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
            })()
            : 'Not scheduled';
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

        // 格式化上次复习时间
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
        const isReviewedToday = fsrsState.lastReview && 
            new Date(fsrsState.lastReview).toDateString() === new Date().toDateString();

        // 设置按钮状态
        const reviewButton = card.querySelector('.btn-review');
        if (reviewButton) {
            if (isReviewedToday) {
                const icon = reviewButton.querySelector('i');
                icon.classList.remove('fa-check-circle');
                icon.classList.add('fa-circle-check');
                icon.style.color = '#0D6E6E';
                reviewButton.disabled = true;
                card.style.opacity = '0.4';
            }

            reviewButton.onclick = async function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('复习按钮被点击');

                const updatedProblem = await handleFeedbackSubmission(problem);
                if (updatedProblem) {
                    markAsReviewed(this, updatedProblem);
                }
                // markAsReviewed(this, problem); // 修改这里，传入按钮元素和问题对象
            };
        }

        // 添加题目链接功能
        if (problem.url) {
            card.style.cursor = 'pointer';
            card.onclick = function(e) {
                if (!e.target.closest('.btn-review')) {
                    window.open(problem.url, '_blank');
                }
            };
        }

        reviewList.appendChild(cardNode);
    });
}












// 显示/隐藏添加题目弹窗
function toggleAddProblemDialog(show) {
    const dialog = document.getElementById('addProblemDialog');
    if (!dialog) return;
    
    if (show) {
        dialog.style.display = 'block';
    } else {
        dialog.style.display = 'none';
        
        // 清除所有输入字段
        const problemUrl = document.getElementById('problemUrl');
        const problemName = document.getElementById('problemName');
        const customUrl = document.getElementById('customUrl');
        
        if (problemUrl) problemUrl.value = '';
        if (problemName) problemName.value = '';
        if (customUrl) customUrl.value = '';
        
        // 重置选项卡到默认状态
        const urlTabButton = document.getElementById('urlTabButton');
        const manualTabButton = document.getElementById('manualTabButton');
        const urlTab = document.getElementById('urlTab');
        const manualTab = document.getElementById('manualTab');
        
        if (urlTabButton && manualTabButton && urlTab && manualTab) {
            urlTabButton.classList.add('active');
            manualTabButton.classList.remove('active');
            urlTab.classList.add('active');
            manualTab.classList.remove('active');
        }
    }
}



// 初始化添加题目功能
function initializeAddProblem() {
    const addButton = document.querySelector('.gear-button.add-problem');
    if (!addButton) return;

    // 添加选项卡切换样式
    const style = document.createElement('style');
    style.textContent = `
        .tab-container {
            margin-bottom: 15px;
        }
        
        .tab-buttons {
            display: flex;
            border-bottom: 1px solid #3a4a5c;
            margin-bottom: 15px;
        }
        
        .tab-button {
            background: none;
            border: none;
            padding: 8px 15px;
            color: #a0aec0;
            cursor: pointer;
            transition: all 0.3s;
            border-bottom: 2px solid transparent;
        }
        
        .tab-button.active {
            color: #4a9d9c;
            border-bottom: 2px solid #4a9d9c;
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        /* 修复弹窗背景色 - 使用更强的选择器 */
        #addProblemDialog .modal-content {
            background-color: #1d2e3d !important;
            color: #ffffff !important;
        }
        
        #addProblemDialog .tab-content,
        #addProblemDialog .form-group {
            background-color: #1d2e3d !important;
            color: #ffffff !important;
        }
        
        #addProblemDialog input.form-control, 
        #addProblemDialog select.form-control {
            background-color: #2d3e4d !important;
            color: #ffffff !important;
            border: 1px solid #3a4a5c !important;
        }
        
        #addProblemDialog input.form-control::placeholder {
            color: #8096a8 !important;
        }
        
        #addProblemDialog label {
            color: #a0aec0 !important;
        }
    `;
    document.head.appendChild(style);

    // 点击添加按钮显示弹窗
    addButton.addEventListener('click', () => {
        toggleAddProblemDialog(true);
    });

    // 选项卡切换功能
    const urlTabButton = document.getElementById('urlTabButton');
    const manualTabButton = document.getElementById('manualTabButton');
    const urlTab = document.getElementById('urlTab');
    const manualTab = document.getElementById('manualTab');

    if (urlTabButton && manualTabButton) {
        urlTabButton.addEventListener('click', () => {
            urlTabButton.classList.add('active');
            manualTabButton.classList.remove('active');
            urlTab.classList.add('active');
            manualTab.classList.remove('active');
        });

        manualTabButton.addEventListener('click', () => {
            manualTabButton.classList.add('active');
            urlTabButton.classList.remove('active');
            manualTab.classList.add('active');
            urlTab.classList.remove('active');
        });
    }

    // 取消按钮
    const cancelButton = document.getElementById('cancelAdd');
    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            toggleAddProblemDialog(false);
        });
    }

    // 确认添加按钮
    const confirmButton = document.getElementById('confirmAdd');
    if (confirmButton) {
        confirmButton.addEventListener('click', async () => {
            try {
                let result;
                
                // 判断当前激活的是哪个选项卡
                if (urlTab.classList.contains('active')) {
                    // 从URL添加
                    const url = document.getElementById('problemUrl').value.trim();
                    if (!url) {
                        throw new Error('Please enter a valid problem URL.');
                    }
                    result = await handleAddProblem(url);
                } else {
                    // 创建空白卡片
                    const name = document.getElementById('problemName').value.trim();
                    const level = document.getElementById('problemLevel').value;
                    const customUrl = document.getElementById('customUrl').value.trim();
                    
                    if (!name) {
                        throw new Error('Please enter the problem name.');
                    }
                    
                    if (!level) {
                        throw new Error('Please select a difficulty level.');
                    }
                    
                    // 如果提供了URL，检查其格式是否有效
                    if (customUrl && !customUrl.match(/^https?:\/\/.+/)) {
                        throw new Error('Please enter a valid URL starting with http:// or https://');
                    }
                    
                    result = await handleAddBlankProblem(name, level, customUrl);
                }
                
                toggleAddProblemDialog(false);
                await loadDailyReviewData();
                updateCardDisplay();
                
                // 显示成功提示
                Swal.fire({
                    icon: 'success',
                    title: 'SUCCESS',
                    text: 'Problem added to review list.',
                    showConfirmButton: false,
                    timer: 1500,
                    background: '#1d2e3d',
                    color: '#ffffff',
                    toast: true,
                    position: 'center-end',
                    customClass: {
                        popup: 'colored-toast'
                    }
                });
            } catch (error) {
                // 显示错误提示
                Swal.fire({
                    icon: 'error',
                    title: 'ADD FAIL',
                    text: error.message,
                    background: '#1d2e3d',
                    color: '#ffffff',
                    confirmButtonColor: '#4a9d9c'
                });
            }
        });
    }

    // 点击弹窗外部关闭弹窗
    const dialog = document.getElementById('addProblemDialog');
    if (dialog) {
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                toggleAddProblemDialog(false);
            }
        });
    }
}

// 添加设置相关的初始化函数
async function initializeOptions() {
    await loadConfigs();

    const optionsForm = document.getElementById('optionsForm');
    if (!optionsForm) return; // 如果找不到表单元素，直接返回
    
    // 初始化题目排序选择器
    const problemSorterSelect = document.getElementById('problemSorterSelect');
    if (problemSorterSelect) {
        const problemSorterMetaArr = problemSorterArr.map(sorter => ({
            id: idOf(sorter), 
            text: descriptionOf(sorter)
        }));

        problemSorterMetaArr.forEach(sorterMeta => {
            const optionElement = document.createElement('option');
            optionElement.value = sorterMeta.id;
            optionElement.textContent = sorterMeta.text;
            problemSorterSelect.append(optionElement);
        });
    }

    // 初始化云同步开关
    const syncToggle = document.getElementById('syncToggle');
    if (syncToggle) {
        syncToggle.checked = store.isCloudSyncEnabled || false;
    }


    // 初始化提醒开关
    const reminderToggle = document.getElementById('reminderToggle');
    if (reminderToggle) {
        reminderToggle.checked = store.isReminderEnabled || false;
    }

    // 修改保存成功提示
    optionsForm.addEventListener('submit', async e => {
        e.preventDefault();
        const selectedSorterId = problemSorterSelect.value;
        const isCloudSyncEnabled = syncToggle.checked;
        const isReminderEnabled = reminderToggle.checked;

        await setProblemSorter(Number(selectedSorterId));
        await setCloudSyncEnabled(isCloudSyncEnabled);
        await setReminderEnabled(isReminderEnabled);

        // 使用 SweetAlert2 显示保存成功提示
        Swal.fire({
            icon: 'success',
            title: '设置已保存',
            text: '您的设置已成功更新',
            showConfirmButton: false,
            timer: 1500,
            background: '#1d2e3d',
            color: '#ffffff',
            toast: true,
            position: 'center-end',
            customClass: {
                popup: 'colored-toast'
            }
        });
    });
}



// 初始化函数
export async function initializeReviewPage() {
    console.log('初始化复习页面');
    // 首先加载配置
    await loadConfigs();
    console.log('加载的默认卡片数量:', store.defaultCardLimit);
    await loadDailyReviewData(); // 加载真实数据
    const gearButtons = document.querySelectorAll('.gear-button');
    gearButtons.forEach(button => {
        button.replaceWith(button.cloneNode(true));
    });
    
    
    // 绑定齿轮按钮事件
    document.querySelectorAll('.gear-button').forEach(button => {
        button.addEventListener('click', function() {
            console.log('齿轮按钮被点击');
            const delta = this.classList.contains('left') ? -1 : 1;
            changeCardLimit(delta);
        });
    });

    // 绑定卡片数量输入框变化事件
    const cardLimitInput = document.getElementById('cardLimit');
    cardLimitInput.addEventListener('change', function() {
        console.log('卡片数量改变');
        updateCardDisplay();
    });

    // 初始化显示
    setCurrentDate();
    updateStats();
    // updateCardLimitDisplay();
    createReviewCards();
    initializeAddProblem();
}

export function initializeFeedbackButton() {
    const button = document.querySelector('.feedback-btn');  // 使用新的类名
    if (!button) return;

    button.addEventListener('mouseenter', function() {
        this.style.background = '#1a3244';
        this.style.borderColor = '#61dafb';
        this.style.boxShadow = '0 0 10px rgba(97, 218, 251, 0.5)';
        this.style.color = '#61dafb';
        this.querySelector('.btn-content').style.transform = 'translateX(2px)';
        this.querySelector('i').style.color = '#61dafb';
    });

    button.addEventListener('mouseleave', function() {
        this.style.background = '#1d2e3d';
        this.style.borderColor = 'rgba(97, 218, 251, 0.3)';
        this.style.boxShadow = 'none';
        this.style.color = '#61dafb';
        this.querySelector('.btn-content').style.transform = 'translateX(0)';
        this.querySelector('i').style.color = '#61dafb';
    });
    const buttonReview = document.querySelector('.feedback-btn-review');  // 使用新的类名
    if (!buttonReview) return;

    buttonReview.addEventListener('mouseenter', function() {
        this.style.background = '#1a3244';
        this.style.borderColor = '#61dafb';
        this.style.boxShadow = '0 0 10px rgba(97, 218, 251, 0.5)';
        this.style.color = '#61dafb';
        this.querySelector('.btn-content').style.transform = 'translateX(2px)';
        this.querySelector('i').style.color = '#61dafb';
    });

    buttonReview.addEventListener('mouseleave', function() {
        this.style.background = '#1d2e3d';
        this.style.borderColor = 'rgba(97, 218, 251, 0.3)';
        this.style.boxShadow = 'none';
        this.style.color = '#61dafb';
        this.querySelector('.btn-content').style.transform = 'translateX(0)';
        this.querySelector('i').style.color = '#61dafb';
    });
}



// 页面切换功能
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM加载完成,开始初始化复习页面和切换绑定');
    await initializeReviewPage();
    // 添加设置初始化
    initializeFeedbackButton();
    
    
    // 检查是否找到导航按钮
    const navButtons = document.querySelectorAll('.nav-btn');
    console.log('找到导航按钮数量:', navButtons.length);
    
    // 检查是否找到视图
    const views = document.querySelectorAll('.view');
    console.log('找到视图数量:', views.length);
    
    // 打印所有视图的ID
    views.forEach(view => console.log('视图ID:', view.id));
    
    navButtons.forEach((button, index) => {
        console.log(`为第 ${index + 1} 个按钮绑定点击事件:`, button.textContent);
        
        button.addEventListener('click', async function(e) {
            e.preventDefault(); // 阻止默认行为
            e.stopPropagation(); // 阻止事件冒泡
            
            console.log('按钮被点击:', this.textContent);
            
            // 移除所有按钮的激活状态
            navButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的激活状态
            this.classList.add('active');
            
            // 获取目标视图
            const targetView = this.textContent.trim();
            console.log('目标视图:', targetView);
            
            let viewId;
            switch(targetView) {
                case 'Review':
                    viewId = 'reviewView';
                    await initializeReviewPage();
                    break;
                case 'Problems':
                    viewId = 'problemListView';
                    await loadProblemList(); // 加载题目列表
                    initializeFeedbackButton();
                    // renderAll();
                    break;
                case 'Settings':
                    viewId = 'moreView';
                    await initializeOptions();
                    break;
            }
            
            console.log('切换到视图ID:', viewId);
            
            // 切换视图
            views.forEach(view => {
                console.log('检查视图:', view.id);
                if(view.id === viewId) {
                    view.classList.add('active');
                    view.style.display = 'block';
                    console.log('激活视图:', view.id);
                } else {
                    view.classList.remove('active');
                    view.style.display = 'none';
                    console.log('隐藏视图:', view.id);
                }
            });
        });
    });
});








// 以防万一，也添加 window.onload
window.onload = function() {
    console.log('页面完全加载完成');
    if (!document.querySelector('.review-card')) {
        console.log('卡片未创建，重新初始化');
        setCurrentDate();
        updateStats();
        updateCardLimitDisplay();
        createReviewCards();
    }
    

};
