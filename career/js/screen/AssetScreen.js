import {
    ASSET_SCREEN
} from "./../configuration/GameConfiguration.js";
import { AssetTableComponent } from "../../../archive/career/js/component/AssetTableComponent.js"

export class AssetScreen {
    constructor(context) {
        this.context = context;
        this.assetTable = new AssetTableComponent(this.context);
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (ASSET_SCREEN != this.context.getScreen()) {
            return;
        }
        this.assetTable.draw();
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}