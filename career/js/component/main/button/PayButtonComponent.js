import {
    MAIN_BUTTON_ON_MOUSE_CLICK_COLOR,
    MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
    MAIN_PAY_BUTTON_BACKGROUND_COLOR,
    MAIN_PAY_BUTTON_TEXT_OFFSET_PERCENT_X,
    MAIN_PAY_BUTTON_TEXT_OFFSET_PERCENT_Y,
    MAIN_LIABILITY_COMPONENT
} from "./../../../configuration/CareerConfiguration.js";
import { BaseMainButtonComponent } from "./BaseMainButtonComponent.js";
import { careerGameContext } from "../../../context/CareerGameContext.js";

export class PayButtonComponent extends BaseMainButtonComponent {
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
            MAIN_PAY_BUTTON_BACKGROUND_COLOR,
            MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
            MAIN_BUTTON_ON_MOUSE_CLICK_COLOR,
            "PAY",
            MAIN_PAY_BUTTON_TEXT_OFFSET_PERCENT_X,
            MAIN_PAY_BUTTON_TEXT_OFFSET_PERCENT_Y
        );
        console.log("Pay Button Model: " + this.getModel());
    }

    click() {
        if (MAIN_LIABILITY_COMPONENT == careerGameContext.getMainComponentName()) {
            careerGameContext.setSliderModel(this.getModel());
            careerGameContext.setSliderComponentName(this.constructor.name);
            //super.click();
        }
    }
}