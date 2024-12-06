import { BaseComponent } from "../../../../../gamejs/base/BaseComponent.js";
import { SellNowButtonComponent } from "./../button/SellNowButtonComponent.js";
import { SellSliderComponent } from "./../slider/SellSliderComponent.js";
import { careerGameContext } from "../../../context/CareerGameContext.js";
import { SELL_BUTTON_COMPONENT } from "./../../../configuration/CareerConfiguration.js";
import { BaseMainRangeComponent } from "./BaseMainRangeComponent.js";

export class SellRangeComponent extends BaseMainRangeComponent {
    constructor(parent) {
        super(parent)
        this.addChildComponent(new SellNowButtonComponent(this))
            .addChildComponent(new SellSliderComponent(this));
    }

    draw() {
        if (SELL_BUTTON_COMPONENT != careerGameContext.getSliderComponentName() ||
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