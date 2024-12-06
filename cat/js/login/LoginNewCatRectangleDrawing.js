import { requireTick } from "../../../boot/function/ValidationFunctions.js";
import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "./../api/Drawing.js";

export class LoginNewCatRectangleDrawing extends Drawing {
    constructor(context) {
        super(context);
    }

    init() {
        this.size = 10;
        this.color = cfg.COLOR_ORANGE;
        this.w = this.screen.getWidth() - 200;
        this.h = 200;
        this.x = 100;
        this.y = 100;
        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
    }

    draw() {
        super.drawFilledRectangle(cfg.COLOR_PURPLE, this.x, this.y, this.w, this.h);
        super.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);
        super.drawText("New Game", cfg.BATTLE_SCREEN_FONT, cfg.COLOR_BLACK, this.screen.getWidth() * .4, this.y + 115);
    }
}