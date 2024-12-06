import { AchievementDecorator } from "./../decorator/AchievementDecorator.js";
import { MineConstants } from "./../configuration/MineConstants.js";

export class Shopkeep {
    constructor(x, y) {
        this.image = document.getElementById("BlueFlameShopkeep");
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

    }

    draw() {
        if (AchievementDecorator.isLocked(MineConstants.SHOPKEEP)) {
            return;
        }
        this.drawImageLoaded();
    }
}