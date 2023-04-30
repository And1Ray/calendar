import HTMLService from "../services/HTMLService";

export default class Cell extends HTMLService {
    private readonly text: string;

    constructor(text: string) {
        super();
        this.text = text;

        this.setStyles(`
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            width: 48px;
            height: 40px;
            color: #EFEFEF;
        `);

        this.setContent(this.text);
    }
}