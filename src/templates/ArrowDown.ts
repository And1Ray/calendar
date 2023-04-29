export default class ArrowDown {
    public element: HTMLElement;

    constructor() {
        this.createElement();
    }

    public createElement(): void {
        const newElement = document.createElement('div');
        newElement.style.cssText = `
            display: inline-block;
            cursor: pointer;
            width: 10px;
            height: 10px;
            border: 1px solid transparent;
            border-bottom-color: #B7B7B7;
            border-left-color: #B7B7B7;
            transform: rotate(-45deg);
            margin-bottom: 4px;
        `;

        this.element = newElement;
    }
}