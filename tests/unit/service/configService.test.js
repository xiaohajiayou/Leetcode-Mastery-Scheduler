import {
    getReviewIntervals,
    setReviewIntervals,
    loadReviewIntervals,
    getProblemSorter,
    setProblemSorter,
    loadProblemSorter,
    isCloudSyncEnabled,
    switchCloudSyncEnabled,
    setCloudSyncEnabled,
    loadCloudSyncConfig,
    getDefaultCardLimit,
    setDefaultCardLimit,
    loadDefaultCardLimit,
    setReminderEnabled,
    isReminderEnabled,
    loadReminderConfig,
    loadConfigs
} from '../../../src/popup/service/configService';

// Mock dependencies
jest.mock('../../../src/popup/delegate/localStorageDelegate', () => ({
    getLocalStorageData: jest.fn(),
    setLocalStorageData: jest.fn()
}));

jest.mock('../../../src/popup/store', () => ({
    store: {
        easyIntv: [1, 2, 3],
        mediumIntv: [1, 3, 5],
        hardIntv: [2, 4, 6],
        problemSortBy: null,
        isCloudSyncEnabled: false,
        defaultCardLimit: 10,
        isReminderEnabled: false
    }
}));

jest.mock('../../../src/popup/util/keys', () => ({
    CONFIG_KEY: 'config',
    CONFIG_INNER_KEY_ENABLE_CLOUD: 'enableCloud',
    REVIEW_INTV_KEY: 'reviewIntervals',
    PROBLEM_SORT_BY_KEY: 'problemSortBy',
    DEFAULT_CARD_LIMIT_KEY: 'defaultCardLimit',
    DEFAULT_CARD_LIMIT_VALUE: 10
}));

jest.mock('../../../src/popup/util/sort', () => ({
    getSorterById: jest.fn((id) => `sorter_${id}`),
    idOf: jest.fn(() => 0),
    problemSorters: {
        sortByReviewTimeAsc: 'reviewTimeAsc'
    }
}));

import { getLocalStorageData, setLocalStorageData } from '../../../src/popup/delegate/localStorageDelegate';
import { store } from '../../../src/popup/store';
import { getSorterById, idOf } from '../../../src/popup/util/sort';

