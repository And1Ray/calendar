export interface CellData {
    name: string;
    day?: number;
    index: number;
    mark: string;
    level: Levels;
}
export declare enum Mark {
    CURRENT = "current",
    PREV = "prev",
    NEXT = "next",
    TITLE = "title"
}
export declare enum Levels {
    DAYS = 0,
    MONTHS = 1,
    YEARS = 2
}
