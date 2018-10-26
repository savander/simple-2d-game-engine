import { Game } from "../../Game";
import { Color } from "../Color/Color";
import { Transform } from "../Components/Transform";
import { GameObject } from "../GameObject";
import { Vector2 } from "../GMath/Vectors/Vector2";
import { Renderer } from "./Renderer";

export class SquareRenderer extends Renderer {

    name: string = "Square Renderer";

    dimensions: Vector2 = new Vector2(100, 100);

    Draw(gameObject: GameObject): void {
        let transform: Transform = gameObject.GetComponent<Transform>(Transform);

        Game.context.fillStyle = Color.blue.cssRgb;
        Game.context.fillRect(transform.position.x, transform.position.y, this.dimensions.x, this.dimensions.y);
    }
}