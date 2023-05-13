import Cell from "./Cell";
import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventNames from "../Events/EventNames";
import {CellData} from "../Interfaces";
import EventUpdateTableContent from "../Events/EventUpdateTableContent";
import TableContentService from "../Services/TableContentService";

export default class Table extends HTMLService {
    private cells: HTMLElement[] = [];
    private tableContentService: TableContentService;

    constructor(eventObserver: EventObserver, tableContentService: TableContentService) {
        super(eventObserver);

        this.tableContentService = tableContentService;

        this.setStyles(`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        `);

        this.eventObserver.on(EventNames.EVENT_UPDATE_TABLE_CONTENT, this.onChangeContent.bind(this));
    }

    private onChangeContent(event: EventUpdateTableContent): void {
        const content: CellData[] = event.data.cellContent;

        if (!content || content.length <= 0) {
            return;
        }

        if (this.getElement.childElementCount > 0) {
            this.cells = [];
        }

        for (let i: number = 0; i < content.length; i++) {
            this.cells.push(
                new Cell(
                    this.eventObserver,
                    this.tableContentService,
                    content[i]
                ).getElement
            );
        }

        this.insertElements(this.cells);
    }
}