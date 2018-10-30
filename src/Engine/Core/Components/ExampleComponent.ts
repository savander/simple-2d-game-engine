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
        if (this.transform && Input.GetMouseButton() == MouseButtons.LEFT_CLICK) {
            this.transform.position.x += 1;
        }
    }
}