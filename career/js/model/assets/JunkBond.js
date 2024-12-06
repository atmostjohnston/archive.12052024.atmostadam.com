import { BaseAsset } from "./BaseAsset.js";

export class JunkBond extends BaseAsset {
    constructor(value) {
        super("Junk Bonds", value, 0, 0, 0);
    }

    nextYear() {
        new JunkBond(this.getValue())
            .setAmount(this.getAmount())
            .setPrice(this.getPrice())
            .setHistoricRateOfReturn(this.getHistoricRateOfReturn())
            .setMinRateOfReturn(this.getMinRateOfReturn())
            .setMaxRateOfReturn(this.getMaxRateOfReturn());
    }
}