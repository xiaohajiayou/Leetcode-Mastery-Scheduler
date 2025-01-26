/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup/delegate/cloudStorageDelegate.js":
/*!****************************************************!*\
  !*** ./src/popup/delegate/cloudStorageDelegate.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utils */ "./src/popup/util/utils.js");
/* harmony import */ var _storageDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageDelegate */ "./src/popup/delegate/storageDelegate.js");




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
    const hash = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.simpleStringHash)(key);
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

class CloudStorageDelegate extends _storageDelegate__WEBPACK_IMPORTED_MODULE_1__.StorageDelegate {
    constructor(){
        super();
        this.get = shardedGetCloudStorageData;
        this.set = shardedSetCloudStorageData;
    }
}

const cloudStorageDelegate = new CloudStorageDelegate();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudStorageDelegate);

/***/ }),

/***/ "./src/popup/delegate/leetCodeDelegate.js":
/*!************************************************!*\
  !*** ./src/popup/delegate/leetCodeDelegate.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProblemInfo: () => (/* binding */ getProblemInfo),
/* harmony export */   queryProblemInfo: () => (/* binding */ queryProblemInfo)
/* harmony export */ });
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

/*
    Extract basic problem information
*/
const getProblemInfo = async () => {
    let problemUrl = window.location.href;

    const match = problemUrl.match(/(com|cn)(\/|$)/);
    console.log(`current site is ${match[1]}`);
    const site = match ? match[1] : "com";

    const possible_suffix = ["/submissions/", "/description/", "/discussion/", "/solutions/"];
    for (const suffix of possible_suffix) {
        if (problemUrl.includes(suffix)) {
            problemUrl = problemUrl.substring(0, problemUrl.lastIndexOf(suffix) + 1);
            break;
        }
    }

    const problemSlug = problemUrl.split("/").splice(-2)[0];

    const question = await queryProblemInfo(problemSlug, site);

    return {
        problemIndex: question.questionFrontendId,
        problemName: `${question.questionFrontendId}. ${site === "cn" ? question.translatedTitle : question.title}`,
        problemLevel: question.difficulty,
        problemUrl
    };
}


/***/ }),

/***/ "./src/popup/delegate/localStorageDelegate.js":
/*!****************************************************!*\
  !*** ./src/popup/delegate/localStorageDelegate.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getLocalStorageData: () => (/* binding */ getLocalStorageData),
/* harmony export */   setLocalStorageData: () => (/* binding */ setLocalStorageData)
/* harmony export */ });
/* harmony import */ var _storageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageDelegate */ "./src/popup/delegate/storageDelegate.js");


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

class LocalStorageDelegate extends _storageDelegate__WEBPACK_IMPORTED_MODULE_0__.StorageDelegate {
    constructor(){
        super();
        this.get = getLocalStorageData;
        this.set = setLocalStorageData;
    }
}

const localStorageDelegate = new LocalStorageDelegate();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageDelegate);

/***/ }),

/***/ "./src/popup/delegate/storageDelegate.js":
/*!***********************************************!*\
  !*** ./src/popup/delegate/storageDelegate.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageDelegate: () => (/* binding */ StorageDelegate)
/* harmony export */ });
class StorageDelegate {
    constructor(){
        this.get = async (key) => null;
        this.set = async (key, val) => {};
    }
}



/***/ }),

/***/ "./src/popup/entity/operationHistory.js":
/*!**********************************************!*\
  !*** ./src/popup/entity/operationHistory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OPS_TYPE: () => (/* binding */ OPS_TYPE),
/* harmony export */   OperationHistory: () => (/* binding */ OperationHistory)
/* harmony export */ });
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

/***/ "./src/popup/entity/problem.js":
/*!*************************************!*\
  !*** ./src/popup/entity/problem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Problem: () => (/* binding */ Problem),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   getDeletedProblem: () => (/* binding */ getDeletedProblem)
/* harmony export */ });
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

/***/ "./src/popup/script/leetcodecn.js":
/*!****************************************!*\
  !*** ./src/popup/script/leetcodecn.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service_configService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/configService */ "./src/popup/service/configService.js");
/* harmony import */ var _submission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submission */ "./src/popup/script/submission.js");



console.log(`Hello Leetcode-Mastery-Scheduler!`);

await (0,_service_configService__WEBPACK_IMPORTED_MODULE_0__.loadConfigs)();
// document.addEventListener('click', submissionListener);


document.addEventListener('DOMContentLoaded', _submission__WEBPACK_IMPORTED_MODULE_1__.addRecordButton);

// 检查并确保按钮存在
const ensureButton = () => {
    // 如果按钮不存在，添加按钮
    if (!document.querySelector('.Leetcode-Mastery-Scheduler-record-btn')) {
        (0,_submission__WEBPACK_IMPORTED_MODULE_1__.addRecordButton)();
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

/***/ "./src/popup/script/submission.js":
/*!****************************************!*\
  !*** ./src/popup/script/submission.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRecordButton: () => (/* binding */ addRecordButton),
/* harmony export */   handleFeedbackSubmission: () => (/* binding */ handleFeedbackSubmission),
/* harmony export */   submissionListener: () => (/* binding */ submissionListener)
/* harmony export */ });
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utils */ "./src/popup/util/utils.js");
/* harmony import */ var _service_problemService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/problemService */ "./src/popup/service/problemService.js");
/* harmony import */ var _entity_problem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/problem */ "./src/popup/entity/problem.js");
/* harmony import */ var _util_fsrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/fsrs */ "./src/popup/util/fsrs.js");




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

        submissionResult = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.getSubmissionResult)();

        if (submissionResult === undefined || submissionResult.length === 0) {
            maxRetry--;
            return;
        }

        clearInterval(functionId);
        let isSuccess = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.isSubmissionSuccess)(submissionResult);

        if (!isSuccess) return;

        const { problemIndex, problemName, problemLevel, problemUrl } = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.getCurrentProblemInfoFromLeetCode)();
        await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.syncProblems)();   // prior to fetch local problem data, sync local problem data with cloud
        const problems = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.getAllProblems)();
        let problem = problems[problemIndex];
        
        if (problem && problem.isDeleted !== true) {
            const reviewNeeded = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.needReview)(problem);
            if (reviewNeeded) {
                await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.createOrUpdateProblem)((0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.updateProblemUponSuccessSubmission)(problem));
            }
        } else {
            problem = new _entity_problem__WEBPACK_IMPORTED_MODULE_2__.Problem(problemIndex, problemName, problemLevel, problemUrl, Date.now(), (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.getDifficultyBasedSteps)(problemLevel)[0], Date.now());
            await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.createOrUpdateProblem)(problem);
        }
        await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.syncProblems)(); // after problem updated, sync to cloud

        console.log("Submission successfully tracked!");

    }, retryInterval)
};

const submissionListener = (event) => {

    const element = event.target;
    
    const filterConditions = [
        (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.isSubmitButton)(element),
        element.parentElement && (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.isSubmitButton)(element.parentElement),
        element.parentElement && element.parentElement.parentElement && (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.isSubmitButton)(element.parentElement.parentElement),
    ]

    const isSubmission = filterConditions.reduce((prev, curr) => prev || curr);

    if (isSubmission) {
        monitorSubmissionResult();
    }

};



const addRecordButton = () => {
    // 添加按钮样式
    const style = document.createElement('style');
    style.textContent = `
        .Leetcode-Mastery-Scheduler-record-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 20px;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            box-shadow: 0 2px 10px rgba(37, 99, 235, 0.2);
            transition: all 0.2s ease;
            z-index: 9999;
        }
        
        .Leetcode-Mastery-Scheduler-record-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }
    `;
    document.head.appendChild(style);

    // 创建按钮
    const button = document.createElement('button');
    button.className = 'Leetcode-Mastery-Scheduler-record-btn';
    button.textContent = '记录难度';
    
    // 添加点击事件
    button.addEventListener('click', async () => {
        const result = await handleFeedbackSubmission();
        if (result) {
            console.log("Submission successfully tracked!");
            console.log("难度记录成功！");
        }
    });

    // 添加到页面
    document.body.appendChild(button);
};


