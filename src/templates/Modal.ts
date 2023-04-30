import {Coords} from '../index'
import Header from "./Header";
import Controls from "./Controls";
import Table from "./Table";
import HTMLService from "../services/HTMLService";

export default class Modal extends HTMLService {
    private coords: Coords;
    private header: Header;
    private controls: Controls;
    private table: Table;

    constructor(coords: Coords) {
        super();

        this.coords = coords;
        this.header = new Header();
        this.controls = new Controls();
        this.table = new Table();

        this.setStyles(`
            font-family: RobotoLightDP, Arial, sans-serif;
            width: 360px;
            position: absolute;
            background-color: #3B3C3C;
            left: ${this.coords?.x}px;
            top: ${this.coords?.y}px;
            display: block;
            margin-top: 4px;
            padding-bottom: 26px;
        `);

        this.insertElements([
            this.header.getElement,
            this.controls.getElement,
            this.table.getElement
        ]);
    }

    public toggle(flag: boolean): void {
        if (flag) {
            this.show();
            return;
        }

        this.hide();
    }

    private show(): void {
        document.body.appendChild(this.getElement);
    }

    private hide(): void {
        this.removeElement();
    }
}