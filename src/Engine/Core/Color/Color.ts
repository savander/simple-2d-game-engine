import { Vector4 } from "../GMath/Vectors/Vector4";

export class Color {
    static black: Color = new Color(0, 0, 0, 1);
    static blue: Color = new Color(0, 0, 1, 1);
    static clear: Color = new Color(0, 0, 0, 0);
    static cyan: Color = new Color(0, 1, 1, 1);
    static gray: Color = new Color(0.5, 0.5, 0.5, 1);
    static grey: Color = new Color(0.5, 0.5, 0.5, 1);
    static green: Color = new Color(0, 1, 0, 1);
    static magenta: Color = new Color(1, 0, 1, 1);
    static red: Color = new Color(1, 0, 0, 1);
    static white: Color = new Color(1, 1, 1, 1);
    static yellow: Color = new Color(1, 0.92, 0.016, 1);

    constructor(public red: number,
                public green: number,
                public blue: number,
                public alpha = 1) {
    }

    /**
     * @returns Color as Vector4 class
     */
    get vector(): Vector4 {
        return new Vector4(this.red, this.green, this.blue, this.alpha);
    }

    /**
     * The grayscale value of the color.
     *
     * @remarks
     * This method is based on {@link https://en.wikipedia.org/wiki/Grayscale | Wikipedia Grayscale}
     *
     * @returns The grayscale color.
     */
    get grayScale(): Color {
        const grayScale: number = (this.red * 0.2627) + (this.green * 0.6780) + (this.blue * 0.0593);
        return new Color(grayScale, grayScale, grayScale);
    }

    /**
     * Human friendly format
     *
     * @return {string}
     */
    toString(): string {
        return `Color(${this.red} red, ${this.green} green, ${this.blue} blue, ${this.alpha} alpha)`;
    }

    /**
     * Get CSS ready format as RGBA.
     *
     * @return {string}
     */
    get cssRgba(): string {
        return `rgba(${this.red * 255}, ${this.green * 255}, ${this.blue * 255}, ${this.alpha * 255})`;
    }

    /**
     * Get CSS ready format as RGBA.
     *
     * @return {string}
     */
    get cssRgb(): string {
        return `rgba(${this.red * 255}, ${this.green * 255}, ${this.blue * 255})`;
    }
}