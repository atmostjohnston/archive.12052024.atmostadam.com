import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";
import { requireTick } from "../../../boot/function/ValidationFunctions.js";

export class OpponentHpText extends Drawing {
    constructor(context) {
        super(context);

        this.color = cfg.COLOR_ORANGE;
        this.font = cfg.BATTLE_SCREEN_FONT;
        this.y = cfg.BATTLE_CAT_HP_TEXT_XY;
    }

    init() {
        this.x = this.context.get("battleOpponentHpTextX");
        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
        this.text = this.context.get("opponent").currentHp + "/" + this.context.get("opponent").maxHp;
    }

    draw() {
        super.drawTextLoaded();
    }
}