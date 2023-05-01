import MoveLevelsButton from "./MoveLevelsButton";
import Arrows from "./Arrows";
import HTMLService from "../services/HTMLService";
import EventObserver from "../services/EventObserver";

export default class Controls extends HTMLService {
    private moveLevelsButton: MoveLevelsButton;
    private arrows: Arrows;

    constructor(eventObserver: EventObserver) {
        super(eventObserver);

        this.moveLevelsButton = new MoveLevelsButton(eventObserver);
        this.arrows = new Arrows(eventObserver);

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