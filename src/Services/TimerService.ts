import EventObserver from "./EventObserver";
import EventTimeupdate from "../Events/EventTimeupdate";
import EventNames from "../Events/EventNames";

const INTERVAL = 1000;

export default class TimerService {
    private eventObserver: EventObserver;
    private intervalId: NodeJS.Timer;
    private time: string;
    constructor(eventObserver: EventObserver) {
        this.eventObserver = eventObserver;

        this.eventObserver.on(EventNames.OPEN, this.timeUpdate.bind(this));
        this.eventObserver.on(EventNames.CLOSE, this.clearTimeUpdate.bind(this));
    }

    private timeUpdate(): void {
        this.getTime();
        this.intervalId = setInterval(this.getTime.bind(this), INTERVAL);
    }

    private getTime() {
        const date: Date = new Date();
        let hours: number | string = date.getHours();
        let minutes: number | string = date.getMinutes();
        let seconds: number | string = date.getSeconds();

        this.time = `${this.setZero(hours)}:${this.setZero(minutes)}:${this.setZero(seconds)}`;

        this.eventObserver.dispatch(new EventTimeupdate({
            time: this.time
        }))
    }
    private setZero(num: number): string | number {
        return num < 10 ? '0' + num : num;
    }

    private clearTimeUpdate(): void {
        clearInterval(this.intervalId);
    }
}