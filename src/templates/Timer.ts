import HTMLService from "../services/HTMLService";
import EventObserver from "../services/EventObserver";

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