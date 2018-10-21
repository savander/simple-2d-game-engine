import { GameObject } from "../Engine/Core/GameObject";

export class LolObject extends GameObject {
    constructor() {
        super("stefan");
    }

    Start(): void {
        console.log(this.name);
    }
}