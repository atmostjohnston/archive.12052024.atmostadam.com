import { BaseMainSliderComponent } from "./BaseMainSliderComponent.js";
import { BorrowSliderBarComponent } from "./BorrowSliderBarComponent.js";
import { BorrowSliderPositionComponent } from "./BorrowSliderPositionComponent.js";

export class BorrowSliderComponent extends BaseMainSliderComponent {
    constructor(parent) {
        super(parent);
        this.addChildComponent(new BorrowSliderBarComponent(this))
            .addChildComponent(new BorrowSliderPositionComponent(this));
    }
}