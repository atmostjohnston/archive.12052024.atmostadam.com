import { LoanTableComponent } from "../component/LoanTableComponent.js";
import {
    LOAN_SCREEN
} from "./../configuration/GameConfiguration.js";

export class LoanScreen {
    constructor(context) {
        this.context = context;
        this.loanTable = new LoanTableComponent(this.context);
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (LOAN_SCREEN != this.context.getScreen()) {
            return;
        }
        this.loanTable.draw();
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}