import { GameContext } from "../../../corejs/context/GameContext.js";
import { CanvasContextDecorator } from "../../corecanvas/CanvasContextDecorator.js";
import { CanvasDecorator } from "../corecanvas/CanvasDecorator.js";

export class DadsTileList {
    constructor(ctx) {
        this.ctx = ctx;

        this.TILE_SIZE = 64;
        this.TILE_SIZE_BORDER = this.TILE_SIZE + 6;
        this.NUM_OF_ROWS = 12;
        this.NUM_OF_COLS = 16;
        this.LEFT_PAD = CanvasDecorator.getLeft() + 50;
        this.TOP_PAD = CanvasDecorator.getTop() + 50;
        this.ROW_PAD = this.LEFT_PAD + 45;
        this.COL_PAD = this.TOP_PAD + 24;
        this.FONT = "18pt Helvetica";

        this.tileMap = this.context.getTileMap();
        this.graph = new Map();
    }

    update(tick) {

    }

    draw() {
        var col = 0;
        var row = 0;

        this.drawRowNumbers();
        this.drawColumnNumbers();

        for (const tile of this.tileMap.values()) {
            const x = this.ROW_PAD + (col * this.TILE_SIZE_BORDER);
            const y = this.COL_PAD + (row * this.TILE_SIZE_BORDER);
            this.graph.set(col + "," + row, tile);
            tile.draw(x, y);
            if (this.selectedTile && this.selectedTile.key === tile.getTile().key) {
                this.selectedX = x;
                this.selectedY = y;

            }
            if (col > this.NUM_OF_ROWS) {
                col = 0;
                row++;
            } else {
                col++;
            }
            if (row > this.NUM_OF_COLS) {
                return;
            }
        }

        if (this.selectedTile) {
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(this.selectedX + 30, this.selectedY + 70, 400, 50);

            CanvasContextDecorator.drawText(this.selectedTile.key, this.FONT,
                "black", this.selectedX + 35, this.selectedY + 100);
        }
    }

    drawRowNumbers() {
        for (var j = 0; j < this.NUM_OF_ROWS; j++) {
            const x = this.LEFT_PAD;
            const y = this.TOP_PAD + (this.TILE_SIZE_BORDER * j);
            CanvasContextDecorator.drawText(j, this.FONT, "white", x, y);
        }
    }

    drawColumnNumbers() {
        for (var i = 0; i < this.NUM_OF_COLS; i++) {
            const x = this.LEFT_PAD + (this.TILE_SIZE_BORDER * i);
            const y = this.TOP_PAD
            CanvasContextDecorator.drawText(i, this.FONT, "white", x, y);
        }
    }

    onClick(x, y) {
        if (this.selectedTile) {
            this.selectedTile = null;
        }
        const selectedRow = Math.floor((x - this.ROW_PAD) / this.TILE_SIZE_BORDER);
        const selectedCol = Math.floor((y - this.COL_PAD) / this.TILE_SIZE_BORDER);
        const key = selectedRow + ',' + selectedCol;
        if (!this.graph.has(key)) {
            return;
        }
        this.selectedTile = this.graph.get(key).getTile();
    }
}