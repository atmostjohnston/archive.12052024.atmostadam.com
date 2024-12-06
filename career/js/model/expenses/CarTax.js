import { BaseExpense } from "./BaseExpense.js";

export class CarTax extends BaseExpense {
    constructor(numOfCars) {
        super("Car Taxes", 300 * numOfCars);
    }

    nextYear() {
        return new CarTax(
            this.getValue() / 300
        );
    }
}