import { Problem, getDeletedProblem, copy } from '../../../src/popup/entity/problem';

describe('Problem Entity', () => {
    describe('Problem Constructor', () => {
        it('should create a problem with all properties initialized correctly', () => {
            const problem = new Problem(
                '1',
                'Two Sum',
                'Easy',
                'https://leetcode.com/problems/two-sum/',
                1704067200000,
                3,
                1704067200000
            );

            expect(problem.index).toBe('1');
            expect(problem.name).toBe('Two Sum');
            expect(problem.level).toBe('Easy');
            expect(problem.url).toBe('https://leetcode.com/problems/two-sum/');
            expect(problem.submissionTime).toBe(1704067200000);
            expect(problem.proficiency).toBe(3);
            expect(problem.modificationTime).toBe(1704067200000);
            expect(problem.isDeleted).toBe(false);
        });

        it('should initialize fsrsState with correct default values', () => {
            const problem = new Problem('1', 'Test', 'Easy', 'url', 0, 0, 0);

            expect(problem.fsrsState).toBeDefined();
            expect(problem.fsrsState.difficulty).toBeNull();
            expect(problem.fsrsState.quality).toBeNull();
            expect(problem.fsrsState.lastReview).toBeNull();
            expect(problem.fsrsState.nextReview).toBeNull();
            expect(problem.fsrsState.reviewCount).toBe(0);
            expect(problem.fsrsState.stability).toBe(0);
            expect(problem.fsrsState.state).toBe('New');
            expect(problem.fsrsState.lapses).toBe(0);
        });

        it('should handle different data types for parameters', () => {
            const problem = new Problem(
                123, // number instead of string
                'Test Problem',
                'Medium',
                'https://test.com',
                '1704067200000', // string instead of number
                '5', // string instead of number
                Date.now()
            );

            expect(problem.index).toBe(123);
            expect(problem.submissionTime).toBe('1704067200000');
            expect(problem.proficiency).toBe('5');
        });
    });

    describe('getDeletedProblem', () => {
        it('should create a deleted problem with correct properties', () => {
            const problemId = 'test-id-123';
            const beforeTime = Date.now();
            const deletedProblem = getDeletedProblem(problemId);
            const afterTime = Date.now();

            expect(deletedProblem.index).toBe(problemId);
            expect(deletedProblem.name).toBe('');
            expect(deletedProblem.level).toBe('');
            expect(deletedProblem.url).toBe('');
            expect(deletedProblem.submissionTime).toBe(0);
            expect(deletedProblem.proficiency).toBe(0);
            expect(deletedProblem.modificationTime).toBeGreaterThanOrEqual(beforeTime);
            expect(deletedProblem.modificationTime).toBeLessThanOrEqual(afterTime);
            expect(deletedProblem.isDeleted).toBe(true);
        });

        it('should have initialized fsrsState even for deleted problem', () => {
            const deletedProblem = getDeletedProblem('test-id');
            
            expect(deletedProblem.fsrsState).toBeDefined();
            expect(deletedProblem.fsrsState.state).toBe('New');
        });
    });

    describe('copy function', () => {
        it('should create a deep copy of a problem', () => {
            const original = new Problem(
                '1',
                'Original Problem',
                'Hard',
                'https://original.com',
                1000,
                4,
                2000
            );
            original.fsrsState.difficulty = 3;
            original.fsrsState.quality = 4;
            original.fsrsState.lastReview = 3000;
            original.fsrsState.nextReview = 4000;
            original.fsrsState.reviewCount = 5;
            original.fsrsState.stability = 2.5;
            original.fsrsState.state = 'Learning';
            original.fsrsState.lapses = 1;

            const copied = copy(original);

            // Check basic properties
            expect(copied.index).toBe(original.index);
            expect(copied.name).toBe(original.name);
            expect(copied.level).toBe(original.level);
            expect(copied.url).toBe(original.url);
            expect(copied.submissionTime).toBe(original.submissionTime);
            expect(copied.proficiency).toBe(original.proficiency);
            expect(copied.modificationTime).toBe(original.modificationTime);
            expect(copied.isDeleted).toBe(original.isDeleted);

            // Check fsrsState
            expect(copied.fsrsState.difficulty).toBe(3);
            expect(copied.fsrsState.quality).toBe(4);
            expect(copied.fsrsState.lastReview).toBe(3000);
            expect(copied.fsrsState.nextReview).toBe(4000);
            expect(copied.fsrsState.reviewCount).toBe(5);
            expect(copied.fsrsState.stability).toBe(2.5);
            expect(copied.fsrsState.state).toBe('Learning');
            expect(copied.fsrsState.lapses).toBe(1);

            // Verify it's a deep copy
            expect(copied).not.toBe(original);
            expect(copied.fsrsState).not.toBe(original.fsrsState);
        });

        it('should handle copying deleted problems', () => {
            const deleted = getDeletedProblem('deleted-123');
            const copied = copy(deleted);

            expect(copied.isDeleted).toBe(true);
            expect(copied.index).toBe('deleted-123');
        });

        it('should handle problems without fsrsState (backward compatibility)', () => {
            const oldProblem = {
                index: '1',
                name: 'Old Problem',
                level: 'Easy',
                url: 'https://old.com',
                submissionTime: 1000,
                proficiency: 2,
                modificationTime: 2000,
                isDeleted: false
                // No fsrsState property
            };

            const copied = copy(oldProblem);

            expect(copied.fsrsState).toBeDefined();
            expect(copied.fsrsState.difficulty).toBeNull();
            expect(copied.fsrsState.quality).toBeNull();
            expect(copied.fsrsState.lastReview).toBeNull();
            expect(copied.fsrsState.nextReview).toBeNull();
            expect(copied.fsrsState.reviewCount).toBe(0);
            expect(copied.fsrsState.stability).toBe(0);
            expect(copied.fsrsState.state).toBe('New');
            expect(copied.fsrsState.lapses).toBe(0);
        });

        it('should handle partial fsrsState (backward compatibility)', () => {
            const partialProblem = {
                index: '1',
                name: 'Partial Problem',
                level: 'Medium',
                url: 'https://partial.com',
                submissionTime: 1000,
                proficiency: 3,
                modificationTime: 2000,
                isDeleted: false,
                fsrsState: {
                    difficulty: 2,
                    quality: 3
                    // Missing other properties
                }
            };

            const copied = copy(partialProblem);

            expect(copied.fsrsState.difficulty).toBe(2);
            expect(copied.fsrsState.quality).toBe(3);
            // These will be undefined because they don't exist in the partial object
            expect(copied.fsrsState.lastReview).toBeUndefined();
            expect(copied.fsrsState.nextReview).toBeUndefined();
            // These will also be undefined because fsrsState exists but doesn't have these properties
            expect(copied.fsrsState.reviewCount).toBeUndefined();
            expect(copied.fsrsState.stability).toBeUndefined();
            expect(copied.fsrsState.state).toBeUndefined();
            expect(copied.fsrsState.lapses).toBeUndefined();
        });

        it('should not modify the original when modifying the copy', () => {
            const original = new Problem('1', 'Original', 'Easy', 'url', 1000, 2, 2000);
            original.fsrsState.difficulty = 3;

            const copied = copy(original);
            
            // Modify the copy
            copied.name = 'Modified';
            copied.fsrsState.difficulty = 5;
            copied.fsrsState.reviewCount = 10;

            // Original should remain unchanged
            expect(original.name).toBe('Original');
            expect(original.fsrsState.difficulty).toBe(3);
            expect(original.fsrsState.reviewCount).toBe(0);
        });
    });

    describe('Edge Cases', () => {
        it('should handle null and undefined values', () => {
            const problem = new Problem(
                null,
                undefined,
                '',
                null,
                undefined,
                null,
                undefined
            );

            expect(problem.index).toBeNull();
            expect(problem.name).toBeUndefined();
            expect(problem.level).toBe('');
            expect(problem.url).toBeNull();
            expect(problem.submissionTime).toBeUndefined();
            expect(problem.proficiency).toBeNull();
            expect(problem.modificationTime).toBeUndefined();
        });

        it('should handle very large numbers', () => {
            const largeNumber = Number.MAX_SAFE_INTEGER;
            const problem = new Problem('1', 'Test', 'Easy', 'url', largeNumber, 5, largeNumber);

            expect(problem.submissionTime).toBe(largeNumber);
            expect(problem.modificationTime).toBe(largeNumber);
        });

        it('should handle special characters in strings', () => {
            const specialName = 'Test <script>alert("XSS")</script> Problem';
            const specialUrl = 'https://test.com?param=<>&"\'';
            
            const problem = new Problem('1', specialName, 'Easy', specialUrl, 0, 0, 0);

            expect(problem.name).toBe(specialName);
            expect(problem.url).toBe(specialUrl);
        });
    });
});