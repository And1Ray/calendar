import {DEL_SHORT_DATE_SIGN} from "../Constants";
import DateTimeFormatService from "./DateTimeFormatService";
import {Levels} from "../Interfaces";

export default class DateShortService {
    private dateTimeFormat: DateTimeFormatService;

    constructor() {
        this.dateTimeFormat = new DateTimeFormatService();
    }

    public getFormattedDateShort(date: Date = new Date(), level: Levels = Levels.DAYS): string {
        let formattedDateShort: string;
        let opts: {
            month?: string,
            year?: string,
            era?: string
        }

        if (level === Levels.DAYS) {
            opts = {month: 'long', year: 'numeric'}
            const dateFormatShort: Intl.DateTimeFormat = this.dateTimeFormat.getDateFormatter(opts);
            formattedDateShort = dateFormatShort.format(date);
            formattedDateShort = formattedDateShort.charAt(0).toUpperCase() + formattedDateShort.slice(1);
            return formattedDateShort.slice(0, formattedDateShort.length - DEL_SHORT_DATE_SIGN);
        }

        if (level === Levels.MONTHS) {
            opts = {year: 'numeric', era: 'narrow'}
            const dateFormatShort: Intl.DateTimeFormat = this.dateTimeFormat.getDateFormatter(opts);
            formattedDateShort = dateFormatShort.format(date);
            return formattedDateShort.slice(0, formattedDateShort.length - 5);
        }


        const currentYear: number = date.getFullYear();
        return `${currentYear} – ${currentYear + 15}`;
    }
}