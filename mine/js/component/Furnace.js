import { AchievementDecorator } from "../decorator/AchievementDecorator.js";
import { MineConstants } from "../configuration/MineConstants.js";

export class Furnace {
    constructor(context) {
        this.context = context;
        this.image = document.getElementById("OreSpritesheet");
        this.ix = 0;
        this.iy = 420;
        this.w = 64;
        this.h = 96;
        this.sw = 128;
        this.sh = 192;

        this.tick = 0;
        this.ticksPerImage = 60;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .45;
        this.y = this.screen.getHeight() * .07;

        this.loaded = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.loaded) {
            this.init();
        }

        if (this.tick < this.ticksPerImage / 2) {
            this.ix = 0;
        } else if (this.tick < (this.ticksPerImage * 2)) {
            this.ix = 64;
        } else if (this.tick < (this.ticksPerImage * 3)) {
            this.ix = 128;
        } else if (this.tick < (this.ticksPerImage * 4)) {
            this.ix = 128;
        } else {
            this.tick = -1;
        }
        this.tick++;
    }

    draw() {
        if (AchievementDecorator.isLocked(MineConstants.FURNACE)) {
            return;
        }
        this.drawImageLoaded();
    }
}