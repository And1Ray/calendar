import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";
import {CellData, Levels, Mark} from "../Interfaces";
import EventNames from "../Events/EventNames";
import TableContentService from "../Services/TableContentService";
import EventClickFromDate from "../Events/EventClickFromDate";

export default class Cell extends HTMLService {
    private readonly data: CellData;
    private readonly level: Levels;
    private isClicked: boolean;
    private tableContentService: TableContentService;

    constructor(eventObserver: EventObserver, tableContentService: TableContentService, data: CellData) {
        super(eventObserver);
        this.tableContentService = tableContentService;

        this.data = data;
        this.level = this.data.level;

        if (!this.data) {
            return;
        }

        this.addCustomStyles({
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: '2px'
        });

        let color: string = '#777777';
        if (
            this.data.mark === Mark.CURRENT ||
            this.data.mark === Mark.TITLE ||
            this.data.mark === Mark.NOW
        ) {
            color = '#EFEFEF';
        }

        this.getElement.style.color = color;

        if (this.level === Levels.DAYS) {
            this.addCustomStyles({
                width: '48px',
                height: '40px'
            });

            if (this.data.mark === Mark.TITLE) {
                this.addCustomStyles({fontSize: '14px'});
            }

            if (this.data.mark === Mark.NOW) {
                this.addCustomStyles({outline: '1px solid white'});
            }
        } else {
            this.addCustomStyles({
                width: '82px',
                height: '70px'
            });
        }

        this.data.day
            ? this.setContent(String(this.data.day))
            : this.setContent(this.data.name);

        if (this.isClickable()) {
            this.getElement.addEventListener(EventNames.MOUSEENTER, this.onMouseEnter.bind(this));
            this.getElement.addEventListener(EventNames.MOUSELEAVE, this.onMouseLeave.bind(this));
        }

        this.getElement.addEventListener(EventNames.CLICK, this.onClick.bind(this));
    }

    private onClick(): void {
        if (this.level !== Levels.DAYS) {
            setTimeout(() => {
                this.tableContentService.downLevel(this.data);
            }, 0);
            return;
        }

        this.eventObserver.dispatch(new EventClickFromDate({
            ...this.data,
            element: this.getElement
        }));

        if (!this.isClickable()) {
            return;
        }

        if (!this.isClicked) {
            this.markActive();
            this.isClicked = true;
            return;
        }

        this.clearActive();
        this.isClicked = false;
    }

    private onMouseEnter(): void {
        if (this.isClicked) {
            return;
        }

        this.markHover();
    }

    private onMouseLeave(): void {
        if (this.isClicked) {
            return;
        }

        this.clearHover();
    }

    private isClickable(): boolean {
        return this.data.mark !== Mark.TITLE && this.data.mark !== Mark.NOW;
    }

    public clearOutlineCell(): void {
        if (!this.isClicked) {
            return;
        }

        this.clearActive();
        this.isClicked = false;
    }

    private markActive(): void {
        this.addCustomStyles({
            outline: '1px solid #d3d3d34a'
        });
    }

    private clearActive(): void {
        if (!this.isClickable()) {
            return;
        }

        this.clearHover();
    }

    private markHover(): void {
        this.addCustomStyles({
            outline: '1px solid gray'
        });
    }

    private clearHover(): void {
        this.addCustomStyles({
            outline: ''
        });
    }
}