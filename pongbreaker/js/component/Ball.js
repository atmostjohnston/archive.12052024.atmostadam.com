import { notNull, isNumber } from "./../../../boot/function/GameFunctions.js";

export class Ball {
    constructor(context, color, size, percentX, percentY, speedX, speedY) {
        this.context = notNull("context", context, this);
        this.color = notNull("color", color, this);
        this.size = isNumber("size", size, this);
        this.percentX = isNumber("percentX", percentX, this);
        this.percentY = isNumber("percentY", percentY, this);
        this.speedX = isNumber("speedX", speedX, this);
        this.speedY = isNumber("speedY", speedY, this);
        this.START_ANGLE = 0;
        this.END_ANGLE = 2 * Math.PI;
    }

    update(tick) {
        this.tick = tick;
        this.bounceThisTickX = false;
        this.bounceThisTickY = false;
        this.originalX = this.x;
        this.originalY = this.y;
        this.x = this.originalX ? this.originalX + this.speedX :
            this.context.getScreen().getWidthPercent(this.percentX);
        this.y = this.originalY ? this.originalY :
            this.context.getScreen().getHeightPercent(this.percentY);
    }

    draw() {
        this.context.getScreen().drawCircle(
            this.color,
            this.x,
            this.y,
            this.size,
            this.START_ANGLE,
            this.END_ANGLE
        );
    }

    isTouching(x, y) {
        return this.isTouchingX(x) && this.isTouchingY(y);
    }

    isTouchingX(x) {
        let deltaX = this.x - this.originalX;
        insideRectangle(x, y, this.x + deltaX, 0,
            this.w + Math.abs(deltaX), this.context.getScreen().getHeight());
    }

    isTouchingY(y) {
        let deltaY = this.y - this.originalY;
        insideRectangle(x, y, 0, this.y + deltaY,
            this.context.getScreen.getWidth(), this.h + Math.abs(deltaY));
    }
}