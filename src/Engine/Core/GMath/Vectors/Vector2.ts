export class Vector2 {

    static zero: Vector2 = new Vector2(0, 0);

    x: number;
    y: number;

    constructor(x: number, y = 0) {
        this.x = x;
        this.y = y;
    }
}