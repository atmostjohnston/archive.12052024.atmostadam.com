import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Water1MiddlePathTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "Outside_A1",
            "../../images/tower/tiles/tilesets/Outside_A1.png",
            400,
            220,
            64,
            64,
            row,
            column
        );
    }
}