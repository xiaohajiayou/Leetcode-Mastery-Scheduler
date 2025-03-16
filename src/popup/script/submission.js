import { getDifficultyBasedSteps, getSubmissionResult, isSubmissionSuccess, isSubmitButton, needReview, updateProblemUponSuccessSubmission } from "../util/utils";
import { getAllProblems, createOrUpdateProblem, getCurrentProblemInfoFromLeetCodeByHref,getCurrentProblemInfoFromLeetCodeByUrl, syncProblems } from "../service/problemService";
import { Problem } from "../entity/problem";
import { updateProblemWithFSRS } from "../util/fsrs";
/* 
    monitorSubmissionResult will repeateadly check for the submission result.
*/
const monitorSubmissionResult = () => {

    let submissionResult;
    let maxRetry = 10;
    const retryInterval = 1000;

    const functionId = setInterval(async () => {

        if (maxRetry <= 0) {
            clearInterval(functionId);
            return;
        }

        submissionResult = getSubmissionResult();

        if (submissionResult === undefined || submissionResult.length === 0) {
            maxRetry--;
            return;
        }

        clearInterval(functionId);
        let isSuccess = isSubmissionSuccess(submissionResult);

        if (!isSuccess) return;

        const { problemIndex, problemName, problemLevel, problemUrl } = await getCurrentProblemInfoFromLeetCodeByHref();
        await syncProblems();   // prior to fetch local problem data, sync local problem data with cloud
        const problems = await getAllProblems();
        let problem = problems[problemIndex];
        
        if (problem && problem.isDeleted !== true) {
            const reviewNeeded = needReview(problem);
            if (reviewNeeded) {
                await createOrUpdateProblem(updateProblemUponSuccessSubmission(problem));
            }
        } else {
            problem = new Problem(problemIndex, problemName, problemLevel, problemUrl, Date.now(), getDifficultyBasedSteps(problemLevel)[0], Date.now());
            await createOrUpdateProblem(problem);
        }
        await syncProblems(); // after problem updated, sync to cloud

        console.log("Submission successfully tracked!");

    }, retryInterval)
};

export const submissionListener = (event) => {

    const element = event.target;
    
    const filterConditions = [
        isSubmitButton(element),
        element.parentElement && isSubmitButton(element.parentElement),
        element.parentElement && element.parentElement.parentElement && isSubmitButton(element.parentElement.parentElement),
    ]

    const isSubmission = filterConditions.reduce((prev, curr) => prev || curr);

    if (isSubmission) {
        monitorSubmissionResult();
    }

};



