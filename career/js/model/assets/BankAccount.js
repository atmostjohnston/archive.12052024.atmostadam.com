import { BaseAsset } from "./BaseAsset.js";

export class BankAccount extends BaseAsset {
    constructor(value) {
        super("Bank Account", value, 0, 0, 0);
    }

    nextYear() {
        new BankAccount(this.getValue())
            .setAmount(this.getAmount())
            .setPrice(this.getPrice())
            .setHistoricRateOfReturn(this.getHistoricRateOfReturn())
            .setMinRateOfReturn(this.getMinRateOfReturn())
            .setMaxRateOfReturn(this.getMaxRateOfReturn());
    }
}