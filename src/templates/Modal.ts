import {Coords} from '../index'
import Header from "./Header";
import Controls from "./Controls";

export default class Modal {
    private element?: HTMLElement;
    private header: Header;
    private controls: Controls;
    private coords?: Coords;

    constructor(coords?: Coords) {
        this.coords = coords;
        this.header = new Header();
        this.controls = new Controls();
    }

    private createElement(): HTMLElement {
        const newElement = document.createElement('div');
        newElement.style.cssText = `
            font-family: RobotoLightDP, Arial, sans-serif;
            width: 360px;
            height: 500px;
            position: absolute;
            background-color: #3B3C3C;
            left: ${this.coords?.x}px;
            top: ${this.coords?.y}px;
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
        this.element.appendChild(this.header.element);
        this.element.appendChild(this.controls.element);

        this.header.insertElements();
        this.controls.insertElements();

        document.body.appendChild(this.element);
    }

    private hide(): void {
        this.removeElement();
    }
}