import { BaseAsset } from "./BaseAsset.js";

export class CorporateBond extends BaseAsset {
    constructor(value) {
        super("Corporate Bonds", value, 0, 0, 0);
    }

    nextYear() {
        new CorporateBond(this.getValue())
            .setAmount(this.getAmount())
            .setPrice(this.getPrice())
            .setHistoricRateOfReturn(this.getHistoricRateOfReturn())
            .setMinRateOfReturn(this.getMinRateOfReturn())
            .setMaxRateOfReturn(this.getMaxRateOfReturn());
    }
}