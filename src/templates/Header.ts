import Timer from "./Timer";
import Date from "./Date";

export default class Header {
    public element: HTMLElement;
    public timer: Timer;
    public date: Date;

    constructor() {
        this.timer = new Timer();
        this.date = new Date();

        this.init();
    }

    private init(): void {
        this.createElement();
        this.setStyles();
        this.insertElements();
    }

    public createElement(): void {
        this.element = document.createElement('div');
    }

    private insertElements(): void {
        this.element.appendChild(this.timer.element);
        this.element.appendChild(this.date.element);
    }

    private setStyles(): void {
        this.element.style.cssText = `
            border-bottom: 1px solid #575858;
            padding-top: 26px;
            padding-left: 26px;
            padding-bottom: 23px;
        `;
    }
}