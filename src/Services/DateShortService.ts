import {DEL_SHORT_DATE_SIGN} from "../Constants";
import DateTimeFormatService from "./DateTimeFormatService";
import EventObserver from "./EventObserver";

export default class DateShortService {
    private dateTimeFormat: DateTimeFormatService;

    constructor(eventObserver: EventObserver) {
        this.dateTimeFormat = new DateTimeFormatService();
    }

    public getFormattedDateShort(date: Date = new Date()): string {
        const dateFormatShort: Intl.DateTimeFormat = this.dateTimeFormat.getDateFormatter({
            month: 'long',
            year: 'numeric'
        });

        let formattedDateShort: string = dateFormatShort.format(date);
        formattedDateShort = formattedDateShort.charAt(0).toUpperCase() + formattedDateShort.slice(1);
        return formattedDateShort.slice(0, formattedDateShort.length - DEL_SHORT_DATE_SIGN);
    }
}