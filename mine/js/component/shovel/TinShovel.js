export class TinShovel {
    constructor(context) {
        this.context = context;
        this.image = document.getElementById("Shovel");
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

        this.x = this.screen.getWidth() * .37;
        this.y = this.screen.getHeight() * .26;

        this.minX = this.x - 200;
        this.minY = this.y;
        this.maxX = this.x;
        this.maxY = this.y + 200;

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
            this.x -= this.speed;
            this.y += this.speed;
            if (this.y > this.maxY || this.x < this.minX) {
                this.movingTowards = false;
            }
        } else {
            this.x += this.speed;
            this.y -= this.speed;
            if (this.y < this.minY || this.x > this.maxX) {
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