// 抽取成通用的处理函数
async function handleFeedbackSubmission(problem = null) {
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
            await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.syncProblems)();   // 同步云端数据
            const { problemIndex, problemName, problemLevel, problemUrl } = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.getCurrentProblemInfoFromLeetCode)();
            const problems = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.getAllProblems)();
            problem = problems[problemIndex];
            
            if (problem && problem.isDeleted !== true) {
                problem = (0,_util_fsrs__WEBPACK_IMPORTED_MODULE_3__.updateProblemWithFSRS)(problem, feedback);
                await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.createOrUpdateProblem)((0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.updateProblemUponSuccessSubmission)(problem));
            } else {
                problem = new _entity_problem__WEBPACK_IMPORTED_MODULE_2__.Problem(problemIndex, problemName, problemLevel, problemUrl, Date.now(), (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.getDifficultyBasedSteps)(problemLevel)[0], Date.now());
                problem = (0,_util_fsrs__WEBPACK_IMPORTED_MODULE_3__.updateProblemWithFSRS)(problem, feedback);
                await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.createOrUpdateProblem)(problem);
            }
        } else {
            // 如果传入了 problem，说明是复习
            problem = (0,_util_fsrs__WEBPACK_IMPORTED_MODULE_3__.updateProblemWithFSRS)(problem, feedback);
            await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.createOrUpdateProblem)(problem);
        }

        await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.syncProblems)(); // 同步到云端
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
            <h3>这道题对你来说难度如何？</h3>
            <div class="quality-buttons">
                <button data-quality="1">完全不会</button>
                <button data-quality="2">有点难</button>
                <button data-quality="3">正常</button>
                <button data-quality="4">简单</button>
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

/***/ }),

/***/ "./src/popup/service/configService.js":
/*!********************************************!*\
  !*** ./src/popup/service/configService.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultCardLimit: () => (/* binding */ getDefaultCardLimit),
/* harmony export */   getProblemSorter: () => (/* binding */ getProblemSorter),
/* harmony export */   getReviewIntervals: () => (/* binding */ getReviewIntervals),
/* harmony export */   isCloudSyncEnabled: () => (/* binding */ isCloudSyncEnabled),
/* harmony export */   loadCloudSyncConfig: () => (/* binding */ loadCloudSyncConfig),
/* harmony export */   loadConfigs: () => (/* binding */ loadConfigs),
/* harmony export */   loadDefaultCardLimit: () => (/* binding */ loadDefaultCardLimit),
/* harmony export */   loadProblemSorter: () => (/* binding */ loadProblemSorter),
/* harmony export */   loadReviewIntervals: () => (/* binding */ loadReviewIntervals),
/* harmony export */   setCloudSyncEnabled: () => (/* binding */ setCloudSyncEnabled),
/* harmony export */   setDefaultCardLimit: () => (/* binding */ setDefaultCardLimit),
/* harmony export */   setProblemSorter: () => (/* binding */ setProblemSorter),
/* harmony export */   setReviewIntervals: () => (/* binding */ setReviewIntervals),
/* harmony export */   switchCloudSyncEnabled: () => (/* binding */ switchCloudSyncEnabled)
/* harmony export */ });
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delegate/localStorageDelegate */ "./src/popup/delegate/localStorageDelegate.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/popup/store.js");
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/keys */ "./src/popup/util/keys.js");
/* harmony import */ var _util_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/sort */ "./src/popup/util/sort.js");





// configurable review intervals (to be integrated)

const getReviewIntervals = async () => {
    return await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.REVIEW_INTV_KEY);
}

const setReviewIntervals = async (customIntv) => {
    if (customIntv == null || customIntv == undefined) return;
    const {easyIntv, mediumIntv, hardIntv} = _store__WEBPACK_IMPORTED_MODULE_1__.store;
    customIntv.easyIntv = customIntv.easyIntv || easyIntv;
    customIntv.mediumIntv = customIntv.mediumIntv || mediumIntv;
    customIntv.hardIntv = customIntv.hardIntv || hardIntv;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.REVIEW_INTV_KEY, customIntv);
}

const loadReviewIntervals = async () => {
    const customIntv = await getReviewIntervals();
    if (customIntv !== undefined) {
        Object.assign(_store__WEBPACK_IMPORTED_MODULE_1__.store, customIntv);
    }
}


// configurable problem sort by
const getProblemSorter = async () => {
    return await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.PROBLEM_SORT_BY_KEY);
}

const setProblemSorter = async (sorterId) => {
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.PROBLEM_SORT_BY_KEY, sorterId);
}

const loadProblemSorter = async () => {
    const sorterId = await getProblemSorter() | (0,_util_sort__WEBPACK_IMPORTED_MODULE_3__.idOf)(_util_sort__WEBPACK_IMPORTED_MODULE_3__.problemSorters.sortByReviewTimeAsc);
    _store__WEBPACK_IMPORTED_MODULE_1__.store.problemSortBy = (0,_util_sort__WEBPACK_IMPORTED_MODULE_3__.getSorterById)(sorterId);
}



// config cloud sync
const isCloudSyncEnabled = async () => {
    const configs = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_KEY);
    const isEnabled = configs !== undefined ? configs[_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_INNER_KEY_ENABLE_CLOUD] : false;
    if (isEnabled === undefined) {
        isEnabled = false;
    }
    return isEnabled;
}

const switchCloudSyncEnabled = async () => {
    const configs = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_KEY);
    const isEnabled = configs[_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_INNER_KEY_ENABLE_CLOUD];
    if (isEnabled === undefined) {
        isEnabled = false;
    }
    configs[_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_INNER_KEY_ENABLE_CLOUD] = !isEnabled;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_KEY, configs);
}

const setCloudSyncEnabled = async (isEnabled) => {
    const configs = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_KEY) || {
        CONFIG_INNER_KEY_ENABLE_CLOUD: false
    };
    configs[_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_INNER_KEY_ENABLE_CLOUD] = isEnabled;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.CONFIG_KEY, configs);
}


const loadCloudSyncConfig = async () => {
    _store__WEBPACK_IMPORTED_MODULE_1__.store.isCloudSyncEnabled = await isCloudSyncEnabled();
}

// 获取默认卡片数量
const getDefaultCardLimit = async () => {
    const limit = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_CARD_LIMIT_KEY);
    return limit !== undefined ? limit : _util_keys__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_CARD_LIMIT_VALUE;
}

// 设置默认卡片数量
const setDefaultCardLimit = async (limit) => {
    if (limit == null || limit == undefined) return;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_CARD_LIMIT_KEY, limit);
}

// 加载默认卡片数量到 store
const loadDefaultCardLimit = async () => {
    _store__WEBPACK_IMPORTED_MODULE_1__.store.defaultCardLimit = await getDefaultCardLimit();
}


const loadConfigs = async () => {
    await loadReviewIntervals();
    await loadProblemSorter();
    await loadCloudSyncConfig();
    await loadDefaultCardLimit();  // 添加这一行
}

/***/ }),

/***/ "./src/popup/service/modeService.js":
/*!******************************************!*\
  !*** ./src/popup/service/modeService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInCnMode: () => (/* binding */ isInCnMode),
/* harmony export */   toggleMode: () => (/* binding */ toggleMode)
/* harmony export */ });
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delegate/localStorageDelegate */ "./src/popup/delegate/localStorageDelegate.js");
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/keys */ "./src/popup/util/keys.js");



const isInCnMode = async () => {
    let cnMode = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_1__.CN_MODE);
    console.log(`current cnMode is ${cnMode}`);
    if (cnMode === undefined) {
        await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_1__.CN_MODE, false);
        cnMode = false;
    }
    return cnMode;
}

