import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import TableContentService from "../Services/TableContentService";
export default class Table extends HTMLService {
    private cells;
    private tableContentService;
    constructor(eventObserver: EventObserver, tableContentService: TableContentService);
    private onChangeContent;
}
