import { BaseMainComponent } from "./BaseMainComponent.js";
import { LiabilityTableComponent } from "./table/LiabilityTableComponent.js";
import { BorrowRangeComponent } from "./range/BorrowRangeComponent.js";
import { PayRangeComponent } from "./range/PayRangeComponent.js";

export class MainLiabilityComponent extends BaseMainComponent {
    constructor(parent) {
        super(parent);
        this.addChildComponent(new LiabilityTableComponent(this))
            .addChildComponent(new BorrowRangeComponent(this))
            .addChildComponent(new PayRangeComponent(this));
    }
}