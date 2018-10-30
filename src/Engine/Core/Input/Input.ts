import { Vector2 } from "../GMath/Vectors/Vector2";
import { MouseButtons } from "./MouseButtons";

export class Input {

    protected static _mousePosition: Vector2 = Vector2.zero;

    protected static _lastMouseDownButton: number;
    protected static _mouseDownButton: number;
    protected static _mouseUpButton: number;

    protected static _mousePressOnce: boolean = true;

    protected static _mouseHold: boolean = false;

    static RecordInputs(element: HTMLCanvasElement): void {
        element.addEventListener("mousemove",
            event => Input.RecordMouseMovement(event));
        element.addEventListener("mousedown",
            event => Input.RecordMouseDown(event));
        element.addEventListener("mouseup",
            event => Input.RecordMouseUp(event));
    }

    protected static RecordMouseMovement(event: MouseEvent): void {
        this._mousePosition.x = event.layerX;
        this._mousePosition.y = event.layerY;
    }

    protected static RecordMouseDown(event: MouseEvent): void {
        this._mouseUpButton = MouseButtons.UNDEFINED_NUMBER;
        this._lastMouseDownButton = event.button; // For holding

        this._mouseDownButton = event.button;
        this._mouseHold = true;
        this._mousePressOnce = true;
    }

    protected static RecordMouseUp(event: MouseEvent): void {
        this._mouseDownButton = MouseButtons.UNDEFINED_NUMBER;
        this._lastMouseDownButton = MouseButtons.UNDEFINED_NUMBER; // For holding

        this._mouseUpButton = event.button;
        this._mouseHold = false;
        this._mousePressOnce = true;
    }

    static get mousePosition(): Vector2 {
        return this._mousePosition;
    }

    static GetMouseButton(): number | null {
        if (this._mouseHold) return this._lastMouseDownButton;

        return null;
    }

    static GetMouseButtonDown(): number {
        if(this._mousePressOnce) {
            this._mousePressOnce = false;
            return this._mouseDownButton;
        }
        return MouseButtons.UNDEFINED_NUMBER;
    }

    static GetMouseButtonUp(): number {
        if(this._mousePressOnce) {
            this._mousePressOnce = false;
            return this._mouseUpButton;
        }
        return MouseButtons.UNDEFINED_NUMBER;
    }
}