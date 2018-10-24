import { Color } from "./Engine/Core/Color/Color";
import { Vector2 } from "./Engine/Core/GMath/Vectors/Vector2";
import { Game } from "./Engine/Game";
import { ExampleGameObject } from "./Game/ExampleGameObject";

const game = new Game({
    canvasId: "canvas",
    dimensions: new Vector2(800, 600),
    backgroundColor: Color.white
});
game.gameObjectContainer.addGameObject(new ExampleGameObject());
game.Run();