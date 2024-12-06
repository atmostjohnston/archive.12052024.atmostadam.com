import { TextDrawing } from "./../drawing/TextDrawing.js";
import {
    FOOTER_REVENUE_TEXT_PERCENT_X,
    FOOTER_REVENUE_TEXT_PERCENT_Y,
    FOOTER_REVENUE_TEXT_TYPE,
    FOOTER_REVENUE_TEXT_COLOR,
    FOOTER_EXPENSES_TEXT_PERCENT_X,
    FOOTER_EXPENSES_TEXT_PERCENT_Y,
    FOOTER_EXPENSES_TEXT_TYPE,
    FOOTER_EXPENSES_TEXT_COLOR,
    FOOTER_CASH_TEXT_PERCENT_X,
    FOOTER_CASH_TEXT_PERCENT_Y,
    FOOTER_CASH_TEXT_TYPE,
    FOOTER_CASH_TEXT_COLOR
} from "./../configuration/GameConfiguration.js";

export class Footer {
    constructor(context) {
        this.context = context;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        new TextDrawing(
            this.context,
            "Revenue: $" + this.context.getPlayer().getAssets().getValue(),
            FOOTER_REVENUE_TEXT_PERCENT_X,
            FOOTER_REVENUE_TEXT_PERCENT_Y,
            FOOTER_REVENUE_TEXT_TYPE,
            FOOTER_REVENUE_TEXT_COLOR
        )
            .draw();
        new TextDrawing(
            this.context,
            "Expenses: $" + this.context.getPlayer().getExpenses().getValue(),
            FOOTER_EXPENSES_TEXT_PERCENT_X,
            FOOTER_EXPENSES_TEXT_PERCENT_Y,
            FOOTER_EXPENSES_TEXT_TYPE,
            FOOTER_EXPENSES_TEXT_COLOR
        )
            .draw();
        new TextDrawing(
            this.context,
            "Cash: $" + this.context.getPlayer().getAssets().getBankAccount().getValue(),
            FOOTER_CASH_TEXT_PERCENT_X,
            FOOTER_CASH_TEXT_PERCENT_Y,
            FOOTER_CASH_TEXT_TYPE,
            FOOTER_CASH_TEXT_COLOR
        )
            .draw();
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}