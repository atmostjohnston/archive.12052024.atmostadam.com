import { Drawing } from "../api/Drawing.js";
import * as cfg from "../config/GameConfiguration.js";
import { requireTick } from "../../../boot/function/ValidationFunctions.js";

export class CatPixelAnimation extends Drawing {
    constructor(context) {
        super(context);

        this.ix = cfg.BATTLE_CAT_PIXEL_IX;
        this.iy = cfg.BATTLE_CAT_PIXEL_IY;
        this.w = cfg.BATTLE_CAT_PIXEL_WH;
        this.h = cfg.BATTLE_CAT_PIXEL_WH;
        this.x = cfg.BATTLE_CAT_PIXEL_X;
        this.y = cfg.BATTLE_CAT_PIXEL_Y;
        this.sw = cfg.BATTLE_CAT_PIXEL_SWSH;
        this.sh = cfg.BATTLE_CAT_PIXEL_SWSH;


        this.countTicks = 0;
        this.numOfTicks = 0;
        this.speedPerTickX = 0;
        this.speedPerTickY = 0;

        this.sizeCountTicks = 0;
        this.sizeNumOfTicks = 0;
        this.sizeSpeed = 0;

        this.moving = false;
    }

    init() {
        this.image = this.context.getImage(this.context.getCat().name.toLowerCase() + "Pixel");
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
        if (this.sizeCountTicks < this.sizeNumOfTicks) {
            this.x -= this.sizeSpeed / 2;
            this.y -= this.sizeSpeed / 2;
            this.sw += this.sizeSpeed;
            this.sh += this.sizeSpeed;
            this.sizeCountTicks++;
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

    restoreSize() {
        this.ix = cfg.BATTLE_CAT_PIXEL_IX;
        this.iy = cfg.BATTLE_CAT_PIXEL_IY;
        this.w = cfg.BATTLE_CAT_PIXEL_WH;
        this.h = cfg.BATTLE_CAT_PIXEL_WH;
        this.sw = cfg.BATTLE_CAT_PIXEL_SWSH;
        this.sh = cfg.BATTLE_CAT_PIXEL_SWSH;
    }

    puffUp(sizeSpeed, sizeNumOfTicks) {
        this.sizeSpeed = sizeSpeed;
        this.sizeNumOfTicks = sizeNumOfTicks;
    }

    isMoving() {
        return this.moving;
    }
}