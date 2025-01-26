import { getLocalStorageData, setLocalStorageData } from "../delegate/localStorageDelegate"
import { store } from "../store";
import { CONFIG_INNER_KEY_ENABLE_CLOUD, CONFIG_KEY, PROBLEM_SORT_BY_KEY, REVIEW_INTV_KEY,DEFAULT_CARD_LIMIT_KEY, DEFAULT_CARD_LIMIT_VALUE } from "../util/keys"
import { getSorterById, idOf, problemSorters } from "../util/sort";

// configurable review intervals (to be integrated)

export const getReviewIntervals = async () => {
    return await getLocalStorageData(REVIEW_INTV_KEY);
}

export const setReviewIntervals = async (customIntv) => {
    if (customIntv == null || customIntv == undefined) return;
    const {easyIntv, mediumIntv, hardIntv} = store;
    customIntv.easyIntv = customIntv.easyIntv || easyIntv;
    customIntv.mediumIntv = customIntv.mediumIntv || mediumIntv;
    customIntv.hardIntv = customIntv.hardIntv || hardIntv;
    await setLocalStorageData(REVIEW_INTV_KEY, customIntv);
}

export const loadReviewIntervals = async () => {
    const customIntv = await getReviewIntervals();
    if (customIntv !== undefined) {
        Object.assign(store, customIntv);
    }
}


// configurable problem sort by
export const getProblemSorter = async () => {
    return await getLocalStorageData(PROBLEM_SORT_BY_KEY);
}

export const setProblemSorter = async (sorterId) => {
    await setLocalStorageData(PROBLEM_SORT_BY_KEY, sorterId);
}

export const loadProblemSorter = async () => {
    const sorterId = await getProblemSorter() | idOf(problemSorters.sortByReviewTimeAsc);
    store.problemSortBy = getSorterById(sorterId);
}



// config cloud sync
export const isCloudSyncEnabled = async () => {
    const configs = await getLocalStorageData(CONFIG_KEY);
    const isEnabled = configs !== undefined ? configs[CONFIG_INNER_KEY_ENABLE_CLOUD] : false;
    if (isEnabled === undefined) {
        isEnabled = false;
    }
    return isEnabled;
}

export const switchCloudSyncEnabled = async () => {
    const configs = await getLocalStorageData(CONFIG_KEY);
    const isEnabled = configs[CONFIG_INNER_KEY_ENABLE_CLOUD];
    if (isEnabled === undefined) {
        isEnabled = false;
    }
    configs[CONFIG_INNER_KEY_ENABLE_CLOUD] = !isEnabled;
    await setLocalStorageData(CONFIG_KEY, configs);
}

export const setCloudSyncEnabled = async (isEnabled) => {
    const configs = await getLocalStorageData(CONFIG_KEY) || {
        CONFIG_INNER_KEY_ENABLE_CLOUD: false
    };
    configs[CONFIG_INNER_KEY_ENABLE_CLOUD] = isEnabled;
    await setLocalStorageData(CONFIG_KEY, configs);
}


export const loadCloudSyncConfig = async () => {
    store.isCloudSyncEnabled = await isCloudSyncEnabled();
}

// 获取默认卡片数量
export const getDefaultCardLimit = async () => {
    const limit = await getLocalStorageData(DEFAULT_CARD_LIMIT_KEY);
    return limit !== undefined ? limit : DEFAULT_CARD_LIMIT_VALUE;
}

// 设置默认卡片数量
export const setDefaultCardLimit = async (limit) => {
    if (limit == null || limit == undefined) return;
    await setLocalStorageData(DEFAULT_CARD_LIMIT_KEY, limit);
}

// 加载默认卡片数量到 store
export const loadDefaultCardLimit = async () => {
    store.defaultCardLimit = await getDefaultCardLimit();
}


export const loadConfigs = async () => {
    await loadReviewIntervals();
    await loadProblemSorter();
    await loadCloudSyncConfig();
    await loadDefaultCardLimit();  // 添加这一行
}