import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";

export default class Arrows {
    public element: HTMLElement;
    private arrowUp: ArrowUp;
    private arrowDown: ArrowDown;

    constructor() {
        this.arrowUp = new ArrowUp();
        this.arrowDown = new ArrowDown();

        this.createElement();
    }

    public createElement(): void {
        const newElement = document.createElement('div');
        this.element = newElement;
    }

    public insertElements(): void {
        this.element.appendChild(this.arrowUp.element);
        this.element.appendChild(this.arrowDown.element);
    }
}