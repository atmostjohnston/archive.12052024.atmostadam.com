import { BaseMainSliderComponent } from "./BaseMainSliderComponent.js";
import { SellSliderBarComponent } from "./SellSliderBarComponent.js";
import { SellSliderPositionComponent } from "./SellSliderPositionComponent.js";

export class SellSliderComponent extends BaseMainSliderComponent {
    constructor(parent) {
        super(parent);
        this.addChildComponent(new SellSliderBarComponent(this))
            .addChildComponent(new SellSliderPositionComponent(this));
    }
}