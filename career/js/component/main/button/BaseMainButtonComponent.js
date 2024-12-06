import { BaseButtonComponent } from "../../../../../gamejs/base/BaseButtonComponent.js";
import {
    MAIN_BUTTON_BORDER_COLOR,
    MAIN_BUTTON_BORDER_SIZE,
    MAIN_BUTTON_TEXT_COLOR,
    MAIN_BUTTON_TEXT_SIZE
} from "./../../../configuration/CareerConfiguration.js";

export class BaseMainButtonComponent extends BaseButtonComponent {
    constructor(
        parent,
        model,
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
        this.model = model;
        this.addRectangleSolidDrawing(defaultColor)
            .addTextDrawing(
                text,
                MAIN_BUTTON_TEXT_SIZE,
                MAIN_BUTTON_TEXT_COLOR,
                offsetTextPercentX,
                offsetTextPercentY
            )
            .addRectangleOutlineDrawing(
                MAIN_BUTTON_BORDER_SIZE,
                MAIN_BUTTON_BORDER_COLOR
            );
    }

    getModel() {
        return this.model;
    }
}