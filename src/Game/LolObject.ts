import { SampleComponent } from "../Engine/Core/Components/SampleComponent";
import { GameObject } from "../Engine/Core/GameObject";

export class LolObject extends GameObject {
    constructor() {
        super("stefan");

        this.AttachObject(new SampleComponent());
    }

    Start(): void {
        console.log(this.name);
    }
}