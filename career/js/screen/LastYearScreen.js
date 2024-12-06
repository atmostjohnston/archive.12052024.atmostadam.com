import { LastYearExpenseTableComponent } from "../component/LastYearExpenseTableComponent.js";
import { LastYearNetIncomeTableComponent } from "../component/LastYearNetIncomeTableComponent.js";
import { LastYearRevenueTableComponent } from "../component/LastYearRevenueTableComponent.js";
import {
    LAST_YEAR_SCREEN
} from "./../configuration/GameConfiguration.js";

export class LastYearScreen {
    constructor(context) {
        this.context = context;
        this.lastYearRevenue = new LastYearRevenueTableComponent(this.context);
        this.lastYearExpense = new LastYearExpenseTableComponent(this.context);
        this.lastYearNetIncome = new LastYearNetIncomeTableComponent(this.context);
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (LAST_YEAR_SCREEN != this.context.getScreen()) {
            return;
        }
        this.lastYearRevenue.draw();
        this.lastYearExpense.draw();
        this.lastYearNetIncome.draw();
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}