import EventNames from "./EventNames";
import EventService from "../Services/EventService";

export default class EventOpen extends EventService {
    constructor(data: Object) {
        super(EventNames.OPEN, data);
    }
}