import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";

export default class Date extends HTMLService {
    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        this.setStyles(`
            width: 100%;
            font-size: 16px;
            color: #9AB3CA;
            cursor: pointer;
        `);

        this.setContent('1 апреля 2023 г.');
    }
}