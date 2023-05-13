import EventNames from "./EventNames";
import EventService from "../Services/EventService";

export default class EventUpdateTableContent extends EventService {
    constructor(data?: any) {
        super(EventNames.EVENT_UPDATE_TABLE_CONTENT, data);
    }
}