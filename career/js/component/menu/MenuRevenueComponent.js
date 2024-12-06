import { BaseMenuComponent } from "./BaseMenuComponent.js";
import { REVENUE_BUTTON_IMAGE_SRC, MAIN_REVENUE_COMPONENT } from "./../../configuration/CareerConfiguration.js";
import { loadImage } from "./../../../../gamejs/context/GameContext.js";
import { careerGameContext } from "./../../context/CareerGameContext.js";

await loadImage(REVENUE_BUTTON_IMAGE_SRC);

export class MenuRevenueComponent extends BaseMenuComponent {
    constructor(parent) {
        super(parent, 1, REVENUE_BUTTON_IMAGE_SRC, .9);
    }

    click() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_REVENUE_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.click();
    }

    unclick() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_REVENUE_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.unclick();
    }
}