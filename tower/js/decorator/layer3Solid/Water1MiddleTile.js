import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Water1MiddleTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "Outside_A1",
            "../../images/tower/tiles/tilesets/Outside_A1.png",
            24,
            72,
            48,
            48,
            row,
            column
        );
    }
}