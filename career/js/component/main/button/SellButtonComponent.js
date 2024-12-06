import {
    MAIN_BUTTON_ON_MOUSE_CLICK_COLOR,
    MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
    MAIN_SELL_BUTTON_BACKGROUND_COLOR,
    MAIN_SELL_BUTTON_TEXT_OFFSET_PERCENT_X,
    MAIN_SELL_BUTTON_TEXT_OFFSET_PERCENT_Y,
    MAIN_ASSET_COMPONENT
} from "./../../../configuration/CareerConfiguration.js";
import { BaseMainButtonComponent } from "./BaseMainButtonComponent.js";
import { careerGameContext } from "../../../context/CareerGameContext.js";

export class SellButtonComponent extends BaseMainButtonComponent {
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
            MAIN_SELL_BUTTON_BACKGROUND_COLOR,
            MAIN_BUTTON_ON_MOUSE_OVER_COLOR,
            MAIN_BUTTON_ON_MOUSE_CLICK_COLOR,
            "SELL",
            MAIN_SELL_BUTTON_TEXT_OFFSET_PERCENT_X,
            MAIN_SELL_BUTTON_TEXT_OFFSET_PERCENT_Y
        );
        console.log("Sell Button Model: " + this.getModel());
    }

    click() {
        if (MAIN_ASSET_COMPONENT == careerGameContext.getMainComponentName()) {
            careerGameContext.setSliderModel(this.getModel());
            careerGameContext.setSliderComponentName(this.constructor.name);
            //super.click();
        }
    }
}