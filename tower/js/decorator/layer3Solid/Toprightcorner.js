import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Toprightcorner extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "Toprightcorner",
            "../../images/tower/tiles/tiles/top-right-corner.png",
            0,
            0,
            50,
            50,
            row,
            column
        );
    }
}