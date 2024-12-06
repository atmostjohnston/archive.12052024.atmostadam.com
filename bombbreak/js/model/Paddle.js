import { Rectangle } from "./../../../boot/canvas/model/shapes/Rectangle.js"

export class Paddle extends Rectangle {
    constructor(context, color, percentX, percentY, percentW, percentH) {
        super(context, color, percentX, percentY, percentW, percentH);
    }

    update(tick) {
        super.update(tick);
    }

    getX() {
        return this.context.getMouseListener().mousePositionX;
    }
}