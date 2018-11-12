import { InputKeyboard } from "./InputKeyboard";
import { InputMouse } from "./InputMouse";

export class Input {
    static RecordInputs(element: HTMLCanvasElement): void {
        InputMouse.RecordInputs(element);
        InputKeyboard.RecordInputs(element);
    }
}