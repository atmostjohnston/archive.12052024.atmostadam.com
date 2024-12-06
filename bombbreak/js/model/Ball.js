import { BaseImage } from "../../../boot/base/BaseImage.js";

export class Ball extends BaseImage {
    constructor(context, grid, color, percentX, percentY, percentR, speedX, speedY) {
        super(context);
        this.grid = this.notNull("grid", grid);
        this.color = this.notNull("color", color);
        this.percentX = this.isNumber("percentX", percentX);
        this.percentY = this.isNumber("percentY", percentY);
        this.percentR = this.isNotZeroNumber("percentR", percentR);
        this.speedX = this.isNotZeroNumber("speedX", speedX);
        this.speedY = this.isNotZeroNumber("speedY", speedY);
        this.originalSpeedX = speedX;
        this.originalSpeedY = speedY;
        this.originalColor = color;
        this.START_ANGLE = 0;
        this.END_ANGLE = 2 * Math.PI;
    }

    init() {
        this.x = this.getWidthPercent(this.percentX);
        this.y = this.getHeightPercent(this.percentY);
        this.r = this.getHeightPercent(this.percentR);
        //this.touchboxX = this.x - this.r;
        //this.touchboxY = this.y - this.r;
        //this.touchboxW = this.r * 2;
        //this.touchboxH = this.r * 2;
        //this.explodeboxX = this.touchboxX - (this.r * 2);
        //this.explodeboxY = this.touchboxY - (this.r * 2);
        //this.explodeboxW = this.touchboxW + (this.r * 2);
        //this.explodeboxH = this.touchboxH + (this.r * 2);
        this.hitboxX = this.x;
        this.hitboxY = this.y;
        this.hitboxW = this.r;
        this.hitboxH = this.r;
        this.originalX = this.x;
        this.originalY = this.y;
        this.originalR = this.r;
        this.loaded = true;
    }

    update(tick) {
        super.update(tick);
        if (!this.bounceIfTouchingLeft()) {
            this.bounceIfTouchingRight();
        }
        if (!this.bounceIfTouchingTop()) {
            this.bounceIfTouchingBottom();
        }

        //var touching = false;
        /*
        for (let rowNumber = 0; rowNumber < this.grid.getNumberOfRows(); rowNumber++) {
            for (let columnNumber = 0; columnNumber < this.grid.getNumberOfColumns(); columnNumber++) {
                let cell = this.grid.get(rowNumber, columnNumber);
                let image = cell.getImage();
                if (image) {
                    image.changeImageIfCollision(
                        this.hitboxX,
                        this.hitboxY,
                        this.hitboxW,
                        this.hitboxH,
                        new Explosion(this.context, cell));
                }
            }
        }
        */
        /*
        if (touching) {
            for (let rowNumber = 0; rowNumber < this.grid.getNumberOfRows(); rowNumber++) {
                for (let columnNumber = 0; columnNumber < this.grid.getNumberOfColumns(); columnNumber++) {
                    let img = this.grid.get(rowNumber, columnNumber).getImage();
                    if (img) {
                        img.changeImageIfCollision(
 
                            new Explosion(context, cell));
                    }
                }
            }
        }
        */
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        let ctx = this.context.getScreen().getCtx();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.START_ANGLE, this.END_ANGLE);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    bounceIfTouchingLeft() {
        this.speedX *= this.isTouchingLeft() ? -1 : 1;
        return this.isTouchingLeft();
    }

    bounceIfTouchingRight() {
        this.speedX *= this.isTouchingRight() ? -1 : 1;
        return this.isTouchingRight();
    }

    bounceIfTouchingTop() {
        this.speedY *= this.isTouchingTop() ? -1 : 1;
        return this.isTouchingTop();
    }

    bounceIfTouchingBottom() {
        this.speedY *= this.isTouchingBottom() ? -1 : 1;
        return this.isTouchingBottom();
    }

    /*

    bounceIfTouchingRectangleX(x, y, w, h) {
        if (insideRectangle(this.x, this.y, x, y, w, h)) {
            this.speedX *= -1;
            return true;
        }
        return false;
    }

    bounceIfTouchingRectangleY(x, y, w, h) {
        if (insideRectangle(this.x, this.y, x, y, w, h)) {
            this.speedY *= -1;
            return true;
        }
        return false;
    }
    */

    isTouchingLeft() { return this.x < this.context.getScreen().getLeft(); }
    isTouchingRight() { return this.x > this.context.getScreen().getRight(); }
    isTouchingTop() { return this.y < this.context.getScreen().getTop(); }
    isTouchingBottom() { return this.y > this.context.getScreen().getBottom(); }

    reset() {
        this.color = this.originalColor;
        this.x = this.originalX;
        this.y = this.originalY;
        this.r = this.originalR;
        this.speedX = this.originalSpeedX;
        this.speedY = this.originalSpeedY;
    }

    getX() {
        return this.x;
    }

    setX(x) {
        this.x = this.isNumber(x);
        return this;
    }

    getY() {
        return this.y;
    }

    setY(y) {
        this.y = this.isNumber(y);
        return this;
    }

    getR() {
        return this.r;
    }

    setR(r) {
        this.r = this.isNotZeroNumber(r);
        return this;
    }

    /*
    getSpeedX() {
        return this.speedX;
    }
 
    setSpeedX(speedX) {
        this.speedX = speedX;
        return this;
    }
 
    getSpeedY() {
        return this.speedY;
    }
 
    setSpeedY(speedY) {
        this.speedY = speedY;
        return this;
    }
 
    getOriginalColor() {
        return this.originalColor;
    }
 
    setOriginalColor(originalColor) {
        this.originalColor = originalColor;
        return this;
    }
 
    getOriginalX() {
        return this.originalX;
    }
 
    setOriginalX(originalX) {
        this.originalX = originalX;
        return this;
    }
 
    getOriginalY() {
        return this.originalY;
    }
 
    setOriginalY(originalY) {
        this.originalY = originalY;
        return this;
    }
 
    getOriginalR() {
        return this.originalR;
    }
 
    setOriginalR(originalR) {
        this.originalR = originalR;
        return this;
    }
 
    getOriginalSpeedX() {
        return this.originalSpeedX;
    }
 
    setOriginalSpeedX(originalSpeedX) {
        this.originalSpeedX = originalSpeedX;
        return this;
    }
 
    getOriginalSpeedY() {
        return this.originalSpeedY;
    }
 
    setOriginalSpeedY(originalSpeedY) {
        this.speedY = originalSpeedY;
        return this;
    }
    */
}