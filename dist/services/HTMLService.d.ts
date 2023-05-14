import EventObserver from "./EventObserver";
export default abstract class HTMLService {
    private element;
    readonly eventObserver: EventObserver;
    protected constructor(eventObserver: EventObserver, tag?: string);
    set setElement(element: HTMLElement);
    get getElement(): HTMLElement;
    protected setStyles(cssText: string): void;
    protected setContent(textContent: string): void;
    protected insertElements(elements: HTMLElement[]): void;
    protected removeElement(): void;
}
