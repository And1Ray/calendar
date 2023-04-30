import Timer from "./Timer";
import Date from "./Date";
import HTMLService from "../services/HTMLService";

export default class Header extends HTMLService {
    private timer: Timer;
    private date: Date;

    constructor() {
        super();

        this.timer = new Timer();
        this.date = new Date();

        this.setStyles(`
            border-bottom: 1px solid #575858;
            padding-top: 26px;
            padding-left: 26px;
            padding-bottom: 23px;
        `);

        this.insertElements([this.timer.getElement, this.date.getElement]);
    }
}