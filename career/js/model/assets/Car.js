import { BaseAsset } from "./BaseAsset.js";

export class Car extends BaseAsset {
    constructor(value) {
        super("Car", value, 0, 0, 0);
    }

    nextYear() {
        new Car(this.getValue())
            .setAmount(this.getAmount())
            .setPrice(this.getPrice())
            .setHistoricRateOfReturn(this.getHistoricRateOfReturn())
            .setMinRateOfReturn(this.getMinRateOfReturn())
            .setMaxRateOfReturn(this.getMaxRateOfReturn());
    }
}