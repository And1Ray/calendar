export default abstract class HTMLService {
    private element: HTMLElement;

    protected constructor(tag?: string) {
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