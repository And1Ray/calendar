import jsonData from '../font.json'
import HTMLService from "../services/HTMLService";
import EventObserver from "../services/EventObserver";

const FONT_STYLES: string = `
            @font-face {
                font-family: 'RobotoLightDP';
                font-weight: 300;
                font-style: normal;
                font-display: swap;
                src: url(${jsonData.font}) format('woff2');
            }
            @font-face {
                font-family: 'RobotoLightDP';
                font-weight: 300;
                font-style: normal;
                font-display: swap;
                src: url(${jsonData.font2}) format('woff2');
            }
        `
export default class Fonts extends HTMLService {
    constructor(eventObserver: EventObserver) {
        super(eventObserver, 'style');

        this.getElement.innerHTML = FONT_STYLES;
        document.head.appendChild(this.getElement);
    }
}