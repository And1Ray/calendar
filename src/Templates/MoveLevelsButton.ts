import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventNames from "../Events/EventNames";
import EventInitEnd from "../Events/EventInitEnd";
import EventNextTableContent from "../Events/EventNextTableContent";
import EventPrevTableContent from "../Events/EventPrevTableContent";

export default class MoveLevelsButton extends HTMLService {
    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        this.setStyles(`
            font-size: 18px;
            cursor: pointer;
        `);

        this.eventObserver.on(EventNames.INIT_END, this.onChangeContent.bind(this));
        this.eventObserver.on(EventNames.EVENT_NEXT_TABLE_CONTENT, this.onChangeContent.bind(this));
        this.eventObserver.on(EventNames.EVENT_PREV_TABLE_CONTENT, this.onChangeContent.bind(this));
    }

    private onChangeContent(event: EventInitEnd | EventNextTableContent | EventPrevTableContent): void {
        const date = event.data.formattedDateShort;

        if (!date) {
            return;
        }

        this.setContent(date);
    }
}