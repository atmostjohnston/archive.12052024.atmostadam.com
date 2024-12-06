import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";


export class SelectionRectangleDrawing extends Drawing {
    constructor(context, cat, w, h, x, y) {
        super(context);

        this.size = cfg.SELECTION_RECTANGLE_LINE_SIZE;
        this.color = cat.color;
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
    }

    draw() {
        var ctx = this.context.getCtx();

        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.context.get("selectionRectangleWidth"),
            this.context.get("selectionRectangleHeight"));

        super.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);
    }
}
