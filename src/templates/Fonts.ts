import jsonData from '../font.json'

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
export default class Fonts {
    private styleElement: HTMLStyleElement;

    constructor() {
        this.init();
    }

    private init(): void {
        this.styleElement = document.createElement('style');
        this.styleElement.innerHTML = FONT_STYLES;
        document.head.appendChild(this.styleElement);
    }
}