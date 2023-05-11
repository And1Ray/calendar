import {CellData, Mark} from "../Interfaces";

export default class MonthsContentService {
    constructor() {
        // На какие события получаем года? -> Перелистывание и заход на уровень
        // На какие события получаем месяца? -> Перелистывание и заход на уровень
    }

    public getMonths(currentYear: number, currentMonth: number): CellData[] {
        return [
            {
                name: '',
                index: 0,
                mark: Mark.CURRENT
            }
        ];
    }
}