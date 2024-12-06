import {
    LIABILITY_SCREEN
} from "./../configuration/GameConfiguration.js";
import { LiabilityTableComponent } from "./../component/LiabilityTableComponent.js"

export class LiabilityScreen {
    constructor(context) {
        this.context = context;
        this.liabilityTable = new LiabilityTableComponent(this.context);
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (LIABILITY_SCREEN != this.context.getScreen()) {
            return;
        }
        this.liabilityTable.draw();
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}