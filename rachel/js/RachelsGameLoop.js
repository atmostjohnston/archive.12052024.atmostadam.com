import { GameContext } from "./../../boot/context/GameContext.js";
import { boot } from "./../../boot/boot.js";
import { HelpfulGameable } from "./../../boot/base/HelpfulGameable.js";
import { Grid } from "../../boot/canvas/model/grid/Grid.js";

/**

# BEFORE CODING
-Open Windows Powershell and type the following
    git fetch
    git pull origin branch_rachel
-Close Windows Powershell
-Open Visual Studio Code
-Click Go Live in the bottom right

# AFTER CODING
-Open Windows Powershell and type the following
    git add *
    git commit -a -m "feature"
    git push origin branch_rachel
-Close Windows Powershell

 */

window.addEventListener("load", function () {
    try {
        var context = new GameContext();
        context.setGameLoop(new RachelsGameLoop(context));
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

export class RachelsGameLoop extends HelpfulGameable {
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
}