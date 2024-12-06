import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Waterfall1Middle1Tile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "Outside1",
            "Outside1", "images/tower/tiles/tilesets/Outside1.png",
            672,
            48,
            48,
            48,
            row,
            column
        );
    }
}