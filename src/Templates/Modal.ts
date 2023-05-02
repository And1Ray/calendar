import {Coords} from '../index'
import Header from "./Header";
import Controls from "./Controls";
import Table from "./Table";
import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventClose from "../Events/EventClose";
import EventOpen from "../Events/EventOpen";

export default class Modal extends HTMLService {
    private coords: Coords;
    private header: Header;
    private controls: Controls;
    private table: Table;

    constructor(eventObserver: EventObserver, coords: Coords) {
        super(eventObserver);

        this.coords = coords;
        this.header = new Header(eventObserver);
        this.controls = new Controls(eventObserver);
        this.table = new Table(eventObserver);

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
            border-radius: 4px;
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

        this.eventObserver.dispatch(new EventOpen({
            el: this.getElement,
        }));
    }

    private hide(): void {
        this.eventObserver.dispatch(new EventClose({
            el: this.getElement,
        }));

        this.removeElement();
    }
}