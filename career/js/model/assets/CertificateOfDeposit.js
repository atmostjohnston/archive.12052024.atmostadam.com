import { BaseAsset } from "./BaseAsset.js";

export class CertificateOfDeposit extends BaseAsset {
    constructor(value) {
        super("CDs", value, 0, 0, 0);
    }

    nextYear() {
        new CertificateOfDeposit(this.getValue())
            .setAmount(this.getAmount())
            .setPrice(this.getPrice())
            .setHistoricRateOfReturn(this.getHistoricRateOfReturn())
            .setMinRateOfReturn(this.getMinRateOfReturn())
            .setMaxRateOfReturn(this.getMaxRateOfReturn());
    }
}