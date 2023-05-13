import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventNames from "../Events/EventNames";
import TableContentService from "../Services/TableContentService";

export default class ArrowDown extends HTMLService {
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
            border-bottom-color: #B7B7B7;
            border-left-color: #B7B7B7;
            transform: rotate(-45deg);
            margin-bottom: 4px;
        `);

        this.getElement.addEventListener(EventNames.CLICK, this.onClick.bind(this));
    }

    private onClick(): void {
        this.tableContentService.nextTable();
    }
}