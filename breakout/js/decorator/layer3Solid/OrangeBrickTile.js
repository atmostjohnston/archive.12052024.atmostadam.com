import { BaseImage } from "../../../../boot/base/BaseImage.js";
import { PurpleBrickTile } from "./PurpleBrickTile.js";

export class OrangeBrickTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "OrangeBrick64x32",
            "../../images/breakout/tiles/screamingbrainstudios/Colored_Orange-64x32.png",
            0,
            0,
            64,
            32,
            row,
            column
        );
        this.setHp(5);
    }

    decreaseHp() {
        this.hp--;
        return new PurpleBrickTile(this.context, this.row, this.column);
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}