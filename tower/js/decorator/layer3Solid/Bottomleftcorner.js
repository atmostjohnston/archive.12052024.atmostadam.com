import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Bottomleftcorner extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "Bottomleftcorner",
            "../../images/tower/tiles/tiles/bottom-left-corner.png",
            0,
            0,
            50,
            50,
            row,
            column
        );
    }
}