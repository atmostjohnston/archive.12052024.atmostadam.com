import { BaseMenuComponent } from "./BaseMenuComponent.js";
import { INVESTMENT_BUTTON_IMAGE_SRC, MAIN_INVESTMENT_COMPONENT } from "./../../configuration/CareerConfiguration.js";
import { loadImage } from "./../../../../gamejs/context/GameContext.js";
import { careerGameContext } from "./../../context/CareerGameContext.js";

await loadImage(INVESTMENT_BUTTON_IMAGE_SRC);

export class MenuInvestmentComponent extends BaseMenuComponent {
    constructor(parent) {
        super(parent, 4, INVESTMENT_BUTTON_IMAGE_SRC, .8);
    }

    click() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_INVESTMENT_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.click();
    }

    unclick() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_INVESTMENT_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.unclick();
    }
}