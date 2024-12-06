import { boot } from "../../corejs/boot/boot.js";
import { GameContext } from "../../corejs/context/GameContext.js";

window.addEventListener("load", function () {
    var context = new GameContext();
    context.setGameLoop(new ScreenGameLoopTest(context));
    boot(context);
});

export class ScreenGameLoopTest {
    constructor(context) {
        this.screen = context.getScreen();
        this.color = "yellow";
    }

    update(tick) {
        this.setTick(tick);
        this.setX(this.screen.getLeft());
        this.setY(this.screen.getTop());
        this.setW(this.screen.getWidth());
        this.setH(this.screen.getHeight());
    }

    draw() {
        this.screen.drawRectangle(
            this.color,
            this.getX(),
            this.getY(),
            this.getW(),
            this.getH()
        );
    }

    onClick(x, y) {

    }

    getTick() {
        return this.tick;
    }

    setTick(tick) {
        this.tick = tick;
        return this;
    }

    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
        return this;
    }

    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y;
        return this;
    }

    getW() {
        return this.w;
    }

    setW(w) {
        this.w = w;
        return this;
    }

    getH() {
        return this.h;
    }

    setH(h) {
        this.h = h;
        return this;
    }
}