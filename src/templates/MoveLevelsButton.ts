import HTMLService from "../services/HTMLService";
import EventObserver from "../services/EventObserver";

export default class MoveLevelsButton extends HTMLService {
    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        this.setStyles(`
            font-size: 18px;
            cursor: pointer;
        `);

        this.setContent('Апрель 2023');
    }
}