import EventNames from "./EventNames";
import EventService from "../Services/EventService";

export default class EventUpdateTableContent extends EventService {
    constructor(data?: any) {
        super(EventNames.UPDATE_TABLE_CONTENT, data);
    }
}