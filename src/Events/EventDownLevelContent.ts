import EventNames from "./EventNames";
import EventService from "../Services/EventService";

export default class EventDownLevelContent extends EventService {
    constructor(data?: any) {
        super(EventNames.EVENT_DOWN_TABLE_CONTENT, data);
    }
}