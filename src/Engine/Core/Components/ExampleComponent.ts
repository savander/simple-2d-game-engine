import { BaseComponent } from "../BaseComponent";
import { Input } from "../Input/Input";
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
            if (Input.GetButtonUp(MouseButtons.LEFT_CLICK)) {
                this.transform.position.x = Input.mousePosition.x - (this.renderer.dimensions.x / 2);
                this.transform.position.y = Input.mousePosition.y - (this.renderer.dimensions.y / 2);
            }
        }
    }
}