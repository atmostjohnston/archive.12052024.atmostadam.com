import { BaseAsset } from "./BaseAsset.js";

export class NasdaqIndex extends BaseAsset {
    constructor(value) {
        super("Nasdaq Index", value, 0, 0, 0);
    }

    nextYear() {
        new NasdaqIndex(this.getValue())
            .setAmount(this.getAmount())
            .setPrice(this.getPrice())
            .setHistoricRateOfReturn(this.getHistoricRateOfReturn())
            .setMinRateOfReturn(this.getMinRateOfReturn())
            .setMaxRateOfReturn(this.getMaxRateOfReturn());
    }
}