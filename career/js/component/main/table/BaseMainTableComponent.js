import { BaseTableComponent } from "../../../../../gamejs/base/BaseTableComponent.js";
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../../gamejs/configuration/GameConfiguration.js";
import { BorrowButtonComponent } from "../button/BorrowButtonComponent.js";
import { BuyButtonComponent } from "../button/BuyButtonComponent.js";
import { PayButtonComponent } from "../button/PayButtonComponent.js";
import { SellButtonComponent } from "../button/SellButtonComponent.js";

export class BaseMainTableComponent extends BaseTableComponent {
    constructor(parent, percentW, percentH, align, valign, offsetPercentX, offsetPercentY, rowPercents, columnPercents) {
        super(parent, percentW, percentH, align, valign, offsetPercentX, offsetPercentY, rowPercents, columnPercents);
    }

    addBorrowButton(row, column, liability) {
        this.cells[row][column]
            .addChildComponent(
                new BorrowButtonComponent(
                    this.cells[row][column],
                    liability,
                    100,
                    100,
                    ALIGN_LEFT,
                    VALIGN_TOP,
                    0,
                    0));
        return this;
    }

    addBuyButton(row, column, asset) {
        this.cells[row][column]
            .addChildComponent(
                new BuyButtonComponent(
                    this.cells[row][column],
                    asset,
                    100,
                    100,
                    ALIGN_LEFT,
                    VALIGN_TOP,
                    0,
                    0));
        return this;
    }

    addPayButton(row, column, liability) {
        this.cells[row][column]
            .addChildComponent(
                new PayButtonComponent(
                    this.cells[row][column],
                    liability,
                    100,
                    100,
                    ALIGN_LEFT,
                    VALIGN_TOP,
                    0,
                    0));
        return this;
    }

    addSellButton(row, column, asset) {
        this.cells[row][column]
            .addChildComponent(
                new SellButtonComponent(
                    this.cells[row][column],
                    asset,
                    100,
                    100,
                    ALIGN_LEFT,
                    VALIGN_TOP,
                    0,
                    0));
        return this;
    }
}