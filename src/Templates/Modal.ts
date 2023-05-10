import {Coords} from '../index'
import Header from "./Header";
import Controls from "./Controls";
import Table from "./Table";
import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventClose from "../Events/EventClose";
import EventNames from "../Events/EventNames";
import TimerService from "../Services/TimerService";

export default class Modal extends HTMLService {
    private coords: Coords;
    private header: Header;
    private controls: Controls;
    private table: Table;
    private eventOnDocumentClick?: (event: MouseEvent) => void;
    private readonly parentElement: HTMLElement;

    constructor(
        eventObserver: EventObserver,
        coords: Coords,
        parentElement: HTMLElement
    ) {
        super(eventObserver);

        this.coords = coords;
        this.parentElement = parentElement;

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

        this.eventObserver.on(EventNames.OPEN, this.onOpen.bind(this));
        this.eventObserver.on(EventNames.CLOSE, this.onClose.bind(this));
    }

    private onOpen(): void {
        document.body.appendChild(this.getElement);
        this.eventOnDocumentClick = this.onDocumentClick.bind(this);
        document.addEventListener(EventNames.CLICK, this.eventOnDocumentClick);
    }

    private onClose(): void {
        document.removeEventListener(EventNames.CLICK, this.eventOnDocumentClick!);
        this.eventOnDocumentClick = undefined;
        this.removeElement();
    }

    private onDocumentClick(event: MouseEvent): void {
        if (
            this.getElement.contains(event.target as Node) ||
            event.target === this.parentElement
        ) {
            return;
        }

        this.eventObserver.dispatch(new EventClose());
    }
}