type CustomEvent = {
    eventName: string;
    data?: any;
};
export default class EventObserver {
    private listeners;
    on(eventName: string, listener: Function): void;
    off(eventName: string, listener: Function): void;
    dispatch({ eventName, data }: CustomEvent): void;
    private getSupportedListeners;
}
export {};
