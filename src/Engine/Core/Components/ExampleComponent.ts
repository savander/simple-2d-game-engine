import { BaseComponent } from "../BaseComponent";
import { Time } from "../Time";
import { Transform } from "./Transform";

export class ExampleComponent extends BaseComponent {
    name: string = "Example Component";
    protected transform?: Transform;

    Start() {
        this.transform = this.GetComponent<Transform>(Transform);
    }

    FixedUpdate() {
        if(this.transform != undefined) {
            this.transform.position.x += 10 * Time.fixedDeltaTimeInSeconds();
        }
    }
}