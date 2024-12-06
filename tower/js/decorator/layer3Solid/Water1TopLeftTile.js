import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Water1TopLeftTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "Outside_A1",
            "../../images/tower/tiles/tilesets/Outside_A1.png",
            0,
            48,
            48,
            48,
            row,
            column
        );
    }
}