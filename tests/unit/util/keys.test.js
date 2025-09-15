import {
    PROBLEM_KEY,
    CN_PROBLEM_KEY,
    CN_MODE,
    REVIEW_INTV_KEY,
    OPS_HISTORY_KEY,
    PROBLEM_SORT_BY_KEY,
    CONFIG_KEY,
    CONFIG_INNER_KEY_ENABLE_CLOUD,
    DEFAULT_CARD_LIMIT_KEY,
    DEFAULT_CARD_LIMIT_VALUE
} from '../../../src/popup/util/keys';

describe('Keys Constants', () => {
    describe('Problem Keys', () => {
        it('should have correct problem storage keys', () => {
            expect(PROBLEM_KEY).toBe('records');
            expect(CN_PROBLEM_KEY).toBe('cn_records');
        });

        it('should have different keys for international and CN versions', () => {
            expect(PROBLEM_KEY).not.toBe(CN_PROBLEM_KEY);
        });
    });

    describe('Mode Keys', () => {
        it('should have correct CN mode key', () => {
            expect(CN_MODE).toBe('cn_mode');
        });
    });

    describe('Operation History Keys', () => {
        it('should have correct operation history key', () => {
            expect(OPS_HISTORY_KEY).toBe('operation_history');
        });
    });

    describe('Configuration Keys', () => {
        it('should have correct config keys', () => {
            expect(CONFIG_KEY).toBe('configs');
            expect(CONFIG_INNER_KEY_ENABLE_CLOUD).toBe('enable_cloud');
        });

        it('should have correct review interval key', () => {
            expect(REVIEW_INTV_KEY).toBe('review_intervals');
        });

        it('should have correct problem sort key', () => {
            expect(PROBLEM_SORT_BY_KEY).toBe('problem_sort_by');
        });
    });

    describe('Card Limit Configuration', () => {
        it('should have correct default card limit key', () => {
            expect(DEFAULT_CARD_LIMIT_KEY).toBe('defaultCardLimit');
        });

        it('should have correct default card limit value', () => {
            expect(DEFAULT_CARD_LIMIT_VALUE).toBe(3);
            expect(typeof DEFAULT_CARD_LIMIT_VALUE).toBe('number');
        });
    });

    describe('Key Naming Conventions', () => {
        it('should use consistent naming patterns', () => {
            // Most keys use underscore separators
            expect(CN_MODE).toContain('_');
            expect(CN_PROBLEM_KEY).toContain('_');
            expect(REVIEW_INTV_KEY).toContain('_');
            expect(OPS_HISTORY_KEY).toContain('_');
            expect(PROBLEM_SORT_BY_KEY).toContain('_');
            expect(CONFIG_INNER_KEY_ENABLE_CLOUD).toContain('_');
            
            // Some keys use camelCase
            expect(DEFAULT_CARD_LIMIT_KEY).toMatch(/^[a-z][a-zA-Z]+$/);
        });
    });

    describe('Key Uniqueness', () => {
        it('should have all unique keys', () => {
            const allKeys = [
                PROBLEM_KEY,
                CN_PROBLEM_KEY,
                CN_MODE,
                REVIEW_INTV_KEY,
                OPS_HISTORY_KEY,
                PROBLEM_SORT_BY_KEY,
                CONFIG_KEY,
                CONFIG_INNER_KEY_ENABLE_CLOUD,
                DEFAULT_CARD_LIMIT_KEY
            ];

            const uniqueKeys = new Set(allKeys);
            expect(uniqueKeys.size).toBe(allKeys.length);
        });
    });

    describe('Type Consistency', () => {
        it('should have string type for all keys', () => {
            const stringKeys = [
                PROBLEM_KEY,
                CN_PROBLEM_KEY,
                CN_MODE,
                REVIEW_INTV_KEY,
                OPS_HISTORY_KEY,
                PROBLEM_SORT_BY_KEY,
                CONFIG_KEY,
                CONFIG_INNER_KEY_ENABLE_CLOUD,
                DEFAULT_CARD_LIMIT_KEY
            ];

            stringKeys.forEach(key => {
                expect(typeof key).toBe('string');
            });
        });

        it('should have number type for default values', () => {
            expect(typeof DEFAULT_CARD_LIMIT_VALUE).toBe('number');
        });
    });

    describe('CN Version Keys Pattern', () => {
        it('should have cn_ prefix for Chinese version keys', () => {
            expect(CN_PROBLEM_KEY.startsWith('cn_')).toBe(true);
            expect(CN_MODE.startsWith('cn_')).toBe(true);
        });
    });
});