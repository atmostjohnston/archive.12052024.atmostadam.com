import { Drawing } from "../api/Drawing.js";
import * as cfg from "../config/GameConfiguration.js";

export class GenericLongGrassTile extends Drawing {
    constructor(context, x, y) {
        super(context);

        this.id = 2;

        this.ix = 80;
        this.iy = 160;
        this.w = 16;
        this.h = 16;
        this.x = x;
        this.y = y;
        this.sw = cfg.MAP_TILE_SIZE;
        this.sh = cfg.MAP_TILE_SIZE;

        this.image = this.context.getImage("TilesetNature");
    }

    draw() {
        super.drawImageLoaded();
    }
}