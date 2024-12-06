import { Gameable } from "../../boot/base/Gameable.js";
import { boot } from "../../corejs/boot/boot.js";
import { GameContext } from "../../corejs/context/GameContext.js";

window.addEventListener("load", function () {
    var context = new GameContext();
    context.setGameLoop(new GridGameLoopTest(context));
    boot(context);
});

export class GridGameLoopTest extends Gameable {
    constructor(context) {
        super(context);
    }

    init() {

        this.loaded = true;
    }

    update(tick) {
        super.update(tick);
        this.colorGrid.update(tick);
    }

    draw() {
        this.colorGrid.draw();
    }

    createOneMatrix(rows, columns) {
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

    onClick(x, y) {

    }
}