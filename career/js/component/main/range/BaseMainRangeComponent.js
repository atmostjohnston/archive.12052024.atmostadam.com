import { BaseComponent } from "../../../../../gamejs/base/BaseComponent.js";
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../../gamejs/configuration/GameConfiguration.js";
import { TextDrawing } from "../../../../../gamejs/drawing/text/TextDrawing.js";
import { careerGameContext } from "./../../../context/CareerGameContext.js";
import {
    MAIN_SLIDER_TEXT_ID_COMPONENT_SIZE,
    MAIN_SLIDER_TEXT_ID_COMPONENT_COLOR,
    MAIN_SLIDER_TEXT_ID_COMPONENT_OFFSET_PERCENT_X,
    MAIN_SLIDER_TEXT_ID_COMPONENT_OFFSET_PERCENT_Y,
    MAIN_SLIDER_TEXT_PRICE_COMPONENT_SIZE,
    MAIN_SLIDER_TEXT_PRICE_COMPONENT_COLOR,
    MAIN_SLIDER_TEXT_PRICE_COMPONENT_OFFSET_PERCENT_X,
    MAIN_SLIDER_TEXT_PRICE_COMPONENT_OFFSET_PERCENT_Y,
    MAIN_SLIDER_TEXT_TOTAL_COMPONENT_SIZE,
    MAIN_SLIDER_TEXT_TOTAL_COMPONENT_COLOR,
    MAIN_SLIDER_TEXT_TOTAL_COMPONENT_OFFSET_PERCENT_X,
    MAIN_SLIDER_TEXT_TOTAL_COMPONENT_OFFSET_PERCENT_Y
} from "./../../../configuration/CareerConfiguration.js";

export class BaseMainRangeComponent extends BaseComponent {
    constructor(parent) {
        super(
            parent,
            50,
            100,
            ALIGN_LEFT,
            VALIGN_TOP,
            50,
            0
        );
        this.textDrawingId = new TextDrawing(
            this,
            "undefined",
            MAIN_SLIDER_TEXT_ID_COMPONENT_SIZE,
            MAIN_SLIDER_TEXT_ID_COMPONENT_COLOR,
            MAIN_SLIDER_TEXT_ID_COMPONENT_OFFSET_PERCENT_X,
            MAIN_SLIDER_TEXT_ID_COMPONENT_OFFSET_PERCENT_Y
        );
        this.textDrawingPrice = new TextDrawing(
            this,
            "Price Per $0",
            MAIN_SLIDER_TEXT_PRICE_COMPONENT_SIZE,
            MAIN_SLIDER_TEXT_PRICE_COMPONENT_COLOR,
            MAIN_SLIDER_TEXT_PRICE_COMPONENT_OFFSET_PERCENT_X,
            MAIN_SLIDER_TEXT_PRICE_COMPONENT_OFFSET_PERCENT_Y
        );
        this.textDrawingTotal = new TextDrawing(
            this,
            "Total $0",
            MAIN_SLIDER_TEXT_TOTAL_COMPONENT_SIZE,
            MAIN_SLIDER_TEXT_TOTAL_COMPONENT_COLOR,
            MAIN_SLIDER_TEXT_TOTAL_COMPONENT_OFFSET_PERCENT_X,
            MAIN_SLIDER_TEXT_TOTAL_COMPONENT_OFFSET_PERCENT_Y
        );
    }
}