export const addRecordButton = () => {
    // 添加按钮样式
    const style = document.createElement('style');
    style.textContent = `
        .Leetcode-Mastery-Scheduler-record-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 8px 12px;  /* 减小内边距 */
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 6px;  /* 稍微减小圆角 */
            cursor: pointer;
            font-size: 13px;  /* 减小字体大小 */
            box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
            transition: background 0.2s ease, box-shadow 0.2s ease;
            z-index: 9999;
            user-select: none;
            display: flex;
            align-items: center;
            line-height: 1;
        }
        
        .Leetcode-Mastery-Scheduler-record-btn:hover {
            box-shadow: 0 3px 10px rgba(37, 99, 235, 0.3);
        }
        
        .Leetcode-Mastery-Scheduler-record-btn.dragging {
            opacity: 0.8;
            cursor: grabbing;
            transition: none;
        }
        
        .Leetcode-Mastery-Scheduler-record-btn .drag-handle {
            display: inline-block;
            margin-right: 6px;  /* 减小间距 */
            cursor: grab;
            opacity: 0.7;
            font-size: 12px;  /* 减小拖动手柄大小 */
        }
        
        .Leetcode-Mastery-Scheduler-record-btn .drag-handle:hover {
            opacity: 1;
        }
        
        .Leetcode-Mastery-Scheduler-record-btn .reset-position {
            margin-left: 6px;  /* 减小间距 */
            opacity: 0.7;
            cursor: pointer;
            font-size: 12px;  /* 减小重置按钮大小 */
        }
        
        .Leetcode-Mastery-Scheduler-record-btn .reset-position:hover {
            opacity: 1;
        }
        
        .Leetcode-Mastery-Scheduler-record-btn .star-icon {
            margin-right: 4px;
            font-size: 11px;
        }
    `;
    document.head.appendChild(style);

    // 从localStorage获取保存的位置
    const savedPosition = JSON.parse(localStorage.getItem('LMS_rateButtonPosition') || '{"bottom": 20, "right": 20}');
    
    // 创建按钮
    const button = document.createElement('button');
    button.className = 'Leetcode-Mastery-Scheduler-record-btn';
    button.innerHTML = `
        <span class="drag-handle">⋮</span>
        <i class="fas fa-star star-icon"></i>Rate
        <span class="reset-position" title="Reset position">↺</span>
    `;
    
    // 设置保存的位置
    button.style.bottom = `${savedPosition.bottom}px`;
    button.style.right = `${savedPosition.right}px`;
    
    // 添加点击事件
    button.addEventListener('click', async (e) => {
        // 如果点击的是拖动手柄或重置按钮，不触发评分
        if (e.target.classList.contains('drag-handle') || e.target.classList.contains('reset-position')) {
            return;
        }
        
        const result = await handleFeedbackSubmission();
        if (result) {
            console.log("Submission successfully tracked!");
            console.log("难度记录成功！");
        }
    });
    
    // 重置位置
    const resetButton = button.querySelector('.reset-position');
    resetButton.addEventListener('click', (e) => {
        e.stopPropagation();
        button.style.bottom = '20px';
        button.style.right = '20px';
        localStorage.setItem('LMS_rateButtonPosition', JSON.stringify({bottom: 20, right: 20}));
    });
    
    // 添加拖拽功能
    let isDragging = false;
    let startX, startY, startBottom, startRight;
    
    const dragHandle = button.querySelector('.drag-handle');
    
    // 鼠标按下事件
    const onMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        isDragging = true;
        button.classList.add('dragging');
        
        // 记录初始位置
        startX = e.clientX;
        startY = e.clientY;
        startBottom = parseInt(getComputedStyle(button).bottom);
        startRight = parseInt(getComputedStyle(button).right);
        
        // 添加鼠标移动和松开事件
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    
    // 鼠标移动事件
    const onMouseMove = (e) => {
        if (!isDragging) return;
        
        // 计算新位置
        const deltaX = startX - e.clientX;
        const deltaY = e.clientY - startY;  // 修正垂直方向
        
        const newRight = Math.max(10, startRight + deltaX);
        const newBottom = Math.max(10, startBottom - deltaY);
        
        // 确保按钮不会超出屏幕
        const maxRight = window.innerWidth - button.offsetWidth - 10;
        const maxBottom = window.innerHeight - button.offsetHeight - 10;
        
        button.style.right = `${Math.min(newRight, maxRight)}px`;
        button.style.bottom = `${Math.min(newBottom, maxBottom)}px`;
    };
    
    // 鼠标松开事件
    const onMouseUp = () => {
        if (!isDragging) return;
        
        isDragging = false;
        button.classList.remove('dragging');
        
        // 保存新位置到localStorage
        localStorage.setItem('LMS_rateButtonPosition', JSON.stringify({
            bottom: parseInt(button.style.bottom),
            right: parseInt(button.style.right)
        }));
        
        // 移除事件监听器
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };
    
    // 添加事件监听器
    dragHandle.addEventListener('mousedown', onMouseDown);
    
    // 添加到页面
    document.body.appendChild(button);
};


