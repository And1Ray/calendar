import EventNames from "./EventNames";
import EventService from "../Services/EventService";

export default class EventPrevTableContent extends EventService {
    constructor(data?: any) {
        super(EventNames.EVENT_PREV_TABLE_CONTENT, data);
    }
}