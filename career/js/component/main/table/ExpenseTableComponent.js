import { ALIGN_LEFT, VALIGN_TOP } from "../../../../../gamejs/configuration/GameConfiguration.js";
import { careerGameContext } from "../../../context/CareerGameContext.js";
import {
    EXPENSE_TABLE_COMPONENT_PERCENT_W_ARRAY,
    EXPENSE_TABLE_COMPONENT_PERCENT_H_ARRAY,
    EXPENSE_TABLE_COMPONENT_PERCENT_W,
    EXPENSE_TABLE_COMPONENT_PERCENT_H,
    EXPENSE_TABLE_COMPONENT_OFFSET_PERCENT_X,
    EXPENSE_TABLE_COMPONENT_OFFSET_PERCENT_Y,
    EXPENSE_TABLE_TEXT_COMPONENT_SIZE,
    EXPENSE_TABLE_TEXT_COMPONENT_COLOR,
    EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
    EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y,
    EXPENSE_TABLE_BORDER_COMPONENT_SIZE,
    EXPENSE_TABLE_BORDER_COMPONENT_COLOR,
    MAIN_EXPENSE_COMPONENT
} from "./../../../configuration/CareerConfiguration.js";
import { BaseMainTableComponent } from "./BaseMainTableComponent.js";

export class ExpenseTableComponent extends BaseMainTableComponent {
    constructor(parent) {
        super(
            parent,
            EXPENSE_TABLE_COMPONENT_PERCENT_W,
            EXPENSE_TABLE_COMPONENT_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            EXPENSE_TABLE_COMPONENT_OFFSET_PERCENT_X,
            EXPENSE_TABLE_COMPONENT_OFFSET_PERCENT_Y,
            EXPENSE_TABLE_COMPONENT_PERCENT_H_ARRAY,
            EXPENSE_TABLE_COMPONENT_PERCENT_W_ARRAY
        );
        this.addBackgroundColor(
            0,
            0,
            "red"
        ).addBackgroundColor(
            0,
            1,
            "red"
        ).addText(
            0,
            0,
            "Expense Type",
            EXPENSE_TABLE_TEXT_COMPONENT_SIZE,
            EXPENSE_TABLE_TEXT_COMPONENT_COLOR,
            EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        ).addText(
            0,
            1,
            "$",
            EXPENSE_TABLE_TEXT_COMPONENT_SIZE,
            EXPENSE_TABLE_TEXT_COMPONENT_COLOR,
            EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        );
        let expenses = careerGameContext.getPlayer().getExpenses().asSortedArray();
        for (let i = 0; i < expenses.length; i++) {
            this.addText(
                i + 1,
                0,
                expenses[i][0],
                EXPENSE_TABLE_TEXT_COMPONENT_SIZE,
                EXPENSE_TABLE_TEXT_COMPONENT_COLOR,
                EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
                EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
            ).addText(
                i + 1,
                1,
                expenses[i][1],
                EXPENSE_TABLE_TEXT_COMPONENT_SIZE,
                EXPENSE_TABLE_TEXT_COMPONENT_COLOR,
                EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
                EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
            );
        }
        this.addText(
            expenses.length + 1,
            0,
            "Total",
            EXPENSE_TABLE_TEXT_COMPONENT_SIZE,
            EXPENSE_TABLE_TEXT_COMPONENT_COLOR,
            EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        ).addBackgroundColor(
            expenses.length + 1,
            1,
            "red"
        ).addText(
            expenses.length + 1,
            1,
            careerGameContext.getPlayer().getExpenses().getValue(),
            EXPENSE_TABLE_TEXT_COMPONENT_SIZE,
            EXPENSE_TABLE_TEXT_COMPONENT_COLOR,
            EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            EXPENSE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        ).addBorderForAll(
            EXPENSE_TABLE_BORDER_COMPONENT_SIZE,
            EXPENSE_TABLE_BORDER_COMPONENT_COLOR
        );
    }
}