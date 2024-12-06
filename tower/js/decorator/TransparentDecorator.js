import { isNumbers, notNull, notNulls } from "../../../corejs/util/ObjUtils.js";
import { TowerContext } from "../context/TowerContext.js";

export class TransparentDecorator {
    constructor(context, transparent) {
        this.context = notNull("context", context, this);
        this.screen = notNull("screen", context.getScreen(), this);

        notNull("Transparent", transparent, this);
        notNulls(["key", "imageId"], transparent);
        isNumbers(["ix", "iy", "w", "h"], transparent);
        this.transparent = transparent;
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
            this.transparent.imageId,
            this.transparent.ix,
            this.transparent.iy,
            this.transparent.w,
            this.transparent.h,
            this.x,
            this.y,
            TowerContext.tileWidth,
            TowerContext.tileHeight
        );
    }
}