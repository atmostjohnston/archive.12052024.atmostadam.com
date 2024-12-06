import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class PalmTree1TopTile extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "ArabianNights-TileB",
            "../../images/tower/towers/tilesets/ArabianNights-TileB.png",
            0,
            192,
            48,
            48,
            row,
            column
        );
    }
}