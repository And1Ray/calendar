import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventNames from "../Events/EventNames";
import TableContentService from "../Services/TableContentService";

export default class ArrowUp extends HTMLService {
    private tableContentService: TableContentService;

    constructor(eventObserver: EventObserver, tableContentService: TableContentService) {
        super(eventObserver);
        this.tableContentService = tableContentService;

        this.setStyles(`
            display: inline-block;
            cursor: pointer;
            width: 10px;
            height: 10px;
            border: 1px solid transparent;
            border-top-color: #B7B7B7;
            border-right-color: #B7B7B7;
            margin-right: 25px;
            margin-bottom: -4px;
            transform: rotate(-45deg);
        `);

        this.getElement.addEventListener(EventNames.CLICK, this.onClick.bind(this));
    }

    private onClick(): void {
        this.tableContentService.prevMonthDays();
    }
}