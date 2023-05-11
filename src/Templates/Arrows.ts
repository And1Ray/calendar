import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";
import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import TableContentService from "../Services/TableContentService";

export default class Arrows extends HTMLService {
    private arrowUp: ArrowUp;
    private arrowDown: ArrowDown;

    constructor(eventObserver: EventObserver, tableContentService: TableContentService) {
        super(eventObserver);

        this.arrowUp = new ArrowUp(eventObserver, tableContentService);
        this.arrowDown = new ArrowDown(eventObserver, tableContentService);

        this.insertElements([this.arrowUp.getElement, this.arrowDown.getElement]);
    }
}