import Modal from "./Templates/Modal";
import Fonts from "./Templates/Fonts";
import EventObserver from "./Services/EventObserver";
import EventNames from "./Events/EventNames";
import EventOpen from "./Events/EventOpen";
import EventClose from "./Events/EventClose";
import TimerService from "./Services/TimerService";
import EventInited from "./Events/EventInited";

declare global {
    interface Window {
        PowerDatepicker: any;
    }
}

export type Coords = { x: number, y: number };

class PowerDatepicker {
    private readonly element: HTMLElement;
    private readonly eventObserver: EventObserver;
    private timerService: TimerService;
    private fonts: Fonts;
    private isShow: boolean;
    private modal: Modal;

    constructor(element: HTMLElement) {
        this.eventObserver = new EventObserver();
        this.timerService = new TimerService(this.eventObserver);

        this.fonts = new Fonts(this.eventObserver);
        this.element = element;
        this.isShow = false;
        this.modal = new Modal(
            this.eventObserver,
            this.getCoords(),
            this.element
        );

        this.element.addEventListener(EventNames.CLICK, this.onClickByTargetElement.bind(this));

        this.eventObserver.dispatch(new EventInited({
            cellContent: this.timerService.getCellsContent()
        }));

        this.eventObserver.on(EventNames.OPEN, this.onOpen.bind(this));
        this.eventObserver.on(EventNames.CLOSE, this.onClose.bind(this));
    }

    onClickByTargetElement(event: MouseEvent): void {
        event.preventDefault();

        if (!event.target) {
            return;
        }

        this.isShow
            ? this.eventObserver.dispatch(new EventClose({isShow: this.isShow}))
            : this.eventObserver.dispatch(new EventOpen({isShow: this.isShow}));
    }

    private onOpen(): void {
        this.isShow = true;
    }

    private onClose(): void {
        this.isShow = false;
    }

    private getCoords(): Coords {
        const coords: DOMRect = this.element.getBoundingClientRect();
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