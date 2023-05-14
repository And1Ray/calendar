import { CellData } from "../Interfaces";
import EventObserver from "./EventObserver";
export default class TableContentService {
    private readonly eventObserver;
    private readonly dateTimeFormat;
    private daysContentService;
    private monthContentService;
    private yearsContentService;
    private dateShortService;
    private currentYear;
    private currentMonth;
    private currentLevelIndex;
    private formattedDateShort;
    constructor(eventObserver: EventObserver);
    private onClose;
    init(): void;
    private getCurrentParams;
    nextTable(): void;
    prevTable(): void;
    upLevel(): void;
    downLevel(data: CellData): void;
    private levelSelection;
    private triggerEvent;
}
