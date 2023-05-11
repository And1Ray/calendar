import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import {CellData, Mark} from "../Interfaces";

export default class YearAndMonthCell extends HTMLService {
    private readonly data?: CellData;

    constructor(eventObserver: EventObserver, data?: CellData) {
        super(eventObserver);
        this.data = data;

        if (!this.data) {
            return;
        }

        this.setStyles(`
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            width: ;
            height: ;
            color: ;
        `);

        this.setContent(this.data.name)
    }
}