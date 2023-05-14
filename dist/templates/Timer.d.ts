import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
export default class Timer extends HTMLService {
    constructor(eventObserver: EventObserver);
    private onTimeupdate;
}
