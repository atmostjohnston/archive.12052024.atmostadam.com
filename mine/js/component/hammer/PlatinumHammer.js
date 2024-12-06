import { notNull } from "../../../../boot/function/GameFunctions.js";

export class PlatinumHammer {
    constructor(context, x, y, w, h) {
        this.context = notNull("context", context, this);

        const halfWidth = w / 2;

        this.image = document.getElementById("Hammer");
        this.ix = 0;
        this.iy = 0;
        this.w = 32;
        this.h = 32;

        this.sw = 128;
        this.sh = 128;

        this.speed = 6;



        this.movingTowards = true;
        this.hidden = true;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .22;
        this.y = this.screen.getHeight() * .68;

        this.minX = this.x - 200;
        this.minY = this.y - 200;
        this.maxX = this.x;
        this.maxY = this.y;

        this.loaded = true;
    }

    update() {
        this.tick = tick;
        if (!this.loaded) {
            this.init();
        }
        if (this.hidden) {
            return;
        }
        if (this.movingTowards) {
            this.x += this.speed;
            this.y += this.speed;
            if (this.x > this.maxX || this.y > this.maxY) {
                this.movingTowards = false;
            }
        } else {
            this.x -= this.speed;
            this.y -= this.speed;
            if (this.x < this.minX || this.y < this.minY) {
                this.movingTowards = true;
            }
        }
    }

    draw() {
        if (this.hidden) {
            return;
        }
        this.drawImageLoaded();
    }
}