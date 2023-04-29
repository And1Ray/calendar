export default class MoveLevelsButton {
    public element: HTMLElement;

    constructor() {
        this.init();
    }

    private init() {
        this.createElement();
        this.setStyles();
        this.setContent();
    }

    public createElement(): void {
        this.element = document.createElement('div');
    }

    private setContent(): void {
        this.element.textContent = 'Апрель 2023';
    }

    private setStyles(): void {
        this.element.style.cssText = `
            font-size: 18px;
            cursor: pointer;
        `;
    }
}