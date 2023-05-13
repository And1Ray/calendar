import EventNames from "../Events/EventNames";

type CustomEvents = { [key: string]: Function[] };
type CustomEvent = { eventName: string, data?: any };
export default class EventObserver {
    private listeners: CustomEvents = {};

    public on(eventName: string, listener: Function): void {
        if (this.getSupportedListeners().indexOf(eventName) === -1) {
            console.warn('PowerDatepicker Unsupported event: ' + eventName);
            return;
        }

        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(listener);
    }

    public off(eventName: string, listener: Function): void {
        if (!this.listeners[eventName]) {
            return;
        }

        const index = this.listeners[eventName].indexOf(listener);
        if (index > -1) {
            this.listeners[eventName].splice(index, 1);
        }
    }

    public dispatch({eventName, data}: CustomEvent): void {
        if (!this.listeners[eventName]) {
            return;
        }

        this.listeners[eventName].forEach(listener => {
            try {
                listener(data);
            } catch (error) {
                console.warn('PowerDatepicker.ERROR', error);
            }
        });
    }

    private getSupportedListeners(): string[] {
        return [
            EventNames.CLICK,
            EventNames.OPEN,
            EventNames.CLOSE,
            EventNames.TIMEUPDATE,
            EventNames.EVENT_UPDATE_TABLE_CONTENT
        ]
    }
}
