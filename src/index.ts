import Modal from "./templates/Modal";
import Fonts from "./templates/Fonts";
import EventObserver from "./services/EventObserver";

declare global {
    interface Window {
        PowerDatepicker: any;
    }
}

export type Coords = { x: number, y: number };

class PowerDatepicker {
    private element: HTMLElement;
    private readonly eventObserver: EventObserver;
    private fonts: Fonts;
    private isShow: boolean;
    private modal: Modal;

    constructor(element: HTMLElement) {
        this.eventObserver = new EventObserver();

        this.fonts = new Fonts(this.eventObserver);
        this.element = element;
        this.isShow = false;
        this.modal = new Modal(this.eventObserver, this.getCoords());

        this.init()
    }

    private init(): void {
        this.element.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();

            if (!event.target) {
                return;
            }

            this.isShow = !this.isShow;
            this.modal.toggle(this.isShow);
        });
    }

    private getCoords(): Coords {
        const coords = this.element.getBoundingClientRect();
        return {
            y: coords.bottom,
            x: coords.left
        }
    }

    public addEventListener(eventName: string, cb: Function): void {
        this.eventObserver.on(eventName, cb)
    }

    public removeEventListener(eventName: string, cb: Function): void {
        this.eventObserver.off(eventName, cb)
    }
}

window.PowerDatepicker = PowerDatepicker;