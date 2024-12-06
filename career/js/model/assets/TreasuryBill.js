import { BaseAsset } from "./BaseAsset.js";

export class TreasuryBill extends BaseAsset {
    constructor(value) {
        super("T-Bills", value, 0, 0, 0);
    }

    nextYear() {
        new TreasuryBill(this.getValue())
            .setAmount(this.getAmount())
            .setPrice(this.getPrice())
            .setHistoricRateOfReturn(this.getHistoricRateOfReturn())
            .setMinRateOfReturn(this.getMinRateOfReturn())
            .setMaxRateOfReturn(this.getMaxRateOfReturn());
    }
}