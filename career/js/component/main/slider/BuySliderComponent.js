import { BaseMainSliderComponent } from "./BaseMainSliderComponent.js";
import { BuySliderBarComponent } from "./BuySliderBarComponent.js";
import { BuySliderPositionComponent } from "./BuySliderPositionComponent.js";

export class BuySliderComponent extends BaseMainSliderComponent {
    constructor(parent) {
        super(parent);
        this.addChildComponent(new BuySliderBarComponent(this))
            .addChildComponent(new BuySliderPositionComponent(this));
    }
}