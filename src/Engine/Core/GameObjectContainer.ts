import { GameObject } from "./GameObject";

export class GameObjectContainer {
    /**
     * GameObject references list
     * @type {GameObject[]}
     */
    gameObjects: GameObject[] = [];

    /**
     * Add gameobject to list.
     * @param gameObject
     */
    addGameObject(gameObject: GameObject) {
        this.gameObjects.push(gameObject);
    }
}