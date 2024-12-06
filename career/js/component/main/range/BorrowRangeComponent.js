import { BaseComponent } from "../../../../../gamejs/base/BaseComponent.js";
import { BorrowNowButtonComponent } from "./../button/BorrowNowButtonComponent.js";
import { BorrowSliderComponent } from "./../slider/BorrowSliderComponent.js";
import { careerGameContext } from "../../../context/CareerGameContext.js";
import { BORROW_BUTTON_COMPONENT } from "./../../../configuration/CareerConfiguration.js";
import { BaseMainRangeComponent } from "./BaseMainRangeComponent.js";

export class BorrowRangeComponent extends BaseMainRangeComponent {
    constructor(parent) {
        super(parent);
        this.addChildComponent(new BorrowNowButtonComponent(this))
            .addChildComponent(new BorrowSliderComponent(this));
    }

    draw() {
        if (BORROW_BUTTON_COMPONENT != careerGameContext.getSliderComponentName() ||
            !careerGameContext.getSliderModel() ||
            !careerGameContext.getSliderComponentName()) {
            return;
        }
        super.draw();
        this.textDrawingId.setText(careerGameContext.getSliderModel().getId()).draw();
        this.textDrawingPrice.setText("Price Per $" + careerGameContext.getSliderModel().getPrice()).draw();
        this.textDrawingTotal.setText("Total $0").draw();
    }
}