// 抽取成通用的处理函数
export async function handleFeedbackSubmission(problem = null) {
    try {
        // 显示难度反馈弹窗
        const feedback = await showDifficultyFeedbackDialog().catch(error => {
            console.log(error);  // "用户取消评分"
            return null;  // 返回 null 表示用户取消
        });

        // 如果用户取消，直接返回
        if (!feedback) {
            return null;
        }

        // 如果没有传入 problem，说明是新提交，需要获取题目信息
        if (!problem) {
            await syncProblems();   // 同步云端数据
            const { problemIndex, problemName, problemLevel, problemUrl } = await getCurrentProblemInfoFromLeetCodeByHref();
            const problems = await getAllProblems();
            problem = problems[problemIndex];
            
            if (problem && problem.isDeleted !== true) {
                problem = updateProblemWithFSRS(problem, feedback);
                await createOrUpdateProblem(updateProblemUponSuccessSubmission(problem));
            } else {
                problem = new Problem(problemIndex, problemName, problemLevel, problemUrl, Date.now(), getDifficultyBasedSteps(problemLevel)[0], Date.now());
                problem = updateProblemWithFSRS(problem, feedback);
                await createOrUpdateProblem(problem);
            }
        } else {
            // 如果传入了 problem，说明是复习
            problem = updateProblemWithFSRS(problem, feedback);
            await createOrUpdateProblem(problem);
        }

        await syncProblems(); // 同步到云端
        console.log("提交成功！");
        return problem;
    } catch (error) {
        console.error("提交时出错：", error);
        return null;
    }
}



// 6. 显示评分对话框
const showDifficultyFeedbackDialog = () => {
    return new Promise((resolve) => {
        addDialogStyles();

        const overlay = document.createElement('div');
        overlay.className = 'fsrs-modal-overlay';

        const dialog = document.createElement('div');
        dialog.className = 'feedback-dialog';
        dialog.innerHTML = `
            <button class="close-button">&times;</button>
            <h3>How difficult was this problem for you?</h3>
            <div class="quality-buttons">
                <button data-quality="1">Very Hard</button>
                <button data-quality="2">Hard</button>
                <button data-quality="3">Medium</button>
                <button data-quality="4">Easy</button>
            </div>
        `;
        // 点击遮罩层关闭
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
                resolve(null);
            }
        });

        // 单独设置关闭按钮的事件
        const closeButton = dialog.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            overlay.remove();
            resolve(null);
        });

        // 只为难度按钮设置事件
        dialog.querySelectorAll('.quality-buttons button').forEach(button => {
            button.addEventListener('click', () => {
                const quality = parseInt(button.dataset.quality);
                resolve({ quality });
                overlay.remove();
            });
        });

        

        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
    });
};

