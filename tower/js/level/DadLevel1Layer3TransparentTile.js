import { notNull } from "../../../corejs/util/ObjUtils.js";
import { TowerContext } from "../context/TowerContext.js";
import { TransparentDecorator } from "../decorator/TransparentDecorator.js";

export class DadLevel1Layer3TransparentTile {
    constructor(context) {
        this.context = notNull("context", context, this);
        this.screen = notNull("screen", context.getScreen(), this);

        const TL = "Castle1TopLeftTile";
        const TR = "Castle1TopRightTile";
        const BL = "Castle1BottomLeftTile";
        const BR = "Castle1BottomRightTile";
        const PT = "PalmTree1TopTile";
        const PB = "PalmTree1BottomTile";

        this.map = [
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , PT, , PT, , PT, , PT, , PT, , PT, , PT, , PT, ,],
            [, TL, TR, PB, , PB, , PB, , PB, , PB, , PB, , PB, , PB, ,],
            [, BL, BR, PT, , PT, , PT, , PT, , PT, , PT, , PT, , PT, , PT],
            [, , , PB, , PB, , PB, , PB, , PB, , PB, , PB, , PB, , PB]
        ];
    }

    init() {
        this.screen = notNull("screen", this.context.getScreen(), this);
        this.init = true;
    }

    update(tick) {
        if (!this.init) {
            this.init();
        }
        this.tick = tick;
    }

    draw() {
        for (let r = 0; r < TowerContext.rows; r++) {
            for (let c = 0; c < TowerContext.columns; c++) {
                let v = TowerContext.getTransparent(this.map[r][c]);
                if (v) {
                    const vt = new TransparentDecorator(v);
                    vt.update(this.tick, TowerContext.tileWidth * c, TowerContext.tileHeight * r);
                    vt.draw();
                }
            }
        }
    }
}
