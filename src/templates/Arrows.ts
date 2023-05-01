import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";
import HTMLService from "../services/HTMLService";
import EventObserver from "../services/EventObserver";

export default class Arrows extends HTMLService {
    private arrowUp: ArrowUp;
    private arrowDown: ArrowDown;

    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        this.arrowUp = new ArrowUp(eventObserver);
        this.arrowDown = new ArrowDown(eventObserver);

        this.insertElements([this.arrowUp.getElement, this.arrowDown.getElement]);
    }
}