import { ProfileButtonComponent } from "./../component/button/ProfileButtonComponent.js";
import { RevenueButtonComponent } from "./../component/button/RevenueButtonComponent.js";
import { ExpenseButtonComponent } from "./../component/button/ExpenseButtonComponent.js";
import { AssetButtonComponent } from "./../component/button/AssetButtonComponent.js";
import { InvestmentButtonComponent } from "./../component/button/InvestmentButtonComponent.js";
import { LiabilityButtonComponent } from "./../component/button/LiabilityButtonComponent.js";
import { LoanButtonComponent } from "./../component/button/LoanButtonComponent.js";
import { LastYearButtonComponent } from "./../component/button/LastYearButtonComponent.js";

export class Menu {
    constructor(context) {
        this.context = context;
        this.profileButton = new ProfileButtonComponent(this.context);
        this.revenueButton = new RevenueButtonComponent(this.context);
        this.expenseButton = new ExpenseButtonComponent(this.context);
        this.assetButton = new AssetButtonComponent(this.context);
        this.investmentScreen = new InvestmentButtonComponent(this.context);
        this.liabilityScreen = new LiabilityButtonComponent(this.context);
        this.loanScreen = new LoanButtonComponent(this.context);
        this.lastYearScreen = new LastYearButtonComponent(this.context);
    }

    update(tick) {
        this.tick = tick;
        this.profileButton.update(tick);
        this.revenueButton.update(tick);
        this.expenseButton.update(tick);
        this.assetButton.update(tick);
        this.investmentScreen.update(tick);
        this.liabilityScreen.update(tick);
        this.loanScreen.update(tick);
        this.lastYearScreen.update(tick);
    }

    draw() {
        this.profileButton.draw();
        this.revenueButton.draw();
        this.expenseButton.draw();
        this.assetButton.draw();
        this.investmentScreen.draw();
        this.liabilityScreen.draw();
        this.loanScreen.draw();
        this.lastYearScreen.draw();
    }

    onMouseOver(x, y) {
        this.profileButton.onMouseOver(x, y);
        this.revenueButton.onMouseOver(x, y);
        this.expenseButton.onMouseOver(x, y);
        this.assetButton.onMouseOver(x, y);
        this.investmentScreen.onMouseOver(x, y);
        this.liabilityScreen.onMouseOver(x, y);
        this.loanScreen.onMouseOver(x, y);
        this.lastYearScreen.onMouseOver(x, y);
    }

    onClick(x, y) {
        this.profileButton.onClick(x, y);
        this.revenueButton.onClick(x, y);
        this.expenseButton.onClick(x, y);
        this.assetButton.onClick(x, y);
        this.investmentScreen.onClick(x, y);
        this.liabilityScreen.onClick(x, y);
        this.loanScreen.onClick(x, y);
        this.lastYearScreen.onClick(x, y)
    }

    onUnclick(x, y) {
        this.profileButton.onUnclick(x, y);
        this.revenueButton.onUnclick(x, y);
        this.expenseButton.onUnclick(x, y);
        this.assetButton.onUnclick(x, y);
        this.investmentScreen.onUnclick(x, y);
        this.liabilityScreen.onUnclick(x, y);
        this.loanScreen.onUnclick(x, y);
        this.lastYearScreen.onUnclick(x, y);
    }
}