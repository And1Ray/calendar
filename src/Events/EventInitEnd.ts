import EventNames from "./EventNames";
import EventService from "../Services/EventService";

export default class EventInitEnd extends EventService {
    constructor(data?: any) {
        super(EventNames.INIT_END, data);
    }
}