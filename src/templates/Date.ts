export default class Date {
    public element: HTMLElement;

    constructor() {
        this.init();
    }

    private init(): void {
        this.createElement();
        this.setStyles();
        this.setContent();
    }

    public createElement(): void {
        this.element = document.createElement('div');
    }

    private setContent(): void {
        this.element.textContent = '1 апреля 2023 г.'
    }

    private setStyles(): void {
        this.element.style.cssText = `
            width: 100%;
            font-size: 16px;
            color: #9AB3CA;
            cursor: pointer;
        `;
    }
}