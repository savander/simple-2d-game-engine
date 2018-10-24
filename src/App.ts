import { Color } from "./Engine/Core/Color/Color";
import { Transform } from "./Engine/Core/Components/Transform";
import { Vector2 } from "./Engine/Core/GMath/Vectors/Vector2";
import { Game } from "./Engine/Game";
import { LolObject } from "./Game/LolObject";

const game = new Game({
    canvasId: "canvas",
    dimensions: new Vector2(800, 600),
    backgroundColor: Color.white
});

game.gameObjectContainer.addGameObject(new LolObject());

// Testing
game.gameObjectContainer.gameObjects.forEach(object => {
    let transform: Transform = object.GetComponent<Transform>(Transform) as Transform;

    console.log(transform.position.x);
    transform.position.x = 2;
    console.log(transform.position.x);
});

game.Run();