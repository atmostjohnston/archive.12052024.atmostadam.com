import { BaseComponent } from "../../../../../gamejs/base/BaseComponent.js";
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../../gamejs/configuration/GameConfiguration.js";
import {
    MAIN_SLIDER_POSITION_COMPONENT_PERCENT_W,
    MAIN_SLIDER_POSITION_COMPONENT_PERCENT_H,
    MAIN_SLIDER_POSITION_COMPONENT_OFFSET_PERCENT_X,
    MAIN_SLIDER_POSITION_COMPONENT_OFFSET_PERCENT_Y
} from "../../../configuration/CareerConfiguration.js";
import { context } from "./../../../../../gamejs/main.js";

export class BaseMainSliderPositionComponent extends BaseComponent {
    constructor(parent, color) {
        super(
            parent,
            MAIN_SLIDER_POSITION_COMPONENT_PERCENT_W,
            MAIN_SLIDER_POSITION_COMPONENT_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            MAIN_SLIDER_POSITION_COMPONENT_OFFSET_PERCENT_X,
            MAIN_SLIDER_POSITION_COMPONENT_OFFSET_PERCENT_Y,
            color,
            "purple",
            "white"
        );
        this.addRectangleSolidDrawing(color);
        this.sliderPositionComponent = this.drawings[0];
        this.positionClicked = false;
    }

    update(tick) {
        this.tick = tick;
        if (!this.visible) {
            return;
        }
        if (!context.isMouseClicked()) {
            this.positionClicked = false;
            return;
        }
        if (this.positionClicked) {
            this.setOffsetPercentX(this.closestPercentX(context.getMouseX()));
        }
    }

    onMouseClick(x, y) {
        if (this.visible && this.inside(x, y)) {
            this.positionClicked = true;
        }
    }

    closestPercentX(mouseX) {
        let px = ((context.pixelXToPercentX(mouseX) - this.getParent().getPercentX()) / this.getParent().getPercentW()) * 100;
        if (px < 0) {
            return 0;
        }
        if (px > 100) {
            return 100;
        }
        return px;
    }

    getPosition() {
        return this.getOffsetPercentX();
    }

    getSliderPositionComponent() {
        return this.sliderPositionComponent;
    }
}