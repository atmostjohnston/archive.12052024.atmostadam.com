import { context } from "./../../../../gamejs/main.js";
import {
    MAIN_PERCENT_H,
    MAIN_PERCENT_Y,
    MENU_COMPONENT_PERCENT_SPACING,
    MENU_COMPONENT_PERCENT_H
} from "../../configuration/CareerConfiguration.js";
import { BaseComponent } from "./../../../../gamejs/base/BaseComponent.js";
import { MainAssetComponent } from "../main/MainAssetComponent.js";
import { MainExpenseComponent } from "../main/MainExpenseComponent.js";
import { MainInvestmentComponent } from "../main/MainInvestmentComponent.js";
import { MainLastYearComponent } from "../main/MainLastYearComponent.js";
import { MainLiabilityComponent } from "../main/MainLiabilityComponent.js";
import { MainLoanComponent } from "../main/MainLoanComponent.js";
import { MainProfileComponent } from "../main/MainProfileComponent.js";
import { MainRevenueComponent } from "../main/MainRevenueComponent.js";
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../gamejs/configuration/GameConfiguration.js";

export class MainComponent extends BaseComponent {
    constructor(parent) {
        super(
            parent,
            0,
            MAIN_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            0,
            MAIN_PERCENT_Y
        );
        this.addChildComponent(new MainAssetComponent(this))
            .addChildComponent(new MainExpenseComponent(this))
            .addChildComponent(new MainInvestmentComponent(this))
            .addChildComponent(new MainLastYearComponent(this))
            .addChildComponent(new MainLiabilityComponent(this))
            .addChildComponent(new MainLoanComponent(this))
            .addChildComponent(new MainProfileComponent(this))
            .addChildComponent(new MainRevenueComponent(this))
            .addRectangleOutlineDrawing(.2, "white");
    }

    update(tick) {
        this.tick = tick;
        this.offsetPercentX = context.percentHToPercentW(MENU_COMPONENT_PERCENT_H + (MENU_COMPONENT_PERCENT_SPACING / 2)) + .5;
        this.originalPercentW = 99.5 - this.offsetPercentX;
        super.update(tick);
    }

    getComponent() {
        return this.component;
    }

    setComponent(component) {
        this.component = component;
        return this;
    }
}