import { BaseImage } from "../../../../boot/base/BaseImage.js";
import { RedBrickTile } from "./RedBrickTile.js";

export class GrayBrickTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "GrayBrick64x32",
            "../../images/breakout/tiles/screamingbrainstudios/Colored_Gray-64x32.png",
            0,
            0,
            64,
            32,
            row,
            column
        );
        this.setHp(100);
    }

    decreaseHp() {
        this.hp--;
        if (this.hp < 7) {
            return new RedBrickTile(this.context, this.row, this.column);
        }
        return this;
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}