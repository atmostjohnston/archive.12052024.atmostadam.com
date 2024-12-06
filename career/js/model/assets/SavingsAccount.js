import { BaseAsset } from "./BaseAsset.js";

export class SavingsAccount extends BaseAsset {
    constructor(value) {
        super("Savings Account", value, 0, 0, 0);
    }

    nextYear() {
        new SavingsAccount(this.getValue())
            .setAmount(this.getAmount())
            .setPrice(this.getPrice())
            .setHistoricRateOfReturn(this.getHistoricRateOfReturn())
            .setMinRateOfReturn(this.getMinRateOfReturn())
            .setMaxRateOfReturn(this.getMaxRateOfReturn());
    }
}