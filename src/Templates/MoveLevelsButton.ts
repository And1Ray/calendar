import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventNames from "../Events/EventNames";
import EventTimeupdate from "../Events/EventTimeupdate";

export default class MoveLevelsButton extends HTMLService {
    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        this.setStyles(`
            font-size: 18px;
            cursor: pointer;
        `);

        this.eventObserver.on(EventNames.TIMEUPDATE, this.onTimeupdate.bind(this));
    }

    private onTimeupdate(event: EventTimeupdate): void {
        const date = event.data.formattedDateShort;

        if (!date) {
            return;
        }

        this.setContent(date);
    }
}