// 7. 添加样式
const addDialogStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        .fsrs-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            backdrop-filter: blur(2px);
        }

        .feedback-dialog {
            background: #ffffff;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            min-width: 320px;
            animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .close-button {
            float: right;           /* 使用浮动靠右 */
            margin: -12px -12px 0 0;  /* 调整位置，抵消父元素的 padding */
            background: none;
            border: none;
            font-size: 24px;
            color: #666;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.2s;
        }

        .close-button:hover {
            background: #f3f4f6;
            color: #1f2937;
        }

        .feedback-dialog h3 {
            color: #2c3e50;
            font-size: 18px;
            margin: 0 0 20px 0;  /* 添加底部间距 */
            text-align: center;
            font-weight: 600;
            clear: both;           /* 清除浮动 */
        }

        .quality-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .quality-buttons button {
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            background: #f8f9fa;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 15px;
            color: #495057;
            border: 1px solid #e9ecef;
        }

        .quality-buttons button:hover {
            background: #2563eb;
            color: white;
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
        }

        .quality-buttons button:nth-child(1) { border-left: 4px solid #dc2626; }
        .quality-buttons button:nth-child(2) { border-left: 4px solid #ea580c; }
        .quality-buttons button:nth-child(3) { border-left: 4px solid #16a34a; }
        .quality-buttons button:nth-child(4) { border-left: 4px solid #2563eb; }

        .quality-buttons button:nth-child(1):hover { background: #dc2626; }
        .quality-buttons button:nth-child(2):hover { background: #ea580c; }
        .quality-buttons button:nth-child(3):hover { background: #16a34a; }
        .quality-buttons button:nth-child(4):hover { background: #2563eb; }
    `;
    document.head.appendChild(style);
};






// 处理新建题目 - 设置为今天待复习
export async function handleAddProblem(url) {
    try {
        await syncProblems();  // 同步云端数据
        const problems = await getAllProblems();
        
        // 使用新的API获取题目信息
        const problemInfo = await getCurrentProblemInfoFromLeetCodeByUrl(url);
        
        const { problemIndex, problemName, problemLevel, problemUrl } = problemInfo;
        
        // 检查是否已存在
        if (problems[problemIndex] && !problems[problemIndex].isDeleted) {
            throw new Error('Duplicate problem name exists.');
        }
        
        const now = Date.now();
        // 创建新问题
        const problem = new Problem(
            problemIndex,
            problemName,
            problemLevel,
            problemUrl,
            now,    // createTime
            0,      // nextStep
            null    // lastReviewTime
        );
        
        // 设置初始状态
        problem.proficiency = 0;
        problem.isDeleted = false;
        problem.modificationTime = now;
        
        // 设置初始 FSRS 状态 - 设置 nextReview 为今天
        problem.fsrsState = {
            difficulty: null,
            stability: null,
            state: 'New',
            lastReview: null,
            nextReview: now,    // 设置为当前时间，使其显示在今天的待复习列表中
            reviewCount: 0,
            lapses: 0,
            quality: null
        };
        
        await createOrUpdateProblem(problem);
        await syncProblems();
        
        return problem;
    } catch (error) {
        console.error('Failed to add card:', error);
        throw error;
    }
}

// 处理添加空白卡片
export async function handleAddBlankProblem(name, level, customUrl = '') {
    try {
        await syncProblems();  // 同步云端数据
        const problems = await getAllProblems();
        
        // 获取当前自定义题目的数量，用于生成递增的索引
        const customProblems = Object.values(problems).filter(p => 
            p.index && p.index.startsWith('custom_') && !p.isDeleted);
        const customCount = customProblems.length + 1;
        
        // 生成有规律的索引: custom_年月日_序号
        const today = new Date();
        const dateStr = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;
        const customIndex = `custom_${dateStr}_${String(customCount).padStart(3, '0')}`;
        
        // 检查名称是否已存在
        const existingProblem = Object.values(problems).find(p => 
            p.name === name && !p.isDeleted);
        
        if (existingProblem) {
            throw new Error('Duplicate problem name exists.');
        }
        
        const now = Date.now();
        // 创建新问题，在名称前添加索引前缀
        const formattedName = `Ext-${customCount}. ${name}`;
        
        const problem = new Problem(
            customIndex,
            formattedName,  // 名称前添加索引前缀
            level,
            customUrl,
            now,    // createTime
            0,      // nextStep
            null    // lastReviewTime
        );
        
        // 设置初始状态
        problem.proficiency = 0;
        problem.isDeleted = false;
        problem.modificationTime = now;
        problem.isCustom = true;  // 标记为自定义题目
        
        // 设置初始 FSRS 状态 - 设置 nextReview 为今天
        problem.fsrsState = {
            difficulty: null,
            stability: null,
            state: 'New',
            lastReview: null,
            nextReview: now,    // 设置为当前时间，使其显示在今天的待复习列表中
            reviewCount: 0,
            lapses: 0,
            quality: null
        };
        
        await createOrUpdateProblem(problem);
        await syncProblems();
        
        return problem;
    } catch (error) {
        console.error('Failed to add blank card:', error);
        throw error;
    }
}

