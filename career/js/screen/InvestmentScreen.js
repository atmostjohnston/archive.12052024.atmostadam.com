import {
    INVESTMENT_SCREEN,
    INVESTMENT_TABLE_COMPONENT_PERCENT_X,
    INVESTMENT_TABLE_COMPONENT_PERCENT_Y,
    INVESTMENT_TABLE_COMPONENT_PERCENT_W_ARRAY,
    INVESTMENT_TABLE_COMPONENT_PERCENT_H_ARRAY,
    INVESTMENT_TABLE_COMPONENT_PERCENT_BORDER,
    INVESTMENT_TABLE_COMPONENT_COLOR,
    INVESTMENT_TABLE_TEXT_PERCENT_OFFSET_X,
    INVESTMENT_TABLE_TEXT_PERCENT_OFFSET_Y,
    GRID_TEXT_TYPE_DEFAULT,
    GRID_TEXT_COLOR_DEFAULT
} from "./../configuration/GameConfiguration.js";
import { InvestmentTableComponent } from "../component/InvestmentTableComponent.js";
import { RangeSlider } from "./RangeSlider.js";
import { GridDrawingBuilder } from "../drawing/GridDrawingBuilder.js";

export class InvestmentScreen {
    constructor(context) {
        this.context = context;
        this.investmentTable = new InvestmentTableComponent(this.context);
        this.rangeSlider = new RangeSlider(this.context);
        this.trading = true;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (INVESTMENT_SCREEN != this.context.getScreen()) {
            return;
        }
        let investments = this.context.getPlayer().getInvestments();
        let rows = [["ASSETS", "Total $", "Unit $", "#"]];
        for (let i = 0; i < investments.length; i++) {
            rows.push(
                investments.getId(),
                investments.getValue(),
                investments.getPrice(),
                investments.getAmount()
            );
        }
        let total = 0;
        for (let i = 0; i < investments.length; i++) {
            total += investments[i].getValue();
        }
        rows.push(["TOTAL", "$" + total, ,]);
        new GridDrawingBuilder(
            this.context,
            INVESTMENT_TABLE_COMPONENT_PERCENT_H_ARRAY,
            INVESTMENT_TABLE_COMPONENT_PERCENT_W_ARRAY)
            .addPercentX(INVESTMENT_TABLE_COMPONENT_PERCENT_X)
            .addPercentY(INVESTMENT_TABLE_COMPONENT_PERCENT_Y)
            .addBorderForAll(INVESTMENT_TABLE_COMPONENT_PERCENT_BORDER, INVESTMENT_TABLE_COMPONENT_COLOR)
            .addBackgroundForFirstRow(INVESTMENT_TABLE_COMPONENT_COLOR)
            .addBackground(INVESTMENT_TABLE_COMPONENT_PERCENT_W_ARRAY.length - 1, 1, INVESTMENT_TABLE_COMPONENT_COLOR)
            .addBackground(INVESTMENT_TABLE_COMPONENT_PERCENT_H_ARRAY.length - 1, 2, INVESTMENT_TABLE_COMPONENT_COLOR)
            .addTextType(GRID_TEXT_TYPE_DEFAULT)
            .addTextColor(GRID_TEXT_COLOR_DEFAULT)
            .addTextPercentOffestX(INVESTMENT_TABLE_TEXT_PERCENT_OFFSET_X)
            .addTextPercentOffestY(INVESTMENT_TABLE_TEXT_PERCENT_OFFSET_Y)
            .addRows(rows)
            .build()
            .draw();
    }

    onMouseOver(x, y) {
        if (INVESTMENT_SCREEN != this.context.getScreen()) {
            return;
        }
        this.rangeSlider.onMouseOver(x, y);
    }

    onClick(x, y) {
        if (INVESTMENT_SCREEN != this.context.getScreen()) {
            return;
        }
        this.rangeSlider.onClick(x, y);
    }

    onUnclick(x, y) {
        if (INVESTMENT_SCREEN != this.context.getScreen()) {
            return;
        }
        this.rangeSlider.onUnclick(x, y);
    }

    createBuilder() {

    }

    createFirstRow(builder) {

    }

    createRow(builder) {

    }

    createLastRow(builder) {

    }
}