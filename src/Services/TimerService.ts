import EventObserver from "./EventObserver";
import EventTimeupdate from "../Events/EventTimeupdate";
import EventNames from "../Events/EventNames";
import DateTimeFormatService from "./DateTimeFormatService";

const INTERVAL = 1000;
const LENGTH_OF_DAYS = 7;
const LENGTH_DAY_CELLS = 42;

interface Day {
    name: string,
    day?: number,
    index: number,
    mark: string
}

export default class TimerService {
    private eventObserver: EventObserver;
    private dateTimeFormat: DateTimeFormatService;
    private intervalId: number;
    private dayOfWeekNames: string[];
    private readonly formattedDays: string[];
    private weekdays: Day[]
    private days: Day[]

    constructor(eventObserver: EventObserver) {
        this.eventObserver = eventObserver;
        this.dateTimeFormat = new DateTimeFormatService();
        this.formattedDays = [];

        this.getCellsContent();

        this.eventObserver.on(EventNames.OPEN, this.timeUpdate.bind(this));
        this.eventObserver.on(EventNames.CLOSE, this.clearTimeUpdate.bind(this));
    }

    private timeUpdate(): void {
        this.getTime();
        this.intervalId = window.setInterval(this.getTime.bind(this), INTERVAL);
    }

    private getTime(): void {
        const date: Date = new Date();

        this.eventObserver.dispatch(new EventTimeupdate({
            formattedTime: this.getFormattedTime(date),
            formattedDateFull: this.getFormattedDateFull(date),
            formattedDateShort: this.getFormattedDateShort(date),
            date,
            now: Date.now()
        }))
    }

    private getFormattedTime(date: Date): string {
        const timeFormat: Intl.DateTimeFormat = this.dateTimeFormat.getDateFormatter({timeStyle: 'medium'});
        return timeFormat.format(date);
    }

    private getFormattedDateFull(date: Date): string {
        const dateFormatFull: Intl.DateTimeFormat = this.dateTimeFormat.getDateFormatter({
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        return dateFormatFull.format(date);
    }

    private getFormattedDateShort(date: Date): string {
        const dateFormatShort: Intl.DateTimeFormat = this.dateTimeFormat.getDateFormatter({
            month: 'long',
            year: 'numeric'
        });

        let formattedDateShort: string = dateFormatShort.format(date);
        formattedDateShort = formattedDateShort.charAt(0).toUpperCase() + formattedDateShort.slice(1);
        return formattedDateShort.slice(0, formattedDateShort.length - 3);
    }

    private clearTimeUpdate(): void {
        clearInterval(this.intervalId);
    }

    public getCellsContent(): Day[] {
        const date: Date = new Date();
        const currentYear: number = date.getFullYear();
        const currentMonth: number = date.getMonth();

        const days: Day[] = this.getDays(currentYear, currentMonth);
        return days;
    }

    private getDays(currentYear: number, currentMonth: number): Day[] {
        const weekdays: Day[] = this.getWeekdays()
        let days: Day[] = this.getDatesInMonth(currentYear, currentMonth, 'current');

        const firstDaysPosition: number = weekdays.findIndex((item: Day): boolean => days[0].index === item.index);
        if (firstDaysPosition > 0) {
            const prevMonthDays: Day[] = this.getDatesInMonth(currentYear, currentMonth - 1, 'prev');
            days = [...prevMonthDays.slice((prevMonthDays.length - 1) - firstDaysPosition), ...days];
        }

        const lastDaysLength: number = LENGTH_DAY_CELLS - days.length;
        if (lastDaysLength > 0) {
            const nextMonthDays: Day[] = this.getDatesInMonth(currentYear, currentMonth + 1, 'next');
            days = [...days, ...nextMonthDays.slice(0, lastDaysLength)]
        }

        return [...weekdays, ...days];
    }

    private getWeekdays(): Day[] {
        const firstDayOfMonth: Date = new Date();
        firstDayOfMonth.setDate(1);
        const firstWeekday: number = firstDayOfMonth.getDay();

        const weekdays: Day[] = new Array(LENGTH_OF_DAYS)
            .fill(0)
            .map((_, index: number): Day => {
                const date: Date = new Date();
                date.setDate(1 + index - firstWeekday);
                const formatter: Intl.DateTimeFormat = this.dateTimeFormat.getDateFormatter({weekday: 'short'})
                return {
                    name: formatter.format(date),
                    index: date.getDay(),
                    mark: 'title'
                };
            });

        return [...weekdays.slice(1), weekdays[0]];
    }

    private getDatesInMonth(year: number, month: number, mark: string): Day[] {
        const formatterWeekday: Intl.DateTimeFormat = this.dateTimeFormat.getDateFormatter({weekday: 'short'});
        const daysInMonthLength = new Date(year, month + 1, 0).getDate();
        const days = [];
        for (let i = 1; i <= daysInMonthLength; i++) {
            const date: Date = new Date(year, month, i);
            days.push({
                name: formatterWeekday.formatToParts(date)[0].value,
                day: i,
                index: date.getDay(),
                mark
            })
        }

        return days;
    }
}