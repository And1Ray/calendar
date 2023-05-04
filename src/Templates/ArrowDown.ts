import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";

export default class ArrowDown extends HTMLService {

    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        this.setStyles(`
            display: inline-block;
            cursor: pointer;
            width: 10px;
            height: 10px;
            border: 1px solid transparent;
            border-bottom-color: #B7B7B7;
            border-left-color: #B7B7B7;
            transform: rotate(-45deg);
            margin-bottom: 4px;
        `);
    }
}