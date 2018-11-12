import { KeyCodes } from "./KeyCodes";

interface KeyInput {
    keyHold: boolean;
    keyDown: boolean;
    keyUp: boolean;
    sentOnce: boolean;
}

export class InputKeyboard {
    protected static _keyInputs: { [key: number]: KeyInput } = {};

    static RecordInputs(): void {
        document.addEventListener("keydown",
            event => InputKeyboard.RecordKeyDown(event));
        document.addEventListener("keyup",
            event => InputKeyboard.RecordKeyUp(event));
    }

    protected static RecordKeyDown(event: KeyboardEvent): void {
        this._keyInputs[event.keyCode] = {
            keyDown: !event.repeat, keyUp: false, keyHold: true, sentOnce: false
        };
    }

    protected static RecordKeyUp(event: KeyboardEvent): void {
        this._keyInputs[event.keyCode] = {
            keyDown: false, keyUp: true, keyHold: false, sentOnce: false
        };
    }

    static GetKeyDown(keyCode: number | KeyCodes): boolean {
        if (this.checkIfUnavailable(keyCode)) return false;

        this._keyInputs[keyCode].sentOnce = true;
        return this._keyInputs[keyCode].keyDown;
    }

    static GetKeyUp(keyCode: number | KeyCodes): boolean {
        if (this.checkIfUnavailable(keyCode)) return false;

        this._keyInputs[keyCode].sentOnce = true;
        return this._keyInputs[keyCode].keyUp;
    }

    static GetKeyHold(keyCode: number | KeyCodes): boolean {
        if (this.checkIfUndefined(keyCode)) return false;

        return this._keyInputs[keyCode].keyHold;
    }

    protected static checkIfUndefined(keyCode: number): boolean {
        return this._keyInputs[keyCode] === undefined;
    }

    protected static checkIfUnavailable(keyCode: number): boolean {
        if (this.checkIfUndefined(keyCode)) return true;
        return this._keyInputs[keyCode].sentOnce;
    }
}