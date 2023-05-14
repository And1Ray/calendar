import EventObserver from "./EventObserver";
export default class TimerService {
    private eventObserver;
    private dateTimeFormat;
    private intervalId;
    constructor(eventObserver: EventObserver);
    private timeUpdate;
    private getTime;
    private getFormattedTime;
    private getFormattedDateFull;
    private clearTimeUpdate;
}
