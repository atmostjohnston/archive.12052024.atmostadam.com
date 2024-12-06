import { requireContext, requireScreen, requireTick } from "../../../boot/function/ValidationFunctions.js";

export class TitleScreen {
    constructor(context) {
        requireContext(context, this);
    }

    init() {
        requireScreen(this.context, this);
        this.image = this.context.getImage("BackgroundTitle");
        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
        if (this.delay) {
            return;
        }
        setTimeout(() => {
            if (this.screen.getCurrentScreen() == this) {
                this.completed = true;
            }
        }, this.context.get("introScreenDelay"));
        this.delay = true;
    }

    draw() {
        this.screen.drawBackground(
            this.image,
            1920,
            1080
        );
        if (this.completed) {
            this.nextScreen();
        }
    }

    notify() {
        this.completed = true;
    }

    nextScreen() {
        this.screen.setCurrentScreen("RachelScreen");
    }
}