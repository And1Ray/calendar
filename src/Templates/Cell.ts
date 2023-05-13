import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import {CellData, Levels, Mark} from "../Interfaces";
import EventNames from "../Events/EventNames";
import TableContentService from "../Services/TableContentService";

export default class Cell extends HTMLService {
    private readonly data: CellData;
    private tableContentService: TableContentService;

    constructor(eventObserver: EventObserver, tableContentService: TableContentService, data: CellData) {
        super(eventObserver);
        this.tableContentService = tableContentService;

        this.data = data;

        if (!this.data) {
            return;
        }

        let color: string = '#777777';
        if (this.data.mark === Mark.CURRENT || this.data.mark === Mark.TITLE) {
            color = '#EFEFEF';
        }

        if (this.data.level === Levels.DAYS) {
            this.setStyles(`
                display: inline-flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                width: 48px;
                height: 40px;
                color: ${color};
                ${this.data.mark === Mark.TITLE ? 'font-size: 14px;' : ''}
            `);
        } else {
            this.setStyles(`
                display: inline-flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                width: 82px;
                height: 70px;
                color: #E0E0E0;
            `);
        }

        this.data.day
            ? this.setContent(String(this.data.day))
            : this.setContent(this.data.name);

        this.getElement.addEventListener(EventNames.CLICK, this.onClick.bind(this));
    }

    private onClick(): void {
        setTimeout(() => {
            this.tableContentService.downLevel(this.data);
        }, 0);
    }
}