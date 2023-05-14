import { CellData } from "../Interfaces";
import DateTimeFormatService from "./DateTimeFormatService";
export default class MonthsContentService {
    private dateTimeFormat;
    constructor(dateTimeFormat: DateTimeFormatService);
    getMonths(currentYear: number, currentMonth: number): CellData[];
}
