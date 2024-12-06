import { Drawing } from "../api/Drawing.js";
import * as cfg from "../config/GameConfiguration.js";
import { requireTick } from "../../../boot/function/ValidationFunctions.js";

export class CatPortraitDrawing extends Drawing {
    constructor(context) {
        super(context);

        this.ix = 0;
        this.iy = 0;
        this.w = cfg.PORTRAIT_WH;
        this.h = cfg.PORTRAIT_WH;
        this.x = cfg.BATTLE_PORTRAIT_CAT_X;
        this.y = cfg.BATTLE_PORTRAIT_Y;
        this.sw = cfg.PORTRAIT_WH;
        this.sh = cfg.PORTRAIT_WH;
    }

    init() {
        this.image = this.context.getCatDecorator().getPortraitImage();
        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
    }

    draw() {
        super.drawImageLoaded();
    }
}