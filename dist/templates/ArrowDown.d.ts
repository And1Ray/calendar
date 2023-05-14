import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import TableContentService from "../Services/TableContentService";
export default class ArrowDown extends HTMLService {
    private tableContentService;
    constructor(eventObserver: EventObserver, tableContentService: TableContentService);
    private onClick;
}
