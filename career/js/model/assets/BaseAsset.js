export class BaseAsset {
    constructor(id, value, amount, price, historicRateOfReturn, minRateOfReturn, maxRateOfReturn) {
        this.id = id;
        this.value = value;
        this.amount = amount;
        this.price = price;
        this.historicRateOfReturn = historicRateOfReturn;
        this.minRateOfReturn = minRateOfReturn;
        this.maxRateOfReturn = maxRateOfReturn;
    }

    increase(amount) {
        this.value += amount;
    }

    decrease(amount) {
        this.value -= amount;
    }

    compound() {
        let interest = this.value * (this.historicRateOfReturn / 100);
        this.increase(interest);
        return interest;
    }

    getId() {
        return this.id;
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
        return this;
    }

    getAmount() {
        return this.amount;
    }

    setAmount(amount) {
        this.amount = amount;
        return this;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    getHistoricRateOfReturn() {
        return this.historicRateOfReturn;
    }

    setHistoricRateOfReturn(historicRateOfReturn) {
        this.historicRateOfReturn = historicRateOfReturn;
        return this;
    }

    getMinRateOfReturn() {
        return this.minRateOfReturn;
    }

    setMinRateOfReturn(minRateOfReturn) {
        this.minRateOfReturn = minRateOfReturn;
        return this;
    }

    getMaxRateOfReturn() {
        return this.maxRateOfReturn;
    }

    setMaxRateOfReturn(maxRateOfReturn) {
        this.maxRateOfReturn = maxRateOfReturn;
        return this;
    }

    getLastYearValue() {
        return this.lastYearValue;
    }

    setLastYearValue(lastYearValue) {
        this.lastYearValue = lastYearValue;
        return this;
    }

    getLastYearPrice() {
        return this.lastYearPrice;
    }

    setLastYearPrice(lastYearPrice) {
        this.lastYearPrice = lastYearPrice;
        return this;
    }

    getLastYearRateOfReturn() {
        return this.lastYearRateOfReturn;
    }

    setLastYearRateOfReturn(lastYearRateOfReturn) {
        this.lastYearRateOfReturn = lastYearRateOfReturn;
        return this;
    }
}