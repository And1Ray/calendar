import {CellData, Levels, Mark} from "../Interfaces";
import DateTimeFormatService from "./DateTimeFormatService";
import {CELLS_CURRENT_MONTH_AND_YEARS_LENGTH, CELLS_MONTHS_AND_YEARS_LENGTH} from "../Constants";

export default class YearsContentService {
    private dateTimeFormat: DateTimeFormatService;

    constructor(dateTimeFormat: DateTimeFormatService) {
        this.dateTimeFormat = dateTimeFormat;
    }

    public getYears(currentYear: number): CellData[] {
        const years: CellData[] = [];

        for (let i: number = 0; i < CELLS_MONTHS_AND_YEARS_LENGTH; i++) {
            const yearDate: Date = new Date(currentYear + i, 0);
            const year: string = this.dateTimeFormat.getDateFormatter({year: 'numeric'}).format(yearDate);
            const yearIndex: number = yearDate.getFullYear();
            years.push({
                name: year,
                index: yearIndex,
                mark: i >= CELLS_CURRENT_MONTH_AND_YEARS_LENGTH ? Mark.NEXT : Mark.CURRENT,
                level: Levels.YEARS
            });
        }

        return years;
    }
}