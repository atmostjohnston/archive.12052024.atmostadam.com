import { CarLoan } from "./CarLoan.js";
import { CreditCardBalance } from "./CreditCardBalance.js";
import { HomeEquityLoan } from "./HomeEquityLoan.js";
import { Mortgage } from "./Mortgage.js";
import { StudentLoan } from "./StudentLoan.js";

export class Liabilities {
    constructor() {
        this.carLoan = new CarLoan(0);
        this.creditCardBalance = new CreditCardBalance(0);
        this.homeEquityLoan = new HomeEquityLoan(0);
        this.mortgage = new Mortgage(0);
        this.studentLoan = new StudentLoan(0);
    }

    update() {

    }

    draw() {

    }

    nextYear() {
        return new Liabilities();
    }

    asSortedArray() {
        let arr = [
            [this.getCarLoan().getId(), this.getCarLoan().getValue(), this.getCarLoan()],
            [this.getCreditCardBalance().getId(), this.getCreditCardBalance().getValue(), this.getCreditCardBalance()],
            [this.getHomeEquityLoan().getId(), this.getHomeEquityLoan().getValue(), this.getHomeEquityLoan()],
            [this.getMortgage().getId(), this.getMortgage().getValue(), this.getMortgage()],
            [this.getStudentLoan().getId(), this.getStudentLoan().getValue(), this.getStudentLoan()]
        ];
        return arr.sort((a, b) => a[1] - b[1]).reverse();
    }

    getValue() {
        var sum = 0;
        this.asSortedArray().forEach(e => sum += e[1]);
        return sum;
    }

    getCarLoan() {
        return this.carLoan;
    }

    getCreditCardBalance() {
        return this.creditCardBalance;
    }

    getHomeEquityLoan() {
        return this.homeEquityLoan;
    }

    getMortgage() {
        return this.mortgage;
    }

    getStudentLoan() {
        return this.studentLoan;
    }
}