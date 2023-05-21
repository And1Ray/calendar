export default class EventService {
    public eventName: string;
    public data: any;

    constructor(eventName: string, data?: any) {
        if (!data) {
            data = {};
        }

        this.eventName = eventName;
        this.data = {eventName, data};
    }
}