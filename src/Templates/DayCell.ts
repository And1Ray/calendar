import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import {CellData, Mark} from "../Interfaces";

export default class DayCell extends HTMLService {
    private readonly data?: CellData;

    constructor(eventObserver: EventObserver, data?: CellData) {
        super(eventObserver);
        this.data = data;

        if (!this.data) {
            return;
        }

        let color: string = '#777777';
        if (this.data.mark === Mark.CURRENT || this.data.mark === Mark.TITLE) {
            color = '#EFEFEF';
        }

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

        this.data.day
            ? this.setContent(String(this.data.day))
            : this.setContent(this.data.name);
    }
}