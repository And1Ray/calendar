import EventNames from "./EventNames";
import EventService from "../services/EventService";

export default class EventTimeupdate extends EventService {
    constructor(data: Object) {
        super(EventNames.TIMEUPDATE, data);
    }
}