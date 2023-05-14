import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import { CellData } from "../Interfaces";
import TableContentService from "../Services/TableContentService";
export default class Cell extends HTMLService {
    private readonly data;
    private tableContentService;
    constructor(eventObserver: EventObserver, tableContentService: TableContentService, data: CellData);
    private onClick;
}
