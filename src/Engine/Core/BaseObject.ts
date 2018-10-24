export class BaseObject {

    /**
     * Checks if component is enabled. (true by default)
     * @type {boolean}
     */
    enabled: boolean = true;

    /**
     * Will be set after first execution.
     */
    beenEnabledOnce: boolean = false;

    /**
     * The name of game object
     */
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    Destroy(object: BaseObject) {

    }
}