const toggleMode = async () => {
    const cnMode = await isInCnMode();
    console.log(`got current cnMode before toggle}`);
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_1__.CN_MODE, !cnMode);
    console.log("cnMode toggled");
}

/***/ }),

/***/ "./src/popup/service/operationHistoryService.js":
/*!******************************************************!*\
  !*** ./src/popup/service/operationHistoryService.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewOperationHistory: () => (/* binding */ addNewOperationHistory),
/* harmony export */   hasOperationHistory: () => (/* binding */ hasOperationHistory),
/* harmony export */   popLatestOperationHistory: () => (/* binding */ popLatestOperationHistory),
/* harmony export */   undoLatestOperation: () => (/* binding */ undoLatestOperation)
/* harmony export */ });
/* harmony import */ var _entity_operationHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity/operationHistory */ "./src/popup/entity/operationHistory.js");
/* harmony import */ var _modeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modeService */ "./src/popup/service/modeService.js");
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/keys */ "./src/popup/util/keys.js");
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../delegate/localStorageDelegate */ "./src/popup/delegate/localStorageDelegate.js");
/* harmony import */ var _problemService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./problemService */ "./src/popup/service/problemService.js");
/* harmony import */ var _entity_problem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entity/problem */ "./src/popup/entity/problem.js");







const CACHE_SIZE = 10;

const addNewOperationHistory = async (before, type, time) => {
    const snapShot = (0,_entity_problem__WEBPACK_IMPORTED_MODULE_5__.copy)(before);
    snapShot.isDeleted = false;
    const newOperationHistory = new _entity_operationHistory__WEBPACK_IMPORTED_MODULE_0__.OperationHistory(snapShot, await (0,_modeService__WEBPACK_IMPORTED_MODULE_1__.isInCnMode)(), type, time);
    let opsHistory = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.OPS_HISTORY_KEY);
    if (opsHistory === undefined) {
        opsHistory = [];
    }
    if (opsHistory.length === CACHE_SIZE) {
        opsHistory.shift();
    }
    opsHistory.push(newOperationHistory);
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.OPS_HISTORY_KEY, opsHistory);
}

const popLatestOperationHistory = async () => {
    const opsHistory = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.OPS_HISTORY_KEY);
    if (opsHistory === undefined || opsHistory.length === 0) {
        return undefined;
    }

    const latestOpsHistory = opsHistory.pop();
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__.setLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.OPS_HISTORY_KEY, opsHistory);
    return latestOpsHistory;
}

const undoLatestOperation = async () => {
    const operationHistory = await popLatestOperationHistory();
    if (operationHistory === undefined) {
        return;
    }
    const { before: problemBefore, isInCnMode } = operationHistory;
    problemBefore.modificationTime = Date.now();    // need to update the mod time to make this latest change to override cloud data

    const problems = await (0,_problemService__WEBPACK_IMPORTED_MODULE_4__.getProblemsByMode)(isInCnMode);
    problems[problemBefore.index] = problemBefore;
    await (0,_problemService__WEBPACK_IMPORTED_MODULE_4__.setProblemsByMode)(problems, isInCnMode);
}

const hasOperationHistory = async () => {
    const opsHistory = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__.getLocalStorageData)(_util_keys__WEBPACK_IMPORTED_MODULE_2__.OPS_HISTORY_KEY);
    return opsHistory !== undefined && opsHistory.length > 0;
}

/***/ }),

/***/ "./src/popup/service/problemService.js":
/*!*********************************************!*\
  !*** ./src/popup/service/problemService.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOrUpdateProblem: () => (/* binding */ createOrUpdateProblem),
/* harmony export */   deleteProblem: () => (/* binding */ deleteProblem),
/* harmony export */   getAllProblems: () => (/* binding */ getAllProblems),
/* harmony export */   getAllProblemsInCloud: () => (/* binding */ getAllProblemsInCloud),
/* harmony export */   getCurrentProblemInfoFromLeetCode: () => (/* binding */ getCurrentProblemInfoFromLeetCode),
/* harmony export */   getProblemsByMode: () => (/* binding */ getProblemsByMode),
/* harmony export */   markProblemAsMastered: () => (/* binding */ markProblemAsMastered),
/* harmony export */   resetProblem: () => (/* binding */ resetProblem),
/* harmony export */   setProblems: () => (/* binding */ setProblems),
/* harmony export */   setProblemsByMode: () => (/* binding */ setProblemsByMode),
/* harmony export */   setProblemsToCloud: () => (/* binding */ setProblemsToCloud),
/* harmony export */   syncProblems: () => (/* binding */ syncProblems)
/* harmony export */ });
/* harmony import */ var _delegate_leetCodeDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delegate/leetCodeDelegate */ "./src/popup/delegate/leetCodeDelegate.js");
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delegate/localStorageDelegate */ "./src/popup/delegate/localStorageDelegate.js");
/* harmony import */ var _operationHistoryService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operationHistoryService */ "./src/popup/service/operationHistoryService.js");
/* harmony import */ var _entity_operationHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/operationHistory */ "./src/popup/entity/operationHistory.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/constants */ "./src/popup/util/constants.js");
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/keys */ "./src/popup/util/keys.js");
/* harmony import */ var _modeService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modeService */ "./src/popup/service/modeService.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ "./src/popup/store.js");
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/utils */ "./src/popup/util/utils.js");
/* harmony import */ var _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../delegate/cloudStorageDelegate */ "./src/popup/delegate/cloudStorageDelegate.js");
/* harmony import */ var _entity_problem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../entity/problem */ "./src/popup/entity/problem.js");












const getAllProblems = async () => {
    let cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_6__.isInCnMode)();
    const queryKey = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    let problems = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_1__.getLocalStorageData)(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

const getAllProblemsInCloud = async () => {
    let cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_6__.isInCnMode)();
    const queryKey = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    let problems = await _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_9__["default"].get(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

const getProblemsByMode = async (useCnMode) => {
    const queryKey = useCnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    let problems = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_1__.getLocalStorageData)(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

const getCurrentProblemInfoFromLeetCode = async () => {
    return await (0,_delegate_leetCodeDelegate__WEBPACK_IMPORTED_MODULE_0__.getProblemInfo)();
}

const setProblems = async (problems) => {
    let cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_6__.isInCnMode)();
    const key = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_1__.setLocalStorageData)(key, problems);
}

const setProblemsToCloud = async (problems) => {
    let cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_6__.isInCnMode)();
    const key = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    await _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_9__["default"].set(key, problems);
}

const setProblemsByMode = async (problems, useCnMode) => {
    const key = useCnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_1__.setLocalStorageData)(key, problems);
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

    await (0,_operationHistoryService__WEBPACK_IMPORTED_MODULE_2__.addNewOperationHistory)(problem, _entity_operationHistory__WEBPACK_IMPORTED_MODULE_3__.OPS_TYPE.MASTER, Date.now());

    problem.proficiency = _util_constants__WEBPACK_IMPORTED_MODULE_4__.forggettingCurve.length;
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
        await (0,_operationHistoryService__WEBPACK_IMPORTED_MODULE_2__.addNewOperationHistory)(problem, _entity_operationHistory__WEBPACK_IMPORTED_MODULE_3__.OPS_TYPE.DELETE, Date.now());
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

    await (0,_operationHistoryService__WEBPACK_IMPORTED_MODULE_2__.addNewOperationHistory)(problem, _entity_operationHistory__WEBPACK_IMPORTED_MODULE_3__.OPS_TYPE.RESET, Date.now());

    problems[problemId] = problem;

    await setProblems(problems);
};

