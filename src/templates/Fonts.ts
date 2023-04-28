import jsonData from '../font.json'

export default class Fonts {
    private readonly fontStyles: string;
    private styleElement: HTMLStyleElement;

    constructor() {
        this.fontStyles = `
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
        `;

        this.init();
    }

    private init(): void {
        this.styleElement = document.createElement('style');
        this.styleElement.innerHTML = this.fontStyles;
        document.head.appendChild(this.styleElement);
    }
}