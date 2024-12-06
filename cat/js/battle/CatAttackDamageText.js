import { requireTick } from "../../../boot/function/ValidationFunctions.js";
import { Hideable } from "../api/Hideable.js";
import * as cfg from "../config/GameConfiguration.js";

export class CatAttackDamageText extends Hideable {
    constructor(context) {
        super(context, true);

        this.font = cfg.BATTLE_SCREEN_FONT;
        this.color = cfg.COLOR_RED;
        this.y = cfg.BATTLE_ATTACK_DAMAGE_TEXT_Y;
    }

    init() {
        this.x = this.context.get("battleCatAttackX");
        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
    }

    draw() {
        if (super.isHidden()) {
            return;
        }
        super.drawTextLoaded();
    }

    setDamage(damage) {
        this.show();
        this.text = "-" + damage;
        setTimeout(() => { this.hide(); }, 2000);
    }
}