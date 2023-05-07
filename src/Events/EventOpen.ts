import EventNames from "./EventNames";
import EventService from "../Services/EventService";

export default class EventOpen extends EventService {
    constructor(data?: any) {
        super(EventNames.OPEN, data);
    }
}