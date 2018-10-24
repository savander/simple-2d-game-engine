import { ExampleComponent } from "../Engine/Core/Components/ExampleComponent";
import { GameObject } from "../Engine/Core/GameObject";

export class ExampleGameObject extends GameObject {
    constructor() {
        super("Example GameObject");

        this.AttachObject(new ExampleComponent());
    }

    Start(): void {
        console.log(this.name);
    }
}