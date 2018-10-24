import { Color } from "./Engine/Core/Color/Color";
import { Vector2 } from "./Engine/Core/GMath/Vectors/Vector2";
import { Game } from "./Engine/Game";
import { LolObject } from "./Game/LolObject";

const game = new Game({
    canvasId: "canvas",
    dimensions: new Vector2(800, 600),
    backgroundColor: Color.white
});
game.gameObjectContainer.addGameObject(new LolObject());
game.Run();