import { BaseComponent } from "../../../../../gamejs/base/BaseComponent.js";
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../../gamejs/configuration/GameConfiguration.js";
import {
    MAIN_SLIDER_COMPONENT_OFFSET_PERCENT_X,
    MAIN_SLIDER_COMPONENT_OFFSET_PERCENT_Y,
    MAIN_SLIDER_COMPONENT_PERCENT_H,
    MAIN_SLIDER_COMPONENT_PERCENT_W
} from "../../../configuration/CareerConfiguration.js";

export class BaseMainSliderComponent extends BaseComponent {
    constructor(parent) {
        super(
            parent,
            MAIN_SLIDER_COMPONENT_PERCENT_W,
            MAIN_SLIDER_COMPONENT_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            MAIN_SLIDER_COMPONENT_OFFSET_PERCENT_X,
            MAIN_SLIDER_COMPONENT_OFFSET_PERCENT_Y
        );
    }
}