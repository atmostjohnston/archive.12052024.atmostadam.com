import { BaseComponent } from "../../../../../gamejs/base/BaseComponent.js";
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../../gamejs/configuration/GameConfiguration.js";
import {
    MAIN_SLIDER_BAR_COMPONENT_PERCENT_W,
    MAIN_SLIDER_BAR_COMPONENT_PERCENT_H,
    MAIN_SLIDER_BAR_COMPONENT_OFFSET_PERCENT_X,
    MAIN_SLIDER_BAR_COMPONENT_OFFSET_PERCENT_Y
} from "../../../configuration/CareerConfiguration.js";

export class BaseMainSliderBarComponent extends BaseComponent {
    constructor(parent, color) {
        super(
            parent,
            MAIN_SLIDER_BAR_COMPONENT_PERCENT_W,
            MAIN_SLIDER_BAR_COMPONENT_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            MAIN_SLIDER_BAR_COMPONENT_OFFSET_PERCENT_X,
            MAIN_SLIDER_BAR_COMPONENT_OFFSET_PERCENT_Y
        );
        this.addRectangleSolidDrawing(color);
    }
}