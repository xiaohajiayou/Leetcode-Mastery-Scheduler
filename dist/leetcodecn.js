/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var _storageDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(648);




const getCloudStorageData = async (key) => {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(key, (result) => {
            if (result === undefined || result[key] === undefined) {
                reject(key);
            } else {
                resolve(result[key]);
            }
        })
    }).catch((key) => {
        console.log(`get sync storage data failed for key = ${key}`);
    });
}

const setCloudStorageData = async (key, val) => {

    console.log("set to cloud");
    console.log([key, val]);

    return new Promise((resolve) => {
        chrome.storage.sync.set({ [key]: val });
        resolve();
    }).catch(e => console.log(e));
}

const batchSetCloudStorageDate = async (object) => {
    return new Promise((resolve) => {
        chrome.storage.sync.set(object);
        resolve();
    }).catch(e => console.log(e));
}

const batchGetCloudStorageDate = async (keyArr) => {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(keyArr, (result) => {
            if (result === undefined) {
                reject(key);
            } else {
                resolve(result);
            }
        })
    }).catch(e => {
        console.log(console.log(e));
    });
}

/**
 * sharding
 */

const shardCount = 20;

const hashKeyToShardIdx = (key) => {
    const hash = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__/* .simpleStringHash */ .zJ)(key);
    const shardIndex = (hash % shardCount + shardCount) % shardCount;
    return shardIndex;
}

const isJsonObj = (obj) => {
    return Object.getPrototypeOf(obj) === Object.prototype;
}

const shardedSetCloudStorageData = async (key, val) => {
    // val should be a JSON object
    if (!isJsonObj(val)) {
        throw "shardedSet only supports JSON type val";
    }
    const shardedVal = {};
    const objectKeys = Object.keys(val);
    Array.prototype.forEach.call(objectKeys, (objKey) => {
        const shardedIdx = hashKeyToShardIdx(objKey);
        const shardedKey = `${key}#${shardedIdx}`;
        if (!(shardedKey in shardedVal)) {
            shardedVal[shardedKey] = {};
        }
        shardedVal[shardedKey][objKey] = val[objKey];
    })
    
    console.log("set shareded data to cloud:");
    console.log(shardedVal);

    await batchSetCloudStorageDate(shardedVal);
}

const shardedGetCloudStorageData = async (key) => {
    const shardedKeyArr = [];
    for (let i = 0; i < shardCount; i++) {
        shardedKeyArr.push(`${key}#${i}`);
    }

    const vals = await batchGetCloudStorageDate(shardedKeyArr);    
    const res = {};

    if (vals === undefined) return res;
    for (const shardKey in vals) {
        Object.assign(res, vals[shardKey]);
    } 
    console.log(`get ${key} sharded from cloud`)
    console.log(res);
    return res;
}

class CloudStorageDelegate extends _storageDelegate__WEBPACK_IMPORTED_MODULE_1__/* .StorageDelegate */ .i {
    constructor(){
        super();
        this.get = shardedGetCloudStorageData;
        this.set = shardedSetCloudStorageData;
    }
}

const cloudStorageDelegate = new CloudStorageDelegate();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudStorageDelegate);

/***/ }),

/***/ 891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cy: () => (/* binding */ getLocalStorageData),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   qy: () => (/* binding */ setLocalStorageData)
/* harmony export */ });
/* harmony import */ var _storageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(648);


const getLocalStorageData = async (key) => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(key, (result) => {
            if (result === undefined || result[key] === undefined) {
                reject(key);
            } else {
                resolve(result[key]);
            }
        })
    }).catch((key) => {
        console.log(`get local storage data failed for key = ${key}`);
    });
}

const setLocalStorageData = async (key, val) => {
    return new Promise((resolve) => {
        chrome.storage.local.set({ [key]: val });
        resolve();
    }).catch(e => console.log(e));
}

class LocalStorageDelegate extends _storageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .StorageDelegate */ .i {
    constructor(){
        super();
        this.get = getLocalStorageData;
        this.set = setLocalStorageData;
    }
}

const localStorageDelegate = new LocalStorageDelegate();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageDelegate);

/***/ }),

/***/ 648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ StorageDelegate)
/* harmony export */ });
class StorageDelegate {
    constructor(){
        this.get = async (key) => null;
        this.set = async (key, val) => {};
    }
}



/***/ }),

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports OperationHistory, OPS_TYPE */
class OperationHistory {
    constructor(before, isInCnMode, type, time) {
        this.before = before;
        this.isInCnMode = isInCnMode;
        this.type = type;
        this.time = time;
    }
}

const OPS_TYPE = Object.freeze({
    MASTER: "mark as mastered",
    RESET: "reset progress",
    DELETE: "delete record"
});

/***/ }),

/***/ 875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tc: () => (/* binding */ Problem)
/* harmony export */ });
/* unused harmony exports getDeletedProblem, copy */
class Problem {
    constructor(index, name, level, url, submissionTime, proficiency, modificationTime) {
        this.index = index;
        this.name = name;
        this.level = level;
        this.url = url;
        this.submissionTime = submissionTime;
        this.proficiency = proficiency;
        this.modificationTime = modificationTime;
        this.isDeleted = false;

        // 更新 FSRS 状态结构
        this.fsrsState = {
            difficulty: null,        // 用户反馈的难度 (1-5)
            quality: null,           // 答题质量 (1-5)
            lastReview: null,        // 上次复习时间
            nextReview: null,        // 下次复习时间
            reviewCount: 0,          // 复习次数
            stability: 0,            // 记忆稳定性
            state: 'New',           // FSRS 状态
            lapses: 0               // 遗忘次数
        };
    }
};

const getDeletedProblem = (problemId) => {
    const deletedProblem = new Problem(problemId, '', '', '', 0, 0, Date.now());
    deletedProblem.isDeleted = true;
    return deletedProblem;
}

const copy = (p) => {
    const newProblem = new Problem(
        p.index, 
        p.name, 
        p.level, 
        p.url, 
        p.submissionTime, 
        p.proficiency, 
        p.modificationTime
    );
    
    // 复制 isDeleted 状态
    newProblem.isDeleted = p.isDeleted;
    
    // 深拷贝 fsrsState 对象
    // 深拷贝 fsrsState 对象，兼容旧版本
    newProblem.fsrsState = {
        difficulty: p.fsrsState ? p.fsrsState.difficulty : null,
        quality: p.fsrsState ? p.fsrsState.quality : null,
        lastReview: p.fsrsState ? p.fsrsState.lastReview : null,
        nextReview: p.fsrsState ? p.fsrsState.nextReview : null,
        reviewCount: p.fsrsState ? p.fsrsState.reviewCount : 0,
        stability: p.fsrsState ? p.fsrsState.stability : 0,
        state: p.fsrsState ? p.fsrsState.state : 'New',
        lapses: p.fsrsState ? p.fsrsState.lapses : 0
    };
    
    return newProblem;
}

/***/ }),

/***/ 597:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _service_configService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(970);
/* harmony import */ var _submission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(853);



console.log(`Hello Leetcode-Mastery-Scheduler!`);

await (0,_service_configService__WEBPACK_IMPORTED_MODULE_0__/* .loadConfigs */ .O1)();



document.addEventListener('DOMContentLoaded', _submission__WEBPACK_IMPORTED_MODULE_1__/* .addRecordButton */ .EB);

// 检查并确保按钮存在
const ensureButton = () => {
    // 如果按钮不存在，添加按钮
    if (!document.querySelector('.Leetcode-Mastery-Scheduler-record-btn')) {
        (0,_submission__WEBPACK_IMPORTED_MODULE_1__/* .addRecordButton */ .EB)();
    }
};

// 创建观察器实例
const observer = new MutationObserver(() => {
    // 每次 DOM 变化时检查按钮
    ensureButton();
});

// 开始观察
const startObserving = () => {
    if (document.body) {
        observer.observe(document.body, {
            childList: true,  // 观察子节点变化
            subtree: true     // 观察所有后代节点
        });
        // 初始检查
        ensureButton();
    } else {
        // 如果 body 还不存在，等待后重试
        setTimeout(startObserving, 100);
    }
};

// 启动观察
startObserving();

// 在页面卸载时停止观察
window.addEventListener('unload', () => {
    observer.disconnect();
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EB: () => (/* binding */ addRecordButton)
/* harmony export */ });
/* unused harmony exports handleFeedbackSubmission, handleAddProblem, handleAddBlankProblem */
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var _service_problemService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(820);
/* harmony import */ var _entity_problem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(875);
/* harmony import */ var _service_fsrsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(990);










const addRecordButton = () => {
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

    // 添加窗口大小变化监听器
    window.addEventListener('resize', () => {
        const buttonRect = button.getBoundingClientRect();
        const maxRight = window.innerWidth - button.offsetWidth - 10;
        const maxBottom = window.innerHeight - button.offsetHeight - 10;
        
        // 如果按钮超出可视区域，调整位置
        if (parseInt(button.style.right) > maxRight) {
            button.style.right = `${maxRight}px`;
        }
        if (parseInt(button.style.bottom) > maxBottom) {
            button.style.bottom = `${maxBottom}px`;
        }
        
        // 保存调整后的位置
        localStorage.setItem('LMS_rateButtonPosition', JSON.stringify({
            bottom: parseInt(button.style.bottom),
            right: parseInt(button.style.right)
        }));
    });
};