const syncProblems = async () => {
    if (!_store__WEBPACK_IMPORTED_MODULE_7__.store.isCloudSyncEnabled) return;
    let cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_6__.isInCnMode)();
    const key = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_5__.CN_PROBLEM_KEY : _util_keys__WEBPACK_IMPORTED_MODULE_5__.PROBLEM_KEY;
    await (0,_util_utils__WEBPACK_IMPORTED_MODULE_8__.syncLocalAndCloudStorage)(key, _util_utils__WEBPACK_IMPORTED_MODULE_8__.mergeProblems); 
}

/***/ }),

/***/ "./src/popup/store.js":
/*!****************************!*\
  !*** ./src/popup/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daily_store: () => (/* binding */ daily_store),
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _util_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/sort */ "./src/popup/util/sort.js");


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
    problemSortBy: _util_sort__WEBPACK_IMPORTED_MODULE_0__.problemSorters.sortByReviewTimeAsc,
    isCloudSyncEnabled: false,
    defaultCardLimit: 3
}

const daily_store = {
    dailyReviewProblems: null,
    reviewScheduledProblems: null

}

/***/ }),

/***/ "./src/popup/util/constants.js":
/*!*************************************!*\
  !*** ./src/popup/util/constants.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CN_LABLE: () => (/* binding */ CN_LABLE),
/* harmony export */   COMPILE_ERROR_AND_TLE_CLASSNAME: () => (/* binding */ COMPILE_ERROR_AND_TLE_CLASSNAME),
/* harmony export */   COMPILE_ERROR_AND_TLE_CLASSNAME_CN: () => (/* binding */ COMPILE_ERROR_AND_TLE_CLASSNAME_CN),
/* harmony export */   COMPILE_ERROR_AND_TLE_CLASSNAME_NEW: () => (/* binding */ COMPILE_ERROR_AND_TLE_CLASSNAME_NEW),
/* harmony export */   GL_LABLE: () => (/* binding */ GL_LABLE),
/* harmony export */   PAGE_SIZE: () => (/* binding */ PAGE_SIZE),
/* harmony export */   SUBMIT_BUTTON_ATTRIBUTE_NAME: () => (/* binding */ SUBMIT_BUTTON_ATTRIBUTE_NAME),
/* harmony export */   SUBMIT_BUTTON_ATTRIBUTE_VALUE: () => (/* binding */ SUBMIT_BUTTON_ATTRIBUTE_VALUE),
/* harmony export */   SUCCESS_CLASSNAME: () => (/* binding */ SUCCESS_CLASSNAME),
/* harmony export */   SUCCESS_CLASSNAME_CN: () => (/* binding */ SUCCESS_CLASSNAME_CN),
/* harmony export */   SUCCESS_CLASSNAME_NEW: () => (/* binding */ SUCCESS_CLASSNAME_NEW),
/* harmony export */   WRONG_ANSWER_CLASSNAME: () => (/* binding */ WRONG_ANSWER_CLASSNAME),
/* harmony export */   WRONG_ANSWER_CLASSNAME_CN: () => (/* binding */ WRONG_ANSWER_CLASSNAME_CN),
/* harmony export */   WRONG_ANSWER_CLASSNAME_NEW: () => (/* binding */ WRONG_ANSWER_CLASSNAME_NEW),
/* harmony export */   forggettingCurve: () => (/* binding */ forggettingCurve),
/* harmony export */   months: () => (/* binding */ months)
/* harmony export */ });
const forggettingCurve = [
    1 * 24 * 60,    // 1 day
    2 * 24 * 60,    // 2 day
    4 * 24 * 60,    // 4 day
    7 * 24 * 60,    // 7 day
    15 * 24 * 60    // 15 day
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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

/***/ "./src/popup/util/fsrs.js":
/*!********************************!*\
  !*** ./src/popup/util/fsrs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateNextReview: () => (/* binding */ calculateNextReview),
/* harmony export */   updateProblemWithFSRS: () => (/* binding */ updateProblemWithFSRS)
/* harmony export */ });
/* harmony import */ var ts_fsrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-fsrs */ "./node_modules/ts-fsrs/dist/index.mjs");


// 1. 创建自定义参数
const params = (0,ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.generatorParameters)({
    request_retention: 0.9,          // 期望记忆保持率 90%
    maximum_interval: 365,           // 最大间隔天数
    enable_fuzz: false,              // 禁用时间模糊化
    enable_short_term: false          // 启用短期记忆影响
});

// 2. 创建 FSRS 实例
const fsrs = new ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.FSRS(params);

// 3. 评分映射（4个等级）
const qualityToRating = (quality) => {
    switch(quality) {
        case 1: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Again;  // 完全不会
        case 2: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Hard;   // 有点难
        case 3: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Good;   // 正常
        case 4: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Easy;   // 简单
        default: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Good;
    }
};

// 4. 计算下次复习时间
const calculateNextReview = (problem, feedback) => {
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

        let card = (0,ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.createEmptyCard)(lastReview);
        
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
                [ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Again]: 1,
                [ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Hard]: 3,
                [ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Good]: 7,
                [ts_fsrs__WEBPACK_IMPORTED_MODULE_0__.Rating.Easy]: 14
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
const updateProblemWithFSRS = (problem, feedback) => {
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


/***/ }),

/***/ "./src/popup/util/keys.js":
/*!********************************!*\
  !*** ./src/popup/util/keys.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CN_MODE: () => (/* binding */ CN_MODE),
/* harmony export */   CN_PROBLEM_KEY: () => (/* binding */ CN_PROBLEM_KEY),
/* harmony export */   CONFIG_INNER_KEY_ENABLE_CLOUD: () => (/* binding */ CONFIG_INNER_KEY_ENABLE_CLOUD),
/* harmony export */   CONFIG_KEY: () => (/* binding */ CONFIG_KEY),
/* harmony export */   DEFAULT_CARD_LIMIT_KEY: () => (/* binding */ DEFAULT_CARD_LIMIT_KEY),
/* harmony export */   DEFAULT_CARD_LIMIT_VALUE: () => (/* binding */ DEFAULT_CARD_LIMIT_VALUE),
/* harmony export */   OPS_HISTORY_KEY: () => (/* binding */ OPS_HISTORY_KEY),
/* harmony export */   PROBLEM_KEY: () => (/* binding */ PROBLEM_KEY),
/* harmony export */   PROBLEM_SORT_BY_KEY: () => (/* binding */ PROBLEM_SORT_BY_KEY),
/* harmony export */   REVIEW_INTV_KEY: () => (/* binding */ REVIEW_INTV_KEY)
/* harmony export */ });
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

/***/ "./src/popup/util/sort.js":
/*!********************************!*\
  !*** ./src/popup/util/sort.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   descriptionOf: () => (/* binding */ descriptionOf),
/* harmony export */   getSorterById: () => (/* binding */ getSorterById),
/* harmony export */   idOf: () => (/* binding */ idOf),
/* harmony export */   problemSorterArr: () => (/* binding */ problemSorterArr),
/* harmony export */   problemSorters: () => (/* binding */ problemSorters)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/popup/util/utils.js");


const reverse = (sorter) => {
    return (p1, p2) => -sorter(p1, p2)
}

const problemReviewTimeComparator = (p1, p2) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNextReviewTime)(p1).valueOf() - (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNextReviewTime)(p2).valueOf();
}

const problemDelayTimeComparator = (p1, p2) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDelayedHours)(p2).valueOf() - (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDelayedHours)(p1).valueOf();
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

/***/ "./src/popup/util/utils.js":
/*!*********************************!*\
  !*** ./src/popup/util/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculatePageNum: () => (/* binding */ calculatePageNum),
