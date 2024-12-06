import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";
import { requireScreen, requireTick } from "../../../boot/function/ValidationFunctions.js";

class CookieWarningScreen extends Drawing {
    constructor(context) {
        super(context);
    }

    startRunning() { // Deprecated
        this.init();
    }

    init() {
        requireScreen(this.context, this);

        this.text = "This website uses cookies to save your progress. No Cookie-Haters. Leave immediately if you do not like the taste of cookies.";
        this.color = "black";
        this.font = cfg.BATTLE_SCREEN_FONT;
        this.x = this.screen.getWidth();
        this.y = this.screen.getHeight();
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
        setTimeout(() => { if ("CookieWarningScreen" == this.getCurrentScreenName()) { this.nextScreen(); } }, this.context.get("introScreenDelay"));
        this.delay = true;
        if (this.completed) {
            this.nextScreen();
        }
    }

    draw() {
        super.drawTextLoaded();
    }

    notify() {
        this.nextScreen();
    }
}