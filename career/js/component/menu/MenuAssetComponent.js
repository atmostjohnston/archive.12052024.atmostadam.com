import { BaseMenuComponent } from "./BaseMenuComponent.js";
import { ASSET_BUTTON_IMAGE_SRC, MAIN_ASSET_COMPONENT } from "./../../configuration/CareerConfiguration.js";
import { loadImage } from "./../../../../gamejs/context/GameContext.js";
import { careerGameContext } from "./../../context/CareerGameContext.js";

await loadImage(ASSET_BUTTON_IMAGE_SRC);

export class MenuAssetComponent extends BaseMenuComponent {
    constructor(parent) {
        super(parent, 3, ASSET_BUTTON_IMAGE_SRC, .8);
    }

    click() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_ASSET_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.click();
    }

    unclick() {
        careerGameContext.getMainComponent().hide();
        careerGameContext.setMainComponentByName(MAIN_ASSET_COMPONENT);
        careerGameContext.getMainComponent().show();
        super.unclick();
    }
}