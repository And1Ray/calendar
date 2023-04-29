export default class Timer {
    public element: HTMLElement;

    constructor() {
        this.init();
    }

    private init(): void {
        this.createElement();
        this.setStyles();
        this.setContent();
    }

    private createElement(): void {
        this.element = document.createElement('div');
    }

    private setContent(): void {
        this.element.textContent = '21:33:26';
    }

    private setStyles(): void {
        this.element.style.cssText = `
            width: 100%;
            font-size: 36px;
            color: #E5E5E5;
        `;
    }
}