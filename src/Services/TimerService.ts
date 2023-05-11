import EventObserver from "./EventObserver";
import EventTimeupdate from "../Events/EventTimeupdate";
import EventNames from "../Events/EventNames";
import DateTimeFormatService from "./DateTimeFormatService";
import {TIMEUPDATE_INTERVAL} from "../Constants";

export default class TimerService {
    private eventObserver: EventObserver;
    private dateTimeFormat: DateTimeFormatService;
    private intervalId: number;

    constructor(eventObserver: EventObserver) {
        this.eventObserver = eventObserver;
        this.dateTimeFormat = new DateTimeFormatService();

        this.eventObserver.on(EventNames.OPEN, this.timeUpdate.bind(this));
        this.eventObserver.on(EventNames.CLOSE, this.clearTimeUpdate.bind(this));
    }

    private timeUpdate(): void {
        this.getTime();
        this.intervalId = window.setInterval(this.getTime.bind(this), TIMEUPDATE_INTERVAL);
    }

    private getTime(): void {
        const date: Date = new Date();

        this.eventObserver.dispatch(new EventTimeupdate({
            formattedTime: this.getFormattedTime(date),
            formattedDateFull: this.getFormattedDateFull(date),
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

    private clearTimeUpdate(): void {
        clearInterval(this.intervalId);
    }
}