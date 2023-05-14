import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import TableContentService from "../Services/TableContentService";
export default class Header extends HTMLService {
    private timer;
    private date;
    constructor(eventObserver: EventObserver, tableContentService: TableContentService);
}
