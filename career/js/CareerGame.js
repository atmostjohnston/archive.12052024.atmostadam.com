import { context } from "./../../gamejs/main.js";

window.addEventListener("load", function () {
    context.setGame(new CareerGame());
});

export class CareerGame {
    constructor(context) {
        this.context = context;
    }

    update(tick) {
        this.context.getScreens().values().forEach(v => v.update(tick));
    }

    draw() {
        this.context.getScreens().values().forEach(v => v.draw());
    }
}