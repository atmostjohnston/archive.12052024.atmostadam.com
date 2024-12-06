import { context } from "./../../../../gamejs/main.js";
import {
    MENU_PERCENT_H,
    MENU_PERCENT_Y,
    MENU_COMPONENT_PERCENT_SPACING,
    MENU_COMPONENT_PERCENT_H
} from "./../../configuration/CareerConfiguration.js";
import { BaseComponent } from "./../../../../gamejs/base/BaseComponent.js";
import { MenuRevenueComponent } from "../menu/MenuRevenueComponent.js";
import { MenuExpenseComponent } from "../menu/MenuExpenseComponent.js";
import { MenuAssetComponent } from "../menu/MenuAssetComponent.js";
import { MenuInvestmentComponent } from "../menu/MenuInvestmentComponent.js";
import { MenuLiabilityComponent } from "../menu/MenuLiabilityComponent.js";
import { MenuLoanComponent } from "../menu/MenuLoanComponent.js";
import { MenuLastYearComponent } from "../menu/MenuLastYearComponent.js";
import { MenuProfileComponent } from "../menu/MenuProfileComponent.js";
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../gamejs/configuration/GameConfiguration.js";

export class MenuComponent extends BaseComponent {
    constructor(parent) {
        super(
            parent,
            0,
            MENU_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            0,
            MENU_PERCENT_Y
        );
        this.addChildComponent(new MenuProfileComponent(this))
            .addChildComponent(new MenuRevenueComponent(this))
            .addChildComponent(new MenuExpenseComponent(this))
            .addChildComponent(new MenuAssetComponent(this))
            .addChildComponent(new MenuInvestmentComponent(this))
            .addChildComponent(new MenuLiabilityComponent(this))
            .addChildComponent(new MenuLoanComponent(this))
            .addChildComponent(new MenuLastYearComponent(this))
            .addRectangleSolidDrawing("purple");
    }

    update(tick) {
        this.tick = tick;
        this.originalPercentW = context.percentHToPercentW(MENU_COMPONENT_PERCENT_H + (MENU_COMPONENT_PERCENT_SPACING / 2));
        super.update(tick);
    }
}