import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class GreenBrickImage extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "GreenBrick32x64",
            "./images/screamingbrainstudios/Colored_Green-32x64.png",
            0,
            0,
            32,
            64,
            row,
            column
        );
        this.setHp(1);
    }

    decreaseHp() {
        this.hp--;
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}