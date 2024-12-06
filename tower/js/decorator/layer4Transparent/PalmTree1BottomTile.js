import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class PalmTree1BottomTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "ArabianNights-TileB",
            "../../images/tower/towers/tilesets/ArabianNights-TileB.png",
            0,
            248,
            48,
            32,
            row,
            column
        );
    }
}