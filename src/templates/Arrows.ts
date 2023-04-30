import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";
import HTMLService from "../services/HTMLService";

export default class Arrows extends HTMLService {
    private arrowUp: ArrowUp;
    private arrowDown: ArrowDown;

    constructor() {
        super();

        this.arrowUp = new ArrowUp();
        this.arrowDown = new ArrowDown();

        this.insertElements([this.arrowUp.getElement, this.arrowDown.getElement]);
    }
}