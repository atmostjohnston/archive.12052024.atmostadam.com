import { context } from "./../../main.js";
import { BaseDrawing } from "../../base/BaseDrawing.js";

export class RectangleImageDrawing extends BaseDrawing {
    constructor(imageSrc, ix, iy, w, h, percentX, percentY, percentW, percentH) {
        this.imageSrc = imageSrc;
        this.ix = ix;
        this.iy = iy;
        this.w = w;
        this.h = h;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentW = percentW;
        this.percentH = percentH;
    }

    draw() {
        let ctx = context.getCtx();
        ctx.drawImage(
            context.getImage(this.imageSrc),
            this.ix,
            this.iy,
            this.w,
            this.h,
            context.getWidthPercent(this.percentX),
            context.getHeightPercent(this.percentY),
            context.getWidthPercent(this.percentW),
            context.getHeightPercent(this.percentH)
        );
    }
}