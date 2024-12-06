import { BaseAsset } from "./BaseAsset.js";

export class NyseIndex extends BaseAsset {
    constructor(value) {
        super("NYSE Index", value, 0, 0, 0);
    }

    nextYear() {
        new NyseIndex(this.getValue())
            .setAmount(this.getAmount())
            .setPrice(this.getPrice())
            .setHistoricRateOfReturn(this.getHistoricRateOfReturn())
            .setMinRateOfReturn(this.getMinRateOfReturn())
            .setMaxRateOfReturn(this.getMaxRateOfReturn());
    }
}