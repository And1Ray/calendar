import Timer from "./Timer";
import Date from "./Date";
import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import TableContentService from "../Services/TableContentService";

export default class Header extends HTMLService {
    private timer: Timer;
    private date: Date;

    constructor(eventObserver: EventObserver, tableContentService: TableContentService) {
        super(eventObserver);

        this.timer = new Timer(eventObserver);
        this.date = new Date(eventObserver, tableContentService);

        this.setStyles(`
            border-bottom: 1px solid #575858;
            padding-top: 26px;
            padding-left: 26px;
            padding-bottom: 23px;
        `);

        this.insertElements([this.timer.getElement, this.date.getElement]);
    }
}