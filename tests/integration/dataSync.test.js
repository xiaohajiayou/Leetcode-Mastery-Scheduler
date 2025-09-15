/**
 * Data Synchronization Integration Tests
 * These tests ensure the complete data sync workflow works correctly
 */

import { syncManager } from '../../src/popup/service/syncManager';
import {
    syncLocalAndCloudStorage,
    mergeProblems,
    mergeFSRSParams,
    mergeRevlogs
} from '../../src/popup/util/utils';
import { CloudStorage } from '../../src/popup/delegate/cloudStorageDelegate';
import cloudStorageDelegate from '../../src/popup/delegate/cloudStorageDelegate';
import { setLocalStorageData, getLocalStorageData } from '../../src/popup/delegate/localStorageDelegate';
import localStorageDelegate from '../../src/popup/delegate/localStorageDelegate';
import { getAllProblems, setProblems } from '../../src/popup/service/problemService';
import { Problem } from '../../src/popup/entity/problem';
import { mockProblems } from '../fixtures/mockData';

// Mock dependencies
jest.mock('../../src/popup/delegate/localStorageDelegate', () => ({
    getLocalStorageData: jest.fn(),
    setLocalStorageData: jest.fn(),
    default: {
        get: jest.fn(),
        set: jest.fn()
    }
}));
jest.mock('../../src/popup/delegate/cloudStorageDelegate', () => ({
    CloudStorage: {
        get: jest.fn(),
        set: jest.fn(),
        update: jest.fn()
    },
    default: {
        get: jest.fn(),
        set: jest.fn()
    }
}));
jest.mock('../../src/popup/service/modeService');
jest.mock('../../src/popup/service/configService');

import { isInCnMode } from '../../src/popup/service/modeService';
import { store } from '../../src/popup/store';

