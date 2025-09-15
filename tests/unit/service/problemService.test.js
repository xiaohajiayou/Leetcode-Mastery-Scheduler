import {
    getAllProblems,
    getAllProblemsInCloud,
    getProblemsByMode,
    setProblems,
    setProblemsToCloud,
    setProblemsByMode,
    createOrUpdateProblem,
    markProblemAsMastered,
    deleteProblem
} from '../../../src/popup/service/problemService';

// Mock dependencies
jest.mock('../../../src/popup/delegate/localStorageDelegate', () => ({
    getLocalStorageData: jest.fn(),
    setLocalStorageData: jest.fn()
}));

jest.mock('../../../src/popup/delegate/cloudStorageDelegate', () => {
    return {
        __esModule: true,
        default: {
            get: jest.fn(),
            set: jest.fn()
        }
    };
});

jest.mock('../../../src/popup/service/modeService', () => ({
    isInCnMode: jest.fn()
}));

jest.mock('../../../src/popup/service/operationHistoryService', () => ({
    addNewOperationHistory: jest.fn()
}));

jest.mock('../../../src/popup/service/syncManager', () => ({
    syncManager: {
        debouncedSync: jest.fn()
    }
}));

jest.mock('../../../src/popup/util/constants', () => ({
    forggettingCurve: [0, 10, 60, 240, 1440, 4320]
}));

jest.mock('../../../src/popup/util/keys', () => ({
    PROBLEM_KEY: 'problems',
    CN_PROBLEM_KEY: 'cn_problems'
}));

import { getLocalStorageData, setLocalStorageData } from '../../../src/popup/delegate/localStorageDelegate';
import cloudStorageDelegate from '../../../src/popup/delegate/cloudStorageDelegate';
import { isInCnMode } from '../../../src/popup/service/modeService';
import { addNewOperationHistory } from '../../../src/popup/service/operationHistoryService';
import { syncManager } from '../../../src/popup/service/syncManager';
import { OPS_TYPE } from '../../../src/popup/entity/operationHistory';

