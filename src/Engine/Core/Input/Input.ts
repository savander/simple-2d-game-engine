import { Vector2 } from "../GMath/Vectors/Vector2";
import { InputKeyboard } from "./InputKeyboard";
import { InputMouse } from "./InputMouse";
import { KeyCodes } from "./KeyCodes";
import { MouseButtons } from "./MouseButtons";

export class Input {
    static RecordInputs(element: HTMLCanvasElement): void {
        InputMouse.RecordInputs(element);
        InputKeyboard.RecordInputs();
    }

    static GetKeyDown(keyCode: number | KeyCodes): boolean {
        return InputKeyboard.GetKeyDown(keyCode);
    }

    static GetKeyUp(keyCode: number | KeyCodes): boolean {
        return InputKeyboard.GetKeyUp(keyCode);
    }

    static GetKeyHold(keyCode: number | KeyCodes): boolean {
        return InputKeyboard.GetKeyHold(keyCode);
    }

    static GetButtonDown(button: number | MouseButtons): boolean {
        return InputMouse.GetButtonDown(button);
    }

    static GetButtonUp(button: number | MouseButtons): boolean {
        return InputMouse.GetButtonUp(button);
    }

    static GetButtonHold(button: number | MouseButtons): boolean {
        return InputMouse.GetButtonHold(button);
    }

    static get mousePosition(): Vector2 {
        return InputMouse.mousePosition;
    }
}