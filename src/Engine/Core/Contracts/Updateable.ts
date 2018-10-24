export interface Updateable {

    /**
     * Awaken is called on instantiate.
     */
    Awaken(): void;

    /**
     * Start is called on the frame when a script is enabled just before any of
     * the Update methods are called the first time.
     */
    Start(): void;

    /**
     * Update is called every frame.
     */
    Update(): void;

    /**
     * This function is called every fixed delta time.
     */
    FixedUpdate(): void;

    /**
     * LateUpdate is called every frame as last.
     */
    LateUpdate(): void;
}