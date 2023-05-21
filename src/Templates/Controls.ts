import MoveLevelsButton from "./MoveLevelsButton";
import Arrows from "./Arrows";
import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import TableContentService from "../Services/TableContentService";

export default class Controls extends HTMLService {
    private moveLevelsButton: MoveLevelsButton;
    private arrows: Arrows;

    constructor(eventObserver: EventObserver, tableContentService: TableContentService) {
        super(eventObserver);

        this.moveLevelsButton = new MoveLevelsButton(eventObserver, tableContentService);
        this.arrows = new Arrows(eventObserver, tableContentService);

        this.addCustomStyles({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '45px',
            color: '#B7B7B7',
            padding: '0 26px'
        });

        this.insertElements([this.moveLevelsButton.getElement, this.arrows.getElement]);
    }
}