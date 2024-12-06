import { BaseLiability } from "./BaseLiability.js";

export class CarLoan extends BaseLiability {
    constructor(value) {
        super("Car Loan", value, 0, 0, 0, 0);
    }

    nextYear() {
        return new CarLoan(
            this.getValue()
        )
            .setId(this.getId())
            .setInterestRate(this.getInterestRate())
            .setCurrentYear(this.getCurrentYear())
            .setTotalYears(this.getTotalYears());
    }
}