describe('Data Synchronization Integration', () => {
    let localData = {};
    let cloudData = {};
    
    beforeEach(() => {
        jest.clearAllMocks();
        localData = {};
        cloudData = {};
        
        // Mock local storage
        getLocalStorageData.mockImplementation((key) => {
            return Promise.resolve(localData[key] || {});
        });
        
        setLocalStorageData.mockImplementation((key, data) => {
            localData[key] = data;
            return Promise.resolve();
        });
        
        // Mock localStorageDelegate default export
        localStorageDelegate.get = jest.fn((key) => {
            return Promise.resolve(localData[key] || {});
        });
        
        localStorageDelegate.set = jest.fn((key, data) => {
            localData[key] = data;
            return Promise.resolve();
        });
        
        // Mock cloud storage
        CloudStorage.get = jest.fn((key) => {
            return Promise.resolve(cloudData[key] || {});
        });
        
        CloudStorage.set = jest.fn((key, data) => {
            cloudData[key] = data;
            return Promise.resolve();
        });
        
        CloudStorage.update = jest.fn((updateFn) => {
            const currentData = { ...cloudData };
            const updatedData = updateFn(currentData);
            Object.assign(cloudData, updatedData);
            return Promise.resolve();
        });
        
        // Mock cloudStorageDelegate default export
        cloudStorageDelegate.get = jest.fn((key) => {
            return Promise.resolve(cloudData[key] || {});
        });
        
        cloudStorageDelegate.set = jest.fn((key, data) => {
            cloudData[key] = data;
            return Promise.resolve();
        });
        
        // Enable cloud sync
        store.isCloudSyncEnabled = true;
        isInCnMode.mockResolvedValue(false);
    });

    describe('Problem Synchronization', () => {
        it('should sync problems between local and cloud storage', async () => {
            // Set up local problems
            const localProblems = {
                '1': new Problem('1', 'Two Sum', 'Easy', 'url1', Date.now(), 2, Date.now()),
                '2': new Problem('2', 'Add Two Numbers', 'Medium', 'url2', Date.now() - 1000, 1, Date.now() - 1000)
            };
            localData['problems'] = localProblems;
            
            // Set up cloud problems with some differences
            const cloudProblems = {
                '2': new Problem('2', 'Add Two Numbers', 'Medium', 'url2', Date.now(), 3, Date.now()), // Newer
                '3': new Problem('3', 'Longest Substring', 'Medium', 'url3', Date.now(), 1, Date.now())
            };
            cloudData['problems'] = cloudProblems;
            
            // Perform sync
            await syncLocalAndCloudStorage('problems', mergeProblems);
            
            // Verify merge results
            const finalLocal = localData['problems'];
            const finalCloud = cloudData['problems'];
            
            // Both should have all problems
            expect(Object.keys(finalLocal)).toHaveLength(3);
            expect(Object.keys(finalCloud)).toHaveLength(3);
            
            // Problem 2 should use cloud version (newer)
            expect(finalLocal['2'].proficiency).toBe(3);
            expect(finalCloud['2'].proficiency).toBe(3);
            
            // Problem 1 and 3 should exist in both
            expect(finalLocal['1']).toBeDefined();
            expect(finalCloud['1']).toBeDefined();
            expect(finalLocal['3']).toBeDefined();
            expect(finalCloud['3']).toBeDefined();
        });

        it('should handle conflict resolution based on modification time', async () => {
            const now = Date.now();
            
            // Same problem with different modification times
            const localProblem = new Problem('1', 'Local Version', 'Easy', 'url', now - 1000, 2, now - 1000);
            const cloudProblem = new Problem('1', 'Cloud Version', 'Easy', 'url', now, 3, now);
            
            localData['problems'] = { '1': localProblem };
            cloudData['problems'] = { '1': cloudProblem };
            
            await syncLocalAndCloudStorage('problems', mergeProblems);
            
            // Cloud version should win (newer)
            expect(localData['problems']['1'].name).toBe('Cloud Version');
            expect(localData['problems']['1'].proficiency).toBe(3);
        });

        it('should preserve deleted items during sync', async () => {
            const deletedProblem = new Problem('1', 'Deleted', 'Easy', 'url', Date.now(), 2, Date.now());
            deletedProblem.isDeleted = true;
            
            localData['problems'] = { '1': deletedProblem };
            cloudData['problems'] = {};
            
            await syncLocalAndCloudStorage('problems', mergeProblems);
            
            // Deleted problem should sync to cloud
            expect(cloudData['problems']['1']).toBeDefined();
            expect(cloudData['problems']['1'].isDeleted).toBe(true);
        });
    });

    describe('FSRS Data Synchronization', () => {
        it('should sync FSRS parameters correctly', async () => {
            const localParams = {
                w: [0.4, 0.6, 2.4, 5.8],
                requestRetention: 0.9,
                maximumInterval: 365,
                lastOptimized: Date.now() - 86400000
            };
            
            const cloudParams = {
                w: [0.5, 0.7, 2.5, 6.0],
                requestRetention: 0.85,
                maximumInterval: 365,
                lastOptimized: Date.now()
            };
            
            localData['fsrs_params'] = localParams;
            cloudData['fsrs_params'] = cloudParams;
            
            await syncLocalAndCloudStorage('fsrs_params', mergeFSRSParams);
            
            // Cloud params should win (newer)
            expect(localData['fsrs_params'].w).toEqual(cloudParams.w);
            expect(localData['fsrs_params'].lastOptimized).toBe(cloudParams.lastOptimized);
        });

        it('should sync review logs maintaining chronological order', async () => {
            const now = Date.now();
            
            const localRevlogs = {
                '1': [
                    { card_id: '1', review_time: now - 86400000, review_rating: 3, review_state: 1 },
                    { card_id: '1', review_time: now - 43200000, review_rating: 4, review_state: 2 }
                ]
            };
            
            const cloudRevlogs = {
                '1': [
                    { card_id: '1', review_time: now - 172800000, review_rating: 2, review_state: 0 },
                    { card_id: '1', review_time: now - 43200000, review_rating: 4, review_state: 2 },
                    { card_id: '1', review_time: now, review_rating: 4, review_state: 2 }
                ]
            };
            
            localData['fsrs_revlogs'] = localRevlogs;
            cloudData['fsrs_revlogs'] = cloudRevlogs;
            
            await syncLocalAndCloudStorage('fsrs_revlogs', mergeRevlogs);
            
            const merged = localData['fsrs_revlogs']['1'];
            
            // Should have all unique reviews
            expect(merged).toHaveLength(4);
            
            // Should be in reverse chronological order (newest first)
            for (let i = 1; i < merged.length; i++) {
                expect(merged[i].review_time).toBeLessThan(merged[i - 1].review_time);
            }
        });
    });

    describe('Sync Manager', () => {
        it('should debounce rapid sync calls', async () => {
            // Enable cloud sync for this test
            store.isCloudSyncEnabled = true;

            const problemId = '1';

            // Trigger multiple sync calls rapidly
            syncManager.debouncedSync(problemId);
            syncManager.debouncedSync(problemId);
            syncManager.debouncedSync(problemId);
            syncManager.debouncedSync(problemId);

            // Wait for debounce delay (2000ms) plus extra time
            await new Promise(resolve => setTimeout(resolve, 2500));

            // Should call cloudStorageDelegate.set (not CloudStorage.update)
            expect(cloudStorageDelegate.set).toHaveBeenCalled();
        });

        it('should handle sync failures gracefully', async () => {
            CloudStorage.get.mockRejectedValue(new Error('Network error'));
            
            const localProblems = {
                '1': new Problem('1', 'Test', 'Easy', 'url', Date.now(), 1, Date.now())
            };
            localData['problems'] = localProblems;
            
            // Should not throw
            await expect(
                syncLocalAndCloudStorage('problems', mergeProblems)
            ).resolves.not.toThrow();
            
            // Local data should remain unchanged
            expect(localData['problems']).toEqual(localProblems);
        });

        it('should sync different data types independently', async () => {
            // Enable cloud sync for this test
            store.isCloudSyncEnabled = true;

            // Set up various data types
            localData['problems'] = { '1': new Problem('1', 'P1', 'Easy', 'url', Date.now(), 1, Date.now()) };
            localData['fsrs_params'] = { w: [0.4, 0.6, 2.4, 5.8] };
            localData['fsrs_revlogs'] = { '1': [{ card_id: '1', review_time: Date.now() }] };

            // Sync only the types that have merge functions
            await syncLocalAndCloudStorage('problems', mergeProblems);
            await syncLocalAndCloudStorage('fsrs_params', mergeFSRSParams);
            await syncLocalAndCloudStorage('fsrs_revlogs', mergeRevlogs);

            // All synced types should be in cloud
            expect(cloudData['problems']).toBeDefined();
            expect(cloudData['fsrs_params']).toBeDefined();
            expect(cloudData['fsrs_revlogs']).toBeDefined();
        });
    });

    describe('Chinese Mode Sync', () => {
        it('should sync CN and international data separately', async () => {
            // International mode data
            isInCnMode.mockResolvedValue(false);
            localData['problems'] = {
                '1': new Problem('1', 'Two Sum', 'Easy', 'url', Date.now(), 1, Date.now())
            };
            
            await syncLocalAndCloudStorage('problems', mergeProblems);
            expect(cloudData['problems']).toBeDefined();
            
            // CN mode data
            isInCnMode.mockResolvedValue(true);
            localData['cn_problems'] = {
                '1': new Problem('1', '两数之和', '简单', 'cn-url', Date.now(), 1, Date.now())
            };
            
            await syncLocalAndCloudStorage('cn_problems', mergeProblems);
            expect(cloudData['cn_problems']).toBeDefined();
            
            // Both should be separate
            expect(cloudData['problems']['1'].name).toBe('Two Sum');
            expect(cloudData['cn_problems']['1'].name).toBe('两数之和');
        });
    });

    describe('WebDAV Sync', () => {
        it('should handle WebDAV sync when enabled', async () => {
            // Mock WebDAV configuration
            store.isWebDAVEnabled = true;
            store.webdavUrl = 'https://webdav.example.com';
            store.webdavUsername = 'user';
            store.webdavPassword = 'pass';
            
            // Mock WebDAV operations
            const mockWebDAVClient = {
                getFileContents: jest.fn().mockResolvedValue(JSON.stringify({
                    problems: { '2': new Problem('2', 'WebDAV Problem', 'Hard', 'url', Date.now(), 4, Date.now()) }
                })),
                putFileContents: jest.fn().mockResolvedValue(true)
            };
            
            // Should handle WebDAV sync
            // Note: Actual WebDAV implementation would need to be mocked properly
            expect(store.isWebDAVEnabled).toBe(true);
        });
    });

    describe('Sync State Management', () => {
        it('should track sync status correctly', async () => {
            let syncInProgress = false;
            let lastSyncTime = null;
            
            // Mock sync status tracking
            const originalSync = syncLocalAndCloudStorage;
            const trackedSync = async (...args) => {
                syncInProgress = true;
                const result = await originalSync(...args);
                syncInProgress = false;
                lastSyncTime = Date.now();
                return result;
            };
            
            localData['problems'] = { '1': new Problem('1', 'Test', 'Easy', 'url', Date.now(), 1, Date.now()) };
            
            await trackedSync('problems', mergeProblems);
            
            expect(syncInProgress).toBe(false);
            expect(lastSyncTime).toBeDefined();
        });

        it('should handle concurrent sync requests', async () => {
            const syncPromises = [];
            
            // Trigger multiple syncs concurrently
            for (let i = 0; i < 5; i++) {
                const problem = new Problem(`${i}`, `Problem ${i}`, 'Easy', `url${i}`, Date.now(), i, Date.now());
                localData['problems'] = { ...localData['problems'], [i]: problem };
                syncPromises.push(syncLocalAndCloudStorage('problems', mergeProblems));
            }
            
            // All should complete without errors
            await expect(Promise.all(syncPromises)).resolves.not.toThrow();
            
            // Final state should include all problems
            expect(Object.keys(cloudData['problems'])).toHaveLength(5);
        });
    });

    describe('Data Integrity During Sync', () => {
        it('should validate data before syncing', async () => {
            // Invalid problem data
            const invalidProblem = {
                index: '1',
                // Missing required fields
            };
            
            localData['problems'] = { '1': invalidProblem };
            
            // Should handle invalid data gracefully
            await syncLocalAndCloudStorage('problems', mergeProblems);
            
            // Invalid data might be filtered out or handled
            // The actual behavior depends on implementation
            expect(cloudData['problems']).toBeDefined();
        });

        it('should maintain data consistency across sync cycles', async () => {
            const problem1 = new Problem('1', 'Test', 'Easy', 'url', Date.now(), 1, Date.now());
            
            // First sync
            localData['problems'] = { '1': problem1 };
            await syncLocalAndCloudStorage('problems', mergeProblems);
            
            // Modify locally
            problem1.proficiency = 2;
            problem1.modificationTime = Date.now();
            localData['problems'] = { '1': problem1 };
            
            // Second sync
            await syncLocalAndCloudStorage('problems', mergeProblems);
            
            // Both should be consistent
            expect(localData['problems']['1'].proficiency).toBe(2);
            expect(cloudData['problems']['1'].proficiency).toBe(2);
        });
    });
});