// 抽取成通用的处理函数
async function handleFeedbackSubmission(problem = null) {
    try {
        // 记录是否为页面提交
        const isPageSubmission = !problem;
        
        // 显示难度反馈弹窗
        const feedback = await showDifficultyFeedbackDialog().catch(error => {
            console.log(error);  // "用户取消评分"
            return null;  // 返回 null 表示用户取消
        });

        // 如果用户取消，直接返回
        if (!feedback) {
            return null;
        }

        // 如果没有传入 problem，说明是页面提交，需要获取题目信息
        if (!problem) {
            await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__/* .syncProblems */ .xd)();   // 同步云端数据
            const { problemIndex, problemName, problemLevel, problemUrl } = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentProblemInfoFromLeetCodeByHref */ .cp)();
            const problems = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__/* .getAllProblems */ .kT)();
            problem = problems[problemIndex];
            
            if (!problem || problem.isDeleted == true) {
                problem = new _entity_problem__WEBPACK_IMPORTED_MODULE_3__/* .Problem */ .tc(problemIndex, problemName, problemLevel, problemUrl, Date.now(), (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__/* .getDifficultyBasedSteps */ .tL)(problemLevel)[0], Date.now());
            }
        }
        
        // 检查上次复习时间是否是今天，如果是则不允许再次复习
        if (problem.fsrsState && problem.fsrsState.lastReview) {
            const lastReviewDate = new Date(problem.fsrsState.lastReview);
            const today = new Date();
            
            // 比较年、月、日是否相同（考虑时区影响）
            if (lastReviewDate.getFullYear() === today.getFullYear() &&
                lastReviewDate.getMonth() === today.getMonth() &&
                lastReviewDate.getDate() === today.getDate()) {
                
                // 显示双语警告提示
                showToast("今天已经复习过这道题了，请明天再来！\nYou've already reviewed this problem today. Please come back tomorrow!", "warning");
                return null;
            }
        }
        
        problem = await (0,_service_fsrsService__WEBPACK_IMPORTED_MODULE_2__/* .updateProblemWithFSRS */ .Gq)(problem, feedback);
        await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__/* .createOrUpdateProblem */ .qu)(problem);

        // 只有在页面提交时才显示成功提示
        if (isPageSubmission) {
            // 计算下次复习时间与今天的天数差
            const nextReviewDate = new Date(problem.fsrsState.nextReview);
            const today = new Date();
            const diffTime = nextReviewDate.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // 显示复习成功提示，包含下次复习时间
            showToast(`复习成功！下次复习时间：${nextReviewDate.toLocaleDateString()}（${diffDays}天后）\nReview successful! Next review: ${nextReviewDate.toLocaleDateString()} (in ${diffDays} days)`, "success");
        }

        await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__/* .syncProblems */ .xd)(); // 同步到云端
        console.log("提交成功！");
        return problem;
    } catch (error) {
        console.error("提交时出错：", error);
        return null;
    }
}

// 添加一个更醒目的提示框函数，支持不同类型的提示
function showToast(message, type = "info", duration = 4000) {
    // 检查是否已存在toast样式
    if (!document.getElementById('lms-toast-style')) {
        const style = document.createElement('style');
        style.id = 'lms-toast-style';
        style.textContent = `
            .lms-toast {
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                padding: 12px 24px;
                border-radius: 4px;
                z-index: 10000;
                font-size: 14px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                animation: lms-toast-in 0.3s ease;
                max-width: 80%;
                text-align: center;
                white-space: pre-line;
                font-weight: 500;
            }
            
            .lms-toast-info {
                background-color: #1890ff;
                color: white;
                border-left: 4px solid #096dd9;
            }
            
            .lms-toast-success {
                background-color: #52c41a;
                color: white;
                border-left: 4px solid #389e0d;
            }
            
            .lms-toast-warning {
                background-color: #ffd666;
                color: #874d00;
                border-left: 4px solid #faad14;
                font-weight: bold;
            }
            
            .lms-toast-error {
                background-color: #ff4d4f;
                color: white;
                border-left: 4px solid #cf1322;
                font-weight: bold;
            }
            
            @keyframes lms-toast-in {
                from {
                    opacity: 0;
                    transform: translate(-50%, -20px);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, 0);
                }
            }
            
            .lms-toast-icon {
                margin-right: 8px;
                font-weight: bold;
            }
        `;
        document.head.appendChild(style);
    }
    
    // 移除可能存在的旧提示
    const existingToast = document.querySelector('.lms-toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `lms-toast lms-toast-${type}`;
    
    // 添加图标
    let icon = '';
    switch(type) {
        case 'info': icon = 'ℹ️'; break;
        case 'success': icon = '✅'; break;
        case 'warning': icon = '⚠️'; break;
        case 'error': icon = '❌'; break;
    }
    
    toast.innerHTML = `<span class="lms-toast-icon">${icon}</span>${message}`;
    document.body.appendChild(toast);
    
    // 添加点击关闭功能
    toast.addEventListener('click', () => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    });
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, duration);
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
async function handleAddProblem(url) {
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
async function handleAddBlankProblem(name, level, customUrl = '') {
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



/***/ }),

/***/ 970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O1: () => (/* binding */ loadConfigs)
/* harmony export */ });
/* unused harmony exports getReviewIntervals, setReviewIntervals, loadReviewIntervals, getProblemSorter, setProblemSorter, loadProblemSorter, isCloudSyncEnabled, switchCloudSyncEnabled, setCloudSyncEnabled, loadCloudSyncConfig, getDefaultCardLimit, setDefaultCardLimit, loadDefaultCardLimit, setReminderEnabled, isReminderEnabled, loadReminderConfig */
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(214);
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(134);
/* harmony import */ var _util_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(192);





// configurable review intervals (to be integrated)

const getReviewIntervals = async () => {
    return await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_3__/* .REVIEW_INTV_KEY */ .FB);
}

const setReviewIntervals = async (customIntv) => {
    if (customIntv == null || customIntv == undefined) return;
    const {easyIntv, mediumIntv, hardIntv} = store;
    customIntv.easyIntv = customIntv.easyIntv || easyIntv;
    customIntv.mediumIntv = customIntv.mediumIntv || mediumIntv;
    customIntv.hardIntv = customIntv.hardIntv || hardIntv;
    await setLocalStorageData(REVIEW_INTV_KEY, customIntv);
}

const loadReviewIntervals = async () => {
    const customIntv = await getReviewIntervals();
    if (customIntv !== undefined) {
        Object.assign(_store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h, customIntv);
    }
}


// configurable problem sort by
const getProblemSorter = async () => {
    return await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_3__/* .PROBLEM_SORT_BY_KEY */ .ql);
}

const setProblemSorter = async (sorterId) => {
    await setLocalStorageData(PROBLEM_SORT_BY_KEY, sorterId);
}

const loadProblemSorter = async () => {
    const sorterId = await getProblemSorter() | (0,_util_sort__WEBPACK_IMPORTED_MODULE_2__/* .idOf */ .jD)(_util_sort__WEBPACK_IMPORTED_MODULE_2__/* .problemSorters */ .SL.sortByReviewTimeAsc);
    _store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h.problemSortBy = (0,_util_sort__WEBPACK_IMPORTED_MODULE_2__/* .getSorterById */ .HF)(sorterId);
}



// config cloud sync
const isCloudSyncEnabled = async () => {
    const configs = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_3__/* .CONFIG_KEY */ .fR);
    const isEnabled = configs !== undefined ? configs[_util_keys__WEBPACK_IMPORTED_MODULE_3__/* .CONFIG_INNER_KEY_ENABLE_CLOUD */ .$z] : false;
    if (isEnabled === undefined) {
        isEnabled = false;
    }
    return isEnabled;
}

const switchCloudSyncEnabled = async () => {
    const configs = await getLocalStorageData(CONFIG_KEY);
    const isEnabled = configs[CONFIG_INNER_KEY_ENABLE_CLOUD];
    if (isEnabled === undefined) {
        isEnabled = false;
    }
    configs[CONFIG_INNER_KEY_ENABLE_CLOUD] = !isEnabled;
    await setLocalStorageData(CONFIG_KEY, configs);
}

const setCloudSyncEnabled = async (isEnabled) => {
    const configs = await getLocalStorageData(CONFIG_KEY) || {
        CONFIG_INNER_KEY_ENABLE_CLOUD: false
    };
    configs[CONFIG_INNER_KEY_ENABLE_CLOUD] = isEnabled;
    await setLocalStorageData(CONFIG_KEY, configs);
}


const loadCloudSyncConfig = async () => {
    _store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h.isCloudSyncEnabled = await isCloudSyncEnabled();
}

// 获取默认卡片数量
const getDefaultCardLimit = async () => {
    const limit = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_CARD_LIMIT_KEY */ .hr);
    return limit !== undefined ? limit : _util_keys__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_CARD_LIMIT_VALUE */ .pD;
}

// 设置默认卡片数量
const setDefaultCardLimit = async (limit) => {
    if (limit == null || limit == undefined) return;
    await setLocalStorageData(DEFAULT_CARD_LIMIT_KEY, limit);
}

// 加载默认卡片数量到 store
const loadDefaultCardLimit = async () => {
    _store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h.defaultCardLimit = await getDefaultCardLimit();
}

// 添加新的配置项和方法
async function setReminderEnabled(enabled) {
    await chrome.storage.local.set({ reminderEnabled: enabled });
}

async function isReminderEnabled() {
    const { reminderEnabled } = await chrome.storage.local.get('reminderEnabled');
    return reminderEnabled || false;
}
// 添加加载提醒设置到 store 的函数
const loadReminderConfig = async () => {
    _store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h.isReminderEnabled = await isReminderEnabled();
}

// 更新 loadConfigs 函数
const loadConfigs = async () => {
    await loadReviewIntervals();
    await loadProblemSorter();
    await loadCloudSyncConfig();
    await loadDefaultCardLimit();
    await loadReminderConfig();  // 添加这一行
}

/***/ }),

