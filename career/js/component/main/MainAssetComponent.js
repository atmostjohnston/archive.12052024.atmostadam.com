import { BaseMainComponent } from "./BaseMainComponent.js";
import { BuyRangeComponent } from "./range/BuyRangeComponent.js";
import { SellRangeComponent } from "./range/SellRangeComponent.js";
import { AssetTableComponent } from "./table/AssetTableComponent.js";

export class MainAssetComponent extends BaseMainComponent {
    constructor(parent) {
        super(parent);
        this.addChildComponent(new AssetTableComponent(this))
            .addChildComponent(new BuyRangeComponent(this))
            .addChildComponent(new SellRangeComponent(this));
    }
}