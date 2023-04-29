import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";

export default class Arrows {
    public element: HTMLElement;
    private arrowUp: ArrowUp;
    private arrowDown: ArrowDown;

    constructor() {
        this.arrowUp = new ArrowUp();
        this.arrowDown = new ArrowDown();

        this.init();
    }

    private init(): void {
        this.createElement();
        this.insertElements();
    }

    private createElement(): void {
        this.element = document.createElement('div');
    }

    private insertElements(): void {
        this.element.appendChild(this.arrowUp.element);
        this.element.appendChild(this.arrowDown.element);
    }
}