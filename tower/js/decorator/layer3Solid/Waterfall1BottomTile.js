import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Waterfall1BottomTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "Outside1",
            "Outside1", "images/tower/tiles/tilesets/Outside1.png",
            672,
            0,
            48,
            48,
            row,
            column
        );
    }
}