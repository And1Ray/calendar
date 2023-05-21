import {CellData, Levels, Mark} from "../Interfaces";
import DateTimeFormatService from "./DateTimeFormatService";
import {CELLS_CURRENT_MONTH_AND_YEARS_LENGTH, CELLS_MONTHS_AND_YEARS_LENGTH} from "../Constants";

export default class MonthsContentService {
    private dateTimeFormat: DateTimeFormatService;

    constructor(dateTimeFormat: DateTimeFormatService) {
        this.dateTimeFormat = dateTimeFormat;
    }

    public getMonths(currentYear: number): CellData[] {
        const months: CellData[] = [];

        for (let i: number = 0; i < CELLS_MONTHS_AND_YEARS_LENGTH; i++) {
            const monthDate: Date = new Date(currentYear, i);
            const monthName: string = this.dateTimeFormat.getDateFormatter({month: 'short'}).format(monthDate);
            const monthIndex: number = monthDate.getMonth();
            months.push({
                name: monthName,
                index: monthIndex,
                mark: i >= CELLS_CURRENT_MONTH_AND_YEARS_LENGTH ? Mark.NEXT : Mark.CURRENT,
                level: Levels.MONTHS
            });
        }

        return months;
    }
}