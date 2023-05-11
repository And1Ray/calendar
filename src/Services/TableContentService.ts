import {CellData} from "../Interfaces";
import EventObserver from "./EventObserver";
import DateTimeFormatService from "./DateTimeFormatService";
import DaysContentService from "./DaysContentService";
import EventPrevTableContent from "../Events/EventPrevTableContent";
import EventNextTableContent from "../Events/EventNextTableContent";
import DateShortService from "./DateShortService";

export default class TableContentService {
    private readonly eventObserver: EventObserver;
    private dateTimeFormat: DateTimeFormatService;
    private daysContentService: DaysContentService;
    private dateShortService: DateShortService;
    private currentYear: number;
    private currentMonth: number;

    public years: CellData[];
    public months: CellData[];
    public days: CellData[];
    constructor(eventObserver: EventObserver) {
        this.eventObserver = eventObserver;
        this.dateTimeFormat = new DateTimeFormatService();
        this.daysContentService = new DaysContentService();
        this.dateShortService = new DateShortService(this.eventObserver);

        this.getCurrentYearAndMonth();
        this.daysCellContent = this.daysContentService.getDays(this.currentYear, this.currentMonth);
    }

    public get daysCellContent(): CellData[] {
        return this.days;
    }

    private set daysCellContent(days: CellData[]) {
        this.days = days;
    }

    public get monthsCellContent(): CellData[] {
        return this.months;
    }

    private set monthsCellContent(months: CellData[]) {
        this.months = months;
    }

    public get yearsCellContent(): CellData[] {
        return this.years;
    }

    private set yearsCellContent(years: CellData[]) {
        this.years = years;
    }

    private getCurrentYearAndMonth(): void {
        const date: Date = new Date();
        this.currentYear = date.getFullYear();
        this.currentMonth = date.getMonth();
    }

    public nextMonthDays(): void {
        this.currentMonth = this.currentMonth + 1;
        this.daysCellContent = this.daysContentService.getDays(this.currentYear, this.currentMonth);

        this.eventObserver.dispatch(new EventNextTableContent({
            cellContent: this.daysCellContent,
            formattedDateShort: this.dateShortService.getFormattedDateShort(new Date(this.currentYear, this.currentMonth))
        }));
    }

    public prevMonthDays(): void {
        this.currentMonth = this.currentMonth - 1;
        this.daysCellContent = this.daysContentService.getDays(this.currentYear, this.currentMonth);

        this.eventObserver.dispatch(new EventPrevTableContent({
            cellContent: this.daysCellContent,
            formattedDateShort: this.dateShortService.getFormattedDateShort(new Date(this.currentYear, this.currentMonth))
        }));
    }

    public getFormattedDateShort(): string {
        return this.dateShortService.getFormattedDateShort();
    }
}