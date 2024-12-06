import { boot } from "../../../corejs/boot/boot.js";
import { GameContext } from "../../../corejs/context/GameContext.js";
import { GridBuilder } from "../../../corejs/grid/builder/GridBuilder.js";
import { GridLayerBuilder } from "../../../corejs/grid/builder/GridLayerBuilder.js";
import { GridRowBuilder } from "../../../corejs/grid/builder/GridRowBuilder.js";
import { GridBackground } from "../../../corejs/grid/model/GridBackground.js";

window.addEventListener("load", function () {
    var context = new GameContext();
    context.setGameLoop(new GridBuilderTest(context));
    boot(context);
});

export class GridBuilderTest {
    constructor(context) {
        this.context = context;
    }

    update(tick) {
        this.tick = tick;
        if (!this.grid) {
            this.grid = new GridBuilder(this.context, 4, 6)
                .withBackgroundColor("limegreen")
                .addLayer(
                    new GridLayerBuilder(this.context, 4)
                        .addRow(
                            new GridRowBuilder(this.context, 6)
                                .add(new GridBackground(this.grid, "aqua", 0, 0))
                                .add(new GridBackground(this.grid, "bisque", 0, 1))
                                .add(new GridBackground(this.grid, "blue", 0, 2))
                                .add(new GridBackground(this.grid, "bisque", 0, 3))
                                .add(new GridBackground(this.grid, "orangered", 0, 4))
                                .add(new GridBackground(this.grid, "plum", 0, 5))
                                .build()
                        )
                        .addRow(
                            new GridRowBuilder(this.context, 6)
                                .add(new GridBackground(this.grid, "chartreuse", 1, 0))
                                .add(new GridBackground(this.grid, "chocolate", 1, 1))
                                .add(new GridBackground(this.grid, "deeppink", 1, 2))
                                .add(new GridBackground(this.grid, "firebrick", 1, 3))
                                .add(new GridBackground(this.grid, "aqua", 1, 4))
                                .add(new GridBackground(this.grid, "bisque", 1, 5))
                                .build()
                        )
                        .addRow(
                            new GridRowBuilder(this.context, 6)
                                .add(new GridBackground(this.grid, "silver", 2, 0))
                                .add(new GridBackground(this.grid, "lawngreen", 2, 1))
                                .add(new GridBackground(this.grid, "maroon", 2, 2))
                                .add(new GridBackground(this.grid, "purple", 2, 3))
                                .add(new GridBackground(this.grid, "chocolate", 2, 4))
                                .add(new GridBackground(this.grid, "deeppink", 2, 5))
                                .build()
                        )
                        .addRow(
                            new GridRowBuilder(this.context, 6)
                                .add(new GridBackground(this.grid, "orangered", 3, 0))
                                .add(new GridBackground(this.grid, "plum", 3, 1))
                                .add(new GridBackground(this.grid, "tomato", 3, 2))
                                .add(new GridBackground(this.grid, "yellow", 3, 3))
                                .add(new GridBackground(this.grid, "lawngreen", 3, 4))
                                .add(new GridBackground(this.grid, "maroon", 3, 5))
                                .build()
                        ).build()
                ).build();
        }
        this.grid.update(this.tick);
    }

    createBackgroundColorLayer(rows, columns) {
        let builder = new GridLayerBuilder();
        let grid = [];
        for (let row = 0; row < rows; row++) {
            let newRow = [];
            for (let column = 0; column < columns; column++) {
                newRow.push(1);
            }
            grid.push(newRow);
        }
        return grid;
    }

    draw() {
        this.grid.draw();
    }
}