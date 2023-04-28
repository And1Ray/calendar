export default class Date {
    public element: HTMLElement;

    constructor() {
        this.createElement();
    }

    public createElement(): void {
        const newElement = document.createElement('div');
        newElement.textContent = '1 апреля 2023 г.'
        newElement.style.cssText = `
            width: 100%;
            font-size: 16px;
            color: #9AB3CA;
        `;

        this.element = newElement;
    }
}