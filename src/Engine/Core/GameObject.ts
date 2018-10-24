import { BaseComponent } from "./BaseComponent";
import { BaseObject } from "./BaseObject";
import { Updateable } from "./Contracts/Updateable";

export class GameObject extends BaseObject implements Updateable {
    /**
     * Attached Components
     */
    components: BaseComponent[] = [];

    /**
     * Main GameObject Instance
     * @param name
     */
    constructor(name: string) {
        super(name);
        this.Awaken();
    }

    /**
     * Awaken is called on instantiate.
     */
    Awaken(): void {
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


    /**
     * Attach Component to GameObject
     * @param baseComponent
     */
    AttachComponent(baseComponent: BaseComponent) {
        this.components.push(baseComponent);
    }
}