import Cell from "./Cell";
import HTMLService from "../services/HTMLService";

export default class Table extends  HTMLService {
    private cells: HTMLElement[] = [];

    constructor() {
        super();

        for (let i = 1; i <= 49; i++) {
            this.cells.push(new Cell(String(i)).getElement);
        }

        this.setStyles(`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        `);

        this.insertElements(this.cells);
    }
}