import { BaseMainSliderComponent } from "./BaseMainSliderComponent.js";
import { PaySliderBarComponent } from "./PaySliderBarComponent.js";
import { PaySliderPositionComponent } from "./PaySliderPositionComponent.js";

export class PaySliderComponent extends BaseMainSliderComponent {
    constructor(parent) {
        super(parent);
        this.addChildComponent(new PaySliderBarComponent(this))
            .addChildComponent(new PaySliderPositionComponent(this));
    }
}