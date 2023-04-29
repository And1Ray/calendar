export default class Cell {
    public element: HTMLElement;
    private readonly text: string;

    constructor(text: string) {
        this.text = text;

        this.init();
    }

    private init(): void {
        this.createElement();
        this.setContent();
        this.setStyles();
    }

    private createElement(): void {
        this.element = document.createElement('div');
    }

    private setContent(): void {
        this.element.textContent = this.text;
    }

    private setStyles(): void {
        this.element.style.cssText = `
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            width: 48px;
            height: 40px;
            color: #EFEFEF;
        `;
    }
}