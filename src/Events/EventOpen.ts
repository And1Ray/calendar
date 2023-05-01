import EventNames from "./EventNames";
import EventService from "../services/EventService";

export default class EventOpen extends EventService {
    constructor(data: Object) {
        super(EventNames.OPEN, data);
    }
}