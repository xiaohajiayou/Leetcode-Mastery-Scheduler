import { getProblemInfoByHref,getProblemInfoByUrl } from "../delegate/leetCodeDelegate";
import { getLocalStorageData, setLocalStorageData } from "../delegate/localStorageDelegate";
import { addNewOperationHistory } from "./operationHistoryService";
import { OPS_TYPE } from "../entity/operationHistory";
import { forggettingCurve } from "../util/constants";
import { CN_PROBLEM_KEY, PROBLEM_KEY } from "../util/keys";
import { isInCnMode } from "./modeService";
import { store } from "../store";
import { mergeProblems, syncLocalAndCloudStorage } from "../util/utils";
import cloudStorageDelegate from "../delegate/cloudStorageDelegate";
import { copy, getDeletedProblem } from "../entity/problem";
import { webdavEnhancedService as webdavService } from "./webdavEnhancedService";
import { syncManager } from "./syncManager";

export const getAllProblems = async () => {
    let cnMode = await isInCnMode();
    const queryKey = cnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    let problems = await getLocalStorageData(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

export const getAllProblemsInCloud = async () => {
    let cnMode = await isInCnMode();
    const queryKey = cnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    let problems = await cloudStorageDelegate.get(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

export const getProblemsByMode = async (useCnMode) => {
    const queryKey = useCnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    let problems = await getLocalStorageData(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

// 从当前页面获取题目信息
export const getCurrentProblemInfoFromLeetCodeByHref = async () => {
    return await getProblemInfoByHref();
}

// 从指定URL获取题目信息
export const getCurrentProblemInfoFromLeetCodeByUrl = async (url) => {
    return await getProblemInfoByUrl(url);
}


export const setProblems = async (problems) => {
    let cnMode = await isInCnMode();
    const key = cnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    await setLocalStorageData(key, problems);
}

export const setProblemsToCloud = async (problems) => {
    let cnMode = await isInCnMode();
    const key = cnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    await cloudStorageDelegate.set(key, problems);
}

export const setProblemsByMode = async (problems, useCnMode) => {
    const key = useCnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    await setLocalStorageData(key, problems);
}

export const createOrUpdateProblem = async (problem) => {
    problem.modificationTime = Date.now();
    const problems = await getAllProblems();
    problems[problem.index] = problem;
    await setProblems(problems);
    
    // 触发同步
    syncManager.debouncedSync(problem.index);
}

export const markProblemAsMastered = async (problemId) => {
    let problems = await getAllProblems();
    let problem = problems[problemId];

    await addNewOperationHistory(problem, OPS_TYPE.MASTER, Date.now());

    problem.proficiency = forggettingCurve.length;
    problem.modificationTime = Date.now();

    problems[problemId] = problem;

    await setProblems(problems);
    
    // 触发同步
    syncManager.debouncedSync(problemId);
};

export const deleteProblem = async (problemId) => {

    let problems = await getAllProblems();
    const problem = problems[problemId];
    
    // soft delete
    if (problem) {
        problem.isDeleted = true;
        problem.modificationTime = Date.now();
        await addNewOperationHistory(problem, OPS_TYPE.DELETE, Date.now());
        problems[problemId] = problem;
        await setProblems(problems);
        
        // 触发同步
        syncManager.debouncedSync(problemId);
    }
};

export const resetProblem = async (problemId) => {
    let problems = await getAllProblems();
    let problem = problems[problemId];

    problem.proficiency = 0;
    problem.submissionTime = Date.now() - 24 * 60 * 60 * 1000;
    problem.modificationTime = Date.now();

    await addNewOperationHistory(problem, OPS_TYPE.RESET, Date.now());

    problems[problemId] = problem;

    await setProblems(problems);
    
    // 触发同步
    syncManager.debouncedSync(problemId);
};

export const syncProblems = async () => {
    // 使用新的同步管理器
    await syncManager.performSync();
}

/**
 * 批量更新问题（用于批量操作）
 */
export const batchUpdateProblems = async (updates) => {
    const problems = await getAllProblems();
    
    for (const update of updates) {
        if (problems[update.id]) {
            problems[update.id] = {
                ...problems[update.id],
                ...update.data,
                modificationTime: Date.now()
            };
        }
    }
    
    await setProblems(problems);
    
    // 批量操作立即同步
    await syncManager.immediateSync();
}