import { CellData } from "../Interfaces";
import DateTimeFormatService from "./DateTimeFormatService";
export default class DaysContentService {
    private dateTimeFormat;
    constructor(dateTimeFormat: DateTimeFormatService);
    getDays(currentYear: number, currentMonth: number): CellData[];
    private getWeekdays;
    private getDatesInMonth;
}
