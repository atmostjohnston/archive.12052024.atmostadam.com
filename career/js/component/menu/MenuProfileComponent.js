import { BaseMenuComponent } from "./BaseMenuComponent.js";
import { PROFILE_BUTTON_IMAGE_SRC, MAIN_PROFILE_COMPONENT } from "./../../configuration/CareerConfiguration.js";
import { loadImage } from "./../../../../gamejs/context/GameContext.js";
import { careerGameContext } from "./../../context/CareerGameContext.js";

await loadImage(PROFILE_BUTTON_IMAGE_SRC);

export class MenuProfileComponent extends BaseMenuComponent {
    constructor(parent) {
        super(parent, 0, PROFILE_BUTTON_IMAGE_SRC, .9);
    }

    click() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_PROFILE_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.click();
    }

    unclick() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_PROFILE_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.unclick();
    }
}