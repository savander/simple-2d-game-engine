import { BaseComponent } from "../BaseComponent";
import { Transform } from "./Transform";

export class ExampleComponent extends BaseComponent {

    constructor() {
        super("Sample Component");
    }

    Start() {
        let transform: Transform = this.GetComponent<Transform>(Transform) as Transform;

        console.log(transform.position.x);
        transform.position.x += 2;
        console.log(transform.position.x);
    }
}