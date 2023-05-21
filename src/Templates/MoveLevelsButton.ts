import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventNames from "../Events/EventNames";
import EventUpdateTableContent from "../Events/EventUpdateTableContent";
import TableContentService from "../Services/TableContentService";

export default class MoveLevelsButton extends HTMLService {
    private tableContentService: TableContentService;

    constructor(eventObserver: EventObserver, tableContentService: TableContentService) {
        super(eventObserver);
        this.tableContentService = tableContentService;

        this.addCustomStyles({
            fontSize: '18px',
            cursor: 'pointer'
        });

        this.getElement.addEventListener(EventNames.CLICK, this.onClick.bind(this));
        this.eventObserver.on(EventNames.UPDATE_TABLE_CONTENT, this.onChangeContent.bind(this));
    }

    private onClick(): void {
        this.tableContentService.upLevel();
    }

    private onChangeContent(event: EventUpdateTableContent): void {
        const date = event.data.formattedDateShort;

        if (!date) {
            return;
        }

        this.setContent(date);
    }
}