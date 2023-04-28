import {Coords} from './index'

export default class Modal {
    private element?: HTMLElement;
    private coords?: Coords;

    constructor(coords?: Coords) {
        this.coords = coords;
    }

    private createElement(): HTMLElement {
        const newElement = document.createElement('div');
        newElement.style.cssText = `
            width: 360px;
            height: 500px;
            position: absolute;
            background-color: #3B3C3C;
            left: ${this.coords?.x || 0};
            top: ${this.coords?.y || 0};
            display: block;
            margin-top: 4px;
        `;
        return newElement;
    }

    private removeElement(): void {
        this.element?.remove();
        this.element = undefined;
    }

    public toggle(flag: boolean): void {
        if (flag) {
            this.show();
            return;
        }

        this.hide();
    }

    private show(): void {
        this.element = this.createElement();
        document.body.appendChild(this.element);
    }

    private hide(): void {
        this.removeElement();
    }
}