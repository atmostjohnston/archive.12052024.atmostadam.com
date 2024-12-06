import {
    MAIN_SELL_BUTTON_BACKGROUND_COLOR,
    MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
    MAIN_BUTTON_ON_MOUSE_CLICK_COLOR,
    MAIN_NOW_BUTTON_TEXT_SIZE,
    MAIN_NOW_BUTTON_TEXT_COLOR,
    MAIN_NOW_BUTTON_BORDER_SIZE,
    MAIN_NOW_BUTTON_BORDER_COLOR,
    MAIN_SELL_NOW_BUTTON_PERCENT_W,
    MAIN_SELL_NOW_BUTTON_PERCENT_H,
    MAIN_SELL_NOW_BUTTON_OFFSET_PERCENT_X,
    MAIN_SELL_NOW_BUTTON_OFFSET_PERCENT_Y,
    MAIN_SELL_NOW_BUTTON_TEXT_OFFSET_PERCENT_X,
    MAIN_SELL_NOW_BUTTON_TEXT_OFFSET_PERCENT_Y
} from "./../../../configuration/CareerConfiguration.js";
import { BaseMainNowButtonComponent } from "./BaseMainNowButtonComponent.js";
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../../gamejs/configuration/GameConfiguration.js";

export class SellNowButtonComponent extends BaseMainNowButtonComponent {
    constructor(parent) {
        super(
            parent,
            MAIN_SELL_NOW_BUTTON_PERCENT_W,
            MAIN_SELL_NOW_BUTTON_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            MAIN_SELL_NOW_BUTTON_OFFSET_PERCENT_X,
            MAIN_SELL_NOW_BUTTON_OFFSET_PERCENT_Y,
            MAIN_SELL_BUTTON_BACKGROUND_COLOR,
            MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
            MAIN_BUTTON_ON_MOUSE_CLICK_COLOR
        );
        this.addRectangleSolidDrawing("green")
            .addTextDrawing(
                "SELL",
                MAIN_NOW_BUTTON_TEXT_SIZE,
                MAIN_NOW_BUTTON_TEXT_COLOR,
                MAIN_SELL_NOW_BUTTON_TEXT_OFFSET_PERCENT_X,
                MAIN_SELL_NOW_BUTTON_TEXT_OFFSET_PERCENT_Y
            )
            .addRectangleOutlineDrawing(
                MAIN_NOW_BUTTON_BORDER_SIZE,
                MAIN_NOW_BUTTON_BORDER_COLOR
            );
    }
}