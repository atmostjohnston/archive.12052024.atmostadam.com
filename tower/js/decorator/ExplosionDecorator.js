import { notNull, notNulls, isNumbers, isNumber } from "../../../corejs/util/ObjUtils.js";

export class ExplosionDecorator {
    constructor(context, explosion, x, y) {
        this.context = notNull("context", context, this);
        this.screen = notNull("screen", context.getScreen(), this);

        this.setExplosion(explosion);
        this.setX(x);
        this.setY(y);
    }

    init() {
        this.screen = notNull("screen", this.context.getScreen(), this);
        this.init = true;
    }

    update(tick, x, y) {
        this.setTick(tick);
        if (!this.init) {
            this.init();
        }
        this.setX(x);
        this.setY(y);
    }

    draw() {
        this.screen.drawImage(
            this.explosion.imageId,
            this.explosion.ix,
            this.explosion.iy,
            this.explosion.w,
            this.explosion.h,
            this.x,
            this.y,
            this.explosion.sw,
            this.explosion.sh
        );
    }

    setExplosion(explosion) {
        this.explosion = notNull("Explosion", explosion, this);
        notNulls(["key", "imageId"], explosion);
        isNumbers(["ix", "iy", "w", "h", "sw", "sh", "speed"], explosion);
        return this;
    }

    setX(x) {
        this.x = isNumber("x", x, this);
        return this;
    }

    setY(y) {
        this.y = isNumber("y", y, this);
        return this;
    }

    setTick(tick) {
        this.tick = isNumber("tick", tick, this);
        return this;
    }

    getExplosion() {
        return this.explosion;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getTick() {
        return this.tick;
    }
}