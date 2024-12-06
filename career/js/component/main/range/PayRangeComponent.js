import { BaseComponent } from "../../../../../gamejs/base/BaseComponent.js";
import { PayNowButtonComponent } from "./../button/PayNowButtonComponent.js";
import { PaySliderComponent } from "./../slider/PaySliderComponent.js";
import { careerGameContext } from "../../../context/CareerGameContext.js";
import { PAY_BUTTON_COMPONENT } from "./../../../configuration/CareerConfiguration.js";
import { BaseMainRangeComponent } from "./BaseMainRangeComponent.js";

export class PayRangeComponent extends BaseMainRangeComponent {
    constructor(parent) {
        super(parent)
        this.addChildComponent(new PayNowButtonComponent(this))
            .addChildComponent(new PaySliderComponent(this));
    }

    draw() {
        if (PAY_BUTTON_COMPONENT != careerGameContext.getSliderComponentName() ||
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