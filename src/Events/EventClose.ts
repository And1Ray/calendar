import EventNames from "./EventNames";
import EventService from "../Services/EventService";

export default class EventClose extends EventService {
    constructor(data?: any) {
        super(EventNames.CLOSE, data);
    }
}