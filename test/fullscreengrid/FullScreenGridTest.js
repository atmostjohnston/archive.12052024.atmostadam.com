import { boot } from "../../corejs/boot/boot.js";
import { GameContext } from "../../corejs/context/GameContext.js";
import { GridColor } from "../../corejs/grid/model/GridColor.js";
import { GridBorder } from "../../corejs/grid/model/GridBorder.js";
import { GridSingleLineText } from "../../corejs/grid/model/GridSingleLineText.js";

window.addEventListener("load", function () {
    var context = new GameContext();
    context.setGameLoop(new FullScreenGridTest(context));
    boot(context);
});

export class FullScreenGridTest {
    constructor(context) {
        this.context = context;
        this.grid = this.context.getFullScreenGrid();
    }

    update(tick) {
        this.tick = tick;
        if (!this.grid.loaded) {
            this.grid.load(4, 6);
            this.grid.setLayer2Color(
                [
                    [
                        new GridColor(this.context, 0, 0, "aqua"),
                        new GridColor(this.context, 0, 1, "bisque"),
                        new GridColor(this.context, 0, 2, "blue"),
                        new GridColor(this.context, 0, 3, "bisque"),
                        new GridColor(this.context, 0, 4, "orangered"),
                        //new GridColor(this.context, 0, 5, "plum")
                    ],
                    [
                        new GridColor(this.context, 1, 0, "chartreuse"),
                        new GridColor(this.context, 1, 1, "chocolate"),
                        new GridColor(this.context, 1, 2, "deeppink"),
                        new GridColor(this.context, 1, 3, "firebrick"),
                        new GridColor(this.context, 1, 4, "aqua"),
                        new GridColor(this.context, 1, 5, "bisque")
                    ],
                    [
                        new GridColor(this.context, 2, 0, "silver"),
                        new GridColor(this.context, 2, 1, "lawngreen"),
                        new GridColor(this.context, 2, 2, "maroon"),
                        new GridColor(this.context, 2, 3, "purple"),
                        new GridColor(this.context, 2, 4, "chocolate"),
                        new GridColor(this.context, 2, 5, "deeppink")
                    ],
                    [
                        new GridColor(this.context, 3, 0, "orangered"),
                        new GridColor(this.context, 3, 1, "plum"),
                        new GridColor(this.context, 3, 2, "tomato"),
                        new GridColor(this.context, 3, 3, "yellow"),
                        new GridColor(this.context, 3, 4, "lawngreen"),
                        new GridColor(this.context, 3, 5, "maroon")
                    ]
                ]);
            this.grid.setLayer6SingleLineText(
                [
                    [
                        new GridSingleLineText(this.context, 0, 0, "aqua")
                    ],
                    [
                        new GridSingleLineText(this.context, 1, 0, "aqua")
                    ],
                    [
                        new GridSingleLineText(this.context, 2, 0, "aqua")
                    ],
                    [
                        new GridSingleLineText(this.context, 3, 0, "aqua")
                    ]
                ]
            );
            this.grid.setLayer14Border(
                [
                    [
                        new GridBorder(this.context, 0, 0, 3, "aqua")
                    ],
                    [
                        new GridBorder(this.context, 1, 0, 3, "white")
                    ],
                    [
                        new GridBorder(this.context, 2, 0, 3, "orange")
                    ],
                    [
                        new GridBorder(this.context, 3, 0, 3, "blue")
                    ]
                ]
            );

        }
        this.grid.update(this.tick);
    }

    draw() {
        this.grid.draw();
    }


    onClick(x, y) {

    }
}