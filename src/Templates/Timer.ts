import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";

export default class Timer extends HTMLService {
    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        this.setStyles(`
            width: 100%;
            font-size: 36px;
            color: #E5E5E5;
        `);

        this.setContent('21:33:26');
    }
}