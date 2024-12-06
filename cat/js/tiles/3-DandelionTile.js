import { Drawing } from "../api/Drawing.js";
import * as cfg from "../config/GameConfiguration.js";

export class DandelionTile extends Drawing {
    constructor(context, x, y) {
        super(context);

        this.id = 3;

        this.ix = 0;
        this.iy = 176;
        this.w = 16;
        this.h = 16;
        this.x = x;
        this.y = y;
        this.sw = cfg.MAP_TILE_SIZE;
        this.sh = cfg.MAP_TILE_SIZE;

        this.solid = true;

        this.image = this.context.getImage("TilesetNature");
    }

    draw() {
        super.drawImageLoaded();
    }
}