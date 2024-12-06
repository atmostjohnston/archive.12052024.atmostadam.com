export class BaseLiability {
    constructor(id, value, price, interestRate, currentYear, totalYears) {
        this.id = id;
        this.value = value;
        this.price = price;
        this.interestRate = interestRate;
        this.currentYear = currentYear;
        this.totalYears = totalYears;
    }

    increase(amount) {
        this.value += amount;
    }

    decrease(amount) {
        this.value -= amount;
        return this;
    }

    compound() {
        let interest = this._value * (this._interestRate / 100);
        this.increase(interest);
        return interest;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
        return this;
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
        return this;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    getInterestRate() {
        return this.interestRate;
    }

    setInterestRate(interestRate) {
        this.interestRate = interestRate;
        return this;
    }

    getCurrentYear() {
        return this.currentYear;
    }

    setCurrentYear(currentYear) {
        this.currentYear = currentYear;
        return this;
    }

    getTotalYears() {
        return this.totalYears;
    }

    setTotalYears(totalYears) {
        this.totalYears = totalYears;
        return this;
    }
}