import { BaseLiability } from "./BaseLiability.js";

export class Mortgage extends BaseLiability {
    constructor(value) {
        super("Mortgage", value, 0, 0, 0, 0);
    }

    nextYear() {
        return new Mortgage(
            this.getValue()
        )
            .setId(this.getId())
            .setInterestRate(this.getInterestRate())
            .setCurrentYear(this.getCurrentYear())
            .setTotalYears(this.getTotalYears());
    }
}