/***/ 990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gq: () => (/* binding */ updateProblemWithFSRS)
/* harmony export */ });
/* unused harmony exports getFSRSInstance, updateFSRSInstance, calculateNextReview, getRevlogCount, optimizeParameters, syncFSRSHistory, syncFSRSParams, syncRevlogs */
/* harmony import */ var ts_fsrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(878);
/* harmony import */ var _util_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(384);
/* harmony import */ var _delegate_localStorageDelegate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(891);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(214);










// 创建FSRS实例
let fsrsInstance = null;

// 获取FSRS实例
const getFSRSInstance = async () => {
    if (fsrsInstance) {
        return fsrsInstance;
    }
    
    // 获取本地参数
    const localParams = await (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .getFSRSParams */ .JF)();
    
    // 创建新的FSRS实例
    fsrsInstance = new ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .FSRS */ .Ke(localParams);
    console.log('创建新的FSRS实例，参数:', localParams);
    
    return fsrsInstance;
};

// 更新FSRS实例
const updateFSRSInstance = async (newParams) => {
    // 创建新的FSRS实例
    fsrsInstance = new FSRS(newParams);
    console.log('更新FSRS实例，新参数:', newParams);
    
    return fsrsInstance;
};

// 计算下次复习时间
const calculateNextReview = async (problem, feedback) => {
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
            problem.fsrsState = (0,ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .createEmptyCard */ .tl)(lastReview, (card) => {
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

        const rating = (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .qualityToRating */ .uY)(feedback.quality);
        
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
            stability: problem.fsrsState.stability || ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .S_MIN */ .sH,
            /** ref: https://github.com/open-spaced-repetition/ts-fsrs/blob/5eabd189d4740027ce1018cc968e67ca46c048a3/src/fsrs/default.ts#L20-L40 */
            difficulty: problem.fsrsState.difficulty || _util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultParams */ .Tb.w[4],
            /** 长期调度下状态一定是New或Review */
            state: problem.fsrsState.state || ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM.Review,
            reviewCount: (problem.fsrsState.reviewCount || 0) + 1,
            lapses: problem.fsrsState.lapses || 0
        };
    }
};

// 更新问题状态
const updateProblemWithFSRS = async (problem, feedback) => {
    const now = Date.now();
    const fsrsResult = await calculateNextReview(problem, feedback);
    
    // 创建新的复习日志条目，只包含必要字段
    const newRevlog = {
        card_id: problem.index, // 使用问题索引作为卡片ID
        review_time: now, // 复习时间（毫秒时间戳）
        review_rating: (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .qualityToRating */ .uY)(feedback.quality), // 复习评分 (1-4)
        review_state: ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .TypeConvert */ .mc.state(problem.fsrsState ? problem.fsrsState?.state ?? ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM.New : 'New') // 复习状态 (0-3)
    };
    
    // 将复习日志存储到单独的 localStorage 键中
    await (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .saveRevlog */ .Vd)(problem.index, newRevlog);
    
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
const getRevlogCount = async () => {
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
const optimizeParameters = async (onProgress) => {
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
const syncFSRSHistory = async () => {
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


const syncFSRSParams = async () => {
    if (!store.isCloudSyncEnabled) return;
    await syncLocalAndCloudStorage('fsrs_params', mergeFSRSParams);
}

const syncRevlogs = async () => {
    if (!store.isCloudSyncEnabled) return;
    await syncLocalAndCloudStorage('fsrs_revlogs', mergeRevlogs);
}

/***/ }),

/***/ 733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ isInCnMode)
/* harmony export */ });
/* unused harmony export toggleMode */
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);



const isInCnMode = async () => {
    let cnMode = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_1__/* .CN_MODE */ .dw);
    console.log(`current cnMode is ${cnMode}`);
    if (cnMode === undefined) {
        await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .setLocalStorageData */ .qy)(_util_keys__WEBPACK_IMPORTED_MODULE_1__/* .CN_MODE */ .dw, false);
        cnMode = false;
    }
    return cnMode;
}

const toggleMode = async () => {
    const cnMode = await isInCnMode();
    console.log(`got current cnMode before toggle}`);
    await setLocalStorageData(CN_MODE, !cnMode);
    console.log("cnMode toggled");
}

/***/ }),

/***/ 809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports addNewOperationHistory, popLatestOperationHistory, undoLatestOperation, hasOperationHistory */
/* harmony import */ var _entity_operationHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _modeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(733);
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891);
/* harmony import */ var _problemService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(820);







const CACHE_SIZE = 10;

const addNewOperationHistory = async (before, type, time) => {
    const snapShot = copy(before);
    snapShot.isDeleted = false;
    const newOperationHistory = new OperationHistory(snapShot, await isInCnMode(), type, time);
    let opsHistory = await getLocalStorageData(OPS_HISTORY_KEY);
    if (opsHistory === undefined) {
        opsHistory = [];
    }
    if (opsHistory.length === CACHE_SIZE) {
        opsHistory.shift();
    }
    opsHistory.push(newOperationHistory);
    await setLocalStorageData(OPS_HISTORY_KEY, opsHistory);
}

const popLatestOperationHistory = async () => {
    const opsHistory = await getLocalStorageData(OPS_HISTORY_KEY);
    if (opsHistory === undefined || opsHistory.length === 0) {
        return undefined;
    }

    const latestOpsHistory = opsHistory.pop();
    await setLocalStorageData(OPS_HISTORY_KEY, opsHistory);
    return latestOpsHistory;
}

const undoLatestOperation = async () => {
    const operationHistory = await popLatestOperationHistory();
    if (operationHistory === undefined) {
        return;
    }
    const { before: problemBefore, isInCnMode } = operationHistory;
    problemBefore.modificationTime = Date.now();    // need to update the mod time to make this latest change to override cloud data

    const problems = await getProblemsByMode(isInCnMode);
    problems[problemBefore.index] = problemBefore;
    await setProblemsByMode(problems, isInCnMode);
}

const hasOperationHistory = async () => {
    const opsHistory = await getLocalStorageData(OPS_HISTORY_KEY);
    return opsHistory !== undefined && opsHistory.length > 0;
}

/***/ }),

/***/ 820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  qu: () => (/* binding */ createOrUpdateProblem),
  kT: () => (/* binding */ getAllProblems),
  cp: () => (/* binding */ getCurrentProblemInfoFromLeetCodeByHref),
  xd: () => (/* binding */ syncProblems)
});

// UNUSED EXPORTS: deleteProblem, getAllProblemsInCloud, getCurrentProblemInfoFromLeetCodeByUrl, getProblemsByMode, markProblemAsMastered, resetProblem, setProblems, setProblemsByMode, setProblemsToCloud

;// CONCATENATED MODULE: ./src/popup/delegate/leetCodeDelegate.js
const user_agent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36";
const params = {
    operationName: "questionTitle",
    variables: { titleSlug: "" }
};
const headers = {
    'User-Agent': user_agent,
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Referer': "",
};

const queryProblemInfo = async (slug, site) => {
    const baseUrl = `https://leetcode.${site}`;
    params.variables.titleSlug = slug;
    params.query = `query questionTitle($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
          questionFrontendId
          ${site === "cn" ? "translatedTitle" : "title"}
          difficulty
        }
      }`
    headers.Referer = `${baseUrl}/problems/${slug}`

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params),
        timeout: 10000
    };

    const response = await fetch(`${baseUrl}/graphql`, requestOptions);
    const content = await response.json();

    return content.data.question;
}

// 从URL获取站点和题目标识
function extractProblemInfo(url) {
    const match = url.match(/(com|cn)(\/|$)/);
    const site = match ? match[1] : "com";
    console.log(`site is ${site}`);

    let cleanUrl = url;
    const possible_suffix = ["/submissions/", "/description/", "/discussion/", "/solutions/"];
    for (const suffix of possible_suffix) {
        if (cleanUrl.includes(suffix)) {
            cleanUrl = cleanUrl.substring(0, cleanUrl.lastIndexOf(suffix) + 1);
            break;
        }
    }

    const problemSlug = cleanUrl.split("/").splice(-2)[0];
    return { site, problemSlug, cleanUrl };
}

// 基础的获取题目信息函数
const getProblemInfo = async (url) => {
    const { site, problemSlug, cleanUrl } = extractProblemInfo(url);
    
    const question = await queryProblemInfo(problemSlug, site);

    return {
        problemIndex: question.questionFrontendId,
        problemName: `${question.questionFrontendId}. ${site === "cn" ? question.translatedTitle : question.title}`,
        problemLevel: question.difficulty,
        problemUrl: cleanUrl
    };
}

// 从当前页面URL获取题目信息
const getProblemInfoByHref = async () => {
    const currentUrl = window.location.href;
    return await getProblemInfo(currentUrl);
}

// 从指定URL获取题目信息
const leetCodeDelegate_getProblemInfoByUrl = async (url) => {
    if (!url.includes('leetcode.com/problems/') && !url.includes('leetcode.cn/problems/')) {
        throw new Error('请输入有效的 LeetCode 题目链接');
    }
    return await getProblemInfo(url);
}


// EXTERNAL MODULE: ./src/popup/delegate/localStorageDelegate.js
var localStorageDelegate = __webpack_require__(891);
// EXTERNAL MODULE: ./src/popup/service/operationHistoryService.js
var operationHistoryService = __webpack_require__(809);
// EXTERNAL MODULE: ./src/popup/entity/operationHistory.js
var operationHistory = __webpack_require__(196);
// EXTERNAL MODULE: ./src/popup/util/keys.js
var keys = __webpack_require__(134);
// EXTERNAL MODULE: ./src/popup/service/modeService.js
var modeService = __webpack_require__(733);
// EXTERNAL MODULE: ./src/popup/store.js
var store = __webpack_require__(214);
// EXTERNAL MODULE: ./src/popup/util/utils.js
var utils = __webpack_require__(384);
// EXTERNAL MODULE: ./src/popup/delegate/cloudStorageDelegate.js
var delegate_cloudStorageDelegate = __webpack_require__(188);
;// CONCATENATED MODULE: ./src/popup/service/problemService.js












