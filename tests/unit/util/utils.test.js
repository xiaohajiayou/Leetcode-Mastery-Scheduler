import {
    needReview,
    scheduledReview,
    isCompleted,
    calculatePageNum,
    getLevelColor,
    getNextReviewTime,
    getDelayedHours,
    isSubmitButton,
    getSubmissionResult,
    isSubmissionSuccess
} from '../../../src/popup/util/utils';

// Mock constants
jest.mock('../../../src/popup/util/constants', () => ({
    forggettingCurve: [0, 10, 60, 240, 1440, 4320], // minutes
    PAGE_SIZE: 10,
    SUBMIT_BUTTON_ATTRIBUTE_NAME: 'data-submit',
    SUBMIT_BUTTON_ATTRIBUTE_VALUE: 'true',
    SUCCESS_CLASSNAME: 'success',
    SUCCESS_CLASSNAME_CN: 'success-cn',
    SUCCESS_CLASSNAME_NEW: 'success-new',
    WRONG_ANSWER_CLASSNAME: 'wrong',
    WRONG_ANSWER_CLASSNAME_CN: 'wrong-cn',
    WRONG_ANSWER_CLASSNAME_NEW: 'wrong-new',
    COMPILE_ERROR_AND_TLE_CLASSNAME: 'error',
    COMPILE_ERROR_AND_TLE_CLASSNAME_CN: 'error-cn',
    COMPILE_ERROR_AND_TLE_CLASSNAME_NEW: 'error-new'
}));

// Mock store
jest.mock('../../../src/popup/store', () => ({
    store: {
        easyIntv: [1, 2, 3],
        mediumIntv: [1, 3, 5],
        hardIntv: [2, 4, 6]
    }
}));

