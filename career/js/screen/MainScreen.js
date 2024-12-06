import { RectangleOutlineDrawing } from "./../drawing/RectangleOutlineDrawing.js";
import {
    MAIN_SCREEN_PERCENT_X,
    MAIN_SCREEN_PERCENT_Y,
    MAIN_SCREEN_PERCENT_W,
    MAIN_SCREEN_PERCENT_H,
    MAIN_SCREEN_PERCENT_BORDER,
    MAIN_SCREEN_COLOR
} from "./../configuration/GameConfiguration.js";

export class MainScreen {
    constructor(context) {
        this.context = context;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        new RectangleOutlineDrawing(
            this.context,
            MAIN_SCREEN_PERCENT_X,
            MAIN_SCREEN_PERCENT_Y,
            MAIN_SCREEN_PERCENT_W,
            MAIN_SCREEN_PERCENT_H,
            MAIN_SCREEN_PERCENT_BORDER,
            MAIN_SCREEN_COLOR)
            .draw();
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}