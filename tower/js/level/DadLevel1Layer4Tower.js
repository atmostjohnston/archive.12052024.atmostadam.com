import { TowerContext } from "../context/TowerContext.js";
import { isNumber, notNull } from "../../../corejs/util/ObjUtils.js"

export class DadLevel1Layer4Tower {
    constructor(context) {
        this.context = notNull("context", context, this);
        this.screen = notNull("screen", context.getScreen(), this);

        this.available = [
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,]
        ];

        //this.map = this.emptyMap();

        this.map = [
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,]
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
        this.setTick(tick);
    }

    draw() {
        for (let r = 0; r < TowerContext.rows; r++) {
            for (let c = 0; c < TowerContext.columns; c++) {
                let tower = this.map[r][c];
                if (tower) {
                    tower.update(this.getTick(), TowerContext.tileWidth * c, TowerContext.tileHeight * r);
                    tower.draw();
                }
            }
        }
    }

    addTower(tower, x, y) {
        let r = Math.floor(x / TowerContext.tileWidth);
        let c = Math.floor(y / TowerContext.tileHeight);
        /*
        let tower = TowerContext.getTower(key.key);
        if (!tower) {
            throw new GameNullPointerException("Key [" + key + "] not found in Tower Map!");
        }
        this.map[c][r] = new TowerDecorator(tower[0], tower[1], tower[2], tower[3]);
        */
        console.log("New Tower [" + tower + "] has been puchased!", this);
        this.map[c][r] = tower;
    }

    emptyMap() {
        let emptyMap = [];
        for (let r = 0; r < TowerContext.rows; r++) {
            let newRow = [];
            for (let c = 0; c < TowerContext.columns; c++) {
                newRow.push(null);
            }
            emptyMap.push(newRow);
        }
        return emptyMap;
    }

    setTick(tick) {
        this.tick = isNumber("tick", tick, this);
    }

    getTick() {
        return this.tick;
    }
}