import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Waterfall1TopTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "Outside1",
            "Outside1", "images/tower/tiles/tilesets/Outside1.png",
            672,
            240,
            48,
            48,
            row,
            column
        );
    }
}