import { BaseLiability } from "./BaseLiability.js";

export class CreditCardBalance extends BaseLiability {
    constructor(value) {
        super("Credit Card Balance", value, 0, 0, 0, 0);
    }

    nextYear() {
        return new CreditCardBalance(
            this.getValue()
        )
            .setId(this.getId())
            .setInterestRate(this.getInterestRate())
            .setCurrentYear(this.getCurrentYear())
            .setTotalYears(this.getTotalYears());
    }
}