import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Castle1BottomRightTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "World_B",
            "../../images/tower/tiles/tilesets/World_B.png",
            48,
            240,
            48,
            48,
            row,
            column
        );
    }
}