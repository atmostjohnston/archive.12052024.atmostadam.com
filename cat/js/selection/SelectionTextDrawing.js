import { Drawing } from "../api/Drawing.js";
import * as cfg from "../config/GameConfiguration.js";

export class SelectionTextDrawing extends Drawing {
    constructor(context, cat, x, y) {
        super(context);

        this.text = cat.name;
        this.color = cat.color;
        this.font = cfg.SELECTION_SCREEN_FONT_30;
        this.x = x;
        this.y = y;
    }

    draw() {
        super.drawTextLoaded();
    }
}