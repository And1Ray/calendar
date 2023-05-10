import EventNames from "./EventNames";
import EventService from "../Services/EventService";

export default class EventInited extends EventService {
    constructor(data?: any) {
        super(EventNames.INITED, data);
    }
}