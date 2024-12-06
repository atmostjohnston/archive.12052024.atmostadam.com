import * as cfg from "../config/GameConfiguration.js";
import { requireContext, requireScreen, requireTick } from "../../../boot/function/ValidationFunctions.js";

export class DadScreen {
    constructor(context) {
        requireContext(context, this);
    }

    init() {
        requireScreen(this.context, this);

        this.image = this.context.getImage("BackgroundDad");
        this.ix = 0;
        this.iy = 0;
        this.w = cfg.MAX_CANVAS_WIDTH;
        this.h = cfg.MAX_CANVAS_HEIGHT;
        this.x = 0;
        this.y = 0;
        this.sw = this.screen.getWidth();
        this.sh = this.screen.getHeight();
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
        this.screen.setCurrentScreen("MomScreen");
    }
}