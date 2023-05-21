import EventNames from "./EventNames";
import EventService from "../Services/EventService";

export default class EventClickFromDate extends EventService {
    constructor(data?: any) {
        super(EventNames.CLICK_FROM_DATE, data);
    }
}