import MoveLevelsButton from "./MoveLevelsButton";
import Arrows from "./Arrows";

export default class Controls {
    public element: HTMLElement;
    private moveLevelsButton: MoveLevelsButton;
    private arrows: Arrows;

    constructor() {
        this.moveLevelsButton = new MoveLevelsButton();
        this.arrows = new Arrows();

        this.init();
    }

    private init(): void {
        this.createElement();
        this.setStyles();
        this.insertElements();
    }

    private createElement(): void {
        this.element = document.createElement('div');
    }

    private insertElements(): void {
        this.element.appendChild(this.moveLevelsButton.element);
        this.element.appendChild(this.arrows.element);
    }

    private setStyles(): void {
        this.element.style.cssText = `
            color: #B7B7B7;
            height: 45px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 26px;
        `;
    }
}