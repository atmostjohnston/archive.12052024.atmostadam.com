import { BaseButtonComponent } from "../../../../../gamejs/base/BaseButtonComponent.js";
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../../gamejs/configuration/GameConfiguration.js";
import {
    MAIN_BUY_BUTTON_BACKGROUND_COLOR,
    MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
    MAIN_BUTTON_ON_MOUSE_CLICK_COLOR,
    MAIN_NOW_BUTTON_TEXT_SIZE,
    MAIN_NOW_BUTTON_TEXT_COLOR,
    MAIN_NOW_BUTTON_BORDER_SIZE,
    MAIN_NOW_BUTTON_BORDER_COLOR,
    MAIN_BUY_NOW_BUTTON_PERCENT_W,
    MAIN_BUY_NOW_BUTTON_PERCENT_H,
    MAIN_BUY_NOW_BUTTON_OFFSET_PERCENT_X,
    MAIN_BUY_NOW_BUTTON_OFFSET_PERCENT_Y,
    MAIN_BUY_NOW_BUTTON_TEXT_OFFSET_PERCENT_X,
    MAIN_BUY_NOW_BUTTON_TEXT_OFFSET_PERCENT_Y
} from "./../../../configuration/CareerConfiguration.js";

export class BuyNowButtonComponent extends BaseButtonComponent {
    constructor(parent) {
        super(
            parent,
            MAIN_BUY_NOW_BUTTON_PERCENT_W,
            MAIN_BUY_NOW_BUTTON_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            MAIN_BUY_NOW_BUTTON_OFFSET_PERCENT_X,
            MAIN_BUY_NOW_BUTTON_OFFSET_PERCENT_Y,
            MAIN_BUY_BUTTON_BACKGROUND_COLOR,
            MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
            MAIN_BUTTON_ON_MOUSE_CLICK_COLOR
        );
        this.addRectangleSolidDrawing("red")
            .addTextDrawing(
                "BUY",
                MAIN_NOW_BUTTON_TEXT_SIZE,
                MAIN_NOW_BUTTON_TEXT_COLOR,
                MAIN_BUY_NOW_BUTTON_TEXT_OFFSET_PERCENT_X,
                MAIN_BUY_NOW_BUTTON_TEXT_OFFSET_PERCENT_Y
            )
            .addRectangleOutlineDrawing(
                MAIN_NOW_BUTTON_BORDER_SIZE,
                MAIN_NOW_BUTTON_BORDER_COLOR
            );
    }
}