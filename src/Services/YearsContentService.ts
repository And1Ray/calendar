import {CellData, Mark} from "../Interfaces";

export default class YearsContentService {
    constructor() {
        // На какие события получаем года? -> Перелистывание и заход на уровень
        // На какие события получаем месяца? -> Перелистывание и заход на уровень
    }

    public getYears(currentYear: number): CellData[] {
        return [
            {
                name: '',
                index: 0,
                mark: Mark.CURRENT
            }
        ];
    }
}