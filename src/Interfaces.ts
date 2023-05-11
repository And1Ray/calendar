export interface CellData {
    name: string,
    day?: number,
    index: number,
    mark: string
}

export enum Mark {
    CURRENT = 'current',
    PREV = 'prev',
    NEXT = 'next',
    TITLE = 'title'
}