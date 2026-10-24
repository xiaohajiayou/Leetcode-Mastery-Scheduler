import {
    DEFAULT_DAY_START_HOUR,
    normalizeDayStartHour,
    getLogicalDayStart,
    isSameLogicalDay,
    logicalDayDiff
} from '../../../src/popup/util/dayBoundary';

// 使用本地时间构造，避免依赖运行环境时区
const at = (y, m, d, h = 0, min = 0) => new Date(y, m - 1, d, h, min).getTime();

describe('dayBoundary', () => {
    describe('normalizeDayStartHour', () => {
        it('should accept integer hours 0-23', () => {
            expect(normalizeDayStartHour(0)).toBe(0);
            expect(normalizeDayStartHour(4)).toBe(4);
            expect(normalizeDayStartHour('23')).toBe(23);
        });

        it('should fall back to default for invalid values', () => {
            expect(normalizeDayStartHour(undefined)).toBe(DEFAULT_DAY_START_HOUR);
            expect(normalizeDayStartHour(null)).toBe(DEFAULT_DAY_START_HOUR);
            expect(normalizeDayStartHour(24)).toBe(DEFAULT_DAY_START_HOUR);
            expect(normalizeDayStartHour(-1)).toBe(DEFAULT_DAY_START_HOUR);
            expect(normalizeDayStartHour(3.5)).toBe(DEFAULT_DAY_START_HOUR);
            expect(normalizeDayStartHour('abc')).toBe(DEFAULT_DAY_START_HOUR);
        });
    });

    describe('getLogicalDayStart', () => {
        it('should behave like midnight boundary by default', () => {
            expect(getLogicalDayStart(at(2025, 3, 10, 1, 30))).toBe(at(2025, 3, 10));
        });

        it('should count time before day start hour as previous day', () => {
            expect(getLogicalDayStart(at(2025, 3, 10, 1, 30), 4)).toBe(at(2025, 3, 9, 4));
            expect(getLogicalDayStart(at(2025, 3, 10, 4, 0), 4)).toBe(at(2025, 3, 10, 4));
            expect(getLogicalDayStart(at(2025, 3, 10, 23, 59), 4)).toBe(at(2025, 3, 10, 4));
        });

        it('should handle month boundary', () => {
            expect(getLogicalDayStart(at(2025, 3, 1, 2), 4)).toBe(at(2025, 2, 28, 4));
        });
    });

    describe('isSameLogicalDay', () => {
        it('should treat late-night review as same day with day start hour', () => {
            const evening = at(2025, 3, 9, 22);
            const afterMidnight = at(2025, 3, 10, 1);
            expect(isSameLogicalDay(evening, afterMidnight, 0)).toBe(false);
            expect(isSameLogicalDay(evening, afterMidnight, 4)).toBe(true);
        });

        it('should allow review next evening after a past-midnight review', () => {
            // 凌晨 1 点做完「昨天」的题，当天晚上 20 点应该是新的一天
            const afterMidnight = at(2025, 3, 10, 1);
            const nextEvening = at(2025, 3, 10, 20);
            expect(isSameLogicalDay(afterMidnight, nextEvening, 0)).toBe(true);
            expect(isSameLogicalDay(afterMidnight, nextEvening, 4)).toBe(false);
        });
    });

    describe('logicalDayDiff', () => {
        it('should compute day difference using logical days', () => {
            const now = at(2025, 3, 10, 1);
            const due = at(2025, 3, 10, 20);
            expect(logicalDayDiff(now, due, 0)).toBe(0);
            expect(logicalDayDiff(now, due, 4)).toBe(1);
        });

        it('should be negative for overdue reviews', () => {
            expect(logicalDayDiff(at(2025, 3, 10, 12), at(2025, 3, 8, 12), 4)).toBe(-2);
        });
    });
});
