import { TowerContext } from "../../tower/context/TowerContext.js";
import { SolidDecorator } from "../../tower/decorator/SolidDecorator.js";

export class NathansLevel1Layer1 {
    constructor() {
        const MI = "Water1MiddleTile";
        const TL = "Water1TopLeftTile";
        const TP = "Water1TopTile";
        const TR = "Water1TopRightTile";
        const RT = "Water1RightTile";
        const BL = "Water1BottomLeftTile";
        const LT = "Water1LeftTile";
        const BR = "Water1BottomRightTile";
        const BT = "Water1BottomTile";
        const LD = "Water1MiddleLandTile";
        const PT = "Water1MiddlePathTile";

        this.map = [
            [PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT],
            [PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT],
            [LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, PT, PT],
            [LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, PT, PT],
            [PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT],
            [PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT],
            [PT, PT, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD],
            [PT, PT, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD],
            [PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT],
            [LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, PT, PT],
            [PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT],
            [PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT]
        ];
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        for (let r = 0; r < TowerContext.rows; r++) {
            for (let c = 0; c < TowerContext.columns; c++) {
                let v = TowerContext.getSolid(this.map[r][c]);
                if (v) {
                    const vt = new SolidDecorator(v);
                    vt.update(this.tick, TowerContext.tileWidth * c, TowerContext.tileHeight * r);
                    vt.draw();
                }
            }
        }
    }
}