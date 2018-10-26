import { ExampleComponent } from "../Engine/Core/Components/ExampleComponent";
import { GameObject } from "../Engine/Core/GameObject";
import { SquareRenderer } from "../Engine/Core/Renderer/SquareRenderer";

export class ExampleGameObject extends GameObject {
    name: string = "Example GameObject";

    constructor() {
        super();
        this.AttachObject(new ExampleComponent());
        this.AttachObject(new SquareRenderer());
    }

    Start(): void {
        console.log(this.name);
    }
}