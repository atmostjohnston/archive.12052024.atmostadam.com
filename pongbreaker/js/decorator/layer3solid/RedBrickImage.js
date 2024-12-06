import { BaseImage } from "../../../../boot/base/BaseImage.js";
import { OrangeBrickImage } from "./OrangeBrickImage.js";

export class RedBrickImage extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "RedBrick32x64",
            "./images/screamingbrainstudios/Colored_Red-32x64.png",
            0,
            0,
            32,
            64,
            row,
            column
        );
        this.setHp(6);
    }

    decreaseHp() {
        this.hp--;
        return new OrangeBrickImage(this.context, this.row, this.column);
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}