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

    /**
     * Current time between renders in Seconds
     * @type {number}
     */
    static deltaTimeInSeconds(): number {
        return Time.deltaTime / 1000;
    }

    /**
     * Fixed time between physics updates in Seconds.
     * @type {number}
     */
    static fixedDeltaTimeInSeconds(): number {
        return Time.fixedDeltaTime / 1000;
    }
}