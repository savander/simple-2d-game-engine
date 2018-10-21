export class Time {
    /**
     * Current time between renders in ms
     * @type {number}
     */
    static deltaTime: number = 0;

    /**
     * Fixed time between physics updates in ms.
     * @type {number}
     */
    static fixedDeltaTime: number = 20;
}