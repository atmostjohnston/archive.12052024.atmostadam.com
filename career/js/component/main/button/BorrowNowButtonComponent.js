import { BaseButtonComponent } from "../../../../../gamejs/base/BaseButtonComponent.js";
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../../gamejs/configuration/GameConfiguration.js";
import {
    MAIN_BORROW_BUTTON_BACKGROUND_COLOR,
    MAIN_BORROW_NOW_BUTTON_OFFSET_PERCENT_X,
    MAIN_BORROW_NOW_BUTTON_OFFSET_PERCENT_Y,
    MAIN_BORROW_NOW_BUTTON_PERCENT_H,
    MAIN_BORROW_NOW_BUTTON_PERCENT_W,
    MAIN_BORROW_NOW_BUTTON_TEXT_OFFSET_PERCENT_X,
    MAIN_BORROW_NOW_BUTTON_TEXT_OFFSET_PERCENT_Y,
    MAIN_BUTTON_ON_MOUSE_CLICK_COLOR,
    MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
    MAIN_NOW_BUTTON_TEXT_SIZE,
    MAIN_NOW_BUTTON_TEXT_COLOR,
    MAIN_NOW_BUTTON_BORDER_SIZE,
    MAIN_NOW_BUTTON_BORDER_COLOR
} from "./../../../configuration/CareerConfiguration.js";

export class BorrowNowButtonComponent extends BaseButtonComponent {
    constructor(parent) {
        super(
            parent,
            MAIN_BORROW_NOW_BUTTON_PERCENT_W,
            MAIN_BORROW_NOW_BUTTON_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            MAIN_BORROW_NOW_BUTTON_OFFSET_PERCENT_X,
            MAIN_BORROW_NOW_BUTTON_OFFSET_PERCENT_Y,
            MAIN_BORROW_BUTTON_BACKGROUND_COLOR,
            MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
            MAIN_BUTTON_ON_MOUSE_CLICK_COLOR,
            MAIN_BORROW_NOW_BUTTON_TEXT_OFFSET_PERCENT_X,
            MAIN_BORROW_NOW_BUTTON_TEXT_OFFSET_PERCENT_Y
        );
        this.addRectangleSolidDrawing("red")
            .addTextDrawing(
                "BORROW",
                MAIN_NOW_BUTTON_TEXT_SIZE,
                MAIN_NOW_BUTTON_TEXT_COLOR,
                MAIN_BORROW_NOW_BUTTON_TEXT_OFFSET_PERCENT_X,
                MAIN_BORROW_NOW_BUTTON_TEXT_OFFSET_PERCENT_Y
            )
            .addRectangleOutlineDrawing(
                MAIN_NOW_BUTTON_BORDER_SIZE,
                MAIN_NOW_BUTTON_BORDER_COLOR
            );
    }
}