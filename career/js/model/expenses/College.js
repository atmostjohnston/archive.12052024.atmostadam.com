import { BaseExpense } from "./BaseExpense.js";

export class College extends BaseExpense {
    constructor() {
        super("College", 50000);
    }

    nextYear() {
        return new College();
    }
}