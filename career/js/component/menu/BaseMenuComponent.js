import { context } from "./../../../../gamejs/main.js";
import {
    MENU_COMPONENT_PERCENT_W,
    MENU_COMPONENT_PERCENT_H,
    MENU_COMPONENT_PERCENT_X,
    MENU_COMPONENT_PERCENT_Y,
    MENU_COMPONENT_PERCENT_SPACING,
    MENU_BUTTON_COMPONENT_PERCENT_BORDER,
    MENU_BUTTON_COMPONENT_BORDER_COLOR,
    NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR,
    NEXT_YEAR_BUTTON_ON_MOUSE_OVER_BACKGROUND_COLOR,
    NEXT_YEAR_BUTTON_ON_CLICK_BACKGROUND_COLOR,
    MENU_BUTTON_IMAGE_WH
} from "./../../configuration/CareerConfiguration.js";
import { BaseComponent } from "../../../../gamejs/base/BaseComponent.js";
import { CircleSolidDrawing } from "./../../../../gamejs/drawing/circle/CircleSolidDrawing.js"
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../gamejs/configuration/GameConfiguration.js";
import { careerGameContext } from "./../../context/CareerGameContext.js";

export class BaseMenuComponent extends BaseComponent {
    constructor(parent, position, imgSrc, imageScale) {
        super(
            parent,
            MENU_COMPONENT_PERCENT_W,
            MENU_COMPONENT_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            MENU_COMPONENT_PERCENT_X,
            MENU_COMPONENT_PERCENT_Y + ((MENU_COMPONENT_PERCENT_H + MENU_COMPONENT_PERCENT_SPACING) * position)
        );
        this.addCircleSolidDrawing(NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR)
            .addCircleOutlineDrawing(MENU_BUTTON_COMPONENT_PERCENT_BORDER, MENU_BUTTON_COMPONENT_BORDER_COLOR)
            .addSquareImageDrawing(imgSrc, 0, 0, MENU_BUTTON_IMAGE_WH, imageScale);
    }

    update(tick) {
        this.tick = tick;
        if (!this.inside(context.getMouseX(), context.getMouseY())) {
            this.drawings.forEach(e => {
                if (e instanceof CircleSolidDrawing) {
                    e.setColor(NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR);
                }
            });
        }
        super.update(tick);
    }

    move() {
        this.drawings.forEach(e => {
            if (e instanceof CircleSolidDrawing) {
                e.setColor(NEXT_YEAR_BUTTON_ON_MOUSE_OVER_BACKGROUND_COLOR);
            }
        });
    }

    click() {
        this.drawings.forEach(e => {
            if (e instanceof CircleSolidDrawing) {
                e.setColor(NEXT_YEAR_BUTTON_ON_CLICK_BACKGROUND_COLOR);
            }
        });
        careerGameContext.setSliderModel(null);
    }

    unclick() {
        this.drawings.forEach(e => {
            if (e instanceof CircleSolidDrawing) {
                e.setColor(NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR);
            }
        });
    }
}