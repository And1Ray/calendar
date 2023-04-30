import HTMLService from "../services/HTMLService";

export default class ArrowUp extends HTMLService {
    constructor() {
        super();

        this.setStyles(`
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
        `);
    }
}