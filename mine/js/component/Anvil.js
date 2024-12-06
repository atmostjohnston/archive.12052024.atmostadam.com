import { AchievementDecorator } from "./../decorator/AchievementDecorator.js";
import { MineConstants } from "./../configuration/MineConstants.js";

export class Anvil {
    constructor(x, y) {
        this.image = document.getElementById("Anvil");
        this.ix = 0;
        this.iy = 0;
        this.w = 64;
        this.h = 64;
        this.x = x;
        this.y = y;
        this.sw = 192;
        this.sh = 192;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (AchievementDecorator.isLocked(MineConstants.ANVIL)) {
            return;
        }
        this.drawImageLoaded();
    }
}