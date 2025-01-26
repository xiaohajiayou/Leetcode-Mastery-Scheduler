import { OperationHistory } from "../entity/operationHistory"
import { isInCnMode } from "./modeService";
import { OPS_HISTORY_KEY } from "../util/keys";
import { getLocalStorageData, setLocalStorageData } from "../delegate/localStorageDelegate";
import { getProblemsByMode, setProblemsByMode } from "./problemService";
import { copy } from "../entity/problem";

const CACHE_SIZE = 10;

export const addNewOperationHistory = async (before, type, time) => {
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

export const popLatestOperationHistory = async () => {
    const opsHistory = await getLocalStorageData(OPS_HISTORY_KEY);
    if (opsHistory === undefined || opsHistory.length === 0) {
        return undefined;
    }

    const latestOpsHistory = opsHistory.pop();
    await setLocalStorageData(OPS_HISTORY_KEY, opsHistory);
    return latestOpsHistory;
}

export const undoLatestOperation = async () => {
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

export const hasOperationHistory = async () => {
    const opsHistory = await getLocalStorageData(OPS_HISTORY_KEY);
    return opsHistory !== undefined && opsHistory.length > 0;
}