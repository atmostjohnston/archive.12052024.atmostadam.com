import { Drawing } from "../api/Drawing.js";
import * as cfg from "../config/GameConfiguration.js";

export class BrownBoulderTile extends Drawing {
    constructor(context, x, y) {
        super(context);

        this.id = 4;

        this.ix = 128;
        this.iy = 210;
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