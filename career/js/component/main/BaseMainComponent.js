import { BaseComponent } from "../../../../gamejs/base/BaseComponent.js";
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../gamejs/configuration/GameConfiguration.js";
import { careerGameContext } from "./../../context/CareerGameContext.js";

export class BaseMainComponent extends BaseComponent {
    constructor(parent) {
        super(
            parent,
            100,
            100,
            ALIGN_LEFT,
            VALIGN_TOP,
            0,
            0
        );
        careerGameContext.addMainComponent(this);
    }

    update(tick) {
        if (careerGameContext.getMainComponentName() == this.constructor.name) {
            super.update(tick);
        }
    }

    draw() {
        if (careerGameContext.getMainComponentName() == this.constructor.name) {
            super.draw();
        }
    }
}