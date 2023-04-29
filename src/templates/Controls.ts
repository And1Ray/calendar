import MoveLevelsButton from "./MoveLevelsButton";
import Arrows from "./Arrows";

export default class Controls {
    public element: HTMLElement;
    private moveLevelsButton: MoveLevelsButton;
    private arrows: Arrows;

    constructor() {
        this.moveLevelsButton = new MoveLevelsButton();
        this.arrows = new Arrows();

        this.createElement();
    }

    public createElement(): void {
        const newElement = document.createElement('div');
        newElement.style.cssText = `
            color: #B7B7B7;
            height: 45px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 26px;
        `;

        this.element = newElement;
    }

    public insertElements(): void {
        this.element.appendChild(this.moveLevelsButton.element);
        this.element.appendChild(this.arrows.element);

        this.arrows.insertElements();
    }
}