import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";
import { requireTick } from "../../../boot/function/ValidationFunctions.js";

export class CatHpText extends Drawing {
    constructor(context) {
        super(context);

        this.color = cfg.COLOR_ORANGE;
        this.font = cfg.BATTLE_SCREEN_FONT;
        this.x = cfg.BATTLE_CAT_HP_TEXT_XY;
        this.y = cfg.BATTLE_CAT_HP_TEXT_XY;
    }

    init() {
        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
        this.text = this.context.getCat().currentHp + "/" + this.context.getCat().maxHp;
    }

    draw() {
        super.drawTextLoaded();
    }
}