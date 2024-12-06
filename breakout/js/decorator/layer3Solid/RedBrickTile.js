import { BaseImage } from "../../../../boot/base/BaseImage.js";
import { OrangeBrickTile } from "./OrangeBrickTile.js";

export class RedBrickTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "RedBrick64x32",
            "../../images/breakout/tiles/screamingbrainstudios/Colored_Red-64x32.png",
            0,
            0,
            64,
            32,
            row,
            column
        );
        this.setHp(6);
    }

    decreaseHp() {
        this.hp--;
        return new OrangeBrickTile(this.context, this.row, this.column);
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}