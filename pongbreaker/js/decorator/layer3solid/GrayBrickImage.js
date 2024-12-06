import { BaseImage } from "../../../../boot/base/BaseImage.js";
import { RedBrickImage } from "./RedBrickImage.js";

export class GrayBrickImage extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "GrayBrick32x64",
            "./images/screamingbrainstudios/Colored_Gray-32x64.png",
            0,
            0,
            32,
            64,
            row,
            column
        );
        this.setHp(100);
    }

    decreaseHp() {
        this.hp--;
        if (this.hp < 7) {
            return new RedBrickImage(this.context, this.row, this.column);
        }
        return this;
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}