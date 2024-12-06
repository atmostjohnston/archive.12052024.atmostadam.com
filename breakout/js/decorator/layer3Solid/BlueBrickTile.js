import { BaseImage } from "../../../../boot/base/BaseImage.js";
import { YellowBrickTile } from "./YellowBrickTile.js";

export class BlueBrickTile extends BaseImage {
    constructor(context, cell) {
        super(
            context,
            "BlueBrick64x32",
            "../../images/breakout/tiles/screamingbrainstudios/Colored_Blue-64x32.png",
            0,
            0,
            64,
            32,
            row,
            column
        );
        this.setHp(3);
    }

    decreaseHp() {
        this.hp--;
        return new YellowBrickTile(this.context, this.row, this.column);
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}