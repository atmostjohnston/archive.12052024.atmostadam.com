import { BaseButtonComponent } from "../../../../../gamejs/base/BaseButtonComponent.js";
import {
    MAIN_PAY_BUTTON_BACKGROUND_COLOR,
    MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
    MAIN_BUTTON_ON_MOUSE_CLICK_COLOR,
    MAIN_NOW_BUTTON_TEXT_SIZE,
    MAIN_NOW_BUTTON_TEXT_COLOR,
    MAIN_NOW_BUTTON_BORDER_SIZE,
    MAIN_NOW_BUTTON_BORDER_COLOR,
    MAIN_PAY_NOW_BUTTON_PERCENT_W,
    MAIN_PAY_NOW_BUTTON_PERCENT_H,
    MAIN_PAY_NOW_BUTTON_OFFSET_PERCENT_X,
    MAIN_PAY_NOW_BUTTON_OFFSET_PERCENT_Y,
    MAIN_PAY_NOW_BUTTON_TEXT_OFFSET_PERCENT_X,
    MAIN_PAY_NOW_BUTTON_TEXT_OFFSET_PERCENT_Y
} from "./../../../configuration/CareerConfiguration.js";
import { careerGameContext } from "./../../../context/CareerGameContext.js";
import { BaseMainNowButtonComponent } from "./BaseMainNowButtonComponent.js";
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../../gamejs/configuration/GameConfiguration.js";

export class PayNowButtonComponent extends BaseMainNowButtonComponent {
    constructor(parent) {
        super(
            parent,
            MAIN_PAY_NOW_BUTTON_PERCENT_W,
            MAIN_PAY_NOW_BUTTON_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            MAIN_PAY_NOW_BUTTON_OFFSET_PERCENT_X,
            MAIN_PAY_NOW_BUTTON_OFFSET_PERCENT_Y,
            MAIN_PAY_BUTTON_BACKGROUND_COLOR,
            MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
            MAIN_BUTTON_ON_MOUSE_CLICK_COLOR
        );
        this.addRectangleSolidDrawing("green")
            .addTextDrawing(
                "PAY",
                MAIN_NOW_BUTTON_TEXT_SIZE,
                MAIN_NOW_BUTTON_TEXT_COLOR,
                MAIN_PAY_NOW_BUTTON_TEXT_OFFSET_PERCENT_X,
                MAIN_PAY_NOW_BUTTON_TEXT_OFFSET_PERCENT_Y
            )
            .addRectangleOutlineDrawing(
                MAIN_NOW_BUTTON_BORDER_SIZE,
                MAIN_NOW_BUTTON_BORDER_COLOR
            );
    }
}