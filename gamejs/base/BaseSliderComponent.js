import { BaseComponent } from "./BaseComponent.js";
import {
    RANGE_SLIDER_PERCENT_X,
    RANGE_SLIDER_PERCENT_Y,
    RANGE_SLIDER_PERCENT_W,
    RANGE_SLIDER_PERCENT_H,
    RANGE_SLIDER_COLOR,
    RANGE_SLIDER_UNITS_PERCENT_X,
    RANGE_SLIDER_UNITS_PERCENT_Y,
    RANGE_SLIDER_UNITS_COLOR,
    RANGE_SLIDER_UNITS_FONT,
    RANGE_SLIDER_DEFAULT_BACKGROUND_COLOR,
    RANGE_SLIDER_ON_CLICK_BACKGROUND_COLOR,
    RANGE_SLIDER_ON_MOUSE_OVER_BACKGROUND_COLOR,
    RANGE_SLIDER_POSITION_PERCENT_Y,
    RANGE_SLIDER_POSITION_PERCENT_W,
    RANGE_SLIDER_POSITION_PERCENT_H
} from "./../configuration/GameConfiguration.js"

export class BaseSliderComponent extends BaseComponent {
    constructor(parent, percentW, percentH, align, valign, offsetPercentX, offsetPercentY) {
        super(
            parent,
            percentW,
            percentH,
            align,
            valign,
            offsetPercentX,
            offsetPercentY
        );
        this.addRectangleSolidDrawing(
            this.context,
            RANGE_SLIDER_PERCENT_X,
            RANGE_SLIDER_PERCENT_Y,
            RANGE_SLIDER_PERCENT_W + RANGE_SLIDER_POSITION_PERCENT_W,
            RANGE_SLIDER_PERCENT_H,
            RANGE_SLIDER_COLOR
        ).addRectangleSolidDrawing(
            this.context,
            0,
            RANGE_SLIDER_POSITION_PERCENT_Y,
            RANGE_SLIDER_POSITION_PERCENT_W,
            RANGE_SLIDER_POSITION_PERCENT_H,
            RANGE_SLIDER_COLOR
        );
    }
}