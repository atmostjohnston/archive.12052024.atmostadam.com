import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";

export class SelectionCatPixelDrawing extends Drawing {
    constructor(context, cat, x, y) {
        super(context);

        this.image = this.context.get(cat.name.toLowerCase() + "Pixel");
        this.ix = cfg.PIXEL_MARGIN_IMAGE_XY;
        this.iy = cfg.PIXEL_MARGIN_IMAGE_XY;
        this.w = cfg.SELECTION_PIXEL_XY;
        this.h = cfg.SELECTION_PIXEL_XY;
        this.x = x;
        this.y = y;
        this.sw = cfg.SELECTION_PIXEL_XY;
        this.sh = cfg.SELECTION_PIXEL_XY;
    }

    draw() {
        super.drawImageLoaded();
    }
}