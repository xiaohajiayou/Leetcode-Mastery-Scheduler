// 类似 Anki 的「下一天开始于」：在 dayStartHour 点之前的时间仍算作前一天
// 例如 dayStartHour = 4 时，凌晨 1 点的复习记录属于前一天

export const DEFAULT_DAY_START_HOUR = 0;

const DAY_MS = 24 * 60 * 60 * 1000;

export const normalizeDayStartHour = (hour) => {
    const value = Number(hour);
    return Number.isInteger(value) && value >= 0 && value <= 23 ? value : DEFAULT_DAY_START_HOUR;
};

// 返回 time 所属逻辑日的起点（本地时间 dayStartHour:00）的时间戳
export const getLogicalDayStart = (time, dayStartHour = DEFAULT_DAY_START_HOUR) => {
    const hour = normalizeDayStartHour(dayStartHour);
    const date = new Date(time);
    if (date.getHours() < hour) {
        date.setDate(date.getDate() - 1);
    }
    date.setHours(hour, 0, 0, 0);
    return date.getTime();
};

export const isSameLogicalDay = (a, b, dayStartHour = DEFAULT_DAY_START_HOUR) => {
    return getLogicalDayStart(a, dayStartHour) === getLogicalDayStart(b, dayStartHour);
};

// to 所在逻辑日 - from 所在逻辑日 的天数差（四舍五入以兼容夏令时 23/25 小时的日子）
export const logicalDayDiff = (from, to, dayStartHour = DEFAULT_DAY_START_HOUR) => {
    return Math.round((getLogicalDayStart(to, dayStartHour) - getLogicalDayStart(from, dayStartHour)) / DAY_MS);
};
