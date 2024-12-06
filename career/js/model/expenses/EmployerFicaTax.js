import { BaseExpense } from "./BaseExpense.js";

export class EmployerFicaTax extends BaseExpense {
    constructor(value) {
        //let MARGINAL_TAX_RATE = .0765;
        super("Employer FICA Taxes", value);
    }

    nextYear() {
        return new EmployerFicaTax(this.getValue());
    }
}