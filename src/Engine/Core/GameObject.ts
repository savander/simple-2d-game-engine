import { BaseObject } from "./BaseObject";
import { Transform } from "./Components/Transform";
import { Updateable } from "./Contracts/Updateable";

export class GameObject extends BaseObject implements Updateable {

    /**
     * Main GameObject Instance
     * @param name
     */
    constructor(name?: string) {
        super(name);
        // Default transform
        this.AttachObject(new Transform());
    }

    /**
     * Run is called on the frame when a script is enabled just before any of
     * the Update methods are called the first time.
     */
    Start(): void {
    }

    /**
     * Update is called every frame.
     */
    Update(): void {
    }

    /**
     * This function is called every fixed delta time.
     */
    FixedUpdate(): void {
    }

    /**
     * LateUpdate is called every frame as last.
     */
    LateUpdate(): void {
    }
}