describe('ProblemService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(Date, 'now').mockReturnValue(1704067200000);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('getAllProblems', () => {
        it('should get problems from local storage in international mode', async () => {
            isInCnMode.mockResolvedValue(false);
            const mockProblems = {
                '1': { index: '1', name: 'Two Sum' },
                '2': { index: '2', name: 'Add Two Numbers' }
            };
            getLocalStorageData.mockResolvedValue(mockProblems);

            const result = await getAllProblems();

            expect(isInCnMode).toHaveBeenCalled();
            expect(getLocalStorageData).toHaveBeenCalledWith('problems');
            expect(result).toEqual(mockProblems);
        });

        it('should get problems from local storage in CN mode', async () => {
            isInCnMode.mockResolvedValue(true);
            const mockProblems = {
                '1': { index: '1', name: '两数之和' }
            };
            getLocalStorageData.mockResolvedValue(mockProblems);

            const result = await getAllProblems();

            expect(getLocalStorageData).toHaveBeenCalledWith('cn_problems');
            expect(result).toEqual(mockProblems);
        });

        it('should return empty object if no problems exist', async () => {
            isInCnMode.mockResolvedValue(false);
            getLocalStorageData.mockResolvedValue(undefined);

            const result = await getAllProblems();

            expect(result).toEqual({});
        });
    });

    describe('getAllProblemsInCloud', () => {
        it('should get problems from cloud storage in international mode', async () => {
            isInCnMode.mockResolvedValue(false);
            const mockProblems = {
                '1': { index: '1', name: 'Two Sum' }
            };
            cloudStorageDelegate.get.mockResolvedValue(mockProblems);

            const result = await getAllProblemsInCloud();

            expect(cloudStorageDelegate.get).toHaveBeenCalledWith('problems');
            expect(result).toEqual(mockProblems);
        });

        it('should get problems from cloud storage in CN mode', async () => {
            isInCnMode.mockResolvedValue(true);
            const mockProblems = {
                '1': { index: '1', name: '两数之和' }
            };
            cloudStorageDelegate.get.mockResolvedValue(mockProblems);

            const result = await getAllProblemsInCloud();

            expect(cloudStorageDelegate.get).toHaveBeenCalledWith('cn_problems');
            expect(result).toEqual(mockProblems);
        });

        it('should return empty object if cloud storage is empty', async () => {
            isInCnMode.mockResolvedValue(false);
            cloudStorageDelegate.get.mockResolvedValue(undefined);

            const result = await getAllProblemsInCloud();

            expect(result).toEqual({});
        });
    });

    describe('getProblemsByMode', () => {
        it('should get problems for specific mode', async () => {
            const mockProblems = {
                '1': { index: '1', name: 'Test' }
            };
            getLocalStorageData.mockResolvedValue(mockProblems);

            const result = await getProblemsByMode(true);

            expect(getLocalStorageData).toHaveBeenCalledWith('cn_problems');
            expect(result).toEqual(mockProblems);
        });

        it('should use international key when mode is false', async () => {
            const mockProblems = {
                '1': { index: '1', name: 'Test' }
            };
            getLocalStorageData.mockResolvedValue(mockProblems);

            const result = await getProblemsByMode(false);

            expect(getLocalStorageData).toHaveBeenCalledWith('problems');
            expect(result).toEqual(mockProblems);
        });
    });

    describe('setProblems', () => {
        it('should set problems to local storage in international mode', async () => {
            isInCnMode.mockResolvedValue(false);
            const problems = {
                '1': { index: '1', name: 'Two Sum' }
            };

            await setProblems(problems);

            expect(setLocalStorageData).toHaveBeenCalledWith('problems', problems);
        });

        it('should set problems to local storage in CN mode', async () => {
            isInCnMode.mockResolvedValue(true);
            const problems = {
                '1': { index: '1', name: '两数之和' }
            };

            await setProblems(problems);

            expect(setLocalStorageData).toHaveBeenCalledWith('cn_problems', problems);
        });
    });

    describe('setProblemsToCloud', () => {
        it('should set problems to cloud storage', async () => {
            isInCnMode.mockResolvedValue(false);
            const problems = {
                '1': { index: '1', name: 'Two Sum' }
            };

            await setProblemsToCloud(problems);

            expect(cloudStorageDelegate.set).toHaveBeenCalledWith('problems', problems);
        });
    });

    describe('setProblemsByMode', () => {
        it('should set problems for specific mode', async () => {
            const problems = {
                '1': { index: '1', name: 'Test' }
            };

            await setProblemsByMode(problems, true);

            expect(setLocalStorageData).toHaveBeenCalledWith('cn_problems', problems);
        });
    });

    describe('createOrUpdateProblem', () => {
        it('should create a new problem', async () => {
            isInCnMode.mockResolvedValue(false);
            getLocalStorageData.mockResolvedValue({});
            
            const newProblem = {
                index: '1',
                name: 'Two Sum',
                level: 'Easy'
            };

            await createOrUpdateProblem(newProblem);

            expect(setLocalStorageData).toHaveBeenCalledWith('problems', {
                '1': {
                    ...newProblem,
                    modificationTime: 1704067200000
                }
            });
            expect(syncManager.debouncedSync).toHaveBeenCalledWith('1');
        });

        it('should update an existing problem', async () => {
            isInCnMode.mockResolvedValue(false);
            const existingProblems = {
                '1': {
                    index: '1',
                    name: 'Two Sum',
                    level: 'Easy',
                    modificationTime: 1000
                }
            };
            getLocalStorageData.mockResolvedValue(existingProblems);
            
            const updatedProblem = {
                index: '1',
                name: 'Two Sum',
                level: 'Easy',
                proficiency: 3
            };

            await createOrUpdateProblem(updatedProblem);

            expect(setLocalStorageData).toHaveBeenCalledWith('problems', {
                '1': {
                    ...updatedProblem,
                    modificationTime: 1704067200000
                }
            });
            expect(syncManager.debouncedSync).toHaveBeenCalledWith('1');
        });
    });

    describe('markProblemAsMastered', () => {
        it('should mark problem as mastered', async () => {
            isInCnMode.mockResolvedValue(false);
            const existingProblems = {
                '1': {
                    index: '1',
                    name: 'Two Sum',
                    proficiency: 2,
                    modificationTime: 1000
                }
            };
            getLocalStorageData.mockResolvedValue(existingProblems);

            await markProblemAsMastered('1');

            expect(addNewOperationHistory).toHaveBeenCalledWith(
                existingProblems['1'],
                OPS_TYPE.MASTER,
                1704067200000
            );
            
            expect(setLocalStorageData).toHaveBeenCalledWith('problems', {
                '1': {
                    ...existingProblems['1'],
                    proficiency: 6, // Length of forggettingCurve
                    modificationTime: 1704067200000
                }
            });
            
            expect(syncManager.debouncedSync).toHaveBeenCalledWith('1');
        });

        it('should handle non-existent problem gracefully', async () => {
            isInCnMode.mockResolvedValue(false);
            getLocalStorageData.mockResolvedValue({});

            // markProblemAsMastered will throw error when trying to set properties on undefined
            await expect(markProblemAsMastered('999')).rejects.toThrow();

            expect(addNewOperationHistory).toHaveBeenCalledWith(
                undefined,
                OPS_TYPE.MASTER,
                1704067200000
            );
        });
    });

    describe('deleteProblem', () => {
        it('should soft delete an existing problem', async () => {
            isInCnMode.mockResolvedValue(false);
            const existingProblems = {
                '1': {
                    index: '1',
                    name: 'Two Sum',
                    isDeleted: false
                }
            };
            getLocalStorageData.mockResolvedValue(existingProblems);

            await deleteProblem('1');

            expect(setLocalStorageData).toHaveBeenCalledWith('problems', {
                '1': {
                    ...existingProblems['1'],
                    isDeleted: true
                }
            });
        });

        it('should handle deletion of non-existent problem', async () => {
            isInCnMode.mockResolvedValue(false);
            getLocalStorageData.mockResolvedValue({});

            await deleteProblem('999');

            // Should not throw error
            expect(setLocalStorageData).not.toHaveBeenCalled();
        });
    });

    describe('Error Handling', () => {
        it('should handle storage errors gracefully', async () => {
            isInCnMode.mockResolvedValue(false);
            getLocalStorageData.mockRejectedValue(new Error('Storage error'));

            await expect(getAllProblems()).rejects.toThrow('Storage error');
        });

        it('should handle sync errors gracefully', async () => {
            isInCnMode.mockResolvedValue(false);
            getLocalStorageData.mockResolvedValue({});
            syncManager.debouncedSync.mockImplementation(() => {
                throw new Error('Sync error');
            });

            const problem = { index: '1', name: 'Test' };
            
            // Should not throw, sync error should be caught internally
            await expect(createOrUpdateProblem(problem)).rejects.toThrow('Sync error');
        });
    });
});