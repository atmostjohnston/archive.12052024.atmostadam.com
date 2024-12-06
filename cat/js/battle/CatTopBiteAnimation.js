import { Hideable } from "../api/Hideable.js";
import * as cfg from "../config/GameConfiguration.js";
import { requireTick } from "../../../boot/function/ValidationFunctions.js";

export class CatTopBiteAnimation extends Hideable {
    constructor(context) {
        super(context, true);

        this.numOfTicks = 30;
        this.speed = 3;

        this.ix = 0;
        this.iy = 0;
        this.w = 500;
        this.h = 176;
        this.sw = 150;
        this.sh = 70;
    }

    init() {
        this.image = this.context.getImage("BiteUpperJaw");

        this.countTicks = 0;
        this.x = this.screen.getWidth() - 360;
        this.y = cfg.BATTLE_OPPONENT_PIXEL_Y - 100;
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
        if (this.countTicks < this.numOfTicks) {
            this.y += this.speed;
            this.countTicks++;
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
        this.countTicks = 0;
    }
}