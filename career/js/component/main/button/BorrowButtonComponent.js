import {
    MAIN_BORROW_BUTTON_BACKGROUND_COLOR,
    MAIN_BORROW_BUTTON_TEXT_OFFSET_PERCENT_X,
    MAIN_BORROW_BUTTON_TEXT_OFFSET_PERCENT_Y,
    MAIN_BUTTON_ON_MOUSE_CLICK_COLOR,
    MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
    MAIN_LIABILITY_COMPONENT
} from "./../../../configuration/CareerConfiguration.js";
import { BaseMainButtonComponent } from "./BaseMainButtonComponent.js";
import { careerGameContext } from "../../../context/CareerGameContext.js";

export class BorrowButtonComponent extends BaseMainButtonComponent {
    constructor(parent, model, percentW, percentH, align, valign, offsetPercentX, offsetPercentY) {
        super(
            parent,
            model,
            percentW,
            percentH,
            align,
            valign,
            offsetPercentX,
            offsetPercentY,
            MAIN_BORROW_BUTTON_BACKGROUND_COLOR,
            MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
            MAIN_BUTTON_ON_MOUSE_CLICK_COLOR,
            "BORROW",
            MAIN_BORROW_BUTTON_TEXT_OFFSET_PERCENT_X,
            MAIN_BORROW_BUTTON_TEXT_OFFSET_PERCENT_Y
        );
        console.log("Borrow Button Model: " + this.getModel());
    }

    click() {
        if (MAIN_LIABILITY_COMPONENT == careerGameContext.getMainComponentName()) {
            careerGameContext.setSliderModel(this.getModel());
            careerGameContext.setSliderComponentName(this.constructor.name);
            //super.click();
        }
    }
}