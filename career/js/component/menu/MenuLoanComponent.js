import { BaseMenuComponent } from "./BaseMenuComponent.js";
import { LOAN_BUTTON_IMAGE_SRC, MAIN_LOAN_COMPONENT } from "./../../configuration/CareerConfiguration.js";
import { loadImage } from "./../../../../gamejs/context/GameContext.js";
import { careerGameContext } from "./../../context/CareerGameContext.js";

await loadImage(LOAN_BUTTON_IMAGE_SRC);

export class MenuLoanComponent extends BaseMenuComponent {
    constructor(parent) {
        super(parent, 6, LOAN_BUTTON_IMAGE_SRC, .9);
    }

    click() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_LOAN_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.click();
    }

    unclick() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_LOAN_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.unclick();
    }
}