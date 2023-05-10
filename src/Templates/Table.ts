import Cell from "./Cell";
import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventNames from "../Events/EventNames";
import EventOpen from "../Events/EventOpen";

export default class Table extends  HTMLService {
    private cells: HTMLElement[] = [];

    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        this.setStyles(`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        `);

        this.eventObserver.on(EventNames.INITED, this.onInited.bind(this));
    }

    private onInited(event: EventOpen): void {
        const content = event.data.cellContent;

        if (!content || content.length <= 0) {
            return;
        }

        for (let i = 0; i < content.length; i++) {
            this.cells.push(new Cell(
                this.eventObserver,
                content[i]
            ).getElement);
        }

        this.insertElements(this.cells);
    }
}