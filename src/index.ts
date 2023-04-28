import Modal from "./templates/Modal";
import Fonts from "./templates/Fonts";

declare global {
    interface Window {
        Datepicker: any;
    }
}

export type Coords = { x: number, y: number };

class Datepicker {
    element: HTMLElement;

    fonts: Fonts;
    isShow: boolean;
    modal: Modal;

    constructor(element: HTMLElement) {
        this.fonts = new Fonts();

        this.element = element;
        this.isShow = false;
        this.modal = new Modal(this.getCoords());

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
}

window.Datepicker = Datepicker;