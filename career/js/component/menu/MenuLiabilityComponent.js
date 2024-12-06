import { BaseMenuComponent } from "./BaseMenuComponent.js";
import { LIABILITY_BUTTON_IMAGE_SRC, MAIN_LIABILITY_COMPONENT } from "./../../configuration/CareerConfiguration.js";
import { loadImage } from "./../../../../gamejs/context/GameContext.js";
import { careerGameContext } from "./../../context/CareerGameContext.js";

await loadImage(LIABILITY_BUTTON_IMAGE_SRC);

export class MenuLiabilityComponent extends BaseMenuComponent {
    constructor(parent) {
        super(parent, 5, LIABILITY_BUTTON_IMAGE_SRC, .8);
    }

    click() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_LIABILITY_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.click();
    }

    unclick() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_LIABILITY_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.unclick();
    }
}