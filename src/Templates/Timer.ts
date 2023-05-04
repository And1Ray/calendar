import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import TimerService from "../Services/TimerService";
import EventNames from "../Events/EventNames";
import EventTimeupdate from "../Events/EventTimeupdate";

export default class Timer extends HTMLService {
    private timerService: TimerService;

    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        this.timerService = new TimerService(this.eventObserver);
        this.eventObserver.on(EventNames.TIMEUPDATE, this.onTimeupdate.bind(this));

        this.setStyles(`
            width: 100%;
            font-size: 36px;
            color: #E5E5E5;
        `);

        this.setContent('21:33:26');
    }

    private onTimeupdate(event: EventTimeupdate): void {
        const time = event.data.time;
        console.log(time);

        if (!time) {
            return;
        }

        this.setContent(time);
    }
}