import { GenericGrassTile } from "../tiles/1-GenericGrassTile.js";
import { GenericLongGrassTile } from "../tiles/2-GenericLongGrassTile.js";
import { BrownBoulderTile } from "../tiles/4-BrownBoulderTile.js";
import * as cfg from "../config/GameConfiguration.js";
import { requireContext } from "../../../boot/function/ValidationFunctions.js";

export class WorldFirstLayer {
    constructor(context) {
        requireContext(context);

        this.tileSize = cfg.MAP_TILE_SIZE;
        //this.rows = this.screen.getHeight() / this.tileSize;
        //this.columns = this.screen.getWidth() / this.tileSize;
        this.rows = cfg.MAP_NUM_OF_ROWS;
        this.columns = cfg.MAP_NUM_OF_COLUMNS;

        this.atlas = this.context.get("atlas").split(",");

        //console.log("CSV MAP LOAD: " + this.atlas);
        //console.log(this.atlas.constructor.name)
        /*

        this.atlas = [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3,
            3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,
            3, 3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3,
        ]
*/

    }

    update() {

    }

    draw() {
        for (var c = 0; c < this.columns; c++) {
            for (var r = 0; r < this.rows; r++) {
                var number = this.atlas[r + (c * this.columns)];
                console.log("Row [" + r + "]  Column [" + c + "] --> " + number);
                //if (number === 1) {
                new GenericGrassTile(c * this.tileSize, r * this.tileSize).draw();
                //}
                if (number == 2) {
                    new GenericLongGrassTile(c * this.tileSize, r * this.tileSize).draw();
                }
                if (number == 3) {
                    new BrownBoulderTile(c * this.tileSize, r * this.tileSize).draw();
                }
            }
        }
    }
}