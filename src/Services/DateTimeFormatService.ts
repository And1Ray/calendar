export default class DateTimeFormatService {
    private readonly clientLocale: string;

    constructor() {
        this.clientLocale = this.getLocale();
    }

    public getDateFormatter(opts: any): Intl.DateTimeFormat {
        return new Intl.DateTimeFormat(this.clientLocale, opts);
    }

    private getLocale(): string {
        return (
            navigator.languages.find(item => {
                let node = item.toLowerCase().split('-');
                return node[0] === node[1];
            }) || 'en-US'
        );
    }
}