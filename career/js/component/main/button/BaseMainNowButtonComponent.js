import { BaseButtonComponent } from "../../../../../gamejs/base/BaseButtonComponent.js";
import {
    MAIN_NOW_BUTTON_BORDER_COLOR,
    MAIN_NOW_BUTTON_BORDER_SIZE,
    MAIN_NOW_BUTTON_TEXT_COLOR,
    MAIN_NOW_BUTTON_TEXT_SIZE
} from "./../../../configuration/CareerConfiguration.js";

export class BaseMainNowButtonComponent extends BaseButtonComponent {
    constructor(
        parent,
        percentW,
        percentH,
        align,
        valign,
        offsetPercentX,
        offsetPercentY,
        defaultColor,
        onMouseOverColor,
        onMouseClickButton,
        text,
        offsetTextPercentX,
        offsetTextPercentY
    ) {
        super(
            parent,
            percentW,
            percentH,
            align,
            valign,
            offsetPercentX,
            offsetPercentY,
            defaultColor,
            onMouseOverColor,
            onMouseClickButton
        );
        this.addRectangleSolidDrawing(defaultColor)
            .addTextDrawing(
                text,
                MAIN_NOW_BUTTON_TEXT_SIZE,
                MAIN_NOW_BUTTON_TEXT_COLOR,
                offsetTextPercentX,
                offsetTextPercentY
            )
            .addRectangleOutlineDrawing(
                MAIN_NOW_BUTTON_BORDER_SIZE,
                MAIN_NOW_BUTTON_BORDER_COLOR
            );
    }
}