import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Bottomrightcorner extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "Bottomrightcorner",
            "../../images/tower/tiles/tiles/bottom-right-corner.png",
            0,
            0,
            50,
            50,
            row,
            column
        );
    }
}