const getAllProblems = async () => {
    let cnMode = await (0,modeService/* isInCnMode */.B)();
    const queryKey = cnMode ? keys/* CN_PROBLEM_KEY */.Q$ : keys/* PROBLEM_KEY */.y0;
    let problems = await (0,localStorageDelegate/* getLocalStorageData */.Cy)(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

const getAllProblemsInCloud = async () => {
    let cnMode = await isInCnMode();
    const queryKey = cnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    let problems = await cloudStorageDelegate.get(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

const getProblemsByMode = async (useCnMode) => {
    const queryKey = useCnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    let problems = await getLocalStorageData(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

// 从当前页面获取题目信息
const getCurrentProblemInfoFromLeetCodeByHref = async () => {
    return await getProblemInfoByHref();
}

// 从指定URL获取题目信息
const getCurrentProblemInfoFromLeetCodeByUrl = async (url) => {
    return await getProblemInfoByUrl(url);
}


const setProblems = async (problems) => {
    let cnMode = await (0,modeService/* isInCnMode */.B)();
    const key = cnMode ? keys/* CN_PROBLEM_KEY */.Q$ : keys/* PROBLEM_KEY */.y0;
    await (0,localStorageDelegate/* setLocalStorageData */.qy)(key, problems);
}

const setProblemsToCloud = async (problems) => {
    let cnMode = await isInCnMode();
    const key = cnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    await cloudStorageDelegate.set(key, problems);
}

const setProblemsByMode = async (problems, useCnMode) => {
    const key = useCnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    await setLocalStorageData(key, problems);
}

const createOrUpdateProblem = async (problem) => {
    problem.modificationTime = Date.now();
    const problems = await getAllProblems();
    problems[problem.index] = problem;
    await setProblems(problems);
}

const markProblemAsMastered = async (problemId) => {
    let problems = await getAllProblems();
    let problem = problems[problemId];

    await addNewOperationHistory(problem, OPS_TYPE.MASTER, Date.now());

    problem.proficiency = forggettingCurve.length;
    problem.modificationTime = Date.now();

    problems[problemId] = problem;

    await setProblems(problems);
};

const deleteProblem = async (problemId) => {

    let problems = await getAllProblems();
    const problem = problems[problemId];
    
    // soft delete
    if (problem) {
        problem.isDeleted = true;
        problem.modificationTime = Date.now();
        await addNewOperationHistory(problem, OPS_TYPE.DELETE, Date.now());
        problems[problemId] = problem;
        await setProblems(problems);
    }
};

const resetProblem = async (problemId) => {
    let problems = await getAllProblems();
    let problem = problems[problemId];

    problem.proficiency = 0;
    problem.submissionTime = Date.now() - 24 * 60 * 60 * 1000;
    problem.modificationTime = Date.now();

    await addNewOperationHistory(problem, OPS_TYPE.RESET, Date.now());

    problems[problemId] = problem;

    await setProblems(problems);
};

const syncProblems = async () => {
    if (!store/* store */.h.isCloudSyncEnabled) return;
    let cnMode = await (0,modeService/* isInCnMode */.B)();
    const key = cnMode ? keys/* CN_PROBLEM_KEY */.Q$ : keys/* PROBLEM_KEY */.y0;
    await (0,utils/* syncLocalAndCloudStorage */.gV)(key, utils/* mergeProblems */.bK); 
}

/***/ }),

/***/ 214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ store)
/* harmony export */ });
/* unused harmony export daily_store */
/* harmony import */ var _util_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(192);


const store = {
    needReviewProblems: null,
    reviewScheduledProblems: null,
    completedProblems: null,
    toReviewPage: 1,
    scheduledPage: 1,
    completedPage: 1,
    toReviewMaxPage: null,
    scheduledMaxPage: null,
    completedMaxPage: null,
    tooltipTriggerList: null,
    tooltipList: null,
    easyIntv: [1, 3],
    mediumIntv: [1, 3, 4],
    hardIntv: [0, 1, 2, 3, 4],
    problemSortBy: _util_sort__WEBPACK_IMPORTED_MODULE_0__/* .problemSorters */ .SL.sortByReviewTimeAsc,
    isCloudSyncEnabled: false,
    defaultCardLimit: 1,
    isReminderEnabled: false
}

const daily_store = {
    dailyReviewProblems: null,
    reviewScheduledProblems: null

}

/***/ }),

/***/ 497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mq: () => (/* binding */ forggettingCurve)
/* harmony export */ });
/* unused harmony exports months, PAGE_SIZE, CN_LABLE, GL_LABLE, SUBMIT_BUTTON_ATTRIBUTE_NAME, SUBMIT_BUTTON_ATTRIBUTE_VALUE, SUCCESS_CLASSNAME_CN, WRONG_ANSWER_CLASSNAME_CN, COMPILE_ERROR_AND_TLE_CLASSNAME_CN, SUCCESS_CLASSNAME, WRONG_ANSWER_CLASSNAME, COMPILE_ERROR_AND_TLE_CLASSNAME, SUCCESS_CLASSNAME_NEW, WRONG_ANSWER_CLASSNAME_NEW, COMPILE_ERROR_AND_TLE_CLASSNAME_NEW */
const forggettingCurve = [
    1 * 24 * 60,    // 1 day
    2 * 24 * 60,    // 2 day
    4 * 24 * 60,    // 4 day
    7 * 24 * 60,    // 7 day
    15 * 24 * 60    // 15 day
];

const months = (/* unused pure expression or super */ null && (["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]));

const PAGE_SIZE = 5;

const CN_LABLE = 'LeetCode - China ';
const GL_LABLE = 'LeetCode - Global';

const SUBMIT_BUTTON_ATTRIBUTE_NAME = "data-e2e-locator";
const SUBMIT_BUTTON_ATTRIBUTE_VALUE = "console-submit-button";

// leetcode UI classnames

// cn
const SUCCESS_CLASSNAME_CN = "text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6";
const WRONG_ANSWER_CLASSNAME_CN = "whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s";
const COMPILE_ERROR_AND_TLE_CLASSNAME_CN = "mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s";

// global
// old UI
const SUCCESS_CLASSNAME = "success__3Ai7";
const WRONG_ANSWER_CLASSNAME = "error__2Ft1";
const COMPILE_ERROR_AND_TLE_CLASSNAME = "error__10k9";

// new UI
const SUCCESS_CLASSNAME_NEW = "text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6";
const WRONG_ANSWER_CLASSNAME_NEW = "whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s";
const COMPILE_ERROR_AND_TLE_CLASSNAME_NEW = "mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s";

/***/ }),

/***/ 878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JF: () => (/* binding */ getFSRSParams),
/* harmony export */   Tb: () => (/* binding */ defaultParams),
/* harmony export */   Vd: () => (/* binding */ saveRevlog),
/* harmony export */   uY: () => (/* binding */ qualityToRating)
/* harmony export */ });
/* unused harmony exports saveFSRSParams, getAllRevlogs, exportRevlogsToCSV */
/* harmony import */ var ts_fsrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _delegate_localStorageDelegate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891);
/* harmony import */ var _delegate_cloudStorageDelegate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(188);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(214);





// 1. 创建自定义参数
const defaultParams = (0,ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .generatorParameters */ .EI)({
    request_retention: 0.9,          // 期望记忆保持率 90%
    maximum_interval: 365,           // 最大间隔天数
    enable_fuzz: false,              // 禁用时间模糊化
    enable_short_term: false          // 启用短期记忆影响
});

// 2. 评分映射（4个等级）
const qualityToRating = (quality) => {
    switch(quality) {
        case 1: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Again;  // 完全不会
        case 2: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Hard;   // 有点难
        case 3: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Good;   // 正常
        case 4: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Easy;   // 简单
        default: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Good;
    }
};

// 3. 获取本地FSRS参数
const getFSRSParams = async () => {
    try {
        const result = await _delegate_localStorageDelegate_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.get('fsrs_params');
        console.log('找到本地FSRS参数:', result);
        if (!result) {
            console.log('未找到本地FSRS参数，使用默认参数');
            return defaultParams;
        }
        
        // 如果结果是字符串，尝试解析它
        if (typeof result === 'string') {
            try {
                const localParams = JSON.parse(result);
                console.log('获取到本地FSRS参数:', localParams);
                return localParams;
            } catch (e) {
                console.error('解析本地FSRS参数失败:', e);
                return defaultParams;
            }
        }
        
        // 如果结果已经是对象，直接返回
        return result;
    } catch (error) {
        console.error('获取本地FSRS参数失败:', error);
        return defaultParams;
    }
};

// 4. 保存FSRS参数到本地存储
const saveFSRSParams = async (newParams) => {
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
        
        return true;
    } catch (error) {
        console.error('保存FSRS参数失败:', error);
        return false;
    }
};

// 5. 保存单个复习日志
const saveRevlog = async (cardId, revlog) => {
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
        if (_store__WEBPACK_IMPORTED_MODULE_3__/* .store */ .h.isCloudSyncEnabled) {
            await _delegate_cloudStorageDelegate_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.set('fsrs_revlogs', existingRevlogs);
        }
        
        return true;
    } catch (error) {
        console.error('Error saving revlog:', error);
        return false;
    }
};

// 6. 获取所有复习日志
const getAllRevlogs = async () => {
    try {
        let result;
        
        // 如果启用了云同步，优先从云端获取
        if (store.isCloudSyncEnabled) {
            result = await cloudStorageDelegate.get('fsrs_revlogs');
            if (result && Object.keys(result).length > 0) {
                console.log('从云端获取复习日志:', result);
                return result;
            }
        }
        
        // 如果云端没有数据或未启用云同步，从本地获取
        result = await new Promise((resolve) => {
            chrome.storage.local.get(['fsrs_revlogs'], (result) => {
                resolve(result.fsrs_revlogs || '{}');
            });
        });
        
        // 如果结果是字符串，尝试解析它
        if (typeof result === 'string') {
            try {
                return JSON.parse(result);
            } catch (e) {
                console.error('Error parsing revlogs:', e);
                return {};
            }
        }
        
        // 如果结果已经是对象，直接返回
        return result || {};
    } catch (error) {
        console.error('Error getting revlogs:', error);
        return {};
    }
};

