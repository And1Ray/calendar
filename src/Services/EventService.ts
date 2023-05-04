export default class EventService {
    public eventName: string;
    public data: Object;

    constructor(eventName: string, data?: Object) {
        this.eventName = eventName;
        this.data = {eventName, data};
    }
}