import { AchievementDecorator } from "./../decorator/AchievementDecorator.js";
import { MineConstants } from "./../configuration/MineConstants.js";

export class Counter {
    constructor(ix, iy, x, y) {
        this.image = document.getElementById("InteriorTileset");
        this.ix = ix;
        this.iy = iy;
        this.w = 48;
        this.h = 48;
        this.x = x;
        this.y = y;
        this.sw = 96;
        this.sh = 96;

        this.hidden = false;
    }

    update(tick) {

    }

    draw() {
        if (AchievementDecorator.isLocked(MineConstants.COUNTER)) {
            return;
        }
        this.drawImageLoaded();
    }
}