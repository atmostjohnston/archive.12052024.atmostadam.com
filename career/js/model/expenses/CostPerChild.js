import { BaseExpense } from "./BaseExpense.js";

export class CostPerChild extends BaseExpense {
    constructor() {
        super("Cost Per Child", 20000);
    }

    nextYear() {
        return new CostPerChild();
    }
}