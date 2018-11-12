import { BaseComponent } from "../BaseComponent";
import { InputMouse } from "../Input/InputMouse";
import { MouseButtons } from "../Input/MouseButtons";
import { SquareRenderer } from "../Renderer/SquareRenderer";
import { Transform } from "./Transform";

export class ExampleComponent extends BaseComponent {
    name: string = "Example Component";

    protected transform?: Transform;
    protected renderer?: SquareRenderer;

    Start() {
        this.transform = this.GetComponent<Transform>(Transform);
        this.renderer = this.GetComponent<SquareRenderer>(SquareRenderer);
    }

    FixedUpdate() {
        if (this.renderer && this.transform) {
            if (InputMouse.GetButtonUp(MouseButtons.LEFT_CLICK)) {
                this.transform.position.x = InputMouse.mousePosition.x - (this.renderer.dimensions.x / 2);
                this.transform.position.y = InputMouse.mousePosition.y - (this.renderer.dimensions.y / 2);
            }
        }
    }
}