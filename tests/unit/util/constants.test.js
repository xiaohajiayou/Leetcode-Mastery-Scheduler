import {
    forggettingCurve,
    months,
    PAGE_SIZE,
    CN_LABLE,
    GL_LABLE,
    SUBMIT_BUTTON_ATTRIBUTE_NAME,
    SUBMIT_BUTTON_ATTRIBUTE_VALUE,
    SUCCESS_CLASSNAME,
    SUCCESS_CLASSNAME_CN,
    SUCCESS_CLASSNAME_NEW,
    WRONG_ANSWER_CLASSNAME,
    WRONG_ANSWER_CLASSNAME_CN,
    WRONG_ANSWER_CLASSNAME_NEW,
    COMPILE_ERROR_AND_TLE_CLASSNAME,
    COMPILE_ERROR_AND_TLE_CLASSNAME_CN,
    COMPILE_ERROR_AND_TLE_CLASSNAME_NEW
} from '../../../src/popup/util/constants';

describe('Constants', () => {
    describe('Forgetting Curve', () => {
        it('should have correct forgetting curve values', () => {
            expect(forggettingCurve).toEqual([
                1 * 24 * 60,    // 1 day (1440 minutes)
                2 * 24 * 60,    // 2 days (2880 minutes)
                4 * 24 * 60,    // 4 days (5760 minutes)
                7 * 24 * 60,    // 7 days (10080 minutes)
                15 * 24 * 60    // 15 days (21600 minutes)
            ]);
        });

        it('should have 5 levels', () => {
            expect(forggettingCurve).toHaveLength(5);
        });

        it('should be in ascending order', () => {
            for (let i = 1; i < forggettingCurve.length; i++) {
                expect(forggettingCurve[i]).toBeGreaterThan(forggettingCurve[i - 1]);
            }
        });
    });

    describe('Months', () => {
        it('should have correct month abbreviations', () => {
            expect(months).toEqual([
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ]);
        });

        it('should have 12 months', () => {
            expect(months).toHaveLength(12);
        });
    });

    describe('Page Configuration', () => {
        it('should have correct page size', () => {
            expect(PAGE_SIZE).toBe(5);
        });
    });

    describe('Labels', () => {
        it('should have correct LeetCode labels', () => {
            expect(CN_LABLE).toBe('LeetCode - China ');
            expect(GL_LABLE).toBe('LeetCode - Global');
        });
    });

    describe('Submit Button Attributes', () => {
        it('should have correct submit button attribute name', () => {
            expect(SUBMIT_BUTTON_ATTRIBUTE_NAME).toBe('data-e2e-locator');
        });

        it('should have correct submit button attribute value', () => {
            expect(SUBMIT_BUTTON_ATTRIBUTE_VALUE).toBe('console-submit-button');
        });
    });

    describe('CSS Class Names', () => {
        describe('Success Classes', () => {
            it('should have correct success class names', () => {
                expect(SUCCESS_CLASSNAME).toBe('success__3Ai7');
                expect(SUCCESS_CLASSNAME_CN).toBe('text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6');
                expect(SUCCESS_CLASSNAME_NEW).toBe('text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6');
            });
        });

        describe('Wrong Answer Classes', () => {
            it('should have correct wrong answer class names', () => {
                expect(WRONG_ANSWER_CLASSNAME).toBe('error__2Ft1');
                expect(WRONG_ANSWER_CLASSNAME_CN).toBe('whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s');
                expect(WRONG_ANSWER_CLASSNAME_NEW).toBe('whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s');
            });
        });

        describe('Compile Error and TLE Classes', () => {
            it('should have correct compile error and TLE class names', () => {
                expect(COMPILE_ERROR_AND_TLE_CLASSNAME).toBe('error__10k9');
                expect(COMPILE_ERROR_AND_TLE_CLASSNAME_CN).toBe('mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s');
                expect(COMPILE_ERROR_AND_TLE_CLASSNAME_NEW).toBe('mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s');
            });
        });
    });

    describe('Constants Immutability', () => {
        it('should allow modification of array constants (not frozen by default)', () => {
            const originalValue = forggettingCurve[0];
            const originalMonth = months[0];
            
            // JavaScript arrays are mutable by default unless Object.freeze is used
            // This test documents the current behavior
            forggettingCurve[0] = 999;
            months[0] = 'XXX';
            
            // Values will be changed (this is expected behavior without freezing)
            expect(forggettingCurve[0]).toBe(999);
            expect(months[0]).toBe('XXX');
            
            // Restore original values for other tests
            forggettingCurve[0] = originalValue;
            months[0] = originalMonth;
        });
    });

    describe('Type Consistency', () => {
        it('should have number types for numeric constants', () => {
            expect(typeof PAGE_SIZE).toBe('number');
            forggettingCurve.forEach(value => {
                expect(typeof value).toBe('number');
            });
        });

        it('should have string types for string constants', () => {
            expect(typeof CN_LABLE).toBe('string');
            expect(typeof GL_LABLE).toBe('string');
            expect(typeof SUBMIT_BUTTON_ATTRIBUTE_NAME).toBe('string');
            expect(typeof SUBMIT_BUTTON_ATTRIBUTE_VALUE).toBe('string');
            expect(typeof SUCCESS_CLASSNAME).toBe('string');
            expect(typeof WRONG_ANSWER_CLASSNAME).toBe('string');
            expect(typeof COMPILE_ERROR_AND_TLE_CLASSNAME).toBe('string');
            months.forEach(month => {
                expect(typeof month).toBe('string');
            });
        });
    });

    describe('Class Name Patterns', () => {
        it('should have consistent patterns for CN class names', () => {
            // CN classes should contain text color classes
            expect(SUCCESS_CLASSNAME_CN).toContain('text-green-s');
            expect(WRONG_ANSWER_CLASSNAME_CN).toContain('text-red-s');
            expect(COMPILE_ERROR_AND_TLE_CLASSNAME_CN).toContain('text-red-s');
        });

        it('should have consistent patterns for NEW class names', () => {
            // NEW classes should be similar to CN classes (same UI framework)
            expect(SUCCESS_CLASSNAME_NEW).toBe(SUCCESS_CLASSNAME_CN);
            expect(WRONG_ANSWER_CLASSNAME_NEW).toBe(WRONG_ANSWER_CLASSNAME_CN);
            expect(COMPILE_ERROR_AND_TLE_CLASSNAME_NEW).toBe(COMPILE_ERROR_AND_TLE_CLASSNAME_CN);
        });

        it('should have different patterns for old global class names', () => {
            // Old classes use CSS module pattern (hash suffixes)
            expect(SUCCESS_CLASSNAME).toMatch(/^[a-z]+__[a-zA-Z0-9]+$/);
            expect(WRONG_ANSWER_CLASSNAME).toMatch(/^[a-z]+__[a-zA-Z0-9]+$/);
            expect(COMPILE_ERROR_AND_TLE_CLASSNAME).toMatch(/^[a-z]+__[a-zA-Z0-9]+$/);
        });
    });
});