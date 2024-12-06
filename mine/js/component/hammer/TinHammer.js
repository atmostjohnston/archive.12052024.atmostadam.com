import { notNull } from "../../../../boot/function/GameFunctions.js";

export class TinHammer {
    constructor(context) {
        this.context = notNull("context", context, this);

        this.image = document.getElementById("Hammer");
        this.ix = 0;
        this.iy = 0;
        this.w = 32;
        this.h = 32;

        this.sw = 128;
        this.sh = 128;

        this.speed = 7;


        this.movingTowards = true;
        this.hidden = true;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .19;
        this.y = this.screen.getHeight() * .19;

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