import { BaseMainComponent } from "./BaseMainComponent.js";
import { RevenueTableComponent } from "./table/RevenueTableComponent.js";

export class MainRevenueComponent extends BaseMainComponent {
    constructor(parent) {
        super(parent);
        this.addChildComponent(new RevenueTableComponent(this));
    }
}