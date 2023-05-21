export interface CellData {
    name: string,
    day?: number,
    month?: number,
    year?: number,
    index: number,
    mark: string,
    level: Levels
}

export enum Mark {
    CURRENT = 'current',
    PREV = 'prev',
    NEXT = 'next',
    TITLE = 'title',
    NOW = 'now'
}

export enum Levels {
    DAYS,
    MONTHS,
    YEARS
}

export interface Styles {
    [key: string]: string;
}