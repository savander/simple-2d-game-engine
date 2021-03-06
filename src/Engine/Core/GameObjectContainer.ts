import { GameObject } from "./GameObject";

export class GameObjectContainer {
    /**
     * GameObject references list
     * @type {GameObject[]}
     */
    gameObjects: GameObject[] = [];

    /**
     * Add GameObject to list.
     * @param gameObject
     */
    addGameObject(gameObject: GameObject): void {
        this.gameObjects.push(gameObject);
    }
}