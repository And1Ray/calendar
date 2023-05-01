import Timer from "./Timer";
import Date from "./Date";
import HTMLService from "../services/HTMLService";
import EventObserver from "../services/EventObserver";

export default class Header extends HTMLService {
    private timer: Timer;
    private date: Date;

    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        this.timer = new Timer(eventObserver);
        this.date = new Date(eventObserver);

        this.setStyles(`
            border-bottom: 1px solid #575858;
            padding-top: 26px;
            padding-left: 26px;
            padding-bottom: 23px;
        `);

        this.insertElements([this.timer.getElement, this.date.getElement]);

        this.eventObserver.on('open', this.onOpen.bind(this));
        this.eventObserver.on('close', this.onClose.bind(this));
    }

    private onOpen(event: CustomEvent): void {
        console.log('Header.onOpen', event);
    }

    private onClose(event: CustomEvent): void {
        console.log('Header.onClose', event);
    }
}