import Cell from "./Cell";

export default class Table {
    public element: HTMLElement;
    private cells: HTMLElement[] = [];

    constructor() {
        for (let i = 1; i <= 49; i++) {
            this.cells.push(new Cell(String(i)).element);
        }

        this.init();
    }

    private init(): void {
        this.createElement();
        this.setStyles();
        this.insertElements();
    }

    private createElement(): void {
        this.element = document.createElement('div');
    }

    private setStyles(): void {
        this.element.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        `;
    }

    private insertElements(): void {
        this.cells.forEach(item => this.element.appendChild(item));
    }
}