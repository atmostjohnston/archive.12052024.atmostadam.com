import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Castle1BottomLeftTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "World_B",
            "../../images/tower/tiles/tilesets/World_B.png",
            0,
            240,
            48,
            48,
            row,
            column
        );
    }
}