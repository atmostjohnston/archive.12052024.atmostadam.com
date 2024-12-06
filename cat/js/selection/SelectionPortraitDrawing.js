import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";

export class SelectionPortraitDrawing extends Drawing {
    constructor(context, cat, x, y) {
        super(context);

        this.image = this.context.get(cat.name.toLowerCase() + "Portrait");
        this.ix = 0;
        this.iy = 0;
        this.w = cfg.SELECTION_PORTRAIT_IMAGE_PX;
        this.h = cfg.SELECTION_PORTRAIT_IMAGE_PX;
        this.x = x;
        this.y = y;
        this.sw = cfg.SELECTION_PORTRAIT_IMAGE_SCALE_PX;
        this.sh = cfg.SELECTION_PORTRAIT_IMAGE_SCALE_PX;
    }

    draw() {
        super.drawImageLoaded();
    }
}