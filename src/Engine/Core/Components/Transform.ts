import { BaseComponent } from "../BaseComponent";
import { Vector3 } from "../GMath/Vectors/Vector3";

export class Transform extends BaseComponent {

    /**
     * Position vector, Vector3(0,0,0) by default
     */
    position: Vector3 = Vector3.zero;

    /**
     * Rotation along Z-Axis, rotation 0 by default
     */
    rotation: number = 0;

    constructor() {
        super("Transform");
    }
}