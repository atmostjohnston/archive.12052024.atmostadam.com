import { BaseImage } from "../../../../boot/base/BaseImage.js";
import { BlueBrickTile } from "./BlueBrickTile.js";

export class PurpleBrickTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "PurpleBrick64x32",
            "../../images/breakout/tiles/screamingbrainstudios/Colored_Purple-64x32.png",
            0,
            0,
            64,
            32,
            row,
            column
        );
        this.setHp(4);
    }

    decreaseHp() {
        this.hp--;
        return new BlueBrickTile(this.context, this.row, this.column);
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}