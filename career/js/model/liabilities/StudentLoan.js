import { BaseLiability } from "./BaseLiability.js";

export class StudentLoan extends BaseLiability {
    constructor(value) {
        super("Student Loan", value, 0, 0, 0, 0);
    }

    nextYear() {
        return new StudentLoan(
            this.getValue()
        )
            .setId(this.getId())
            .setInterestRate(this.getInterestRate())
            .setCurrentYear(this.getCurrentYear())
            .setTotalYears(this.getTotalYears());
    }
}