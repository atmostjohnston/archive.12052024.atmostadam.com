import { BaseImage } from "../../../../boot/base/BaseImage.js";
import { BlueBrickImage } from "./BlueBrickImage.js";

export class PurpleBrickImage extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "PurpleBrick32x64",
            "./images/screamingbrainstudios/Colored_Purple-32x64.png",
            0,
            0,
            32,
            64,
            row,
            column
        );
        this.setHp(4);
    }

    decreaseHp() {
        this.hp--;
        return new BlueBrickImage(this.context, this.row, this.column);
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}