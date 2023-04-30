import HTMLService from "../services/HTMLService";

export default class MoveLevelsButton extends HTMLService {
    constructor() {
        super();

        this.setStyles(`
            font-size: 18px;
            cursor: pointer;
        `);

        this.setContent('Апрель 2023');
    }
}