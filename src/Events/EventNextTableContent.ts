import EventNames from "./EventNames";
import EventService from "../Services/EventService";

export default class EventNextTableContent extends EventService {
    constructor(data?: any) {
        super(EventNames.EVENT_NEXT_TABLE_CONTENT, data);
    }
}