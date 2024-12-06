import { isNumbers, notNull, notNulls } from "../../../corejs/util/ObjUtils.js";
import { TowerContext } from "../context/TowerContext.js";

export class SolidDecorator {
    constructor(context, solid) {
        this.context = notNull("context", context, this);
        this.solid = notNull("Solid", solid, this);

        notNulls(["key", "imageId"], solid);
        isNumbers(["ix", "iy", "w", "h"], solid);
    }

    init() {
        this.screen = notNull("screen", this.context.getScreen(), this);
        this.init = true;
    }

    update(tick, x, y) {
        this.tick = tick;
        if (!this.init) {
            this.init();
        }
        this.x = x;
        this.y = y;
    }

    draw() {
        this.screen.drawImage(
            this.solid.imageId,
            this.solid.ix,
            this.solid.iy,
            this.solid.w,
            this.solid.h,
            this.x,
            this.y,
            TowerContext.tileWidth,
            TowerContext.tileHeight
        );
    }
}