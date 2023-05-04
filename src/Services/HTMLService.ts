import EventObserver from "./EventObserver";

export default abstract class HTMLService {
    private element: HTMLElement;
    public readonly eventObserver: EventObserver;

    protected constructor(eventObserver: EventObserver, tag?: string) {
        this.eventObserver = eventObserver;
        this.setElement = document.createElement(tag || 'div');
    }

    set setElement(element: HTMLElement) {
        this.element = element;
    }

    get getElement(): HTMLElement {
        return this.element;
    }

    protected setStyles(cssText: string): void {
        this.getElement.style.cssText = cssText;
    }

    protected setContent(textContent: string): void {
        this.getElement.textContent = textContent;
    }

    protected insertElements(elements: HTMLElement[]): void {
        elements.forEach((element: HTMLElement) => this.getElement.appendChild(element));
    }

    protected removeElement(): void {
        this.getElement.remove();
    }
}