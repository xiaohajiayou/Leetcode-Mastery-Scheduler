import localStorageDelegate from "../delegate/localStorageDelegate";
import cloudStorageDelegate from "../delegate/cloudStorageDelegate";
import { store } from "../store";
import { COMPILE_ERROR_AND_TLE_CLASSNAME, COMPILE_ERROR_AND_TLE_CLASSNAME_CN, COMPILE_ERROR_AND_TLE_CLASSNAME_NEW, PAGE_SIZE, SUBMIT_BUTTON_ATTRIBUTE_NAME, SUBMIT_BUTTON_ATTRIBUTE_VALUE, SUCCESS_CLASSNAME, SUCCESS_CLASSNAME_CN, SUCCESS_CLASSNAME_NEW, WRONG_ANSWER_CLASSNAME, WRONG_ANSWER_CLASSNAME_CN, WRONG_ANSWER_CLASSNAME_NEW, forggettingCurve } from "./constants";
import { forgetting_curve, dateDiffInDays } from "ts-fsrs"

export const needReview = (problem) => {
    if (problem.proficiency >= forggettingCurve.length) {
        return false;
    }

    const currentTime = Date.now();
    const timeDiffInMinute = (currentTime - problem.submissionTime) / (1000 * 60);
    return timeDiffInMinute >= forggettingCurve[problem.proficiency];
};

export const scheduledReview = (problem) => {
    // return !needReview(problem) && problem.proficiency < 5;
    return true;
};

export const isCompleted = (problem) => {
    return problem.proficiency === 5;
};

export const calculatePageNum = (problems) => {
    return Math.max(Math.ceil(problems.length / PAGE_SIZE), 1);;
}

export const getLevelColor = (level) => {
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


export const getNextReviewTime = (problem) => {
    // 如果有 FSRS 的 nextReview，优先使用它
    let date;
    if (problem.fsrsState && problem.fsrsState.nextReview) {
        date = new Date(problem.fsrsState.nextReview);
    } else {
        // 否则使用旧的计算方式（向后兼容）
        date = new Date(problem.submissionTime + forggettingCurve[problem.proficiency] * 60 * 1000);
    }
    
    return date;
}


export const getDelayedHours = (problem) => {
    const nextReviewDate = getNextReviewTime(problem);
    return Math.round((Date.now() - nextReviewDate) / (60 * 60 * 1000));
}

export const getDifficultyBasedSteps = (diffculty) => {
    if (diffculty === "Easy") {
        return store.easyIntv;
    } else if (diffculty === "Medium") {
        return store.mediumIntv;
    } else {
        return store.hardIntv;
    }
}

export const isSubmitButton = (element) => {
    return element.getAttribute(SUBMIT_BUTTON_ATTRIBUTE_NAME) === SUBMIT_BUTTON_ATTRIBUTE_VALUE;
}

export const getSubmissionResult = () => {
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

export const isSubmissionSuccess = (submissionResult) => {
    return submissionResult.className.includes(SUCCESS_CLASSNAME_CN) ||
    submissionResult.className.includes(SUCCESS_CLASSNAME_NEW) ||
    submissionResult.className.includes(SUCCESS_CLASSNAME);
}

export const updateProblemUponSuccessSubmission = (problem) => {
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
export const mergeProblem = (p1, p2) => {
    if (p2 === undefined || p2 === null) return p1;
    if (p1 === undefined || p1 === null) return p2;
    if (p2.modificationTime === undefined || p2.modificationTime === null) return p1;
    if (p1.modificationTime === undefined || p1.modificationTime === null) return p2;

    return p1.modificationTime > p2.modificationTime ? p1 : p2;
}

export const mergeProblems = (ps1, ps2) => {
    const problemIdSet = new Set([...Object.keys(ps1), ...Object.keys(ps2)]);
    const ps = {}
    problemIdSet.forEach(id => {
        const p1 = ps1[id], p2 = ps2[id];
        const p = mergeProblem(p1, p2);
        ps[id] = p;
    })

    return ps;
}

export const syncStorage = async (sd1, sd2, key, merger) => {
    if (!store.isCloudSyncEnabled) return;
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

export const syncLocalAndCloudStorage = async (key, merger) => {
    await syncStorage(localStorageDelegate, cloudStorageDelegate, key, merger);
}

export const simpleStringHash = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        const char = key.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return hash;
}

// 获取当前可检索性的辅助函数
export const getCurrentRetrievability = (problem) => {
    if (!problem.fsrsState?.stability || !problem.fsrsState?.lastReview) {
        return 1;
    }
    
    const elapsedDays = dateDiffInDays(new Date(problem.fsrsState.lastReview), new Date());
    return forgetting_curve(elapsedDays, problem.fsrsState.stability);
};

export const mergeFSRSParams = (params1, params2) => {
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

export const mergeRevlogs = (revlogs1, revlogs2) => {
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


