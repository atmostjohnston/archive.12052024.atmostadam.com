import { BaseMenuComponent } from "./BaseMenuComponent.js";
import { EXPENSE_BUTTON_IMAGE_SRC, MAIN_EXPENSE_COMPONENT } from "./../../configuration/CareerConfiguration.js";
import { loadImage } from "./../../../../gamejs/context/GameContext.js";
import { careerGameContext } from "./../../context/CareerGameContext.js";

await loadImage(EXPENSE_BUTTON_IMAGE_SRC);

export class MenuExpenseComponent extends BaseMenuComponent {
    constructor(parent) {
        super(parent, 2, EXPENSE_BUTTON_IMAGE_SRC, .8);
    }

    click() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_EXPENSE_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.click();
    }

    unclick() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_EXPENSE_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.unclick();
    }
}