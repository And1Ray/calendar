import EventObserver from "./EventObserver";
import {Styles} from "../Interfaces";

export default class HTMLService {
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

    protected addCustomStyles(styles: Styles): void {
        for (const stylesKey in styles) {
            (this.getElement.style as any)[stylesKey] = styles[stylesKey];
        }
    }

    protected setContent(textContent: string): void {
        this.getElement.textContent = textContent;
    }

    protected insertElements(elements: HTMLElement[]): void {
        this.getElement.innerHTML = '';
        elements.forEach((element: HTMLElement) => this.getElement.appendChild(element));
    }

    protected removeElement(): void {
        this.getElement.remove();
    }
}