describe('Utils Functions', () => {
    describe('needReview', () => {
        beforeEach(() => {
            jest.spyOn(Date, 'now').mockReturnValue(1704067200000); // 2024-01-01 00:00:00
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        it('should return false if proficiency is >= forggettingCurve length', () => {
            const problem = {
                proficiency: 6,
                submissionTime: 1704067200000
            };
            expect(needReview(problem)).toBe(false);
        });

        it('should return true if enough time has passed', () => {
            const problem = {
                proficiency: 1,
                submissionTime: 1704067200000 - (11 * 60 * 1000) // 11 minutes ago
            };
            expect(needReview(problem)).toBe(true);
        });

        it('should return false if not enough time has passed', () => {
            const problem = {
                proficiency: 1,
                submissionTime: 1704067200000 - (5 * 60 * 1000) // 5 minutes ago
            };
            expect(needReview(problem)).toBe(false);
        });

        it('should handle proficiency 0 (immediate review)', () => {
            const problem = {
                proficiency: 0,
                submissionTime: 1704067200000
            };
            expect(needReview(problem)).toBe(true);
        });
    });

    describe('scheduledReview', () => {
        it('should always return true', () => {
            const problem = { proficiency: 3 };
            expect(scheduledReview(problem)).toBe(true);
        });
    });

    describe('isCompleted', () => {
        it('should return true if proficiency is 5', () => {
            expect(isCompleted({ proficiency: 5 })).toBe(true);
        });

        it('should return false if proficiency is not 5', () => {
            expect(isCompleted({ proficiency: 4 })).toBe(false);
            expect(isCompleted({ proficiency: 0 })).toBe(false);
        });
    });

    describe('calculatePageNum', () => {
        it('should calculate correct page numbers', () => {
            expect(calculatePageNum([])).toBe(1);
            expect(calculatePageNum(new Array(5))).toBe(1);
            expect(calculatePageNum(new Array(10))).toBe(1);
            expect(calculatePageNum(new Array(11))).toBe(2);
            expect(calculatePageNum(new Array(25))).toBe(3);
        });

        it('should always return at least 1', () => {
            expect(calculatePageNum([])).toBe(1);
        });
    });

    describe('getLevelColor', () => {
        it('should return correct colors for difficulty levels', () => {
            expect(getLevelColor('Easy')).toBe('rgb(67, 1 71)');
            expect(getLevelColor('Medium')).toBe('#ff9800');
            expect(getLevelColor('Hard')).toBe('rgb(233, 30, 99)');
        });

        it('should return inherit for unknown levels', () => {
            expect(getLevelColor('Unknown')).toBe('inherit');
            expect(getLevelColor('')).toBe('inherit');
            expect(getLevelColor(null)).toBe('inherit');
        });
    });

    describe('getNextReviewTime', () => {
        it('should use FSRS nextReview if available', () => {
            const nextReviewTime = new Date('2024-01-02T10:00:00').getTime();
            const problem = {
                fsrsState: {
                    nextReview: nextReviewTime
                },
                submissionTime: 1704067200000,
                proficiency: 1
            };

            const result = getNextReviewTime(problem);
            expect(result.getTime()).toBe(nextReviewTime);
        });

        it('should fallback to forggettingCurve calculation', () => {
            const problem = {
                submissionTime: 1704067200000,
                proficiency: 2 // 60 minutes
            };

            const result = getNextReviewTime(problem);
            expect(result.getTime()).toBe(1704067200000 + 60 * 60 * 1000);
        });

        it('should handle problems without fsrsState', () => {
            const problem = {
                submissionTime: 1704067200000,
                proficiency: 1 // 10 minutes
            };

            const result = getNextReviewTime(problem);
            expect(result.getTime()).toBe(1704067200000 + 10 * 60 * 1000);
        });
    });

    describe('getDelayedHours', () => {
        beforeEach(() => {
            jest.spyOn(Date, 'now').mockReturnValue(1704067200000);
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        it('should calculate delayed hours correctly', () => {
            const problem = {
                fsrsState: {
                    nextReview: 1704067200000 - (3 * 60 * 60 * 1000) // 3 hours ago
                }
            };

            expect(getDelayedHours(problem)).toBe(3);
        });

        it('should return negative for future reviews', () => {
            const problem = {
                fsrsState: {
                    nextReview: 1704067200000 + (2 * 60 * 60 * 1000) // 2 hours in future
                }
            };

            expect(getDelayedHours(problem)).toBe(-2);
        });

        it('should round to nearest hour', () => {
            const problem = {
                fsrsState: {
                    nextReview: 1704067200000 - (2.7 * 60 * 60 * 1000) // 2.7 hours ago
                }
            };

            expect(getDelayedHours(problem)).toBe(3);
        });
    });

    describe('isSubmitButton', () => {
        it('should return true for submit button', () => {
            const element = {
                getAttribute: jest.fn().mockReturnValue('true')
            };

            expect(isSubmitButton(element)).toBe(true);
            expect(element.getAttribute).toHaveBeenCalledWith('data-submit');
        });

        it('should return false for non-submit button', () => {
            const element = {
                getAttribute: jest.fn().mockReturnValue('false')
            };

            expect(isSubmitButton(element)).toBe(false);
        });

        it('should return false if attribute is missing', () => {
            const element = {
                getAttribute: jest.fn().mockReturnValue(null)
            };

            expect(isSubmitButton(element)).toBe(false);
        });
    });

    describe('getSubmissionResult', () => {
        beforeEach(() => {
            // Clear document mock
            document.getElementsByClassName = jest.fn().mockReturnValue([]);
        });

        it('should find success submission result', () => {
            const mockElement = { className: 'success-cn' };
            document.getElementsByClassName = jest.fn((className) => {
                if (className === 'success-cn') return [mockElement];
                return [];
            });

            expect(getSubmissionResult()).toBe(mockElement);
        });

        it('should find wrong answer submission result', () => {
            const mockElement = { className: 'wrong-new' };
            document.getElementsByClassName = jest.fn((className) => {
                if (className === 'wrong-new') return [mockElement];
                return [];
            });

            expect(getSubmissionResult()).toBe(mockElement);
        });

        it('should return undefined if no result found', () => {
            document.getElementsByClassName = jest.fn().mockReturnValue([]);
            expect(getSubmissionResult()).toBeUndefined();
        });

        it('should check all possible class names', () => {
            getSubmissionResult();
            expect(document.getElementsByClassName).toHaveBeenCalledTimes(9);
        });
    });

    describe('isSubmissionSuccess', () => {
        it('should return true for success class names', () => {
            expect(isSubmissionSuccess({ className: 'success-cn other-class' })).toBe(true);
            expect(isSubmissionSuccess({ className: 'success-new' })).toBe(true);
            expect(isSubmissionSuccess({ className: 'prefix success suffix' })).toBe(true);
        });

        it('should return false for non-success class names', () => {
            expect(isSubmissionSuccess({ className: 'wrong-cn' })).toBe(false);
            expect(isSubmissionSuccess({ className: 'error-new' })).toBe(false);
            expect(isSubmissionSuccess({ className: 'other-class' })).toBe(false);
        });

        it('should be case sensitive', () => {
            expect(isSubmissionSuccess({ className: 'SUCCESS-CN' })).toBe(false);
        });
    });
});