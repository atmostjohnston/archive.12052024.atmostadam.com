import { Drawing } from "../api/Drawing.js";
import * as cfg from "../config/GameConfiguration.js";
import { requireTick } from "../../../boot/function/ValidationFunctions.js";

export class OpponentPixelAnimation extends Drawing {
    constructor(context) {
        super(context);

        this.countTicks = 0;
        this.numOfTicks = 0;
        this.speedPerTickX = 0;
        this.speedPerTickY = 0;

        this.moving = false;
    }

    init() {
        this.opponent = this.context.get("OpponentDecorator");
        this.image = this.opponent.getPixelImage();
        this.x = this.screen.getWidth() - 360;
        this.y = cfg.BATTLE_CAT_PIXEL_Y + 40;
        this.ix = this.opponent.ix;
        this.iy = this.opponent.iy;
        this.w = this.opponent.w;
        this.h = this.opponent.h;
        this.sw = this.opponent.sw;
        this.sh = this.opponent.sh;

        this.loaded = true;
    }

    move(dx, dy, numOfTicks) {
        this.moving = true;
        this.countTicks = 0;

        super.getSpeedPerTickX(dx, numOfTicks);
        super.getSpeedPerTickY(dy, numOfTicks);
        this.numOfTicks = numOfTicks;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
        if (!this.moving) {
            return;
        }
        if (this.countTicks < this.numOfTicks) {
            this.x += this.speedPerTickX;
            this.y += this.speedPerTickY;
            this.countTicks++;
            return;
        }
        this.moving = false;
    }

    draw() {
        super.drawImageLoaded();
    }

    isMoving() {
        return this.moving;
    }
}