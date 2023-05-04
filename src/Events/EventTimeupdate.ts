import EventNames from "./EventNames";
import EventService from "../Services/EventService";

export default class EventTimeupdate extends EventService {
    constructor(data?: any) {
        super(EventNames.TIMEUPDATE, data);
    }
}