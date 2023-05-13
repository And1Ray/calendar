import {CellData, Levels, Mark} from "../Interfaces";
import {LENGTH_DAY_CELLS, LENGTH_OF_DAYS} from "../Constants";
import DateTimeFormatService from "./DateTimeFormatService";

export default class DaysContentService {
    private dateTimeFormat: DateTimeFormatService;

    constructor(dateTimeFormat: DateTimeFormatService) {
        this.dateTimeFormat = dateTimeFormat;
    }

    public getDays(currentYear: number, currentMonth: number): CellData[] {
        const weekdays: CellData[] = this.getWeekdays()
        let days: CellData[] = this.getDatesInMonth(currentYear, currentMonth, Mark.CURRENT);

        const firstDaysPosition: number = weekdays.findIndex((item: CellData): boolean => days[0].index === item.index);
        if (firstDaysPosition > 0) {
            const prevMonthDays: CellData[] = this.getDatesInMonth(currentYear, currentMonth - 1, Mark.PREV);
            days = [...prevMonthDays.slice((prevMonthDays.length - 1) - firstDaysPosition), ...days];
        }

        const lastDaysLength: number = LENGTH_DAY_CELLS - days.length;
        if (lastDaysLength > 0) {
            const nextMonthDays: CellData[] = this.getDatesInMonth(currentYear, currentMonth + 1, Mark.NEXT);
            days = [...days, ...nextMonthDays.slice(0, lastDaysLength)]
        }

        return [...weekdays, ...days];
    }

    private getWeekdays(): CellData[] {
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

        return [...weekdays.slice(1), weekdays[0]];
    }

    private getDatesInMonth(year: number, month: number, mark: string): CellData[] {
        const formatterWeekday: Intl.DateTimeFormat = this.dateTimeFormat.getDateFormatter({weekday: 'short'});
        const daysInMonthLength: number = new Date(year, month + 1, 0).getDate();
        const days = [];
        for (let i: number = 1; i <= daysInMonthLength; i++) {
            const date: Date = new Date(year, month, i);
            days.push({
                name: formatterWeekday.formatToParts(date)[0].value,
                day: i,
                index: date.getDay(),
                mark,
                level: Levels.DAYS
            })
        }

        return days;
    }
}