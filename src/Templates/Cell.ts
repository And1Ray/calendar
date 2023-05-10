import HTMLService from "../Services/HTMLService";
import EventObserver from "../Services/EventObserver";

export default class Cell extends HTMLService {
    private readonly data: {name: string, day?: number | undefined, index: number, mark: string};

    constructor(eventObserver: EventObserver, data: {name: string, day?: number | undefined, index: number, mark: string}) {
        super(eventObserver);
        this.data = data;

        let color = '#777777';
        if (this.data.mark === 'current' || this.data.mark === 'title') {
            color = '#EFEFEF';
        }

        this.setStyles(`
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            width: 48px;
            height: 40px;
            color: ${color};
            ${this.data.mark === 'title' ? 'font-size: 14px;' : ''}
        `);

        this.data.day ? this.setContent(String(this.data.day)) : this.setContent(this.data.name);
    }
}