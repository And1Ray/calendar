export default class Timer {
    public element: HTMLElement;

    constructor() {
        this.createElement();
    }

    public createElement(): void {
        const newElement = document.createElement('div');
        newElement.textContent = '21:33:26';
        newElement.style.cssText = `
            width: 100%;
            font-size: 36px;
            color: #E5E5E5;
        `;

        this.element = newElement;
    }
}