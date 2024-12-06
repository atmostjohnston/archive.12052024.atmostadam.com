import { BaseAsset } from "./BaseAsset.js";

export class Snp500Index extends BaseAsset {
    constructor(value) {
        super("S&P 500 Index", value, 0, 0, 0);
    }

    nextYear() {
        new Snp500Index(this.getValue())
            .setAmount(this.getAmount())
            .setPrice(this.getPrice())
            .setHistoricRateOfReturn(this.getHistoricRateOfReturn())
            .setMinRateOfReturn(this.getMinRateOfReturn())
            .setMaxRateOfReturn(this.getMaxRateOfReturn());
    }
}