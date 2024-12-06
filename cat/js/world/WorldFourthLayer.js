import { Drawing } from "./../api/Drawing.js";

export class WorldFourthLayer extends Drawing {
    constructor(context) {
        super(context);

        this.ix = 0;
        this.iy = 0;
        this.w = 32;
        this.h = 32;
        this.x = 512;
        this.y = 512;
        this.sw = 192;
        this.sh = 192;
        this.image = this.context.getImage("HeroSpritesheet");
    }

    update() {

    }

    draw() {
        super.drawImageLoaded();
    }
}