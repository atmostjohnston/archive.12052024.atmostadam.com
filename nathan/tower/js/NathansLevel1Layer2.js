import { TowerContext } from "../../tower/context/TowerContext.js";
import { TransparentDecorator } from "../../tower/decorator/TransparentDecorator.js";

export class NathansLevel1Layer2 {
    constructor() {
        const TL = "Castle1TopLeftTile";
        const TR = "Castle1TopRightTile";
        const BL = "Castle1BottomLeftTile";
        const BR = "Castle1BottomRightTile";
        const PT = "PalmTree1TopTile";
        const PB = "PalmTree1BottomTile";
        const PD = "Pyrimid1";
        const IO = "Igloo1";
        const TT = "Tent1";
        const BB = "BabyTower1";

        this.map = [
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, IO, PD, TT, IO, TT, PD, BB, PD, BB, BB, BB, IO, PD, BB, BB, IO, PD, ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, TL, TR, , , , , , , , , , , , , , , , ,],
            [, BL, BR, , , , , , , , , , , , , , , , ,],
        ];
    }

    update(tick) {
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
