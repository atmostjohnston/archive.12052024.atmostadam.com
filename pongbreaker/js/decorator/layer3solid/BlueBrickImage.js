import { BaseImage } from "../../../../boot/base/BaseImage.js";
import { YellowBrickImage } from "./YellowBrickImage.js";

export class BlueBrickImage extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "BlueBrick32x64",
            "./images/screamingbrainstudios/Colored_Blue-32x64.png",
            0,
            0,
            32,
            64,
            row,
            column
        );
        this.setHp(3);
    }

    decreaseHp() {
        this.hp--;
        return new YellowBrickImage(this.context, this.row, this.column);
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}