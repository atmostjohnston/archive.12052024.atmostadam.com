import { GameContext } from "../../../corejs/context/GameContext.js";
import { CanvasDecorator } from "../../../corejs/canvas/CanvasDecorator.js";

export class DadsMapEditor {
    constructor() {
        new GameContext();

        this.tileWidth = 64;
        this.tileHeight = 64;

        this.toolX = CanvasDecorator.getWidth() * (2 / 3);
        this.toolY = 0;
        this.toolWidth = CanvasDecorator.getWidth() * (1 / 3);
        this.toolHeight = CanvasDecorator.getHeight();

        this.tiles = this.context.getTileMap();
    }

    update(tick) {

    }

    draw() {
        CanvasDecorator.drawFilledRectangle("white",
            this.toolX, this.toolY, this.toolWidth, this.toolHeight);

    }

    onClick(x, y) {

    }
}