import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Water1MiddleLandTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "Outside_A2",
            "../../images/tower/tiles/tilesets/Outside_A2.png",
            0,
            0,
            64,
            64,
            row,
            column
        );
    }
}