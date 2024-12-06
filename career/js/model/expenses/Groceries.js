import { BaseExpense } from "./BaseExpense.js";

export class Groceries extends BaseExpense {
    constructor() {
        super("Groceries", 8000);
    }

    nextYear() {
        return new Groceries();
    }
}