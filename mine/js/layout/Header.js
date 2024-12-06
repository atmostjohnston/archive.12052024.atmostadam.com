import { notNull } from "../../../boot/function/GameFunctions.js";
import { ScrollingTextHandler } from "../handler/ScrollingTextHandler.js";

export class Header {
    constructor(context) {
        this.context = notNull("context", context, this);
        this.size = 6;
        this.pt = 32;
        this.font = this.pt + "pt Arial";
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getLeft();
        this.y = this.screen.getTop();
        this.w = this.screen.getWidth();
        this.h = this.screen.getHeight() * .05;

        const margin = this.x + 50;

        this.startX = margin;
        this.tx = margin;
        this.ty = (this.h + this.y + this.pt) / 2;
        this.endX = this.w - margin;

        this.handler = new ScrollingTextHandler();

        this.loaded = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.loaded) {
            this.init();
        }

        this.handler.updateText();
        if (this.tx > this.endX) {
            this.tx = this.startX;
            this.handler.next();
        }

        this.loaded = true;
    }

    draw() {
        if (null != this.handler.text) {
            this.screen.drawText(this.handler.text, this.font, this.handler.textColor, this.tx, this.ty);
            this.tx += 2;
        }
    }

    drawBackground() {
        this.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);
    }

    drawBackground() {
        this.color = "#e1e1e1";
        this.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);

        this.color = "white";
        this.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);
    }
}