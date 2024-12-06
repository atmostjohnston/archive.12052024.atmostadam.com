import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";
import { requireTick } from "../../../boot/function/ValidationFunctions.js";

export class OpponentNameText extends Drawing {
    constructor(context) {
        super(context);

        this.color = cfg.COLOR_ORANGE;
        this.font = cfg.BATTLE_SCREEN_FONT;
    }

    init() {
        this.text = this.context.get("opponent").name;
        this.x = this.context.get("battleOpponentNameTextX");
        this.y = this.context.get("battleCatNameTextY");
        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
    }

    draw() {
        super.drawTextLoaded();
    }
}