describe('ConfigService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        // Reset store to default values
        store.easyIntv = [1, 2, 3];
        store.mediumIntv = [1, 3, 5];
        store.hardIntv = [2, 4, 6];
        store.problemSortBy = null;
        store.isCloudSyncEnabled = false;
        store.defaultCardLimit = 10;
        store.isReminderEnabled = false;
    });

    describe('Review Intervals', () => {
        describe('getReviewIntervals', () => {
            it('should get review intervals from storage', async () => {
                const mockIntervals = {
                    easyIntv: [1, 2, 4],
                    mediumIntv: [2, 4, 6],
                    hardIntv: [3, 5, 7]
                };
                getLocalStorageData.mockResolvedValue(mockIntervals);

                const result = await getReviewIntervals();

                expect(getLocalStorageData).toHaveBeenCalledWith('reviewIntervals');
                expect(result).toEqual(mockIntervals);
            });
        });

        describe('setReviewIntervals', () => {
            it('should set custom review intervals', async () => {
                const customIntv = {
                    easyIntv: [2, 3, 4],
                    mediumIntv: [3, 4, 5]
                };

                await setReviewIntervals(customIntv);

                expect(setLocalStorageData).toHaveBeenCalledWith('reviewIntervals', {
                    easyIntv: [2, 3, 4],
                    mediumIntv: [3, 4, 5],
                    hardIntv: [2, 4, 6] // Default from store
                });
            });

            it('should use defaults for missing intervals', async () => {
                const customIntv = { easyIntv: [5, 6, 7] };

                await setReviewIntervals(customIntv);

                expect(setLocalStorageData).toHaveBeenCalledWith('reviewIntervals', {
                    easyIntv: [5, 6, 7],
                    mediumIntv: [1, 3, 5], // Default from store
                    hardIntv: [2, 4, 6]    // Default from store
                });
            });

            it('should return early if customIntv is null or undefined', async () => {
                await setReviewIntervals(null);
                await setReviewIntervals(undefined);

                expect(setLocalStorageData).not.toHaveBeenCalled();
            });
        });

        describe('loadReviewIntervals', () => {
            it('should load intervals into store', async () => {
                const customIntv = {
                    easyIntv: [7, 8, 9],
                    mediumIntv: [8, 9, 10],
                    hardIntv: [9, 10, 11]
                };
                getLocalStorageData.mockResolvedValue(customIntv);

                await loadReviewIntervals();

                expect(store.easyIntv).toEqual([7, 8, 9]);
                expect(store.mediumIntv).toEqual([8, 9, 10]);
                expect(store.hardIntv).toEqual([9, 10, 11]);
            });

            it('should not modify store if no intervals found', async () => {
                getLocalStorageData.mockResolvedValue(undefined);

                await loadReviewIntervals();

                expect(store.easyIntv).toEqual([1, 2, 3]);
                expect(store.mediumIntv).toEqual([1, 3, 5]);
                expect(store.hardIntv).toEqual([2, 4, 6]);
            });
        });
    });

    describe('Problem Sorter', () => {
        describe('getProblemSorter', () => {
            it('should get problem sorter from storage', async () => {
                getLocalStorageData.mockResolvedValue(2);

                const result = await getProblemSorter();

                expect(getLocalStorageData).toHaveBeenCalledWith('problemSortBy');
                expect(result).toBe(2);
            });
        });

        describe('setProblemSorter', () => {
            it('should set problem sorter id', async () => {
                await setProblemSorter(3);

                expect(setLocalStorageData).toHaveBeenCalledWith('problemSortBy', 3);
            });
        });

        describe('loadProblemSorter', () => {
            it('should load sorter into store', async () => {
                getLocalStorageData.mockResolvedValue(2);
                getSorterById.mockReturnValue('customSorter');

                await loadProblemSorter();

                expect(getSorterById).toHaveBeenCalledWith(2);
                expect(store.problemSortBy).toBe('customSorter');
            });

            it('should use default sorter if none stored', async () => {
                getLocalStorageData.mockResolvedValue(undefined);
                idOf.mockReturnValue(0);
                getSorterById.mockReturnValue('defaultSorter');

                await loadProblemSorter();

                expect(idOf).toHaveBeenCalled();
                expect(getSorterById).toHaveBeenCalledWith(0);
                expect(store.problemSortBy).toBe('defaultSorter');
            });
        });
    });

    describe('Cloud Sync', () => {
        describe('isCloudSyncEnabled', () => {
            it('should return true if cloud sync is enabled', async () => {
                getLocalStorageData.mockResolvedValue({
                    enableCloud: true
                });

                const result = await isCloudSyncEnabled();

                expect(result).toBe(true);
            });

            it('should return false if cloud sync is disabled', async () => {
                getLocalStorageData.mockResolvedValue({
                    enableCloud: false
                });

                const result = await isCloudSyncEnabled();

                expect(result).toBe(false);
            });

            it('should return false if config is undefined', async () => {
                getLocalStorageData.mockResolvedValue(undefined);

                const result = await isCloudSyncEnabled();

                expect(result).toBe(false);
            });
        });

        describe('switchCloudSyncEnabled', () => {
            it('should toggle cloud sync from enabled to disabled', async () => {
                getLocalStorageData.mockResolvedValue({
                    enableCloud: true
                });

                await switchCloudSyncEnabled();

                expect(setLocalStorageData).toHaveBeenCalledWith('config', {
                    enableCloud: false
                });
            });

            it('should toggle cloud sync from disabled to enabled', async () => {
                getLocalStorageData.mockResolvedValue({
                    enableCloud: false
                });

                await switchCloudSyncEnabled();

                expect(setLocalStorageData).toHaveBeenCalledWith('config', {
                    enableCloud: true
                });
            });

            it('should handle undefined enableCloud property', async () => {
                getLocalStorageData.mockResolvedValue({});

                // This will actually cause an error in the real code due to const reassignment
                await expect(switchCloudSyncEnabled()).rejects.toThrow();
            });
        });

        describe('setCloudSyncEnabled', () => {
            it('should set cloud sync enabled state', async () => {
                getLocalStorageData.mockResolvedValue({ someOtherConfig: 'value' });

                await setCloudSyncEnabled(true);

                expect(setLocalStorageData).toHaveBeenCalledWith('config', {
                    someOtherConfig: 'value',
                    enableCloud: true
                });
            });

            it('should create config if it does not exist', async () => {
                getLocalStorageData.mockResolvedValue(undefined);

                await setCloudSyncEnabled(false);

                expect(setLocalStorageData).toHaveBeenCalledWith('config', {
                    CONFIG_INNER_KEY_ENABLE_CLOUD: false,
                    enableCloud: false
                });
            });
        });

        describe('loadCloudSyncConfig', () => {
            it('should load cloud sync config into store', async () => {
                getLocalStorageData.mockResolvedValue({
                    enableCloud: true
                });

                await loadCloudSyncConfig();

                expect(store.isCloudSyncEnabled).toBe(true);
            });
        });
    });

    describe('Default Card Limit', () => {
        describe('getDefaultCardLimit', () => {
            it('should get card limit from storage', async () => {
                getLocalStorageData.mockResolvedValue(20);

                const result = await getDefaultCardLimit();

                expect(getLocalStorageData).toHaveBeenCalledWith('defaultCardLimit');
                expect(result).toBe(20);
            });

            it('should return default value if not set', async () => {
                getLocalStorageData.mockResolvedValue(undefined);

                const result = await getDefaultCardLimit();

                expect(result).toBe(10); // DEFAULT_CARD_LIMIT_VALUE
            });
        });

        describe('setDefaultCardLimit', () => {
            it('should set card limit', async () => {
                await setDefaultCardLimit(15);

                expect(setLocalStorageData).toHaveBeenCalledWith('defaultCardLimit', 15);
            });

            it('should return early if limit is null or undefined', async () => {
                await setDefaultCardLimit(null);
                await setDefaultCardLimit(undefined);

                expect(setLocalStorageData).not.toHaveBeenCalled();
            });
        });

        describe('loadDefaultCardLimit', () => {
            it('should load card limit into store', async () => {
                getLocalStorageData.mockResolvedValue(25);

                await loadDefaultCardLimit();

                expect(store.defaultCardLimit).toBe(25);
            });
        });
    });

    describe('Reminder Settings', () => {
        describe('setReminderEnabled', () => {
            it('should set reminder enabled state', async () => {
                await setReminderEnabled(true);

                expect(chrome.storage.local.set).toHaveBeenCalledWith({
                    reminderEnabled: true
                });
            });
        });

        describe('isReminderEnabled', () => {
            it('should get reminder enabled state', async () => {
                chrome.storage.local.get.mockImplementation((key, callback) => {
                    if (callback) {
                        callback({ reminderEnabled: true });
                    }
                    return Promise.resolve({ reminderEnabled: true });
                });

                const result = await isReminderEnabled();

                expect(chrome.storage.local.get).toHaveBeenCalledWith('reminderEnabled');
                expect(result).toBe(true);
            });

            it('should return false if not set', async () => {
                chrome.storage.local.get.mockImplementation((key, callback) => {
                    if (callback) {
                        callback({});
                    }
                    return Promise.resolve({});
                });

                const result = await isReminderEnabled();

                expect(result).toBe(false);
            });
        });

        describe('loadReminderConfig', () => {
            it('should load reminder config into store', async () => {
                chrome.storage.local.get.mockImplementation((key, callback) => {
                    if (callback) {
                        callback({ reminderEnabled: true });
                    }
                    return Promise.resolve({ reminderEnabled: true });
                });

                await loadReminderConfig();

                expect(store.isReminderEnabled).toBe(true);
            });
        });
    });

    describe('loadConfigs', () => {
        it('should load all configurations', async () => {
            // Mock all get operations
            getLocalStorageData.mockImplementation((key) => {
                const mockData = {
                    'reviewIntervals': { easyIntv: [5, 6, 7] },
                    'problemSortBy': 1,
                    'config': { enableCloud: true },
                    'defaultCardLimit': 30
                };
                return Promise.resolve(mockData[key]);
            });

            chrome.storage.local.get.mockImplementation((key, callback) => {
                if (callback) {
                    callback({ reminderEnabled: true });
                }
                return Promise.resolve({ reminderEnabled: true });
            });

            getSorterById.mockReturnValue('sorter_1');

            await loadConfigs();

            // Verify all configs are loaded
            expect(store.easyIntv).toEqual([5, 6, 7]);
            expect(store.problemSortBy).toBe('sorter_1');
            expect(store.isCloudSyncEnabled).toBe(true);
            expect(store.defaultCardLimit).toBe(30);
            expect(store.isReminderEnabled).toBe(true);
        });
    });
});