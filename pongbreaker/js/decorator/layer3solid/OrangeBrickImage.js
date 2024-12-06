import { BaseImage } from "../../../../boot/base/BaseImage.js";
import { PurpleBrickImage } from "./PurpleBrickImage.js";

export class OrangeBrickImage extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "OrangeBrick32x64",
            "./images/screamingbrainstudios/Colored_Orange-32x64.png",
            0,
            0,
            32,
            64,
            row,
            column
        );
        this.setHp(5);
    }

    decreaseHp() {
        this.hp--;
        return new PurpleBrickImage(this.context, this.row, this.column);
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}