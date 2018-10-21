export class Vector4 {
    x: number;
    y: number;
    z: number;
    w: number;

    constructor(x: number, y = 0, z = 0, w = 1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
}