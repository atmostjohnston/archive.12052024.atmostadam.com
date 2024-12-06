import { GenericGrassTile } from "./../tiles/GenericGrassTile.js";

export class MapStartingArea {
    constructor(context) {
        this.context = context;

        this.tileSize = 32;
        this.rows = this.screen.getHeight() / this.tileSize;
        this.columns = this.screen.getWidth() / this.tileSize;
        this.tiles = [
            1, 3, 3, 3, 1, 1, 3, 1,
            1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 2, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 2, 1, 1, 1, 1,
            1, 1, 1, 1, 2, 1, 1, 1,
            1, 1, 1, 1, 2, 1, 1, 1,
            1, 1, 1, 1, 2, 1, 1, 1
        ];
    }

    update() {

    }

    draw() {
        for (var c = 0; c < this.columns; c++) {
            for (var r = 0; r < this.rows; r++) {
                new GenericGrassTile(c * this.tileSize, r * this.tileSize).draw();
            }
        }
    }
}