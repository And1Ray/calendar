import MoveLevelsButton from "./MoveLevelsButton";
import Arrows from "./Arrows";
import HTMLService from "../services/HTMLService";

export default class Controls extends HTMLService {
    private moveLevelsButton: MoveLevelsButton;
    private arrows: Arrows;

    constructor() {
        super();

        this.moveLevelsButton = new MoveLevelsButton();
        this.arrows = new Arrows();

        this.setStyles(`
            color: #B7B7B7;
            height: 45px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 26px;
        `);

        this.insertElements([this.moveLevelsButton.getElement, this.arrows.getElement]);
    }
}