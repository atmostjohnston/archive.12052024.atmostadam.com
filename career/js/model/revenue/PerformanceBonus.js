import { BaseRevenue } from "./BaseRevenue.js";

export class PerformanceBonus extends BaseRevenue {
    constructor(value) {
        super("Performance Bonus", value);
    }

    nextYear() {

    }
}