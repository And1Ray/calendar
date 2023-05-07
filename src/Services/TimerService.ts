import EventObserver from "./EventObserver";
import EventTimeupdate from "../Events/EventTimeupdate";
import EventNames from "../Events/EventNames";

const INTERVAL = 1000;

export default class TimerService {
    private eventObserver: EventObserver;
    private intervalId: number;
    private readonly clientLocale: string;

    constructor(eventObserver: EventObserver) {
        this.eventObserver = eventObserver;
        this.clientLocale = this.getLocale();

        this.eventObserver.on(EventNames.OPEN, this.timeUpdate.bind(this));
        this.eventObserver.on(EventNames.CLOSE, this.clearTimeUpdate.bind(this));
    }

    private timeUpdate(): void {
        this.getTime();
        this.intervalId = window.setInterval(this.getTime.bind(this), INTERVAL);
    }

    private getTime() {
        const date: Date = new Date();

        this.eventObserver.dispatch(new EventTimeupdate({
            formattedTime: this.getFormattedTime(date),
            formattedDateFull: this.getFormattedDateFull(date),
            formattedDateShort: this.getFormattedDateShort(date),
            locale: this.clientLocale,
            date,
            now: Date.now()
        }))
    }

    private getFormattedTime(date: Date): string {
        const timeFormat = new Intl.DateTimeFormat(this.clientLocale, {
            timeStyle: 'medium'
        });
        return timeFormat.format(date);
    }

    private getFormattedDateFull(date: Date): string {
        const dateFormatFull = new Intl.DateTimeFormat(this.clientLocale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        return dateFormatFull.format(date);
    }

    private getFormattedDateShort(date: Date): string {
        const dateFormatShort = new Intl.DateTimeFormat(this.clientLocale, {
            month: 'long',
            year: 'numeric'
        });
        let formattedDateShort = dateFormatShort.format(date);
        formattedDateShort = formattedDateShort.charAt(0).toUpperCase() + formattedDateShort.slice(1);
        return formattedDateShort.slice(0, formattedDateShort.length - 3);
    }

    private getLocale() {
        return (
            navigator.languages.find(item => {
                let node = item.toLowerCase().split('-');
                return node[0] === node[1];
            }) || 'en-US'
        );
    }

    private clearTimeUpdate(): void {
        clearInterval(this.intervalId);
    }
}