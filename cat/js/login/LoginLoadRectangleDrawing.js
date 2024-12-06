import { requireTick } from "../../../boot/function/ValidationFunctions.js";
import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "./../api/Drawing.js";

export class LoginLoadRectangleDrawing extends Drawing {
    constructor(context) {
        super(context);
    }

    init() {
        this.size = 10;
        this.color = cfg.COLOR_PURPLE;
        this.w = this.screen.getWidth() - 200;
        this.h = 200;
        this.x = 100;
        this.y = 400;
        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
    }

    draw() {
        super.drawFilledRectangle(cfg.COLOR_ORANGE, this.x, this.y, this.w, this.h);
        super.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);
        super.drawText("Load Game", cfg.BATTLE_SCREEN_FONT, cfg.COLOR_BLACK, this.screen.getWidth() * .4, this.y + 120);
    }
}