import "./styles.scss"; // @TODO remove
import Modal from "./Modal";

declare global {
    interface Window {
        Datepicker: any;
    }
}

export type Coords = { x: number, y: number };

class Datepicker {
    element: HTMLElement;
    isShow: boolean;
    modal: Modal;

    constructor(element: HTMLElement) {
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