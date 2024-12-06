import { TowerContext } from "../../tower/context/TowerContext.js";
import { SolidDecorator } from "../../tower/decorator/SolidDecorator.js";

export class MomsLevel1Layer1 {
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
        const SV = "SnowyVillage4";
        const C1 = "Toprightcorner";
        const C2 = "Topcornerleft";
        const C3 = "Bottomleftcorner";
        const C4 = "Bottomrightcorner";

        this.map = [
            [MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI],
            [MI, MI, MI, C2, BT, BT, BT, BT, C1, MI, MI, C2, BT, BT, BT, BT, C1, MI, MI, C2],
            [MI, MI, MI, RT, LD, LD, LD, LD, LT, MI, MI, RT, LD, LD, LD, LD, LT, MI, MI, RT],
            [C1, MI, MI, C3, TP, TP, TP, TP, C4, MI, MI, C3, TP, TP, TP, TP, C4, MI, MI, RT],
            [LT, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, RT],
            [LT, MI, MI, MI, MI, MI, MI, C2, BT, BT, BT, BT, C1, MI, MI, MI, MI, MI, MI, RT],
            [BL, BT, BT, BT, C1, MI, MI, RT, LD, LD, LD, LD, LT, MI, MI, C2, BT, BT, BT, BR],
            [LD, LD, LD, LD, LT, MI, MI, C3, TP, TP, TP, TP, C4, MI, MI, RT, LD, LD, LD, LD],
            [LD, LD, LD, LD, BL, BT, C1, MI, MI, MI, MI, MI, MI, MI, MI, RT, LD, LD, LD, LD],
            [TL, TP, TP, TP, TP, TP, C4, MI, MI, MI, MI, C2, BT, BT, BT, BR, LD, LD, LD, LD],
            [LT, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, RT, LD, LD, LD, LD, LD, LD, LD, LD],
            [LT, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, RT, LD, LD, LD, LD, LD, LD, LD, LD]
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