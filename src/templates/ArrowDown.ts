export default class ArrowDown {
    public element: HTMLElement;

    constructor() {
        this.init();
    }

    private init(): void {
        this.createElement();
        this.setStyles();
    }

    private createElement(): void {
        this.element = document.createElement('div');
    }

    private setStyles(): void {
        this.element.style.cssText = `
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
    }
}