import {CellData, Levels} from "../Interfaces";
import EventObserver from "./EventObserver";
import DateTimeFormatService from "./DateTimeFormatService";
import DaysContentService from "./DaysContentService";
import DateShortService from "./DateShortService";
import MonthsContentService from "./MonthsContentService";
import YearsContentService from "./YearsContentService";
import EventUpdateTableContent from "../Events/EventUpdateTableContent";
import {CELLS_MONTHS_AND_YEARS_LENGTH, LENGTH_OF_MONTHS} from "../Constants";
import EventNames from "../Events/EventNames";

export default class TableContentService {
    private readonly eventObserver: EventObserver;
    private readonly dateTimeFormat: DateTimeFormatService;
    private daysContentService: DaysContentService;
    private monthContentService: MonthsContentService;
    private yearsContentService: YearsContentService;
    private dateShortService: DateShortService;
    private currentYear: number;
    private currentMonth: number;
    private nowDate: string;
    private currentLevelIndex: number;
    private formattedDateShort: string;

    constructor(eventObserver: EventObserver) {
        this.eventObserver = eventObserver;
        this.dateShortService = new DateShortService();
        this.dateTimeFormat = new DateTimeFormatService();

        this.daysContentService = new DaysContentService(this.dateTimeFormat);
        this.monthContentService = new MonthsContentService(this.dateTimeFormat);
        this.yearsContentService = new YearsContentService(this.dateTimeFormat);

        this.eventObserver.on(EventNames.CLOSE, this.onClose.bind(this));
    }

    private onClose(): void {
        this.init();
    }

    public init(): void {
        this.getCurrentParams();
        this.levelSelection(this.currentLevelIndex);
    }

    private getCurrentParams(): void {
        this.currentLevelIndex = Levels.DAYS;
        const date: Date = new Date();
        this.currentYear = date.getFullYear();
        this.currentMonth = date.getMonth();
        this.nowDate = `${date.getDate()}.${this.currentMonth}.${this.currentYear}`;
        this.formattedDateShort = this.dateShortService.getFormattedDateShort();
    }

    public nextTable(): void {
        if (this.currentLevelIndex === Levels.DAYS) {
            this.currentMonth += 1;

            if (this.currentMonth > LENGTH_OF_MONTHS) {
                this.currentMonth = 0;
                this.currentYear += 1;
            }
        }

        if (this.currentLevelIndex === Levels.MONTHS) {
            this.currentYear += 1;
        }

        if (this.currentLevelIndex === Levels.YEARS) {
            this.currentYear = this.currentYear + CELLS_MONTHS_AND_YEARS_LENGTH;
        }

        this.levelSelection(this.currentLevelIndex);
    }

    public prevTable(): void {
        if (this.currentLevelIndex === Levels.DAYS) {
            this.currentMonth -= 1;

            if (this.currentMonth < 0) {
                this.currentMonth = LENGTH_OF_MONTHS;
                this.currentYear -= 1;
            }
        }

        if (this.currentLevelIndex === Levels.MONTHS) {
            this.currentYear -= 1;
        }

        if (this.currentLevelIndex === Levels.YEARS) {
            this.currentYear = this.currentYear - CELLS_MONTHS_AND_YEARS_LENGTH;
        }

        this.levelSelection(this.currentLevelIndex);
    }

    public upLevel(): void {
        if (this.currentLevelIndex >= Levels.YEARS) {
            return;
        }

        this.currentLevelIndex += 1;
        this.levelSelection(this.currentLevelIndex);
    }

    public downLevel(data: CellData): void {
        if (this.currentLevelIndex <= Levels.DAYS) {
            return;
        }

        this.currentLevelIndex -= 1;

        if (data.level === Levels.YEARS) {
            this.currentYear = data.index;
            this.currentMonth = 0;
        }

        if (data.level === Levels.MONTHS) {
            this.currentMonth = data.index;
        }

        this.levelSelection(this.currentLevelIndex);
    }

    private levelSelection(level: number): void {
        switch (level) {
            case Levels.MONTHS:
                this.triggerEvent(
                    this.monthContentService.getMonths(this.currentYear),
                    Levels.MONTHS
                );
                break;
            case Levels.YEARS:
                this.triggerEvent(
                    this.yearsContentService.getYears(this.currentYear),
                    Levels.YEARS
                );
                break;
            default:
                this.triggerEvent(
                    this.daysContentService.getDays(this.currentYear, this.currentMonth, this.nowDate),
                    Levels.DAYS
                );
        }
    }

    private triggerEvent(cellContent: CellData[], level: Levels): void {
        this.eventObserver.dispatch(new EventUpdateTableContent({
            cellContent,
            formattedDateShort: this.dateShortService.getFormattedDateShort(
                new Date(this.currentYear, this.currentMonth),
                level
            )
        }));
    }
}