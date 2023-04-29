import {Coords} from '../index'
import Header from "./Header";
import Controls from "./Controls";
import Table from "./Table";

export default class Modal {
    private element: HTMLElement;
    private header: Header;
    private controls: Controls;
    private table: Table;
    private coords: Coords;

    constructor(coords: Coords) {
        this.coords = coords;
        this.header = new Header();
        this.controls = new Controls();
        this.table = new Table();
    }

    private init(): void {
        this.createElement();
        this.setStyles();
        this.insertElements();
    }

    private createElement(): void {
        this.element = document.createElement('div');
    }

    private setStyles(): void {
        this.element.style.cssText = `
            font-family: RobotoLightDP, Arial, sans-serif;
            width: 360px;
            position: absolute;
            background-color: #3B3C3C;
            left: ${this.coords?.x}px;
            top: ${this.coords?.y}px;
            display: block;
            margin-top: 4px;
            padding-bottom: 26px;
        `;
    }

    private insertElements(): void {
        this.element.appendChild(this.header.element);
        this.element.appendChild(this.controls.element);
        this.element.appendChild(this.table.element);
        document.body.appendChild(this.element);
    }

    private removeElement(): void {
        this.element.remove();
    }

    public toggle(flag: boolean): void {
        if (flag) {
            this.show();
            return;
        }

        this.hide();
    }

    private show(): void {
        this.init();
    }

    private hide(): void {
        this.removeElement();
    }
}