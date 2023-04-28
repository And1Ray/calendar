import Timer from "./Timer";
import Date from "./Date";

export default class Header {
    public element: HTMLElement;
    public timer: Timer;
    public date: Date;

    constructor() {
        this.timer = new Timer();
        this.date = new Date();

        this.createElement();
    }

    public createElement(): void {
        const newElement = document.createElement('div');
        newElement.style.cssText = `
            border-bottom: 1px solid white;
            padding-top: 27px;
            padding-left: 23px;
            padding-bottom: 23px;
        `;

        this.element = newElement;
    }

    public insertElements(): void {
        this.element.appendChild(this.timer.element);
        this.element.appendChild(this.date.element);
    }
}