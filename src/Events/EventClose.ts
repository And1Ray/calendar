import EventNames from "./EventNames";
import EventService from "../services/EventService";

export default class EventClose extends EventService {
    constructor(data: Object) {
        super(EventNames.CLOSE, data);
    }
}