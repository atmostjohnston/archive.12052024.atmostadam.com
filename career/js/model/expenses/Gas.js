import { BaseExpense } from "./BaseExpense.js";

export class Gas extends BaseExpense {
    constructor() {
        super("Gas", 10000);
    }

    nextYear() {
        return new Gas();
    }
}