// 7. 导出复习日志为CSV格式
const exportRevlogsToCSV = async () => {
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


/***/ }),

/***/ 134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $z: () => (/* binding */ CONFIG_INNER_KEY_ENABLE_CLOUD),
/* harmony export */   FB: () => (/* binding */ REVIEW_INTV_KEY),
/* harmony export */   Q$: () => (/* binding */ CN_PROBLEM_KEY),
/* harmony export */   dw: () => (/* binding */ CN_MODE),
/* harmony export */   fR: () => (/* binding */ CONFIG_KEY),
/* harmony export */   hr: () => (/* binding */ DEFAULT_CARD_LIMIT_KEY),
/* harmony export */   pD: () => (/* binding */ DEFAULT_CARD_LIMIT_VALUE),
/* harmony export */   ql: () => (/* binding */ PROBLEM_SORT_BY_KEY),
/* harmony export */   y0: () => (/* binding */ PROBLEM_KEY)
/* harmony export */ });
/* unused harmony export OPS_HISTORY_KEY */
const CN_MODE = 'cn_mode';
const CN_PROBLEM_KEY = 'cn_records';
const PROBLEM_KEY = 'records';
const REVIEW_INTV_KEY = 'review_intervals';
const OPS_HISTORY_KEY = 'operation_history';
const PROBLEM_SORT_BY_KEY = 'problem_sort_by';
const CONFIG_KEY = 'configs';
const CONFIG_INNER_KEY_ENABLE_CLOUD = 'enable_cloud';
// 添加新的常量
const DEFAULT_CARD_LIMIT_KEY = 'defaultCardLimit';
const DEFAULT_CARD_LIMIT_VALUE = 3;

/***/ }),

/***/ 192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HF: () => (/* binding */ getSorterById),
/* harmony export */   SL: () => (/* binding */ problemSorters),
/* harmony export */   jD: () => (/* binding */ idOf)
/* harmony export */ });
/* unused harmony exports problemSorterArr, descriptionOf */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);


const reverse = (sorter) => {
    return (p1, p2) => -sorter(p1, p2)
}

const problemReviewTimeComparator = (p1, p2) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getNextReviewTime */ .xt)(p1).valueOf() - (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getNextReviewTime */ .xt)(p2).valueOf();
}

const problemDelayTimeComparator = (p1, p2) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getDelayedHours */ .J1)(p2).valueOf() - (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getDelayedHours */ .J1)(p1).valueOf();
}

// functions used to sort problems
const problemSorters = {
    // reviewTimeSorter:
    sortByReviewTimeDesc:   reverse(problemReviewTimeComparator),
    sortByReviewTimeAsc:    problemReviewTimeComparator,
    sortByDelayHoursDesc:   problemDelayTimeComparator,
    sortByDelayHoursAsc:    reverse(problemDelayTimeComparator)
}

const problemSorterArr = [
    problemSorters.sortByReviewTimeAsc, 
    problemSorters.sortByReviewTimeDesc,
    problemSorters.sortByDelayHoursAsc,
    problemSorters.sortByDelayHoursDesc
];

const idOf = (sorter) => {
    return problemSorterArr.indexOf(sorter);
}

const getSorterById = (id) => {
    return problemSorterArr[id];
}

const descriptionOf = (sorter) => {
    let description;
    switch (sorter) {
        case problemSorters.sortByDelayHoursAsc:
            description = "Sort By Review Delayed Hours (ASC)";
            break;
        case problemSorters.sortByDelayHoursDesc:
            description = "Sort By Review Delayed Hours (DESC)";
            break;
        case problemSorters.sortByReviewTimeAsc:
            description = "Sort By Next Scheduled Review Time (ASC)";
            break;
        case problemSorters.sortByReviewTimeDesc:
            description = "Sort By Next Scheduled Review Time (DESC)";
            break;
        default:
            description = "";
    }
    return description;
} 

/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J1: () => (/* binding */ getDelayedHours),
/* harmony export */   bK: () => (/* binding */ mergeProblems),
/* harmony export */   gV: () => (/* binding */ syncLocalAndCloudStorage),
/* harmony export */   tL: () => (/* binding */ getDifficultyBasedSteps),
/* harmony export */   xt: () => (/* binding */ getNextReviewTime),
/* harmony export */   zJ: () => (/* binding */ simpleStringHash)
/* harmony export */ });
/* unused harmony exports needReview, scheduledReview, isCompleted, calculatePageNum, getLevelColor, isSubmitButton, getSubmissionResult, isSubmissionSuccess, updateProblemUponSuccessSubmission, mergeProblem, syncStorage, getCurrentRetrievability, mergeFSRSParams, mergeRevlogs */
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(188);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(214);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(497);
/* harmony import */ var ts_fsrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);






const needReview = (problem) => {
    if (problem.proficiency >= forggettingCurve.length) {
        return false;
    }

    const currentTime = Date.now();
    const timeDiffInMinute = (currentTime - problem.submissionTime) / (1000 * 60);
    return timeDiffInMinute >= forggettingCurve[problem.proficiency];
};

const scheduledReview = (problem) => {
    // return !needReview(problem) && problem.proficiency < 5;
    return true;
};

const isCompleted = (problem) => {
    return problem.proficiency === 5;
};

const calculatePageNum = (problems) => {
    return Math.max(Math.ceil(problems.length / PAGE_SIZE), 1);;
}

const getLevelColor = (level) => {
    switch (level) {
        case "Easy":
            return "rgb(67, 1 71)";  // 绿色
        case "Medium":
            return "#ff9800";  // 橙色
        case "Hard":
            return "rgb(233, 30, 99)";  // 红色
        default:
            return "inherit";
    }
};


const getNextReviewTime = (problem) => {
    // 如果有 FSRS 的 nextReview，优先使用它
    let date;
    if (problem.fsrsState && problem.fsrsState.nextReview) {
        date = new Date(problem.fsrsState.nextReview);
    } else {
        // 否则使用旧的计算方式（向后兼容）
        date = new Date(problem.submissionTime + _constants__WEBPACK_IMPORTED_MODULE_4__/* .forggettingCurve */ .mq[problem.proficiency] * 60 * 1000);
    }
    
    return date;
}


const getDelayedHours = (problem) => {
    const nextReviewDate = getNextReviewTime(problem);
    return Math.round((Date.now() - nextReviewDate) / (60 * 60 * 1000));
}

const getDifficultyBasedSteps = (diffculty) => {
    if (diffculty === "Easy") {
        return _store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h.easyIntv;
    } else if (diffculty === "Medium") {
        return _store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h.mediumIntv;
    } else {
        return _store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h.hardIntv;
    }
}

const isSubmitButton = (element) => {
    return element.getAttribute(SUBMIT_BUTTON_ATTRIBUTE_NAME) === SUBMIT_BUTTON_ATTRIBUTE_VALUE;
}

