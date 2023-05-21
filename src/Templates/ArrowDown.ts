import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import EventNames from "../Events/EventNames";
import TableContentService from "../Services/TableContentService";

export default class ArrowDown extends HTMLService {
    private beforeElement: HTMLElement;
    private tableContentService: TableContentService;

    constructor(eventObserver: EventObserver, tableContentService: TableContentService) {
        super(eventObserver);
        this.tableContentService = tableContentService;

        this.addCustomStyles({
            display: 'inline-flex',
            justifyContent: 'center',
            cursor: 'pointer',
            width: '25px',
            height: '25px',
            position: 'relative'
        });

        this.createBeforeElement();
        this.insertElements([this.beforeElement]);

        this.getElement.addEventListener(EventNames.CLICK, this.onClick.bind(this));

        this.getElement.addEventListener(EventNames.MOUSEENTER, this.markHovered.bind(this));
        this.getElement.addEventListener(EventNames.MOUSELEAVE, this.clearHovered.bind(this));
    }

    private onClick(): void {
        this.tableContentService.nextTable();
    }

    private createBeforeElement(): void {
        this.beforeElement = document.createElement('div');
        this.beforeElement.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            border: 1px solid transparent;
            border-bottom-color: #B7B7B7;
            border-left-color: #B7B7B7;
            transform: rotate(-45deg);
            cursor: pointer;
            top: 3px;
        `;
    }

    public markHovered(): void {
        this.beforeElement.style.borderBottomColor = '#d3d3d34a';
        this.beforeElement.style.borderLeftColor = '#d3d3d34a';
    }

    public clearHovered(): void {
        this.beforeElement.style.borderBottomColor = '#B7B7B7';
        this.beforeElement.style.borderLeftColor = '#B7B7B7';
    }
}