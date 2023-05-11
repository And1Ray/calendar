import DayCell from "./DayCell";
import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventNames from "../Events/EventNames";
import EventInitEnd from "../Events/EventInitEnd";
import {CellData} from "../Interfaces";
import EventNextTableContent from "../Events/EventNextTableContent";
import EventPrevTableContent from "../Events/EventPrevTableContent";
import EventUpLevelContent from "../Events/EventUpLevelContent";
import EventDownLevelContent from "../Events/EventDownLevelContent";

export default class Table extends HTMLService {
    private cells: HTMLElement[] = [];

    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        this.setStyles(`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        `);

        this.eventObserver.on(EventNames.INIT_END, this.onChangeContent.bind(this));
        this.eventObserver.on(EventNames.EVENT_NEXT_TABLE_CONTENT, this.onChangeContent.bind(this));
        this.eventObserver.on(EventNames.EVENT_PREV_TABLE_CONTENT, this.onChangeContent.bind(this));
    }

    private onChangeContent(event: EventInitEnd | EventNextTableContent | EventPrevTableContent): void {
        const content: CellData[] = event.data.cellContent;

        if (!content || content.length <= 0) {
            return;
        }

        if (this.getElement.childElementCount > 0) {
            this.cells = [];
        }

        for (let i: number = 0; i < content.length; i++) {
            this.cells.push(
                new DayCell(
                    this.eventObserver,
                    content[i]
                ).getElement
            );
        }

        this.insertElements(this.cells);
    }
}