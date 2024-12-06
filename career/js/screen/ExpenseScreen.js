import {
    EXPENSE_SCREEN
} from "./../configuration/GameConfiguration.js";
import { ExpenseTableComponent } from "./../component/ExpenseTableComponent.js"

export class ExpenseScreen {
    constructor(context) {
        this.context = context;
        this.expenseTable = new ExpenseTableComponent(this.context);
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (EXPENSE_SCREEN != this.context.getScreen()) {
            return;
        }
        this.expenseTable.draw();
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}