const getSubmissionResult = () => {
    return document.getElementsByClassName(SUCCESS_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(WRONG_ANSWER_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(COMPILE_ERROR_AND_TLE_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(SUCCESS_CLASSNAME)[0] ||
    document.getElementsByClassName(WRONG_ANSWER_CLASSNAME)[0] ||
    document.getElementsByClassName(COMPILE_ERROR_AND_TLE_CLASSNAME)[0] ||
    document.getElementsByClassName(SUCCESS_CLASSNAME_NEW)[0] ||
    document.getElementsByClassName(WRONG_ANSWER_CLASSNAME_NEW)[0] ||
    document.getElementsByClassName(COMPILE_ERROR_AND_TLE_CLASSNAME_NEW)[0];
}

const isSubmissionSuccess = (submissionResult) => {
    return submissionResult.className.includes(SUCCESS_CLASSNAME_CN) ||
    submissionResult.className.includes(SUCCESS_CLASSNAME_NEW) ||
    submissionResult.className.includes(SUCCESS_CLASSNAME);
}

const updateProblemUponSuccessSubmission = (problem) => {
    const steps = getDifficultyBasedSteps(problem.problemLevel);
    let nextProficiencyIndex;
    for (const i of steps) {
        if (i > problem.proficiency) {
            nextProficiencyIndex = i;
            break;
        }
    }

    // further review needed
    if (nextProficiencyIndex !== undefined) {
        problem.proficiency = nextProficiencyIndex;
        // already completed all review
    } else {
        problem.proficiency = forggettingCurve.length;
    }
    problem.submissionTime = Date.now();
    problem.modificationTime = Date.now();
    return problem;
}

// for sync data over cloud & local
const mergeProblem = (p1, p2) => {
    if (p2 === undefined || p2 === null) return p1;
    if (p1 === undefined || p1 === null) return p2;
    if (p2.modificationTime === undefined || p2.modificationTime === null) return p1;
    if (p1.modificationTime === undefined || p1.modificationTime === null) return p2;

    return p1.modificationTime > p2.modificationTime ? p1 : p2;
}

const mergeProblems = (ps1, ps2) => {
    const problemIdSet = new Set([...Object.keys(ps1), ...Object.keys(ps2)]);
    const ps = {}
    problemIdSet.forEach(id => {
        const p1 = ps1[id], p2 = ps2[id];
        const p = mergeProblem(p1, p2);
        ps[id] = p;
    })

    return ps;
}

const syncStorage = async (sd1, sd2, key, merger) => {
    if (!_store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h.isCloudSyncEnabled) return;
    const data1 = await sd1.get(key) || {};
    const data2 = await sd2.get(key) || {};
    const merged = merger(data1, data2);

    console.log("merging data from local and from cloud. local:")
    console.log(data1);
    console.log("merging data from local and from cloud. cloud:")
    console.log(data2);
    await sd1.set(key, merged);
    await sd2.set(key, merged);
}

const syncLocalAndCloudStorage = async (key, merger) => {
    await syncStorage(_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP, _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, key, merger);
}

const simpleStringHash = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        const char = key.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return hash;
}

// 获取当前可检索性的辅助函数
const getCurrentRetrievability = (problem) => {
    if (!problem.fsrsState?.stability || !problem.fsrsState?.lastReview) {
        return 1;
    }
    
    const elapsedDays = dateDiffInDays(new Date(problem.fsrsState.lastReview), new Date());
    return forgetting_curve(elapsedDays, problem.fsrsState.stability);
};

const mergeFSRSParams = (params1, params2) => {
    if (params2 === undefined || params2 === null) return params1;
    if (params1 === undefined || params1 === null) return params2;
    
    // 如果云端数据比本地数据新，使用云端数据
    const timestamp1 = params1.timestamp || 0;
    const timestamp2 = params2.timestamp || 0;
    
    // 返回较新的数据
    const mergedParams = timestamp1 > timestamp2 ? params1 : params2;
    
    // 确保返回的数据包含最新的时间戳
    mergedParams.timestamp = Date.now();
    
    return mergedParams;
}

const mergeRevlogs = (revlogs1, revlogs2) => {
    if (revlogs2 === undefined || revlogs2 === null) return revlogs1 || {};
    if (revlogs1 === undefined || revlogs1 === null) return revlogs2 || {};
    
    // 确保 revlogs1 和 revlogs2 是对象
    revlogs1 = typeof revlogs1 === 'object' ? revlogs1 : {};
    revlogs2 = typeof revlogs2 === 'object' ? revlogs2 : {};
    
    // 合并复习日志
    const mergedRevlogs = { ...revlogs1 };
    
    // 遍历第二个复习日志集合
    Object.keys(revlogs2).forEach(cardId => {
        if (!mergedRevlogs[cardId]) {
            // 如果第一个集合没有该卡片的复习日志，直接使用第二个集合的
            mergedRevlogs[cardId] = Array.isArray(revlogs2[cardId]) ? revlogs2[cardId] : [];
        } else {
            // 如果两个集合都有该卡片的复习日志，合并两边的日志
            const logs2 = Array.isArray(revlogs2[cardId]) ? revlogs2[cardId] : [];
            const logs1 = Array.isArray(mergedRevlogs[cardId]) ? mergedRevlogs[cardId] : [];
            
            // 创建一个Map来存储唯一的复习日志
            const uniqueLogsMap = new Map();
            
            // 添加第一个集合的日志
            logs1.forEach(log => {
                if (log && typeof log === 'object') {
                    const key = `${log.card_id}_${log.review_time}_${log.review_rating}`;
                    uniqueLogsMap.set(key, log);
                }
            });
            
            // 添加第二个集合的日志
            logs2.forEach(log => {
                if (log && typeof log === 'object') {
                    const key = `${log.card_id}_${log.review_time}_${log.review_rating}`;
                    uniqueLogsMap.set(key, log);
                }
            });
            
            // 转换回数组并按时间排序
            mergedRevlogs[cardId] = Array.from(uniqueLogsMap.values())
                .sort((a, b) => b.review_time - a.review_time);
        }
    });
    
    return mergedRevlogs;
}




/***/ }),

