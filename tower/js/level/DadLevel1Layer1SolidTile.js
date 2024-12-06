import { notNull } from "../../../corejs/util/ObjUtils.js";
import { TowerContext } from "../context/TowerContext.js";
import { SolidDecorator } from "../decorator/SolidDecorator.js";

export class DadLevel1Layer1SolidTile {
    constructor(context) {
        this.context = notNull("context", context, this);

        /*
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
        const C1 = "Toprightcorner";
        const C2 = "Topcornerleft";
        const C3 = "Bottomrightcorner";
        const C4 = "Bottomleftcorner";

        this.map = [
            [TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TR],
            [BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, C1, MI, RT],
            [LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LT, MI, RT],
            [TL, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, C3, MI, RT],
            [LT, MI, C2, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BR],
            [LT, MI, RT, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD],
            [LT, MI, C4, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TR],
            [BL, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, C1, MI, RT],
            [LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LT, MI, RT],
            [TL, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, C3, MI, RT],
            [LT, MI, MI, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, MI, RT],
            [BL, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BR]
        ];
        */

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
        const C1 = "Toprightcorner";
        const C2 = "Topcornerleft";
        const C3 = "Bottomrightcorner";
        const C4 = "Bottomleftcorner";

        this.map = [
            [TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TR],
            [BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, C1, MI, RT],
            [LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LT, MI, RT],
            [TL, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, C3, MI, RT],
            [LT, MI, C2, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BR],
            [LT, MI, RT, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD],
            [LT, MI, C4, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TR],
            [BL, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, C1, MI, RT],
            [LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LT, MI, RT],
            [TL, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, TP, C3, MI, RT],
            [LT, MI, MI, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, PT, MI, RT],
            [BL, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BT, BR]
        ];
    }

    init() {
        this.screen = notNull("screen", this.context.getScreen(), this);
        this.init = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.init) {
            this.init();
        }
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