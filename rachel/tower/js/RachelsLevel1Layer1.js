import { TowerContext } from "../../tower/context/TowerContext.js";
import { SolidDecorator } from "../../tower/decorator/SolidDecorator.js";


export class RachelsLevel1Layer1 {
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
        const WP = "Whirlpool";

        this.map = [
            [LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD],
            [MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, LD],
            [MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, LD],
            [LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, MI, MI, LD],
            [LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, MI, MI, LD],
            [MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, WP, MI, MI, LD],
            [MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, LD],
            [MI, MI, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD],
            [MI, MI, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD, LD],
            [MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI],
            [MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI],
            [MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI, MI]
        ];

        console.log(this);
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

    onClick() {
    }
}