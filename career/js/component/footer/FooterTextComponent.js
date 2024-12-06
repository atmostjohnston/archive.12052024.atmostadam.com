import { ALIGN_LEFT, VALIGN_TOP } from "../../../../gamejs/configuration/GameConfiguration.js";
import {
    FOOTER_REVENUE_TEXT_SIZE,
    FOOTER_REVENUE_TEXT_COLOR,
    FOOTER_REVENUE_TEXT_PERCENT_X,
    FOOTER_REVENUE_TEXT_PERCENT_Y,
    FOOTER_EXPENSE_TEXT_SIZE,
    FOOTER_EXPENSE_TEXT_COLOR,
    FOOTER_EXPENSE_TEXT_PERCENT_X,
    FOOTER_EXPENSE_TEXT_PERCENT_Y,
    FOOTER_CASH_TEXT_SIZE,
    FOOTER_CASH_TEXT_COLOR,
    FOOTER_CASH_TEXT_PERCENT_X,
    FOOTER_CASH_TEXT_PERCENT_Y
} from "../../configuration/CareerConfiguration.js";
import { BaseComponent } from "./../../../../gamejs/base/BaseComponent.js";
import { careerGameContext } from "./../../context/CareerGameContext.js";


export class FooterTextComponent extends BaseComponent {
    constructor(parent) {
        super(
            parent,
            100,
            100,
            ALIGN_LEFT,
            VALIGN_TOP,
            0,
            0
        );
        this.addTextDrawing(
            "Revenue: $" + careerGameContext.getPlayer().getAssets().getValue(),
            FOOTER_REVENUE_TEXT_SIZE,
            FOOTER_REVENUE_TEXT_COLOR,
            FOOTER_REVENUE_TEXT_PERCENT_X,
            FOOTER_REVENUE_TEXT_PERCENT_Y
        );
        this.addTextDrawing(
            "Expenses: $" + careerGameContext.getPlayer().getExpenses().getValue(),
            FOOTER_EXPENSE_TEXT_SIZE,
            FOOTER_EXPENSE_TEXT_COLOR,
            FOOTER_EXPENSE_TEXT_PERCENT_X,
            FOOTER_EXPENSE_TEXT_PERCENT_Y
        );
        this.addTextDrawing(
            "Cash: $" + careerGameContext.getPlayer().getAssets().getBankAccount().getValue(),
            FOOTER_CASH_TEXT_SIZE,
            FOOTER_CASH_TEXT_COLOR,
            FOOTER_CASH_TEXT_PERCENT_X,
            FOOTER_CASH_TEXT_PERCENT_Y
        );
    }
}