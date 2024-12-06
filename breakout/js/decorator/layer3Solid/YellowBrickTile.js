import { BaseImage } from "../../../../boot/base/BaseImage.js";
import { GreenBrickTile } from "./GreenBrickTile.js";

export class YellowBrickTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "YellowBrick64x32",
            "../../images/breakout/tiles/screamingbrainstudios/Colored_Yellow-64x32.png",
            0,
            0,
            64,
            32,
            row,
            column
        );
        this.setHp(2);
    }

    decreaseHp() {
        this.hp--;
        return new GreenBrickTile(this.context, this.row, this.column);
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}