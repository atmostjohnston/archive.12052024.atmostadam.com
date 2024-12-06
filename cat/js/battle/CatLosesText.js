import * as cfg from "../config/GameConfiguration.js";
import { Hideable } from "../api/Hideable.js";
import { requireTick } from "../../../boot/function/ValidationFunctions.js";

export class CatLosesText extends Hideable {
    constructor(context) {
        super(context, true);

        this.text = "CAT LOSES";
        this.font = "170pt 'Helvetica', 'sans-serif'";
        this.color = cfg.COLOR_RED;
        this.x = 400;
        this.y = 0;
    }

    init() {
        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
        if (super.isHidden()) {
            return;
        }
        if (this.y > 600) {
            super.hide();
            this.context.get("GameLocalStorage").storeCat();
            this.context.deleteCache("OpponentDecorator");
            this.context.deleteCache("opponent");
            this.context.nextScreen("WorldScreen");
        }
        this.y += 5;
    }


    draw() {
        if (super.isHidden()) {
            return;
        }
        super.drawFilledRectangle(
            cfg.COLOR_WHITE,
            0,
            0,
            this.screen.getWidth(),
            this.screen.getHeight()
        );
        super.drawTextLoaded();
    }

}