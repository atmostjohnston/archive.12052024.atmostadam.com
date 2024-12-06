import { BaseMainComponent } from "./BaseMainComponent.js";
import { ExpenseTableComponent } from "./table/ExpenseTableComponent.js";

export class MainExpenseComponent extends BaseMainComponent {
    constructor(parent) {
        super(parent);
        this.addChildComponent(new ExpenseTableComponent(this));
    }
}