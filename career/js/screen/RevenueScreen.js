import {
    REVENUE_SCREEN
} from "./../configuration/GameConfiguration.js";
import { RevenueTableComponent } from "./../component/RevenueTableComponent.js"

export class RevenueScreen {
    constructor(context) {
        this.context = context;
        this.revenueTable = new RevenueTableComponent(this.context);
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (REVENUE_SCREEN != this.context.getScreen()) {
            return;
        }
        this.revenueTable.draw();
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}