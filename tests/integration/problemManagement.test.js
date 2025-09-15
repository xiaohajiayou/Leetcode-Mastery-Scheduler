/**
 * Problem Management Integration Tests
 * These tests ensure the complete problem management workflow works correctly
 */

import {
    getAllProblems,
    createOrUpdateProblem,
    deleteProblem,
    markProblemAsMastered,
    getProblemsByMode,
    setProblems
} from '../../src/popup/service/problemService';

import { 
    calculateNextReview,
    updateProblemWithFSRS 
} from '../../src/popup/service/fsrsService';

import { Problem } from '../../src/popup/entity/problem';
import { mockProblems } from '../fixtures/mockData';

// Mock storage
jest.mock('../../src/popup/delegate/localStorageDelegate');
jest.mock('../../src/popup/delegate/cloudStorageDelegate');
jest.mock('../../src/popup/service/modeService');
jest.mock('../../src/popup/service/syncManager');

import { getLocalStorageData, setLocalStorageData } from '../../src/popup/delegate/localStorageDelegate';
import { isInCnMode } from '../../src/popup/service/modeService';
import { syncManager } from '../../src/popup/service/syncManager';

describe('Problem Management Integration', () => {
    let testProblems = {};
    let opsHistory = undefined;
    
    beforeEach(() => {
        jest.clearAllMocks();
        testProblems = {};
        opsHistory = undefined;
        
        // Mock storage to use in-memory object
        getLocalStorageData.mockImplementation((key) => {
            if (key === 'opsHistory') {
                return Promise.resolve(opsHistory); // Return current value (undefined or array)
            }
            if (key === 'problems' || key === 'records') {
                return Promise.resolve(testProblems);
            }
            return Promise.resolve(undefined);
        });
        
        setLocalStorageData.mockImplementation((key, data) => {
            if (key === 'opsHistory') {
                opsHistory = data; // Update operation history to the new array
                return Promise.resolve();
            }
            testProblems = data;
            return Promise.resolve();
        });
        
        isInCnMode.mockResolvedValue(false);
        syncManager.debouncedSync = jest.fn();
    });

    describe('Complete Problem Lifecycle', () => {
        it('should handle complete problem lifecycle from creation to deletion', async () => {
            // 1. Create a new problem
            const newProblem = new Problem(
                '1',
                'Two Sum',
                'Easy',
                'https://leetcode.com/problems/two-sum/',
                Date.now(),
                0,
                Date.now()
            );

            await createOrUpdateProblem(newProblem);
            
            // Verify problem was created
            let problems = await getAllProblems();
            expect(problems['1']).toBeDefined();
            expect(problems['1'].name).toBe('Two Sum');
            expect(problems['1'].proficiency).toBe(0);

            // 2. Update problem proficiency through review
            const feedback = { quality: 4, difficulty: 2 };
            problems['1'].proficiency = 1;
            await setProblems(problems);
            
            problems = await getAllProblems();
            expect(problems['1'].proficiency).toBe(1);

            // 3. Mark as mastered
            await markProblemAsMastered('1');
            problems = await getAllProblems();
            expect(problems['1'].proficiency).toBeGreaterThanOrEqual(5); // Should be mastered

            // 4. Delete problem (soft delete)
            await deleteProblem('1');
            problems = await getAllProblems();
            expect(problems['1'].isDeleted).toBe(true);

            // 5. Verify sync was triggered at each step
            expect(syncManager.debouncedSync).toHaveBeenCalledWith('1');
        });

        it('should handle multiple problems with different states', async () => {
            // Create multiple problems
            const problems = {
                '1': new Problem('1', 'Two Sum', 'Easy', 'url1', Date.now(), 0, Date.now()),
                '2': new Problem('2', 'Add Two Numbers', 'Medium', 'url2', Date.now(), 2, Date.now()),
                '3': new Problem('3', 'Longest Substring', 'Medium', 'url3', Date.now(), 4, Date.now()),
                '4': new Problem('4', 'Median Arrays', 'Hard', 'url4', Date.now(), 1, Date.now())
            };

            await setProblems(problems);

            // Get all problems and verify
            const retrieved = await getAllProblems();
            expect(Object.keys(retrieved)).toHaveLength(4);
            
            // Filter by different criteria
            const needReview = Object.values(retrieved).filter(p => p.proficiency < 3);
            expect(needReview).toHaveLength(3);

            const mastered = Object.values(retrieved).filter(p => p.proficiency >= 5);
            expect(mastered).toHaveLength(0);

            // Update one to mastered
            await markProblemAsMastered('3');
            const updated = await getAllProblems();
            expect(updated['3'].proficiency).toBeGreaterThanOrEqual(5);
        });
    });

    describe('Problem State Management', () => {
        it('should correctly track problem states and transitions', async () => {
            const problem = new Problem(
                'test-1',
                'Test Problem',
                'Medium',
                'https://test.com',
                Date.now(),
                0,
                Date.now()
            );

            // Initial state
            expect(problem.fsrsState.state).toBe('New');
            expect(problem.fsrsState.reviewCount).toBe(0);

            await createOrUpdateProblem(problem);

            // After first review
            problem.fsrsState.state = 'Learning';
            problem.fsrsState.reviewCount = 1;
            problem.proficiency = 1;
            await createOrUpdateProblem(problem);

            const updated = await getAllProblems();
            expect(updated['test-1'].fsrsState.state).toBe('Learning');
            expect(updated['test-1'].fsrsState.reviewCount).toBe(1);

            // After multiple reviews
            problem.fsrsState.state = 'Review';
            problem.fsrsState.reviewCount = 5;
            problem.proficiency = 3;
            await createOrUpdateProblem(problem);

            const reviewed = await getAllProblems();
            expect(reviewed['test-1'].fsrsState.state).toBe('Review');
            expect(reviewed['test-1'].proficiency).toBe(3);
        });

        it('should handle problem updates with partial data', async () => {
            // Create initial problem
            const initial = new Problem('1', 'Initial', 'Easy', 'url', Date.now(), 2, Date.now());
            await createOrUpdateProblem(initial);

            // Update with partial data
            const partial = {
                index: '1',
                name: 'Updated Name',
                proficiency: 3,
                level: 'Easy',  // Include level to ensure it's preserved
                url: 'url'
            };
            
            await createOrUpdateProblem(partial);
            
            const result = await getAllProblems();
            expect(result['1'].name).toBe('Updated Name');
            expect(result['1'].proficiency).toBe(3);
            expect(result['1'].level).toBe('Easy'); // Should preserve other fields
        });
    });

    describe('Chinese Mode Support', () => {
        it('should handle problems in CN mode separately', async () => {
            // International mode problems
            isInCnMode.mockResolvedValue(false);
            const intlProblem = new Problem('1', 'Two Sum', 'Easy', 'url', Date.now(), 0, Date.now());
            await createOrUpdateProblem(intlProblem);

            // Switch to CN mode
            isInCnMode.mockResolvedValue(true);
            
            // CN mode should have different storage
            let cnTestProblems = {};
            getLocalStorageData.mockImplementation((key) => {
                if (key === 'opsHistory') {
                    return Promise.resolve([]);
                }
                if (key === 'cn_problems' || key === 'cn_records') {
                    return Promise.resolve(cnTestProblems);
                }
                return Promise.resolve(testProblems);
            });
            
            setLocalStorageData.mockImplementation((key, data) => {
                if (key === 'opsHistory') {
                    return Promise.resolve();
                }
                if (key === 'cn_problems' || key === 'cn_records') {
                    cnTestProblems = data;
                    return Promise.resolve();
                }
                testProblems = data;
                return Promise.resolve();
            });

            const cnProblems = await getAllProblems();
            expect(Object.keys(cnProblems)).toHaveLength(0);

            // Add CN problem
            const cnProblem = new Problem('1', '两数之和', '简单', 'cn-url', Date.now(), 0, Date.now());
            await createOrUpdateProblem(cnProblem);

            // Switch back to international mode
            isInCnMode.mockResolvedValue(false);
            const intlProblems = await getAllProblems();
            expect(intlProblems['1'].name).toBe('Two Sum'); // Original problem unchanged
        });
    });

    describe('Batch Operations', () => {
        it('should handle batch problem operations efficiently', async () => {
            // Create 100 problems
            const batchProblems = {};
            for (let i = 1; i <= 100; i++) {
                batchProblems[i.toString()] = new Problem(
                    i.toString(),
                    `Problem ${i}`,
                    i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy',
                    `https://leetcode.com/problems/problem-${i}/`,
                    Date.now() - i * 1000000,
                    i % 5,
                    Date.now()
                );
            }

            await setProblems(batchProblems);

            // Verify all problems were saved
            const retrieved = await getAllProblems();
            expect(Object.keys(retrieved)).toHaveLength(100);

            // Batch update - mark all Easy problems as mastered
            const easyProblems = Object.values(retrieved)
                .filter(p => p.level === 'Easy');
            
            for (const problem of easyProblems) {
                await markProblemAsMastered(problem.index);
            }

            // Verify updates
            const updated = await getAllProblems();
            const masteredEasy = Object.values(updated)
                .filter(p => p.level === 'Easy' && p.proficiency >= 5);
            
            expect(masteredEasy.length).toBe(easyProblems.length);
        });

        it('should handle concurrent updates correctly', async () => {
            const problem = new Problem('1', 'Test', 'Easy', 'url', Date.now(), 0, Date.now());
            await createOrUpdateProblem(problem);

            // Simulate concurrent updates
            const updates = [];
            for (let i = 1; i <= 5; i++) {
                updates.push(
                    createOrUpdateProblem({
                        ...problem,
                        proficiency: i,
                        modificationTime: Date.now() + i
                    })
                );
            }

            await Promise.all(updates);

            // Last update should win
            const final = await getAllProblems();
            expect(final['1'].proficiency).toBe(5);
        });
    });

    describe('Data Integrity', () => {
        it('should maintain data consistency across operations', async () => {
            const problem = new Problem('1', 'Test', 'Medium', 'url', Date.now(), 2, Date.now());
            problem.fsrsState = {
                difficulty: 3,
                quality: 4,
                lastReview: Date.now() - 86400000,
                nextReview: Date.now() + 86400000,
                reviewCount: 5,
                stability: 2.5,
                state: 'Review',
                lapses: 1
            };

            await createOrUpdateProblem(problem);

            // Multiple operations
            await markProblemAsMastered('1');
            let current = await getAllProblems();
            expect(current['1'].fsrsState).toBeDefined();
            expect(current['1'].fsrsState.reviewCount).toBe(5);

            // Soft delete
            await deleteProblem('1');
            current = await getAllProblems();
            expect(current['1'].isDeleted).toBe(true);
            expect(current['1'].fsrsState).toBeDefined(); // Should preserve FSRS state
        });

        it('should handle corrupted data gracefully', async () => {
            // Set corrupted data
            testProblems = {
                '1': { index: '1' }, // Missing required fields
                '2': null, // Null problem
                '3': 'invalid', // Invalid type
                '4': new Problem('4', 'Valid', 'Easy', 'url', Date.now(), 0, Date.now())
            };

            const problems = await getAllProblems();
            
            // Should handle gracefully and return what's valid
            expect(problems['4']).toBeDefined();
            expect(problems['4'].name).toBe('Valid');
        });
    });

    describe('Performance Tests', () => {
        it('should handle large datasets efficiently', async () => {
            const startTime = Date.now();
            
            // Create 1000 problems
            const largeDataset = {};
            for (let i = 1; i <= 1000; i++) {
                largeDataset[i.toString()] = new Problem(
                    i.toString(),
                    `Problem ${i}`,
                    'Medium',
                    `url-${i}`,
                    Date.now(),
                    i % 5,
                    Date.now()
                );
            }

            await setProblems(largeDataset);
            const saveTime = Date.now() - startTime;
            
            // Should complete within reasonable time
            expect(saveTime).toBeLessThan(1000); // Less than 1 second

            // Retrieve and filter
            const retrieveStart = Date.now();
            const all = await getAllProblems();
            const filtered = Object.values(all).filter(p => p.proficiency === 0);
            const retrieveTime = Date.now() - retrieveStart;
            
            expect(retrieveTime).toBeLessThan(100); // Less than 100ms
            expect(filtered.length).toBe(200); // 1000 / 5 = 200 with proficiency 0
        });
    });
});