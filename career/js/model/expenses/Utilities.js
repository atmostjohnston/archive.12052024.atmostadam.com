import { BaseExpense } from "./BaseExpense.js";

export class Utilities extends BaseExpense {
    constructor() {
        super("Utilities", 3600);
    }

    nextYear() {
        return new Utilities();
    }
}