/* harmony export */   getCurrentRetrievability: () => (/* binding */ getCurrentRetrievability),
/* harmony export */   getDelayedHours: () => (/* binding */ getDelayedHours),
/* harmony export */   getDifficultyBasedSteps: () => (/* binding */ getDifficultyBasedSteps),
/* harmony export */   getLevelColor: () => (/* binding */ getLevelColor),
/* harmony export */   getNextReviewTime: () => (/* binding */ getNextReviewTime),
/* harmony export */   getSubmissionResult: () => (/* binding */ getSubmissionResult),
/* harmony export */   isCompleted: () => (/* binding */ isCompleted),
/* harmony export */   isSubmissionSuccess: () => (/* binding */ isSubmissionSuccess),
/* harmony export */   isSubmitButton: () => (/* binding */ isSubmitButton),
/* harmony export */   mergeProblem: () => (/* binding */ mergeProblem),
/* harmony export */   mergeProblems: () => (/* binding */ mergeProblems),
/* harmony export */   needReview: () => (/* binding */ needReview),
/* harmony export */   scheduledReview: () => (/* binding */ scheduledReview),
/* harmony export */   simpleStringHash: () => (/* binding */ simpleStringHash),
/* harmony export */   syncLocalAndCloudStorage: () => (/* binding */ syncLocalAndCloudStorage),
/* harmony export */   syncStorage: () => (/* binding */ syncStorage),
/* harmony export */   updateProblemUponSuccessSubmission: () => (/* binding */ updateProblemUponSuccessSubmission)
/* harmony export */ });
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delegate/localStorageDelegate */ "./src/popup/delegate/localStorageDelegate.js");
/* harmony import */ var _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delegate/cloudStorageDelegate */ "./src/popup/delegate/cloudStorageDelegate.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/popup/store.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/popup/util/constants.js");





const needReview = (problem) => {
    if (problem.proficiency >= _constants__WEBPACK_IMPORTED_MODULE_3__.forggettingCurve.length) {
        return false;
    }

    const currentTime = Date.now();
    const timeDiffInMinute = (currentTime - problem.submissionTime) / (1000 * 60);
    return timeDiffInMinute >= _constants__WEBPACK_IMPORTED_MODULE_3__.forggettingCurve[problem.proficiency];
};

const scheduledReview = (problem) => {
    // return !needReview(problem) && problem.proficiency < 5;
    return true;
};

const isCompleted = (problem) => {
    return problem.proficiency === 5;
};

const calculatePageNum = (problems) => {
    return Math.max(Math.ceil(problems.length / _constants__WEBPACK_IMPORTED_MODULE_3__.PAGE_SIZE), 1);;
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
        date = new Date(problem.submissionTime + _constants__WEBPACK_IMPORTED_MODULE_3__.forggettingCurve[problem.proficiency] * 60 * 1000);
    }
    
    return date;
}


const getDelayedHours = (problem) => {
    const nextReviewDate = getNextReviewTime(problem);
    return Math.round((Date.now() - nextReviewDate) / (60 * 60 * 1000));
}

const getDifficultyBasedSteps = (diffculty) => {
    if (diffculty === "Easy") {
        return _store__WEBPACK_IMPORTED_MODULE_2__.store.easyIntv;
    } else if (diffculty === "Medium") {
        return _store__WEBPACK_IMPORTED_MODULE_2__.store.mediumIntv;
    } else {
        return _store__WEBPACK_IMPORTED_MODULE_2__.store.hardIntv;
    }
}

const isSubmitButton = (element) => {
    return element.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_3__.SUBMIT_BUTTON_ATTRIBUTE_NAME) === _constants__WEBPACK_IMPORTED_MODULE_3__.SUBMIT_BUTTON_ATTRIBUTE_VALUE;
}

const getSubmissionResult = () => {
    return document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.WRONG_ANSWER_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.COMPILE_ERROR_AND_TLE_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS_CLASSNAME)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.WRONG_ANSWER_CLASSNAME)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.COMPILE_ERROR_AND_TLE_CLASSNAME)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS_CLASSNAME_NEW)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.WRONG_ANSWER_CLASSNAME_NEW)[0] ||
    document.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_3__.COMPILE_ERROR_AND_TLE_CLASSNAME_NEW)[0];
}

const isSubmissionSuccess = (submissionResult) => {
    return submissionResult.className.includes(_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS_CLASSNAME_CN) ||
    submissionResult.className.includes(_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS_CLASSNAME_NEW) ||
    submissionResult.className.includes(_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS_CLASSNAME);
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
        problem.proficiency = _constants__WEBPACK_IMPORTED_MODULE_3__.forggettingCurve.length;
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
    if (!_store__WEBPACK_IMPORTED_MODULE_2__.store.isCloudSyncEnabled) return;
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
    await syncStorage(_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__["default"], _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_1__["default"], key, merger);
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
    
    const now = Date.now();
    const elapsedDays = (now - problem.fsrsState.lastReview) / (24 * 60 * 60 * 1000);
    return calculateRetrievability(problem.fsrsState.stability, elapsedDays);
};

// 计算可检索性的辅助函数
const calculateRetrievability = (stability, elapsedDays) => {
    return Math.exp(Math.log(0.9) * elapsedDays / stability);
};


/***/ }),

