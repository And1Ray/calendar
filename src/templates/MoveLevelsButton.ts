export default class MoveLevelsButton {
    public element: HTMLElement;

    constructor() {
        this.createElement();
    }

    public createElement(): void {
        const newElement = document.createElement('div');
        newElement.textContent = 'Апрель 2023';
        newElement.style.cssText = `
            font-size: 18px;
            cursor: pointer;
        `;

        this.element = newElement;
    }
}