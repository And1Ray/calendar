export default class EventService {
    public eventName: string;
    public data: any;

    constructor(eventName: string, data?: any) {
        this.eventName = eventName;
        this.data = {eventName, data};
    }
}