/***/ "./node_modules/ts-fsrs/dist/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/ts-fsrs/dist/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractScheduler: () => (/* binding */ H),
/* harmony export */   DECAY: () => (/* binding */ R),
/* harmony export */   DefaultInitSeedStrategy: () => (/* binding */ D),
/* harmony export */   FACTOR: () => (/* binding */ $),
/* harmony export */   FSRS: () => (/* binding */ V),
/* harmony export */   FSRSAlgorithm: () => (/* binding */ Y),
/* harmony export */   FSRSVersion: () => (/* binding */ j),
/* harmony export */   GenSeedStrategyWithCardId: () => (/* binding */ Z),
/* harmony export */   Grades: () => (/* binding */ T),
/* harmony export */   Rating: () => (/* binding */ d),
/* harmony export */   State: () => (/* binding */ u),
/* harmony export */   StrategyMode: () => (/* binding */ x),
/* harmony export */   TypeConvert: () => (/* binding */ h),
/* harmony export */   clamp: () => (/* binding */ p),
/* harmony export */   createEmptyCard: () => (/* binding */ v),
/* harmony export */   dateDiffInDays: () => (/* binding */ q),
/* harmony export */   date_diff: () => (/* binding */ N),
/* harmony export */   date_scheduler: () => (/* binding */ I),
/* harmony export */   default_enable_fuzz: () => (/* binding */ G),
/* harmony export */   default_enable_short_term: () => (/* binding */ k),
/* harmony export */   default_maximum_interval: () => (/* binding */ A),
/* harmony export */   default_request_retention: () => (/* binding */ F),
/* harmony export */   default_w: () => (/* binding */ L),
/* harmony export */   fixDate: () => (/* binding */ y),
/* harmony export */   fixRating: () => (/* binding */ W),
/* harmony export */   fixState: () => (/* binding */ B),
/* harmony export */   formatDate: () => (/* binding */ C),
/* harmony export */   fsrs: () => (/* binding */ et),
/* harmony export */   generatorParameters: () => (/* binding */ M),
/* harmony export */   get_fuzz_range: () => (/* binding */ U),
/* harmony export */   show_diff_message: () => (/* binding */ z)
/* harmony export */ });
var u=(r=>(r[r.New=0]="New",r[r.Learning=1]="Learning",r[r.Review=2]="Review",r[r.Relearning=3]="Relearning",r))(u||{}),d=(r=>(r[r.Manual=0]="Manual",r[r.Again=1]="Again",r[r.Hard=2]="Hard",r[r.Good=3]="Good",r[r.Easy=4]="Easy",r))(d||{});class h{static card(t){return{...t,state:h.state(t.state),due:h.time(t.due),last_review:t.last_review?h.time(t.last_review):void 0}}static rating(t){if(typeof t=="string"){const e=t.charAt(0).toUpperCase(),i=t.slice(1).toLowerCase(),a=d[`${e}${i}`];if(a===void 0)throw new Error(`Invalid rating:[${t}]`);return a}else if(typeof t=="number")return t;throw new Error(`Invalid rating:[${t}]`)}static state(t){if(typeof t=="string"){const e=t.charAt(0).toUpperCase(),i=t.slice(1).toLowerCase(),a=u[`${e}${i}`];if(a===void 0)throw new Error(`Invalid state:[${t}]`);return a}else if(typeof t=="number")return t;throw new Error(`Invalid state:[${t}]`)}static time(t){if(typeof t=="object"&&t instanceof Date)return t;if(typeof t=="string"){const e=Date.parse(t);if(isNaN(e))throw new Error(`Invalid date:[${t}]`);return new Date(e)}else if(typeof t=="number")return new Date(t);throw new Error(`Invalid date:[${t}]`)}static review_log(t){return{...t,due:h.time(t.due),rating:h.rating(t.rating),state:h.state(t.state),review:h.time(t.review)}}}const F=.9,A=36500,L=[.40255,1.18385,3.173,15.69105,7.1949,.5345,1.4604,.0046,1.54575,.1192,1.01925,1.9395,.11,.29605,2.2698,.2315,2.9898,.51655,.6621],G=!1,k=!0,j="v4.6.0 using FSRS-5.0",M=r=>{let t=L;return r?.w&&(r.w.length===19?t=r?.w:r.w.length===17&&(t=r?.w.concat([0,0]),t[4]=+(t[5]*2+t[4]).toFixed(8),t[5]=+(Math.log(t[5]*3+1)/3).toFixed(8),t[6]=+(t[6]+.5).toFixed(8),console.debug("[FSRS V5]auto fill w to 19 length"))),{request_retention:r?.request_retention||F,maximum_interval:r?.maximum_interval||A,w:t,enable_fuzz:r?.enable_fuzz??G,enable_short_term:r?.enable_short_term??k}};function v(r,t){const e={due:r?h.time(r):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,state:u.New,last_review:void 0};return t&&typeof t=="function"?t(e):e}Date.prototype.scheduler=function(r,t){return I(this,r,t)},Date.prototype.diff=function(r,t){return N(this,r,t)},Date.prototype.format=function(){return C(this)},Date.prototype.dueFormat=function(r,t,e){return z(this,r,t,e)};function I(r,t,e){return new Date(e?y(r).getTime()+t*24*60*60*1e3:y(r).getTime()+t*60*1e3)}function N(r,t,e){if(!r||!t)throw new Error("Invalid date");const i=y(r).getTime()-y(t).getTime();let a=0;switch(e){case"days":a=Math.floor(i/(24*60*60*1e3));break;case"minutes":a=Math.floor(i/(60*1e3));break}return a}function C(r){const t=y(r),e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate(),s=t.getHours(),n=t.getMinutes(),l=t.getSeconds();return`${e}-${w(i)}-${w(a)} ${w(s)}:${w(n)}:${w(l)}`}function w(r){return r<10?`0${r}`:`${r}`}const S=[60,60,24,31,12],E=["second","min","hour","day","month","year"];function z(r,t,e,i=E){r=y(r),t=y(t),i.length!==E.length&&(i=E);let a=r.getTime()-t.getTime(),s;for(a/=1e3,s=0;s<S.length&&!(a<S[s]);s++)a/=S[s];return`${Math.floor(a)}${e?i[s]:""}`}function y(r){return h.time(r)}function B(r){return h.state(r)}function W(r){return h.rating(r)}const T=[d.Again,d.Hard,d.Good,d.Easy],J=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function U(r,t,e){let i=1;for(const n of J)i+=n.factor*Math.max(Math.min(r,n.end)-n.start,0);r=Math.min(r,e);let a=Math.max(2,Math.round(r-i));const s=Math.min(Math.round(r+i),e);return r>t&&(a=Math.max(a,t+1)),a=Math.min(a,s),{min_ivl:a,max_ivl:s}}function p(r,t,e){return Math.min(Math.max(r,t),e)}function q(r,t){const e=Date.UTC(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),i=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate());return Math.floor((i-e)/864e5)}class K{c;s0;s1;s2;constructor(t){const e=Q();this.c=1,this.s0=e(" "),this.s1=e(" "),this.s2=e(" "),t==null&&(t=+new Date),this.s0-=e(t),this.s0<0&&(this.s0+=1),this.s1-=e(t),this.s1<0&&(this.s1+=1),this.s2-=e(t),this.s2<0&&(this.s2+=1)}next(){const t=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.s2=t-(this.c=t|0),this.s2}set state(t){this.c=t.c,this.s0=t.s0,this.s1=t.s1,this.s2=t.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}}function Q(){let r=4022871197;return function(t){t=String(t);for(let e=0;e<t.length;e++){r+=t.charCodeAt(e);let i=.02519603282416938*r;r=i>>>0,i-=r,i*=r,r=i>>>0,i-=r,r+=i*4294967296}return(r>>>0)*23283064365386963e-26}}function X(r){const t=new K(r),e=()=>t.next();return e.int32=()=>t.next()*4294967296|0,e.double=()=>e()+(e()*2097152|0)*11102230246251565e-32,e.state=()=>t.state,e.importState=i=>(t.state=i,e),e}const R=-.5,$=19/81;class Y{param;intervalModifier;_seed;constructor(t){this.param=new Proxy(M(t),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention)}get interval_modifier(){return this.intervalModifier}set seed(t){this._seed=t}calculate_interval_modifier(t){if(t<=0||t>1)throw new Error("Requested retention rate should be in the range (0,1]");return+((Math.pow(t,1/R)-1)/$).toFixed(8)}get parameters(){return this.param}set parameters(t){this.update_parameters(t)}params_handler_proxy(){const t=this;return{set:function(e,i,a){return i==="request_retention"&&Number.isFinite(a)&&(t.intervalModifier=t.calculate_interval_modifier(Number(a))),Reflect.set(e,i,a),!0}}}update_parameters(t){const e=M(t);for(const i in e)if(i in this.param){const a=i;this.param[a]=e[a]}}init_stability(t){return Math.max(this.param.w[t-1],.1)}init_difficulty(t){return this.constrain_difficulty(this.param.w[4]-Math.exp((t-1)*this.param.w[5])+1)}apply_fuzz(t,e){if(!this.param.enable_fuzz||t<2.5)return Math.round(t);const i=X(this._seed)(),{min_ivl:a,max_ivl:s}=U(t,e,this.param.maximum_interval);return Math.floor(i*(s-a+1)+a)}next_interval(t,e){const i=Math.min(Math.max(1,Math.round(t*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(i,e)}linear_damping(t,e){return+(t*(10-e)/9).toFixed(8)}next_difficulty(t,e){const i=-this.param.w[6]*(e-3),a=t+this.linear_damping(i,t);return this.constrain_difficulty(this.mean_reversion(this.init_difficulty(d.Easy),a))}constrain_difficulty(t){return Math.min(Math.max(+t.toFixed(8),1),10)}mean_reversion(t,e){return+(this.param.w[7]*t+(1-this.param.w[7])*e).toFixed(8)}next_recall_stability(t,e,i,a){const s=d.Hard===a?this.param.w[15]:1,n=d.Easy===a?this.param.w[16]:1;return+p(e*(1+Math.exp(this.param.w[8])*(11-t)*Math.pow(e,-this.param.w[9])*(Math.exp((1-i)*this.param.w[10])-1)*s*n),.01,36500).toFixed(8)}next_forget_stability(t,e,i){return+p(this.param.w[11]*Math.pow(t,-this.param.w[12])*(Math.pow(e+1,this.param.w[13])-1)*Math.exp((1-i)*this.param.w[14]),.01,36500).toFixed(8)}next_short_term_stability(t,e){return+p(t*Math.exp(this.param.w[17]*(e-3+this.param.w[18])),.01,36500).toFixed(8)}forgetting_curve(t,e){return+Math.pow(1+$*t/e,R).toFixed(8)}next_state(t,e,i){const{difficulty:a,stability:s}=t??{difficulty:0,stability:0};if(e<0)throw new Error(`Invalid delta_t "${e}"`);if(i<0||i>4)throw new Error(`Invalid grade "${i}"`);if(a===0&&s===0)return{difficulty:this.init_difficulty(i),stability:this.init_stability(i)};if(i===0)return{difficulty:a,stability:s};if(a<1||s<.01)throw new Error(`Invalid memory state { difficulty: ${a}, stability: ${s} }`);const n=this.forgetting_curve(e,s),l=this.next_recall_stability(a,s,n,i),o=this.next_forget_stability(a,s,n),c=this.next_short_term_stability(s,i);let f=l;if(i===1){let[_,g]=[0,0];this.param.enable_short_term&&(_=this.param.w[17],g=this.param.w[18]);const m=s/Math.exp(_*g);f=p(m,.01,o)}return e===0&&this.param.enable_short_term&&(f=c),{difficulty:this.next_difficulty(a,i),stability:f}}}function D(){const r=this.review_time.getTime(),t=this.current.reps,e=this.current.difficulty*this.current.stability;return`${r}_${t}_${e}`}function Z(r){return function(){const t=Reflect.get(this.current,r)??0,e=this.current.reps;return String(t+e||0)}}var x=(r=>(r.SCHEDULER="Scheduler",r.SEED="Seed",r))(x||{});class H{last;current;review_time;next=new Map;algorithm;initSeedStrategy;constructor(t,e,i,a={seed:D}){this.algorithm=i,this.initSeedStrategy=a.seed.bind(this),this.last=h.card(t),this.current=h.card(t),this.review_time=h.time(e),this.init()}init(){const{state:t,last_review:e}=this.current;let i=0;t!==u.New&&e&&(i=q(e,this.review_time)),this.current.last_review=this.review_time,this.current.elapsed_days=i,this.current.reps+=1,this.algorithm.seed=this.initSeedStrategy()}preview(){return{[d.Again]:this.review(d.Again),[d.Hard]:this.review(d.Hard),[d.Good]:this.review(d.Good),[d.Easy]:this.review(d.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(const t of T)yield this.review(t)}review(t){const{state:e}=this.last;let i;switch(e){case u.New:i=this.newState(t);break;case u.Learning:case u.Relearning:i=this.learningState(t);break;case u.Review:i=this.reviewState(t);break}if(i)return i;throw new Error("Invalid grade")}buildLog(t){const{last_review:e,due:i,elapsed_days:a}=this.last;return{rating:t,state:this.current.state,due:e||i,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.current.elapsed_days,last_elapsed_days:a,scheduled_days:this.current.scheduled_days,review:this.review_time}}}class O extends H{newState(t){const e=this.next.get(t);if(e)return e;const i=h.card(this.current);switch(i.difficulty=this.algorithm.init_difficulty(t),i.stability=this.algorithm.init_stability(t),t){case d.Again:i.scheduled_days=0,i.due=this.review_time.scheduler(1),i.state=u.Learning;break;case d.Hard:i.scheduled_days=0,i.due=this.review_time.scheduler(5),i.state=u.Learning;break;case d.Good:i.scheduled_days=0,i.due=this.review_time.scheduler(10),i.state=u.Learning;break;case d.Easy:{const s=this.algorithm.next_interval(i.stability,this.current.elapsed_days);i.scheduled_days=s,i.due=this.review_time.scheduler(s,!0),i.state=u.Review;break}default:throw new Error("Invalid grade")}const a={card:i,log:this.buildLog(t)};return this.next.set(t,a),a}learningState(t){const e=this.next.get(t);if(e)return e;const{state:i,difficulty:a,stability:s}=this.last,n=h.card(this.current),l=this.current.elapsed_days;switch(n.difficulty=this.algorithm.next_difficulty(a,t),n.stability=this.algorithm.next_short_term_stability(s,t),t){case d.Again:{n.scheduled_days=0,n.due=this.review_time.scheduler(5,!1),n.state=i;break}case d.Hard:{n.scheduled_days=0,n.due=this.review_time.scheduler(10),n.state=i;break}case d.Good:{const c=this.algorithm.next_interval(n.stability,l);n.scheduled_days=c,n.due=this.review_time.scheduler(c,!0),n.state=u.Review;break}case d.Easy:{const c=this.algorithm.next_short_term_stability(s,d.Good),f=this.algorithm.next_interval(c,l),_=Math.max(this.algorithm.next_interval(n.stability,l),f+1);n.scheduled_days=_,n.due=this.review_time.scheduler(_,!0),n.state=u.Review;break}default:throw new Error("Invalid grade")}const o={card:n,log:this.buildLog(t)};return this.next.set(t,o),o}reviewState(t){const e=this.next.get(t);if(e)return e;const i=this.current.elapsed_days,{difficulty:a,stability:s}=this.last,n=this.algorithm.forgetting_curve(i,s),l=h.card(this.current),o=h.card(this.current),c=h.card(this.current),f=h.card(this.current);this.next_ds(l,o,c,f,a,s,n),this.next_interval(l,o,c,f,i),this.next_state(l,o,c,f),l.lapses+=1;const _={card:l,log:this.buildLog(d.Again)},g={card:o,log:super.buildLog(d.Hard)},m={card:c,log:super.buildLog(d.Good)},b={card:f,log:super.buildLog(d.Easy)};return this.next.set(d.Again,_),this.next.set(d.Hard,g),this.next.set(d.Good,m),this.next.set(d.Easy,b),this.next.get(t)}next_ds(t,e,i,a,s,n,l){t.difficulty=this.algorithm.next_difficulty(s,d.Again);const o=n/Math.exp(this.algorithm.parameters.w[17]*this.algorithm.parameters.w[18]);t.stability=Math.min(+o.toFixed(8),this.algorithm.next_forget_stability(s,n,l)),e.difficulty=this.algorithm.next_difficulty(s,d.Hard),e.stability=this.algorithm.next_recall_stability(s,n,l,d.Hard),i.difficulty=this.algorithm.next_difficulty(s,d.Good),i.stability=this.algorithm.next_recall_stability(s,n,l,d.Good),a.difficulty=this.algorithm.next_difficulty(s,d.Easy),a.stability=this.algorithm.next_recall_stability(s,n,l,d.Easy)}next_interval(t,e,i,a,s){let n,l;n=this.algorithm.next_interval(e.stability,s),l=this.algorithm.next_interval(i.stability,s),n=Math.min(n,l),l=Math.max(l,n+1);const o=Math.max(this.algorithm.next_interval(a.stability,s),l+1);t.scheduled_days=0,t.due=this.review_time.scheduler(5),e.scheduled_days=n,e.due=this.review_time.scheduler(n,!0),i.scheduled_days=l,i.due=this.review_time.scheduler(l,!0),a.scheduled_days=o,a.due=this.review_time.scheduler(o,!0)}next_state(t,e,i,a){t.state=u.Relearning,e.state=u.Review,i.state=u.Review,a.state=u.Review}}class P extends H{newState(t){const e=this.next.get(t);if(e)return e;this.current.scheduled_days=0,this.current.elapsed_days=0;const i=h.card(this.current),a=h.card(this.current),s=h.card(this.current),n=h.card(this.current);this.init_ds(i,a,s,n);const l=0;return this.next_interval(i,a,s,n,l),this.next_state(i,a,s,n),this.update_next(i,a,s,n),this.next.get(t)}init_ds(t,e,i,a){t.difficulty=this.algorithm.init_difficulty(d.Again),t.stability=this.algorithm.init_stability(d.Again),e.difficulty=this.algorithm.init_difficulty(d.Hard),e.stability=this.algorithm.init_stability(d.Hard),i.difficulty=this.algorithm.init_difficulty(d.Good),i.stability=this.algorithm.init_stability(d.Good),a.difficulty=this.algorithm.init_difficulty(d.Easy),a.stability=this.algorithm.init_stability(d.Easy)}learningState(t){return this.reviewState(t)}reviewState(t){const e=this.next.get(t);if(e)return e;const i=this.current.elapsed_days,{difficulty:a,stability:s}=this.last,n=this.algorithm.forgetting_curve(i,s),l=h.card(this.current),o=h.card(this.current),c=h.card(this.current),f=h.card(this.current);return this.next_ds(l,o,c,f,a,s,n),this.next_interval(l,o,c,f,i),this.next_state(l,o,c,f),l.lapses+=1,this.update_next(l,o,c,f),this.next.get(t)}next_ds(t,e,i,a,s,n,l){t.difficulty=this.algorithm.next_difficulty(s,d.Again),t.stability=Math.min(n,this.algorithm.next_forget_stability(s,n,l)),e.difficulty=this.algorithm.next_difficulty(s,d.Hard),e.stability=this.algorithm.next_recall_stability(s,n,l,d.Hard),i.difficulty=this.algorithm.next_difficulty(s,d.Good),i.stability=this.algorithm.next_recall_stability(s,n,l,d.Good),a.difficulty=this.algorithm.next_difficulty(s,d.Easy),a.stability=this.algorithm.next_recall_stability(s,n,l,d.Easy)}next_interval(t,e,i,a,s){let n,l,o,c;n=this.algorithm.next_interval(t.stability,s),l=this.algorithm.next_interval(e.stability,s),o=this.algorithm.next_interval(i.stability,s),c=this.algorithm.next_interval(a.stability,s),n=Math.min(n,l),l=Math.max(l,n+1),o=Math.max(o,l+1),c=Math.max(c,o+1),t.scheduled_days=n,t.due=this.review_time.scheduler(n,!0),e.scheduled_days=l,e.due=this.review_time.scheduler(l,!0),i.scheduled_days=o,i.due=this.review_time.scheduler(o,!0),a.scheduled_days=c,a.due=this.review_time.scheduler(c,!0)}next_state(t,e,i,a){t.state=u.Review,e.state=u.Review,i.state=u.Review,a.state=u.Review}update_next(t,e,i,a){const s={card:t,log:this.buildLog(d.Again)},n={card:e,log:super.buildLog(d.Hard)},l={card:i,log:super.buildLog(d.Good)},o={card:a,log:super.buildLog(d.Easy)};this.next.set(d.Again,s),this.next.set(d.Hard,n),this.next.set(d.Good,l),this.next.set(d.Easy,o)}}class tt{fsrs;constructor(t){this.fsrs=t}replay(t,e,i){return this.fsrs.next(t,e,i)}handleManualRating(t,e,i,a,s,n,l){if(typeof e>"u")throw new Error("reschedule: state is required for manual rating");let o,c;if(e===u.New)o={rating:d.Manual,state:e,due:l??i,stability:t.stability,difficulty:t.difficulty,elapsed_days:a,last_elapsed_days:t.elapsed_days,scheduled_days:t.scheduled_days,review:i},c=v(i),c.last_review=i;else{if(typeof l>"u")throw new Error("reschedule: due is required for manual rating");const f=l.diff(i,"days");o={rating:d.Manual,state:t.state,due:t.last_review||t.due,stability:t.stability,difficulty:t.difficulty,elapsed_days:a,last_elapsed_days:t.elapsed_days,scheduled_days:t.scheduled_days,review:i},c={...t,state:e,due:l,last_review:i,stability:s||t.stability,difficulty:n||t.difficulty,elapsed_days:a,scheduled_days:f,reps:t.reps+1}}return{card:c,log:o}}reschedule(t,e){const i=[];let a=v(t.due);for(const s of e){let n;if(s.review=h.time(s.review),s.rating===d.Manual){let l=0;a.state!==u.New&&a.last_review&&(l=s.review.diff(a.last_review,"days")),n=this.handleManualRating(a,s.state,s.review,l,s.stability,s.difficulty,s.due?h.time(s.due):void 0)}else n=this.replay(a,s.review,s.rating);i.push(n),a=n.card}return i}calculateManualRecord(t,e,i,a){if(!i)return null;const{card:s,log:n}=i,l=h.card(t);return l.due.getTime()===s.due.getTime()?null:(l.scheduled_days=s.due.diff(l.due,"days"),this.handleManualRating(l,s.state,h.time(e),n.elapsed_days,a?s.stability:void 0,a?s.difficulty:void 0,s.due))}}class V extends Y{strategyHandler=new Map;Scheduler;constructor(t){super(t);const{enable_short_term:e}=this.parameters;this.Scheduler=e?O:P}params_handler_proxy(){const t=this;return{set:function(e,i,a){return i==="request_retention"&&Number.isFinite(a)?t.intervalModifier=t.calculate_interval_modifier(Number(a)):i==="enable_short_term"&&(t.Scheduler=a===!0?O:P),Reflect.set(e,i,a),!0}}}useStrategy(t,e){return this.strategyHandler.set(t,e),this}clearStrategy(t){return t?this.strategyHandler.delete(t):this.strategyHandler.clear(),this}getScheduler(t,e){const i=this.strategyHandler.get(x.SEED),a=this.strategyHandler.get(x.SCHEDULER)||this.Scheduler,s=i||D;return new a(t,e,this,{seed:s})}repeat(t,e,i){const a=this.getScheduler(t,e).preview();return i&&typeof i=="function"?i(a):a}next(t,e,i,a){const s=this.getScheduler(t,e),n=h.rating(i);if(n===d.Manual)throw new Error("Cannot review a manual rating");const l=s.review(n);return a&&typeof a=="function"?a(l):l}get_retrievability(t,e,i=!0){const a=h.card(t);e=e?h.time(e):new Date;const s=a.state!==u.New?Math.max(e.diff(a.last_review,"days"),0):0,n=a.state!==u.New?this.forgetting_curve(s,+a.stability.toFixed(8)):0;return i?`${(n*100).toFixed(2)}%`:n}rollback(t,e,i){const a=h.card(t),s=h.review_log(e);if(s.rating===d.Manual)throw new Error("Cannot rollback a manual rating");let n,l,o;switch(s.state){case u.New:n=s.due,l=void 0,o=0;break;case u.Learning:case u.Relearning:case u.Review:n=s.review,l=s.due,o=a.lapses-(s.rating===d.Again&&s.state===u.Review?1:0);break}const c={...a,due:n,stability:s.stability,difficulty:s.difficulty,elapsed_days:s.last_elapsed_days,scheduled_days:s.scheduled_days,reps:Math.max(0,a.reps-1),lapses:Math.max(0,o),state:s.state,last_review:l};return i&&typeof i=="function"?i(c):c}forget(t,e,i=!1,a){const s=h.card(t);e=h.time(e);const n=s.state===u.New?0:e.diff(s.last_review,"days"),l={rating:d.Manual,state:s.state,due:s.due,stability:s.stability,difficulty:s.difficulty,elapsed_days:0,last_elapsed_days:s.elapsed_days,scheduled_days:n,review:e},o={card:{...s,due:e,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:i?0:s.reps,lapses:i?0:s.lapses,state:u.New,last_review:s.last_review},log:l};return a&&typeof a=="function"?a(o):o}reschedule(t,e=[],i={}){const{recordLogHandler:a,reviewsOrderBy:s,skipManual:n=!0,now:l=new Date,update_memory_state:o=!1}=i;s&&typeof s=="function"&&e.sort(s),n&&(e=e.filter(b=>b.rating!==d.Manual));const c=new tt(this),f=c.reschedule(i.first_card||v(),e),_=f.length,g=h.card(t),m=c.calculateManualRecord(g,l,_?f[_-1]:void 0,o);return a&&typeof a=="function"?{collections:f.map(a),reschedule_item:m?a(m):null}:{collections:f,reschedule_item:m}}}const et=r=>new V(r||{});
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/popup/script/leetcodecn.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=leetcodecn.js.map