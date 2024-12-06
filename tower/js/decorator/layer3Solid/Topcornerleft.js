import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Topcornerleft extends BaseImage {
    constructor(context, row, column) {
        super(
            context,
            "Topcornerleft",
            "../../images/tower/tiles/tiles/top-corner-left.png",
            0,
            0,
            50,
            50,
            row,
            column
        );
    }
}