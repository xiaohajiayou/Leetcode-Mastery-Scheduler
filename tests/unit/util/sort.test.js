import {
    problemSorters,
    problemSorterArr,
    idOf,
    getSorterById,
    descriptionOf
} from '../../../src/popup/util/sort';

// Mock utils
jest.mock('../../../src/popup/util/utils', () => ({
    getNextReviewTime: jest.fn(),
    getDelayedHours: jest.fn()
}));

import { getNextReviewTime, getDelayedHours } from '../../../src/popup/util/utils';

describe('Sort Utilities', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('Problem Sorters', () => {
        describe('sortByReviewTimeAsc', () => {
            it('should sort problems by review time in ascending order', () => {
                const p1 = { id: 1 };
                const p2 = { id: 2 };
                
                getNextReviewTime.mockImplementation((p) => {
                    if (p.id === 1) return new Date('2024-01-01T10:00:00');
                    if (p.id === 2) return new Date('2024-01-01T12:00:00');
                });

                const result = problemSorters.sortByReviewTimeAsc(p1, p2);
                expect(result).toBeLessThan(0); // p1 should come before p2
            });

            it('should return 0 for equal review times', () => {
                const p1 = { id: 1 };
                const p2 = { id: 2 };
                
                getNextReviewTime.mockReturnValue(new Date('2024-01-01T10:00:00'));

                const result = problemSorters.sortByReviewTimeAsc(p1, p2);
                expect(result).toBe(0);
            });
        });

        describe('sortByReviewTimeDesc', () => {
            it('should sort problems by review time in descending order', () => {
                const p1 = { id: 1 };
                const p2 = { id: 2 };
                
                getNextReviewTime.mockImplementation((p) => {
                    if (p.id === 1) return new Date('2024-01-01T10:00:00');
                    if (p.id === 2) return new Date('2024-01-01T12:00:00');
                });

                const result = problemSorters.sortByReviewTimeDesc(p1, p2);
                expect(result).toBeGreaterThan(0); // p2 should come before p1
            });
        });

        describe('sortByDelayHoursAsc', () => {
            it('should sort problems by delay hours in ascending order', () => {
                const p1 = { id: 1 };
                const p2 = { id: 2 };
                
                getDelayedHours.mockImplementation((p) => {
                    if (p.id === 1) return 5;
                    if (p.id === 2) return 3;
                });

                const result = problemSorters.sortByDelayHoursAsc(p1, p2);
                expect(result).toBeGreaterThan(0); // p2 (3h) should come before p1 (5h)
            });

            it('should handle negative delay hours', () => {
                const p1 = { id: 1 };
                const p2 = { id: 2 };
                
                getDelayedHours.mockImplementation((p) => {
                    if (p.id === 1) return -2; // not delayed yet
                    if (p.id === 2) return 3;  // delayed by 3 hours
                });

                const result = problemSorters.sortByDelayHoursAsc(p1, p2);
                expect(result).toBeLessThan(0); // p1 (-2h) should come before p2 (3h)
            });
        });

        describe('sortByDelayHoursDesc', () => {
            it('should sort problems by delay hours in descending order', () => {
                const p1 = { id: 1 };
                const p2 = { id: 2 };
                
                getDelayedHours.mockImplementation((p) => {
                    if (p.id === 1) return 5;
                    if (p.id === 2) return 3;
                });

                const result = problemSorters.sortByDelayHoursDesc(p1, p2);
                expect(result).toBeLessThan(0); // p1 (5h) should come before p2 (3h)
            });
        });
    });

    describe('Array Sorting', () => {
        it('should correctly sort an array of problems', () => {
            const problems = [
                { id: 1, name: 'Problem 1' },
                { id: 2, name: 'Problem 2' },
                { id: 3, name: 'Problem 3' }
            ];

            getNextReviewTime.mockImplementation((p) => {
                if (p.id === 1) return new Date('2024-01-01T12:00:00');
                if (p.id === 2) return new Date('2024-01-01T10:00:00');
                if (p.id === 3) return new Date('2024-01-01T11:00:00');
            });

            const sorted = [...problems].sort(problemSorters.sortByReviewTimeAsc);
            
            expect(sorted[0].id).toBe(2); // earliest review time
            expect(sorted[1].id).toBe(3);
            expect(sorted[2].id).toBe(1); // latest review time
        });
    });

    describe('problemSorterArr', () => {
        it('should contain all 4 sorters', () => {
            expect(problemSorterArr).toHaveLength(4);
            expect(problemSorterArr[0]).toBe(problemSorters.sortByReviewTimeAsc);
            expect(problemSorterArr[1]).toBe(problemSorters.sortByReviewTimeDesc);
            expect(problemSorterArr[2]).toBe(problemSorters.sortByDelayHoursAsc);
            expect(problemSorterArr[3]).toBe(problemSorters.sortByDelayHoursDesc);
        });
    });

    describe('idOf', () => {
        it('should return correct index for each sorter', () => {
            expect(idOf(problemSorters.sortByReviewTimeAsc)).toBe(0);
            expect(idOf(problemSorters.sortByReviewTimeDesc)).toBe(1);
            expect(idOf(problemSorters.sortByDelayHoursAsc)).toBe(2);
            expect(idOf(problemSorters.sortByDelayHoursDesc)).toBe(3);
        });

        it('should return -1 for unknown sorter', () => {
            const unknownSorter = () => 0;
            expect(idOf(unknownSorter)).toBe(-1);
        });
    });

    describe('getSorterById', () => {
        it('should return correct sorter for valid id', () => {
            expect(getSorterById(0)).toBe(problemSorters.sortByReviewTimeAsc);
            expect(getSorterById(1)).toBe(problemSorters.sortByReviewTimeDesc);
            expect(getSorterById(2)).toBe(problemSorters.sortByDelayHoursAsc);
            expect(getSorterById(3)).toBe(problemSorters.sortByDelayHoursDesc);
        });

        it('should return undefined for invalid id', () => {
            expect(getSorterById(-1)).toBeUndefined();
            expect(getSorterById(4)).toBeUndefined();
            expect(getSorterById(100)).toBeUndefined();
        });
    });

    describe('descriptionOf', () => {
        it('should return correct description for each sorter', () => {
            expect(descriptionOf(problemSorters.sortByReviewTimeAsc))
                .toBe('Sort By Next Scheduled Review Time (ASC)');
            expect(descriptionOf(problemSorters.sortByReviewTimeDesc))
                .toBe('Sort By Next Scheduled Review Time (DESC)');
            expect(descriptionOf(problemSorters.sortByDelayHoursAsc))
                .toBe('Sort By Review Delayed Hours (ASC)');
            expect(descriptionOf(problemSorters.sortByDelayHoursDesc))
                .toBe('Sort By Review Delayed Hours (DESC)');
        });

        it('should return empty string for unknown sorter', () => {
            const unknownSorter = () => 0;
            expect(descriptionOf(unknownSorter)).toBe('');
            expect(descriptionOf(null)).toBe('');
            expect(descriptionOf(undefined)).toBe('');
        });
    });

    describe('Sorter Consistency', () => {
        it('should maintain transitive property', () => {
            const p1 = { id: 1 };
            const p2 = { id: 2 };
            const p3 = { id: 3 };
            
            getNextReviewTime.mockImplementation((p) => {
                if (p.id === 1) return new Date('2024-01-01T10:00:00');
                if (p.id === 2) return new Date('2024-01-01T11:00:00');
                if (p.id === 3) return new Date('2024-01-01T12:00:00');
            });

            const sorter = problemSorters.sortByReviewTimeAsc;
            
            // If p1 < p2 and p2 < p3, then p1 < p3
            expect(sorter(p1, p2)).toBeLessThan(0);
            expect(sorter(p2, p3)).toBeLessThan(0);
            expect(sorter(p1, p3)).toBeLessThan(0);
        });

        it('should be inverse for ascending and descending', () => {
            const p1 = { id: 1 };
            const p2 = { id: 2 };
            
            getNextReviewTime.mockImplementation((p) => {
                if (p.id === 1) return new Date('2024-01-01T10:00:00');
                if (p.id === 2) return new Date('2024-01-01T12:00:00');
            });

            const ascResult = problemSorters.sortByReviewTimeAsc(p1, p2);
            const descResult = problemSorters.sortByReviewTimeDesc(p1, p2);
            
            expect(ascResult).toBe(-descResult);
        });
    });

    describe('Edge Cases', () => {
        it('should handle problems with same delay hours', () => {
            const p1 = { id: 1 };
            const p2 = { id: 2 };
            
            getDelayedHours.mockReturnValue(5);

            const result = problemSorters.sortByDelayHoursDesc(p1, p2);
            expect(result).toBe(0);
        });

        it('should handle problems with invalid dates', () => {
            const p1 = { id: 1 };
            const p2 = { id: 2 };
            
            getNextReviewTime.mockImplementation((p) => {
                if (p.id === 1) return new Date('Invalid Date');
                if (p.id === 2) return new Date('2024-01-01T12:00:00');
            });

            const result = problemSorters.sortByReviewTimeAsc(p1, p2);
            expect(result).toBeNaN(); // Invalid date will produce NaN
        });

        it('should handle very large arrays efficiently', () => {
            const problems = Array.from({ length: 1000 }, (_, i) => ({ id: i }));
            
            getDelayedHours.mockImplementation((p) => p.id);

            const startTime = Date.now();
            const sorted = [...problems].sort(problemSorters.sortByDelayHoursDesc);
            const endTime = Date.now();

            expect(sorted[0].id).toBe(999); // highest delay
            expect(sorted[999].id).toBe(0); // lowest delay
            expect(endTime - startTime).toBeLessThan(100); // Should be fast
        });
    });
});