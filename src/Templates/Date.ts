import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventNames from "../Events/EventNames";
import EventTimeupdate from "../Events/EventTimeupdate";
import TableContentService from "../Services/TableContentService";

export default class Date extends HTMLService {
    private tableContentService: TableContentService;

    constructor(eventObserver: EventObserver, tableContentService: TableContentService) {
        super(eventObserver);

        this.tableContentService = tableContentService;

        this.setStyles(`
            width: 100%;
            font-size: 16px;
            color: #9AB3CA;
            cursor: pointer;
        `);

        this.getElement.addEventListener(EventNames.CLICK, this.onClick.bind(this));
        this.eventObserver.on(EventNames.TIMEUPDATE, this.onTimeupdate.bind(this));
    }

    private onClick(): void {
        this.tableContentService.init();
    }

    private onTimeupdate(event: EventTimeupdate): void {
        const date = event.data.formattedDateFull;

        if (!date) {
            return;
        }

        this.setContent(date);
    }
}