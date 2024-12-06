import { Hideable } from "../api/Hideable.js";
import * as cfg from "../config/GameConfiguration.js";
import { requireTick } from "../../../boot/function/ValidationFunctions.js";

export class CatLeftClawAnimation extends Hideable {
    constructor(context) {
        super(context, true);

        this.numOfSlashes = 15;
        this.slashSpeed = 3;

        this.ix = 0;
        this.iy = 0;
        this.w = 612;
        this.h = 612;
        this.sw = 200;
        this.sh = 200;
    }

    init() {
        this.image = this.context.getImage("ClawSlashLeft");
        this.countSlashes = 0;
        this.x = this.screen.getWidth() - 350;
        this.y = cfg.BATTLE_OPPONENT_PIXEL_Y - 120;
        this.show();
        setTimeout(() => { this.hide(); }, 5000);
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
        if (this.countSlashes < this.numOfSlashes) {
            this.x -= this.slashSpeed;
            this.y += this.slashSpeed;
            this.countSlashes++;
            return;
        }
        this.hide();
    }

    draw() {
        if (super.isHidden()) {
            return;
        }
        super.drawImage(
            this.image,
            this.ix,
            this.iy,
            this.w,
            this.h,
            this.x,
            this.y,
            this.sw,
            this.sh
        );
    }

    hide() {
        super.hide();
        this.countSlashes = 0;
    }
}