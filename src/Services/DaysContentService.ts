import {CellData, Levels, Mark} from "../Interfaces";
import {
    FIRST_DAY_OF_WEEK_DEFAULT,
    FIRST_DAY_OF_WEEK_WITHOUT_MONDAY,
    LENGTH_DAY_CELLS,
    LENGTH_OF_DAYS
} from "../Constants";
import DateTimeFormatService from "./DateTimeFormatService";

type WeekDays = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export default class DaysContentService {
    private dateTimeFormat: DateTimeFormatService;

    constructor(dateTimeFormat: DateTimeFormatService) {
        this.dateTimeFormat = dateTimeFormat;
    }

    public getDays(year: number, month: number, now?: string): CellData[] {
        const weekdays: CellData[] = this.getWeekdays();
        let days: CellData[] = this.getDatesInMonth(year, month, Mark.CURRENT, now);

        const firstDaysPosition: number = weekdays.findIndex((item: CellData): boolean => days[0].index === item.index);
        if (firstDaysPosition > 0) {
            const prevMonthDays: CellData[] = this.getDatesInMonth(year, month - 1, Mark.PREV);
            days = [...prevMonthDays.slice((prevMonthDays.length) - firstDaysPosition), ...days];
        }

        const lastDaysLength: number = LENGTH_DAY_CELLS - days.length;
        if (lastDaysLength > 0) {
            const nextMonthDays: CellData[] = this.getDatesInMonth(year, month + 1, Mark.NEXT);
            days = [...days, ...nextMonthDays.slice(0, lastDaysLength)]
        }

        return [...weekdays, ...days];
    }

    private getWeekdays(): CellData[] {
        const locale = this.dateTimeFormat.getLocale();
        const firstDayOfWeek: number = FIRST_DAY_OF_WEEK_WITHOUT_MONDAY.has(locale)
            ? FIRST_DAY_OF_WEEK_WITHOUT_MONDAY.get(locale) as number
            : FIRST_DAY_OF_WEEK_DEFAULT;

        const firstDayOfMonth: Date = new Date();
        firstDayOfMonth.setDate(1);
        const firstWeekday: number = firstDayOfMonth.getDay();

        const weekdays: CellData[] = new Array(LENGTH_OF_DAYS)
            .fill(0)
            .map((_, index: number): CellData => {
                const date: Date = new Date();
                date.setDate(1 + index - firstWeekday);
                const formatter: Intl.DateTimeFormat = this.dateTimeFormat.getDateFormatter({weekday: 'short'})
                return {
                    name: formatter.format(date),
                    index: date.getDay(),
                    mark: 'title',
                    level: Levels.DAYS
                };
            });

        return [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)];
    }


    private getDatesInMonth(year: number, month: number, mark: string, now?: string): CellData[] {
        const formatterWeekday: Intl.DateTimeFormat = this.dateTimeFormat.getDateFormatter({weekday: 'short'});
        const daysInMonthLength: number = new Date(year, month + 1, 0).getDate();
        const days = [];
        for (let i: number = 1; i <= daysInMonthLength; i++) {
            const date: Date = new Date(year, month, i);
            days.push({
                name: formatterWeekday.formatToParts(date)[0].value,
                day: i,
                month,
                year,
                index: date.getDay(),
                mark: `${i}.${month}.${year}` === now ? Mark.NOW : mark,
                level: Levels.DAYS
            })
        }

        return days;
    }
}