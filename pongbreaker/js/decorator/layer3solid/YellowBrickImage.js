import { BaseImage } from "../../../../boot/base/BaseImage.js";
import { GreenBrickImage } from "./GreenBrickImage.js";

export class YellowBrickImage extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "YellowBrick32x64",
            "./images/screamingbrainstudios/Colored_Yellow-32x64.png",
            0,
            0,
            32,
            64,
            row,
            column
        );
        this.setHp(2);
    }

    decreaseHp() {
        this.hp--;
        return new GreenBrickImage(this.context, this.row, this.column);
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}