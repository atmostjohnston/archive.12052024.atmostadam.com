import { BaseExpense } from "./BaseExpense.js";

export class IncomeTax extends BaseExpense {
    constructor(value) {
        //let MARGINAL_TAX_RATE = .28;
        super("Income Tax", value);
    }

    nextYear() {
        return new IncomeTax(this.getValue());
    }
}