import {
    MAIN_ASSET_COMPONENT,
    MAIN_BUTTON_ON_MOUSE_CLICK_COLOR,
    MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
    MAIN_BUY_BUTTON_BACKGROUND_COLOR,
    MAIN_BUY_BUTTON_TEXT_OFFSET_PERCENT_X,
    MAIN_BUY_BUTTON_TEXT_OFFSET_PERCENT_Y,
} from "./../../../configuration/CareerConfiguration.js";
import { BaseMainButtonComponent } from "./BaseMainButtonComponent.js";
import { careerGameContext } from "../../../context/CareerGameContext.js";

export class BuyButtonComponent extends BaseMainButtonComponent {
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
            MAIN_BUY_BUTTON_BACKGROUND_COLOR,
            MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
            MAIN_BUTTON_ON_MOUSE_CLICK_COLOR,
            "BUY",
            MAIN_BUY_BUTTON_TEXT_OFFSET_PERCENT_X,
            MAIN_BUY_BUTTON_TEXT_OFFSET_PERCENT_Y
        );
        console.log("Buy Button Model: " + this.getModel());
    }

    click() {
        if (MAIN_ASSET_COMPONENT == careerGameContext.getMainComponentName()) {
            careerGameContext.setSliderModel(this.getModel());
            careerGameContext.setSliderComponentName(this.constructor.name);
            //super.click();
        }
    }
}