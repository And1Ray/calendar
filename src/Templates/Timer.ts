import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventNames from "../Events/EventNames";
import EventTimeupdate from "../Events/EventTimeupdate";

export default class Timer extends HTMLService {
    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        this.eventObserver.on(EventNames.TIMEUPDATE, this.onTimeupdate.bind(this));

        this.addCustomStyles({
            width: '100%',
            fontSize: '36px',
            color: '#E5E5E5'
        });

        this.setContent('21:33:26');
    }

    private onTimeupdate(event: EventTimeupdate): void {
        const time = event.data.formattedTime;

        if (!time) {
            return;
        }

        this.setContent(time);
    }
}