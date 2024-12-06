import { notNull, isNumber, insideRectangle } from "./../../../boot/function/GameFunctions.js";

export class Paddle {
    constructor(context, color, percentX, percentY, percentW, percentH) {
        this.context = notNull("context", context, this);
        this.color = notNull("color", color, this);
        this.percentX = isNumber("percentX", percentX, this);
        this.percentY = isNumber("percentY", percentY, this);
        this.percentW = isNumber("percentW", percentW, this);
        this.percentH = isNumber("percentH", percentH, this);
    }

    update(tick) {
        this.tick = tick;

        this.x = this.context.getScreen().getWidthPercent(this.percentX);

        this.originalY = this.y;
        this.mouseY = this.context.getMouseListener().mousePositionY;
        this.y = this.mouseY ? this.mouseY :
            this.context.getScreen().getHeightPercent(this.percentY);

        this.w = this.context.getScreen().getWidthPercent(this.percentW);
        this.h = this.context.getScreen().getHeightPercent(this.percentH);
    }

    draw() {
        this.context.getScreen().drawRectangle(
            this.opponentPaddleColor,
            this.x,
            this.y,
            this.w,
            this.h
        );
    }

    isTouching(x, y) {
        let deltaY = this.y - this.originalY;
        insideRectangle(x, y, this.x, this.y + deltaY, this.w, this.h + Math.abs(deltaY));
    }
}