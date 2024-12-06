import { GameContext } from "./../../boot/context/GameContext.js";
import { boot } from "./../../boot/boot.js";
import { HelpfulGameable } from "./../../boot/base/HelpfulGameable.js";
import { Grid } from "../../boot/canvas/model/grid/Grid.js";

window.addEventListener("load", function () {
    try {
        var context = new GameContext();
        context.setGameLoop(new DadsGameLoop(context));
    } catch (e) {
        console.error("[FATAL] GAME LOOP HAS CRASHED ON [LOAD]!", e, this);
        throw e;
    }
    try {
        boot(context);
    } catch (e) {
        console.error("[FATAL] GAME LOOP HAS CRASHED ON [BOOT]!", e, this);
        throw e;
    }
});

export class DadsGameLoop extends HelpfulGameable {
    constructor(context) {
        super(context);
        this.OFFSET_PERCENT_X = 2;
        this.OFFSET_PERCENT_Y = 2;
        this.PERCENT_W_COLUMNS = this.splitToEqualPartsArray(96, 2, 0);
        this.PERCENT_H_ROWS = this.splitToEqualPartsArray(96, 2, 0);
    }

    init() {
        this.grid = new Grid(
            this.context,
            super.getWidthPercent(this.OFFSET_PERCENT_X),
            super.getHeightPercent(this.OFFSET_PERCENT_Y),
            this.PERCENT_W_COLUMNS,
            this.PERCENT_H_ROWS)
            .addGridBackgroundColor(0, 0, "Red")
            .addGridText(0, 0, ["BREAKOUT"], 6, "Helvetica", "White", 2, 26, 0)
            .addGridBackgroundColor(0, 1, "Green")
            .addGridBackgroundColor(1, 0, "Blue")
            .addGridBackgroundColor(1, 1, "Yellow")
            .addBorderForAll(2, "white");
        this.loaded = true;
        this.context.registerResizeConsumer(this);
    }

    update(tick) {
        super.update(tick);
        this.grid.update(tick);
    }

    draw() {
        this.grid.draw();
    }

    onClick(x, y) {
        window.location = "./breakout";
    }

    /*
    update(tick) {
        this.tick = tick;
        if (!this.grid.loaded) {
            this.grid.load(2, 4);
            this.grid.setLayer14BorderForAll(5, "white");
            this.grid.setLayer5MultiLineText([

                [
                    new GridMultiLineText(this.context, 0, 0, ["Dad's Pong", "Game"]),
                    new GridMultiLineText(this.context, 0, 1, ["Dad's Tower", "Defense Game"]),
                    new GridMultiLineText(this.context, 0, 2, ["MAP", "EDITOR"]),
                    new GridMultiLineText(this.context, 0, 3, ["TILE", "LIST"])
                ],
                [
                    new GridMultiLineText(this.context, 1, 0, ["TILE", "CREATOR"]),
                    new GridMultiLineText(this.context, 1, 1, ["DAD'S", "SOUND", "BOARD"]),
                    new GridMultiLineText(this.context, 1, 2, ["ARNOLD'S", "SOUND", "BOARD"])
                ]
            ]);
        }
        this.grid.update(tick, 0.03, 0.2);
    }

    draw() {
        this.grid.draw();
    }

    onClick(x, y) {
        let row = this.grid.getRowIndex(y);
        let column = this.grid.getColumnIndex(x);

        if (row == 0) {
            if (column == 0) {
                window.location = "./pong";
            }
            if (column == 1) {
                window.location = "./tower";
            }
            if (column == 2) {
                window.location = "./mapeditor";
            }
            if (column == 3) {
                window.location = "./tilelist";
            }
        }
        if (row == 1) {
            if (column == 0) {
                window.location = "./tilecreator";
            }
            if (column == 1) {
                window.location = "./soundboard";
            }
            if (column == 2) {
                window.location = "./arnold";
            }
        }
    }
    */
}