import { BaseAsset } from "./BaseAsset.js";

export class House extends BaseAsset {
    constructor(value) {
        super("House", value, 0, 0, 0);
    }

    nextYear() {
        new House(this.getValue())
            .setAmount(this.getAmount())
            .setPrice(this.getPrice())
            .setHistoricRateOfReturn(this.getHistoricRateOfReturn())
            .setMinRateOfReturn(this.getMinRateOfReturn())
            .setMaxRateOfReturn(this.getMaxRateOfReturn());
    }
}