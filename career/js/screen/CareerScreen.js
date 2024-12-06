import { context } from "./../../../gamejs/main.js";
import { BaseScreen } from "./../../../gamejs/base/BaseScreen.js";
import { MenuComponent } from "./../component/layout/MenuComponent.js";
import { HeaderComponent } from "./../component/layout/HeaderComponent.js";
import { FooterComponent } from "./../component/layout/FooterComponent.js";
import { MainComponent } from "./../component/layout/MainComponent.js";

window.addEventListener("load", function () {
    context.setScreen(new CareerScreen());
});

export class CareerScreen extends BaseScreen {
    constructor() {
        super("CareerScreen");
        this.addChildComponent(new MenuComponent(this))
            .addChildComponent(new HeaderComponent(this))
            .addChildComponent(new FooterComponent(this))
            .addChildComponent(new MainComponent(this))
            .show();
    }
}