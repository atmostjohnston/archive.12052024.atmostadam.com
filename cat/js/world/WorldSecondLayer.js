import { DandelionTile } from "../tiles/3-DandelionTile.js";
import { Drawing } from "../api/Drawing.js"

export class WorldSecondLayer extends Drawing {
    constructor(context) {
        super(context);

        this.tileSize = 32;
        this.rows = this.screen.getHeight() / this.tileSize;
        this.columns = this.screen.getWidth() / this.tileSize;

        this.layout = [];
        for (var c = 0; c < this.columns; c++) {
            for (var r = 0; r < this.rows; r++) {
                if (0 == super.getRandom(0, 30)) {
                    this.layout.push(new DandelionTile(c * this.tileSize, r * this.tileSize));
                } else {
                    this.layout.push(null);
                }
            }
        }
    }

    init() {

    }

    update() {
    }

    draw() {
        this.layout.forEach(e => { if (null != e) e.draw(); });
    }
}