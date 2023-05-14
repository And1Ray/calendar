import { Coords } from '../index';
import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import TableContentService from "../Services/TableContentService";
export default class Modal extends HTMLService {
    private coords;
    private header;
    private controls;
    private table;
    private eventOnDocumentClick?;
    private readonly parentElement;
    constructor(eventObserver: EventObserver, coords: Coords, parentElement: HTMLElement, tableContentService: TableContentService);
    private onOpen;
    private onClose;
    private onDocumentClick;
}
