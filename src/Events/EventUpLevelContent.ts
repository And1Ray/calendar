import EventNames from "./EventNames";
import EventService from "../Services/EventService";

export default class EventUpLevelContent extends EventService {
    constructor(data?: any) {
        super(EventNames.EVENT_UP_LEVEL_CONTENT, data);
    }
}