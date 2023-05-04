import Cell from "./Cell";
import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";

export default class Table extends  HTMLService {
    private cells: HTMLElement[] = [];

    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        for (let i = 1; i <= 49; i++) {
            this.cells.push(new Cell(eventObserver, String(i)).getElement);
        }

        this.setStyles(`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        `);

        this.insertElements(this.cells);
    }
}