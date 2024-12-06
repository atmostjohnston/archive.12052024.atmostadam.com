import { BaseComponent } from "../../../../../gamejs/base/BaseComponent.js";
import { BuyNowButtonComponent } from "./../button/BuyNowButtonComponent.js";
import { BuySliderComponent } from "./../slider/BuySliderComponent.js";
import { careerGameContext } from "../../../context/CareerGameContext.js";
import { BUY_BUTTON_COMPONENT } from "./../../../configuration/CareerConfiguration.js";
import { BaseMainRangeComponent } from "./BaseMainRangeComponent.js";

export class BuyRangeComponent extends BaseMainRangeComponent {
    constructor(parent) {
        super(parent);
        this.addChildComponent(new BuyNowButtonComponent(this))
            .addChildComponent(new BuySliderComponent(this));
    }

    draw() {
        if (BUY_BUTTON_COMPONENT != careerGameContext.getSliderComponentName() ||
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