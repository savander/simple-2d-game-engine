export class BaseObject {

    /**
     * Attached objects
     * @type {BaseObject[]}
     */
    objects: BaseObject[] = [];

    /**
     * Checks if component is enabled. (true by default)
     * @type {boolean}
     */
    enabled: boolean = true;

    /**
     * Return {BaseObject} if has parent, if not returns null.
     * Accessible after initialization. (only from Start method)
     * @type {BaseObject | null}
     */
    parent: BaseObject | null = null;

    /**
     * Will be set after first execution.
     * @type {boolean}
     */
    beenEnabledOnce: boolean = false;

    /**
     * The name of game object
     * @type {string}
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
        baseObject.parent = this;
        this.objects.push(baseObject);
    }

    /**
     * Returns component if exists
     * @param constructor
     * @return {T}
     */
    GetComponent<T extends BaseObject>(constructor: { new(...args: any[]): T }): T {
        return this.attachedObjects.find(
            object => object instanceof constructor) as T;
    }

    get attachedObjects(): BaseObject[] {
        if (this.parent == null) {
            return this.objects;
        } else {
            return this.parent.attachedObjects;
        }
    }
}