/***/ 61:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EI: () => (/* binding */ $),
/* harmony export */   Ke: () => (/* binding */ W),
/* harmony export */   ZM: () => (/* binding */ c),
/* harmony export */   iG: () => (/* binding */ l),
/* harmony export */   mc: () => (/* binding */ h),
/* harmony export */   sH: () => (/* binding */ _),
/* harmony export */   tl: () => (/* binding */ x)
/* harmony export */ });
/* unused harmony exports AbstractScheduler, CLAMP_PARAMETERS, DECAY, DefaultInitSeedStrategy, FACTOR, FSRSAlgorithm, FSRSVersion, GenSeedStrategyWithCardId, Grades, INIT_S_MAX, StrategyMode, clamp, dateDiffInDays, date_diff, date_scheduler, default_enable_fuzz, default_enable_short_term, default_maximum_interval, default_request_retention, default_w, fixDate, fixRating, fixState, forgetting_curve, formatDate, fsrs, get_fuzz_range, show_diff_message */
var c=(s=>(s[s.New=0]="New",s[s.Learning=1]="Learning",s[s.Review=2]="Review",s[s.Relearning=3]="Relearning",s))(c||{}),l=(s=>(s[s.Manual=0]="Manual",s[s.Again=1]="Again",s[s.Hard=2]="Hard",s[s.Good=3]="Good",s[s.Easy=4]="Easy",s))(l||{});class h{static card(t){return{...t,state:h.state(t.state),due:h.time(t.due),last_review:t.last_review?h.time(t.last_review):void 0}}static rating(t){if(typeof t=="string"){const e=t.charAt(0).toUpperCase(),i=t.slice(1).toLowerCase(),a=l[`${e}${i}`];if(a===void 0)throw new Error(`Invalid rating:[${t}]`);return a}else if(typeof t=="number")return t;throw new Error(`Invalid rating:[${t}]`)}static state(t){if(typeof t=="string"){const e=t.charAt(0).toUpperCase(),i=t.slice(1).toLowerCase(),a=c[`${e}${i}`];if(a===void 0)throw new Error(`Invalid state:[${t}]`);return a}else if(typeof t=="number")return t;throw new Error(`Invalid state:[${t}]`)}static time(t){if(typeof t=="object"&&t instanceof Date)return t;if(typeof t=="string"){const e=Date.parse(t);if(isNaN(e))throw new Error(`Invalid date:[${t}]`);return new Date(e)}else if(typeof t=="number")return new Date(t);throw new Error(`Invalid date:[${t}]`)}static review_log(t){return{...t,due:h.time(t.due),rating:h.rating(t.rating),state:h.state(t.state),review:h.time(t.review)}}}const X="4.7.0";Date.prototype.scheduler=function(s,t){return L(this,s,t)},Date.prototype.diff=function(s,t){return I(this,s,t)},Date.prototype.format=function(){return G(this)},Date.prototype.dueFormat=function(s,t,e){return N(this,s,t,e)};function L(s,t,e){return new Date(e?h.time(s).getTime()+t*24*60*60*1e3:h.time(s).getTime()+t*60*1e3)}function I(s,t,e){if(!s||!t)throw new Error("Invalid date");const i=h.time(s).getTime()-h.time(t).getTime();let a=0;switch(e){case"days":a=Math.floor(i/(24*60*60*1e3));break;case"minutes":a=Math.floor(i/(60*1e3));break}return a}function G(s){const t=h.time(s),e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate(),r=t.getHours(),n=t.getMinutes(),d=t.getSeconds();return`${e}-${p(i)}-${p(a)} ${p(r)}:${p(n)}:${p(d)}`}function p(s){return s<10?`0${s}`:`${s}`}const S=[60,60,24,31,12],E=["second","min","hour","day","month","year"];function N(s,t,e,i=E){s=h.time(s),t=h.time(t),i.length!==E.length&&(i=E);let a=s.getTime()-t.getTime(),r;for(a/=1e3,r=0;r<S.length&&!(a<S[r]);r++)a/=S[r];return`${Math.floor(a)}${e?i[r]:""}`}function J(s){return h.time(s)}function K(s){return h.state(s)}function Q(s){return h.rating(s)}const k=[l.Again,l.Hard,l.Good,l.Easy],Z=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function C(s,t,e){let i=1;for(const n of Z)i+=n.factor*Math.max(Math.min(s,n.end)-n.start,0);s=Math.min(s,e);let a=Math.max(2,Math.round(s-i));const r=Math.min(Math.round(s+i),e);return s>t&&(a=Math.max(a,t+1)),a=Math.min(a,r),{min_ivl:a,max_ivl:r}}function m(s,t,e){return Math.min(Math.max(s,t),e)}function z(s,t){const e=Date.UTC(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()),i=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate());return Math.floor((i-e)/864e5)}const T=.9,U=36500,q=[.40255,1.18385,3.173,15.69105,7.1949,.5345,1.4604,.0046,1.54575,.1192,1.01925,1.9395,.11,.29605,2.2698,.2315,2.9898,.51655,.6621],P=!1,Y=!0,tt=(/* unused pure expression or super */ null && (`v${X} using FSRS-5.0`)),_=.01,v=100,R=[[_,v],[_,v],[_,v],[_,v],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,2],[0,2]],$=s=>{let t=q;return s?.w&&(s.w.length===19?t=s?.w:s.w.length===17&&(t=s?.w.concat([0,0]),t[4]=+(t[5]*2+t[4]).toFixed(8),t[5]=+(Math.log(t[5]*3+1)/3).toFixed(8),t[6]=+(t[6]+.5).toFixed(8),console.debug("[FSRS V5]auto fill w to 19 length"))),t=t.map((e,i)=>m(e,R[i][0],R[i][1])),{request_retention:s?.request_retention||T,maximum_interval:s?.maximum_interval||U,w:t,enable_fuzz:s?.enable_fuzz??P,enable_short_term:s?.enable_short_term??Y}};function x(s,t){const e={due:s?h.time(s):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,state:c.New,last_review:void 0};return t&&typeof t=="function"?t(e):e}class et{c;s0;s1;s2;constructor(t){const e=it();this.c=1,this.s0=e(" "),this.s1=e(" "),this.s2=e(" "),t==null&&(t=+new Date),this.s0-=e(t),this.s0<0&&(this.s0+=1),this.s1-=e(t),this.s1<0&&(this.s1+=1),this.s2-=e(t),this.s2<0&&(this.s2+=1)}next(){const t=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.s2=t-(this.c=t|0),this.s2}set state(t){this.c=t.c,this.s0=t.s0,this.s1=t.s1,this.s2=t.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}}function it(){let s=4022871197;return function(t){t=String(t);for(let e=0;e<t.length;e++){s+=t.charCodeAt(e);let i=.02519603282416938*s;s=i>>>0,i-=s,i*=s,s=i>>>0,i-=s,s+=i*4294967296}return(s>>>0)*23283064365386963e-26}}function at(s){const t=new et(s),e=()=>t.next();return e.int32=()=>t.next()*4294967296|0,e.double=()=>e()+(e()*2097152|0)*11102230246251565e-32,e.state=()=>t.state,e.importState=i=>(t.state=i,e),e}const D=-.5,H=19/81;function O(s,t){return+Math.pow(1+H*s/t,D).toFixed(8)}class V{param;intervalModifier;_seed;constructor(t){this.param=new Proxy($(t),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention)}get interval_modifier(){return this.intervalModifier}set seed(t){this._seed=t}calculate_interval_modifier(t){if(t<=0||t>1)throw new Error("Requested retention rate should be in the range (0,1]");return+((Math.pow(t,1/D)-1)/H).toFixed(8)}get parameters(){return this.param}set parameters(t){this.update_parameters(t)}params_handler_proxy(){const t=this;return{set:function(e,i,a){return i==="request_retention"&&Number.isFinite(a)&&(t.intervalModifier=t.calculate_interval_modifier(Number(a))),Reflect.set(e,i,a),!0}}}update_parameters(t){const e=$(t);for(const i in e)if(i in this.param){const a=i;this.param[a]=e[a]}}init_stability(t){return Math.max(this.param.w[t-1],.1)}init_difficulty(t){return this.constrain_difficulty(this.param.w[4]-Math.exp((t-1)*this.param.w[5])+1)}apply_fuzz(t,e){if(!this.param.enable_fuzz||t<2.5)return Math.round(t);const i=at(this._seed)(),{min_ivl:a,max_ivl:r}=C(t,e,this.param.maximum_interval);return Math.floor(i*(r-a+1)+a)}next_interval(t,e){const i=Math.min(Math.max(1,Math.round(t*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(i,e)}linear_damping(t,e){return+(t*(10-e)/9).toFixed(8)}next_difficulty(t,e){const i=-this.param.w[6]*(e-3),a=t+this.linear_damping(i,t);return this.constrain_difficulty(this.mean_reversion(this.init_difficulty(l.Easy),a))}constrain_difficulty(t){return Math.min(Math.max(+t.toFixed(8),1),10)}mean_reversion(t,e){return+(this.param.w[7]*t+(1-this.param.w[7])*e).toFixed(8)}next_recall_stability(t,e,i,a){const r=l.Hard===a?this.param.w[15]:1,n=l.Easy===a?this.param.w[16]:1;return+m(e*(1+Math.exp(this.param.w[8])*(11-t)*Math.pow(e,-this.param.w[9])*(Math.exp((1-i)*this.param.w[10])-1)*r*n),_,36500).toFixed(8)}next_forget_stability(t,e,i){return+m(this.param.w[11]*Math.pow(t,-this.param.w[12])*(Math.pow(e+1,this.param.w[13])-1)*Math.exp((1-i)*this.param.w[14]),_,36500).toFixed(8)}next_short_term_stability(t,e){return+m(t*Math.exp(this.param.w[17]*(e-3+this.param.w[18])),_,36500).toFixed(8)}forgetting_curve=O;next_state(t,e,i){const{difficulty:a,stability:r}=t??{difficulty:0,stability:0};if(e<0)throw new Error(`Invalid delta_t "${e}"`);if(i<0||i>4)throw new Error(`Invalid grade "${i}"`);if(a===0&&r===0)return{difficulty:this.init_difficulty(i),stability:this.init_stability(i)};if(i===0)return{difficulty:a,stability:r};if(a<1||r<_)throw new Error(`Invalid memory state { difficulty: ${a}, stability: ${r} }`);const n=this.forgetting_curve(e,r),d=this.next_recall_stability(a,r,n,i),u=this.next_forget_stability(a,r,n),o=this.next_short_term_stability(r,i);let f=d;if(i===1){let[y,w]=[0,0];this.param.enable_short_term&&(y=this.param.w[17],w=this.param.w[18]);const g=r/Math.exp(y*w);f=m(+g.toFixed(8),_,u)}return e===0&&this.param.enable_short_term&&(f=o),{difficulty:this.next_difficulty(a,i),stability:f}}}function A(){const s=this.review_time.getTime(),t=this.current.reps,e=this.current.difficulty*this.current.stability;return`${s}_${t}_${e}`}function rt(s){return function(){const t=Reflect.get(this.current,s)??0,e=this.current.reps;return String(t+e||0)}}var b=(s=>(s.SCHEDULER="Scheduler",s.SEED="Seed",s))(b||{});class F{last;current;review_time;next=new Map;algorithm;initSeedStrategy;constructor(t,e,i,a={seed:A}){this.algorithm=i,this.initSeedStrategy=a.seed.bind(this),this.last=h.card(t),this.current=h.card(t),this.review_time=h.time(e),this.init()}init(){const{state:t,last_review:e}=this.current;let i=0;t!==c.New&&e&&(i=z(e,this.review_time)),this.current.last_review=this.review_time,this.current.elapsed_days=i,this.current.reps+=1,this.algorithm.seed=this.initSeedStrategy()}preview(){return{[l.Again]:this.review(l.Again),[l.Hard]:this.review(l.Hard),[l.Good]:this.review(l.Good),[l.Easy]:this.review(l.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(const t of k)yield this.review(t)}review(t){const{state:e}=this.last;let i;switch(e){case c.New:i=this.newState(t);break;case c.Learning:case c.Relearning:i=this.learningState(t);break;case c.Review:i=this.reviewState(t);break}if(i)return i;throw new Error("Invalid grade")}buildLog(t){const{last_review:e,due:i,elapsed_days:a}=this.last;return{rating:t,state:this.current.state,due:e||i,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.current.elapsed_days,last_elapsed_days:a,scheduled_days:this.current.scheduled_days,review:this.review_time}}}class j extends F{newState(t){const e=this.next.get(t);if(e)return e;const i=h.card(this.current);switch(i.difficulty=this.algorithm.init_difficulty(t),i.stability=this.algorithm.init_stability(t),t){case l.Again:i.scheduled_days=0,i.due=this.review_time.scheduler(1),i.state=c.Learning;break;case l.Hard:i.scheduled_days=0,i.due=this.review_time.scheduler(5),i.state=c.Learning;break;case l.Good:i.scheduled_days=0,i.due=this.review_time.scheduler(10),i.state=c.Learning;break;case l.Easy:{const r=this.algorithm.next_interval(i.stability,this.current.elapsed_days);i.scheduled_days=r,i.due=this.review_time.scheduler(r,!0),i.state=c.Review;break}default:throw new Error("Invalid grade")}const a={card:i,log:this.buildLog(t)};return this.next.set(t,a),a}learningState(t){const e=this.next.get(t);if(e)return e;const{state:i,difficulty:a,stability:r}=this.last,n=h.card(this.current),d=this.current.elapsed_days;switch(n.difficulty=this.algorithm.next_difficulty(a,t),n.stability=this.algorithm.next_short_term_stability(r,t),t){case l.Again:{n.scheduled_days=0,n.due=this.review_time.scheduler(5,!1),n.state=i;break}case l.Hard:{n.scheduled_days=0,n.due=this.review_time.scheduler(10),n.state=i;break}case l.Good:{const o=this.algorithm.next_interval(n.stability,d);n.scheduled_days=o,n.due=this.review_time.scheduler(o,!0),n.state=c.Review;break}case l.Easy:{const o=this.algorithm.next_short_term_stability(r,l.Good),f=this.algorithm.next_interval(o,d),y=Math.max(this.algorithm.next_interval(n.stability,d),f+1);n.scheduled_days=y,n.due=this.review_time.scheduler(y,!0),n.state=c.Review;break}default:throw new Error("Invalid grade")}const u={card:n,log:this.buildLog(t)};return this.next.set(t,u),u}reviewState(t){const e=this.next.get(t);if(e)return e;const i=this.current.elapsed_days,{difficulty:a,stability:r}=this.last,n=this.algorithm.forgetting_curve(i,r),d=h.card(this.current),u=h.card(this.current),o=h.card(this.current),f=h.card(this.current);this.next_ds(d,u,o,f,a,r,n),this.next_interval(d,u,o,f,i),this.next_state(d,u,o,f),d.lapses+=1;const y={card:d,log:this.buildLog(l.Again)},w={card:u,log:super.buildLog(l.Hard)},g={card:o,log:super.buildLog(l.Good)},M={card:f,log:super.buildLog(l.Easy)};return this.next.set(l.Again,y),this.next.set(l.Hard,w),this.next.set(l.Good,g),this.next.set(l.Easy,M),this.next.get(t)}next_ds(t,e,i,a,r,n,d){t.difficulty=this.algorithm.next_difficulty(r,l.Again);const u=n/Math.exp(this.algorithm.parameters.w[17]*this.algorithm.parameters.w[18]),o=this.algorithm.next_forget_stability(r,n,d);t.stability=m(+u.toFixed(8),_,o),e.difficulty=this.algorithm.next_difficulty(r,l.Hard),e.stability=this.algorithm.next_recall_stability(r,n,d,l.Hard),i.difficulty=this.algorithm.next_difficulty(r,l.Good),i.stability=this.algorithm.next_recall_stability(r,n,d,l.Good),a.difficulty=this.algorithm.next_difficulty(r,l.Easy),a.stability=this.algorithm.next_recall_stability(r,n,d,l.Easy)}next_interval(t,e,i,a,r){let n,d;n=this.algorithm.next_interval(e.stability,r),d=this.algorithm.next_interval(i.stability,r),n=Math.min(n,d),d=Math.max(d,n+1);const u=Math.max(this.algorithm.next_interval(a.stability,r),d+1);t.scheduled_days=0,t.due=this.review_time.scheduler(5),e.scheduled_days=n,e.due=this.review_time.scheduler(n,!0),i.scheduled_days=d,i.due=this.review_time.scheduler(d,!0),a.scheduled_days=u,a.due=this.review_time.scheduler(u,!0)}next_state(t,e,i,a){t.state=c.Relearning,e.state=c.Review,i.state=c.Review,a.state=c.Review}}class B extends F{newState(t){const e=this.next.get(t);if(e)return e;this.current.scheduled_days=0,this.current.elapsed_days=0;const i=h.card(this.current),a=h.card(this.current),r=h.card(this.current),n=h.card(this.current);return this.init_ds(i,a,r,n),this.next_interval(i,a,r,n,0),this.next_state(i,a,r,n),this.update_next(i,a,r,n),this.next.get(t)}init_ds(t,e,i,a){t.difficulty=this.algorithm.init_difficulty(l.Again),t.stability=this.algorithm.init_stability(l.Again),e.difficulty=this.algorithm.init_difficulty(l.Hard),e.stability=this.algorithm.init_stability(l.Hard),i.difficulty=this.algorithm.init_difficulty(l.Good),i.stability=this.algorithm.init_stability(l.Good),a.difficulty=this.algorithm.init_difficulty(l.Easy),a.stability=this.algorithm.init_stability(l.Easy)}learningState(t){return this.reviewState(t)}reviewState(t){const e=this.next.get(t);if(e)return e;const i=this.current.elapsed_days,{difficulty:a,stability:r}=this.last,n=this.algorithm.forgetting_curve(i,r),d=h.card(this.current),u=h.card(this.current),o=h.card(this.current),f=h.card(this.current);return this.next_ds(d,u,o,f,a,r,n),this.next_interval(d,u,o,f,i),this.next_state(d,u,o,f),d.lapses+=1,this.update_next(d,u,o,f),this.next.get(t)}next_ds(t,e,i,a,r,n,d){t.difficulty=this.algorithm.next_difficulty(r,l.Again);const u=this.algorithm.next_forget_stability(r,n,d);t.stability=m(n,_,u),e.difficulty=this.algorithm.next_difficulty(r,l.Hard),e.stability=this.algorithm.next_recall_stability(r,n,d,l.Hard),i.difficulty=this.algorithm.next_difficulty(r,l.Good),i.stability=this.algorithm.next_recall_stability(r,n,d,l.Good),a.difficulty=this.algorithm.next_difficulty(r,l.Easy),a.stability=this.algorithm.next_recall_stability(r,n,d,l.Easy)}next_interval(t,e,i,a,r){let n,d,u,o;n=this.algorithm.next_interval(t.stability,r),d=this.algorithm.next_interval(e.stability,r),u=this.algorithm.next_interval(i.stability,r),o=this.algorithm.next_interval(a.stability,r),n=Math.min(n,d),d=Math.max(d,n+1),u=Math.max(u,d+1),o=Math.max(o,u+1),t.scheduled_days=n,t.due=this.review_time.scheduler(n,!0),e.scheduled_days=d,e.due=this.review_time.scheduler(d,!0),i.scheduled_days=u,i.due=this.review_time.scheduler(u,!0),a.scheduled_days=o,a.due=this.review_time.scheduler(o,!0)}next_state(t,e,i,a){t.state=c.Review,e.state=c.Review,i.state=c.Review,a.state=c.Review}update_next(t,e,i,a){const r={card:t,log:this.buildLog(l.Again)},n={card:e,log:super.buildLog(l.Hard)},d={card:i,log:super.buildLog(l.Good)},u={card:a,log:super.buildLog(l.Easy)};this.next.set(l.Again,r),this.next.set(l.Hard,n),this.next.set(l.Good,d),this.next.set(l.Easy,u)}}class st{fsrs;constructor(t){this.fsrs=t}replay(t,e,i){return this.fsrs.next(t,e,i)}handleManualRating(t,e,i,a,r,n,d){if(typeof e>"u")throw new Error("reschedule: state is required for manual rating");let u,o;if(e===c.New)u={rating:l.Manual,state:e,due:d??i,stability:t.stability,difficulty:t.difficulty,elapsed_days:a,last_elapsed_days:t.elapsed_days,scheduled_days:t.scheduled_days,review:i},o=x(i),o.last_review=i;else{if(typeof d>"u")throw new Error("reschedule: due is required for manual rating");const f=d.diff(i,"days");u={rating:l.Manual,state:t.state,due:t.last_review||t.due,stability:t.stability,difficulty:t.difficulty,elapsed_days:a,last_elapsed_days:t.elapsed_days,scheduled_days:t.scheduled_days,review:i},o={...t,state:e,due:d,last_review:i,stability:r||t.stability,difficulty:n||t.difficulty,elapsed_days:a,scheduled_days:f,reps:t.reps+1}}return{card:o,log:u}}reschedule(t,e){const i=[];let a=x(t.due);for(const r of e){let n;if(r.review=h.time(r.review),r.rating===l.Manual){let d=0;a.state!==c.New&&a.last_review&&(d=r.review.diff(a.last_review,"days")),n=this.handleManualRating(a,r.state,r.review,d,r.stability,r.difficulty,r.due?h.time(r.due):void 0)}else n=this.replay(a,r.review,r.rating);i.push(n),a=n.card}return i}calculateManualRecord(t,e,i,a){if(!i)return null;const{card:r,log:n}=i,d=h.card(t);return d.due.getTime()===r.due.getTime()?null:(d.scheduled_days=r.due.diff(d.due,"days"),this.handleManualRating(d,r.state,h.time(e),n.elapsed_days,a?r.stability:void 0,a?r.difficulty:void 0,r.due))}}class W extends V{strategyHandler=new Map;Scheduler;constructor(t){super(t);const{enable_short_term:e}=this.parameters;this.Scheduler=e?j:B}params_handler_proxy(){const t=this;return{set:function(e,i,a){return i==="request_retention"&&Number.isFinite(a)?t.intervalModifier=t.calculate_interval_modifier(Number(a)):i==="enable_short_term"&&(t.Scheduler=a===!0?j:B),Reflect.set(e,i,a),!0}}}useStrategy(t,e){return this.strategyHandler.set(t,e),this}clearStrategy(t){return t?this.strategyHandler.delete(t):this.strategyHandler.clear(),this}getScheduler(t,e){const i=this.strategyHandler.get(b.SEED),a=this.strategyHandler.get(b.SCHEDULER)||this.Scheduler,r=i||A;return new a(t,e,this,{seed:r})}repeat(t,e,i){const a=this.getScheduler(t,e).preview();return i&&typeof i=="function"?i(a):a}next(t,e,i,a){const r=this.getScheduler(t,e),n=h.rating(i);if(n===l.Manual)throw new Error("Cannot review a manual rating");const d=r.review(n);return a&&typeof a=="function"?a(d):d}get_retrievability(t,e,i=!0){const a=h.card(t);e=e?h.time(e):new Date;const r=a.state!==c.New?Math.max(e.diff(a.last_review,"days"),0):0,n=a.state!==c.New?this.forgetting_curve(r,+a.stability.toFixed(8)):0;return i?`${(n*100).toFixed(2)}%`:n}rollback(t,e,i){const a=h.card(t),r=h.review_log(e);if(r.rating===l.Manual)throw new Error("Cannot rollback a manual rating");let n,d,u;switch(r.state){case c.New:n=r.due,d=void 0,u=0;break;case c.Learning:case c.Relearning:case c.Review:n=r.review,d=r.due,u=a.lapses-(r.rating===l.Again&&r.state===c.Review?1:0);break}const o={...a,due:n,stability:r.stability,difficulty:r.difficulty,elapsed_days:r.last_elapsed_days,scheduled_days:r.scheduled_days,reps:Math.max(0,a.reps-1),lapses:Math.max(0,u),state:r.state,last_review:d};return i&&typeof i=="function"?i(o):o}forget(t,e,i=!1,a){const r=h.card(t);e=h.time(e);const n=r.state===c.New?0:e.diff(r.last_review,"days"),d={rating:l.Manual,state:r.state,due:r.due,stability:r.stability,difficulty:r.difficulty,elapsed_days:0,last_elapsed_days:r.elapsed_days,scheduled_days:n,review:e},u={card:{...r,due:e,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:i?0:r.reps,lapses:i?0:r.lapses,state:c.New,last_review:r.last_review},log:d};return a&&typeof a=="function"?a(u):u}reschedule(t,e=[],i={}){const{recordLogHandler:a,reviewsOrderBy:r,skipManual:n=!0,now:d=new Date,update_memory_state:u=!1}=i;r&&typeof r=="function"&&e.sort(r),n&&(e=e.filter(M=>M.rating!==l.Manual));const o=new st(this),f=o.reschedule(i.first_card||x(),e),y=f.length,w=h.card(t),g=o.calculateManualRecord(w,d,y?f[y-1]:void 0,u);return a&&typeof a=="function"?{collections:f.map(a),reschedule_item:g?a(g):null}:{collections:f,reschedule_item:g}}}const nt=s=>new W(s||{});
//# sourceMappingURL=index.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(597);
/******/ 	
/******/ })()
;
//# sourceMappingURL=leetcodecn.js.map