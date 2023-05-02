import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";

export default class Cell extends HTMLService {
    private readonly text: string;

    constructor(eventObserver: EventObserver, text: string) {
        super(eventObserver);
        this.text = text;

        this.setStyles(`
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            width: 48px;
            height: 40px;
            color: #EFEFEF;
        `);

        this.setContent(this.text);
    }
}