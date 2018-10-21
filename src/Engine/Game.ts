import { Color } from "./Core/Color/Color";
import { GameObjectContainer } from "./Core/GameObjectContainer";
import { Vector2 } from "./Core/GMath/Vectors/Vector2";
import { Time } from "./Core/Time";

interface GameProperties {
    canvasId: string;
    dimensions: Vector2;
    backgroundColor?: Color;
}

class Game {
    static gameTicksElapsed: number = 0;

    /**
     * The game properties.
     *
     * @return {GameProperties}
     */
    readonly properties: GameProperties;

    protected canvasElement: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D;

    protected requestFrameID: number | null = null;
    protected lastFrameTime: number = 0;
    protected lagTime: number = 0.0;

    gameObjectContainer: GameObjectContainer = new GameObjectContainer();

    /**
     * Main game object
     *
     * @param properties
     */
    constructor(properties: GameProperties) {
        if (!properties.backgroundColor) properties.backgroundColor = Color.white;

        this.properties = properties;
        this.canvasElement = (document.getElementById(this.properties.canvasId) as HTMLCanvasElement);
        this.context = this.canvasElement.getContext("2d") as CanvasRenderingContext2D;
    }

    /**
     * Setup and Start game.
     */
    Start(): void {
        this.Setup();
        this.GameLoop();
    }

    /**
     * Main Setup of game.
     */
    protected Setup(): void {
        this.canvasElement.width = this.properties.dimensions.x;
        this.canvasElement.height = this.properties.dimensions.y;
        if (this.properties.backgroundColor) this.canvasElement.style.backgroundColor = this.properties.backgroundColor.cssRgba;
    }

    /**
     * Main loop of game engine.
     * @param frameTime
     */
    protected GameLoop(frameTime: number = 0): void {
        // Set Time Stamps
        Time.deltaTime = frameTime - this.lastFrameTime;
        this.lagTime += Time.deltaTime;

        // Catches lagTime and updates desired number of times.
        while (this.lagTime >= Time.fixedDeltaTime) {

            this.FixedUpdate();

            this.lagTime -= Time.fixedDeltaTime;
            Game.gameTicksElapsed++;
        }

        this.Update();
        this.LateUpdate();

        this.lastFrameTime = frameTime;
        this.requestFrameID = window.requestAnimationFrame(this.GameLoop.bind(this));
    }

    /**
     * Main Update, used for graphics.
     */
    protected Update(): void {
        this.ClearCanvas();

        this.gameObjectContainer.gameObjects.forEach((gameObject) => gameObject.Update());
    }

    /**
     * Fixed updated used for physics.
     */
    protected FixedUpdate(): void {
        this.gameObjectContainer.gameObjects.forEach((gameObject) => gameObject.FixedUpdate());
    }


    /**
     * Late update is executed after fixed and update cycles.
     */
    protected LateUpdate(): void {
        this.gameObjectContainer.gameObjects.forEach((gameObject) => gameObject.LateUpdate());
    }

    /**
     * Clears canvas.
     */
    protected ClearCanvas(): void {
        this.context.clearRect(0, 0, this.properties.dimensions.x, this.properties.dimensions.y);
    }
}

export { Game, GameProperties };