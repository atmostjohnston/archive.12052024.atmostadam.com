import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class GreenBrickTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "GreenBrick64x32",
            "../../images/breakout/tiles/screamingbrainstudios/Colored_Green-64x32.png",
            0,
            0,
            64,
            32,
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