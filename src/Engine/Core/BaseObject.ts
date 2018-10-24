export class BaseObject {

    /**
     * Attached objects
     */
    objects: BaseObject[] = [];

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

    Destroy(object: BaseObject): void {
        // TODO: Destroy object
    }


    /**
     * Attach Component to GameObject
     * @param baseObject
     */
    AttachObject(baseObject: BaseObject): void {
        this.objects.push(baseObject);
    }

    GetComponent<T extends BaseObject>(constructor: { new(...args: any[]): T }): BaseObject | T | null | undefined {
        return this.attachedObjects.find(
            object => object instanceof constructor);
    }

    get attachedObjects(): BaseObject[] {
        return this.objects;
    }
}