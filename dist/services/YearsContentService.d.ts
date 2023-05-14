import { CellData } from "../Interfaces";
import DateTimeFormatService from "./DateTimeFormatService";
export default class YearsContentService {
    private dateTimeFormat;
    constructor(dateTimeFormat: DateTimeFormatService);
    getYears(currentYear: number): CellData[];
}
