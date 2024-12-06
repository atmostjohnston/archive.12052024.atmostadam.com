import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Tent1 extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "Outside3",
            "../../images/tower/tiles/tilesets/Outside3.png",
            0,
            48,
            48,
            48,
            row,
            column
        );
    }
}