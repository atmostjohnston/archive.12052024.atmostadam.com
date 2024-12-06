import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Snow1Tile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "Outside41",
            "../../images/tower/tiles/tilesets/Outside41.png",
            192,
            480,
            48,
            48,
            row,
            column
        );
    }
}