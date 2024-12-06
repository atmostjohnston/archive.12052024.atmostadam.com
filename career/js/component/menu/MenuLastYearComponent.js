import { BaseMenuComponent } from "./BaseMenuComponent.js";
import { LAST_YEAR_BUTTON_IMAGE_SRC, MAIN_LAST_YEAR_COMPONENT } from "./../../configuration/CareerConfiguration.js";
import { loadImage } from "./../../../../gamejs/context/GameContext.js";
import { careerGameContext } from "./../../context/CareerGameContext.js";

await loadImage(LAST_YEAR_BUTTON_IMAGE_SRC);

export class MenuLastYearComponent extends BaseMenuComponent {
    constructor(parent) {
        super(parent, 7, LAST_YEAR_BUTTON_IMAGE_SRC, .7);
    }

    click() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_LAST_YEAR_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.click();
    }

    unclick() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_LAST_YEAR_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.unclick();
    }
}