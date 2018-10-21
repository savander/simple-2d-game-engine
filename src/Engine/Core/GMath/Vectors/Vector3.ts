export class Vector3 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}