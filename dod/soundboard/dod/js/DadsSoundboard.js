import { boot } from "../../../../corejs/boot/boot.js";
import { Grid } from "../../../../corejs/grid/Grid.js";
import { SingleLineText } from "../../../../corejs/canvas/text/SingleLineText.js";
import { GameContext } from "../../../../corejs/context/GameContext.js";

window.addEventListener("load", function () {
    var context = new GameContext();
    context.setGameLoop(new DadsSoundboard(context));
    boot(context);
});

export class DadsSoundboard {
    constructor(context) {
        let rows = 2;
        let columns = 4;
        let tileWidth = 0; // Let grid make this full screen.
        let tileHeight = 0; // Let grid make this full screen.
        let borderColor = "white";
        let borderSize = 3;


        var imageLayerTiles = Grid.createEmptyTiles();

        var textLayerTiles = Grid.createEmptyTiles();
        textLayerTiles[0][0] = new SingleLineText(context, "test 1");
        textLayerTiles[0][1] = new SingleLineText(context, "test 2");
        textLayerTiles[0][2] = new SingleLineText(context, "test 3");

        let tiles = [imageLayerTiles, textLayerTiles]

        this.grid = new (
            context,
            tiles,
            rows,
            columns,
            tileWidth,
            tileHeight,
            borderColor,
            borderSize
        );
    }

    update(tick) {
        if (this.game) {
            this.game.update(tick);
        }
    }

    draw() {
        if (this.game) {
            this.game.draw();
            return;
        }

    }
}