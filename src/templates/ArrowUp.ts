export default class ArrowUp {
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
            border-top-color: #B7B7B7;
            border-right-color: #B7B7B7;
            margin-right: 25px;
            margin-bottom: -4px;
            transform: rotate(-45deg);
        `;
    }
}