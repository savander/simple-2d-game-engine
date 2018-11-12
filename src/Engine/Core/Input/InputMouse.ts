import { Vector2 } from "../GMath/Vectors/Vector2";
import { MouseButtons } from "./MouseButtons";

interface MouseButton {
    buttonHold: boolean;
    buttonDown: boolean;
    buttonUp: boolean;
    sentOnce: boolean;
}

export class InputMouse {
    protected static _mousePosition: Vector2 = Vector2.zero;

    protected static _mouseButtons: { [key: number]: MouseButton } = {};

    static RecordInputs(element: HTMLCanvasElement): void {
        element.addEventListener("mousemove",
            event => InputMouse.RecordMouseMovement(event));
        element.addEventListener("mousedown",
            event => InputMouse.RecordMouseDown(event));
        element.addEventListener("mouseup",
            event => InputMouse.RecordMouseUp(event));
    }

    protected static RecordMouseMovement(event: MouseEvent): void {
        this._mousePosition.x = event.layerX;
        this._mousePosition.y = event.layerY;
    }

    static get mousePosition(): Vector2 {
        return this._mousePosition;
    }

    protected static RecordMouseDown(event: MouseEvent): void {
        this._mouseButtons[event.button] = {
            buttonDown: true, buttonUp: false, buttonHold: true, sentOnce: false
        };
    }

    protected static RecordMouseUp(event: MouseEvent): void {
        this._mouseButtons[event.button] = {
            buttonDown: false,
            buttonUp: true,
            buttonHold: false,
            sentOnce: false
        };
    }

    static GetButtonDown(button: number | MouseButtons): boolean {
        if (this.checkIfUnavailable(button)) return false;

        this._mouseButtons[button].sentOnce = true;
        return this._mouseButtons[button].buttonDown;
    }

    static GetButtonUp(button: number | MouseButtons): boolean {
        if (this.checkIfUnavailable(button)) return false;

        this._mouseButtons[button].sentOnce = true;
        return this._mouseButtons[button].buttonUp;
    }

    static GetButtonHold(button: number | MouseButtons): boolean {
        if (this.checkIfUndefined(button)) return false;

        return this._mouseButtons[button].buttonHold;
    }


    protected static checkIfUndefined(button: number): boolean {
        return this._mouseButtons[button] === undefined;
    }

    protected static checkIfUnavailable(button: number): boolean {
        if (this.checkIfUndefined(button)) return true;
        return this._mouseButtons[button].sentOnce;
    }
}