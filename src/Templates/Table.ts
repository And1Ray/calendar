import Cell from "./Cell";
import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventNames from "../Events/EventNames";
import {CellData} from "../Interfaces";
import EventUpdateTableContent from "../Events/EventUpdateTableContent";
import TableContentService from "../Services/TableContentService";
import EventClickFromDate from "../Events/EventClickFromDate";

export default class Table extends HTMLService {
    private cellsInstances: Cell[] = [];
    private readonly tableContentService: TableContentService;

    constructor(eventObserver: EventObserver, tableContentService: TableContentService) {
        super(eventObserver);

        this.tableContentService = tableContentService;

        this.addCustomStyles({
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
        });

        this.eventObserver.on(EventNames.UPDATE_TABLE_CONTENT, this.onChangeContent.bind(this));
        this.eventObserver.on(EventNames.CLICK_FROM_DATE, this.onClickFromDate.bind(this));
    }

    private onChangeContent(event: EventUpdateTableContent): void {
        const content: CellData[] = event.data.cellContent;

        if (!content || content.length <= 0) {
            return;
        }

        if (this.getElement.childElementCount > 0) {
            this.cellsInstances = [];
        }

        for (let i: number = 0; i < content.length; i++) {
            const cellInstance: Cell = new Cell(
                this.eventObserver,
                this.tableContentService,
                content[i]
            );

            this.cellsInstances.push(cellInstance);
        }

        this.renderContent();
    }

    private onClickFromDate(event: EventClickFromDate): void {
        this.cellsInstances.forEach(item => {
            if (event.data.element !== item.getElement) {
                item.clearOutlineCell();
            }
        });

        this.renderContent();
    }

    private renderContent(): void {
        this.insertElements(this.cellsInstances.map(item => item.getElement));
    }
}