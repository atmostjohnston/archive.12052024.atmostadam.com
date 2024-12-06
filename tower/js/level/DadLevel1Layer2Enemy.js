import { notNull } from "../../../corejs/util/ObjUtils.js";

export class DadLevel1Layer2Enemy {
    constructor(context) {
        this.context = notNull("context", context, this);

        this.queue = [];
    }

    init() {
        this.screen = notNull("screen", this.context.getScreen(), this);
        this.grid = notNull("grid", this.context.getFullScreenGrid());

        const spawnW = this.grid.getCellWidth() / 2;
        const left = this.grid.getCellWidth() * 1.5;
        const right = this.grid.getCellWidth() - left;
        const castleLeft = this.grid.getCellWidth() * 3.5;

        const spawnPathH = this.grid.getCellHeight() * 1.5;
        const topPathH = this.grid.getCellHeight() * 4.5;
        const middlePathH = this.grid.getCellHeight() * 7.5;
        const bottomPathH = this.grid.getCellHeight() * 11;

        /*
                const spawnW = TowerContext.tileWidth / 2;
                const left = TowerContext.tileWidth * 1.5;
                const right = TowerContext.mainWidth - left;
                const castleLeft = TowerContext.tileWidth * 3.5;
        
                const spawnPathH = TowerContext.tileHeight * 1.5;
                const topPathH = TowerContext.tileHeight * 4.5;
                const middlePathH = TowerContext.tileHeight * 7.5;
                const bottomPathH = TowerContext.tileHeight * 11;
                */

        for (let i = 0; i < 100; i++) {
            /*
            this.queue.push(new EnemyDecorator(new Rat1Right([
                new EnemyInstructionSet(spawnW, spawnPathH, right, spawnPathH, 160, "Rat1Right"),
                new EnemyInstructionSet(right, spawnPathH, right, topPathH, 40, "Rat1Down"),
                new EnemyInstructionSet(right, topPathH, left, topPathH, 160, "Rat1Left"),
                new EnemyInstructionSet(left, topPathH, left, middlePathH, 40, "Rat1Down"),
                new EnemyInstructionSet(left, middlePathH, right, middlePathH, 160, "Rat1Right"),
                new EnemyInstructionSet(right, middlePathH, right, bottomPathH, 40, "Rat1Down"),
                new EnemyInstructionSet(right, bottomPathH, castleLeft, bottomPathH, 160, "Rat1Left")
            ], (i + 1) * randomInt(1, 160)), this));
            */
        }

        this.init = true;
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
        if (this.queue.length === 0) {
            return;
        }
        this.queue.forEach(e => e.update(tick));
    }

    draw() {
        if (this.queue.length === 0) {
            return;
        }
        this.queue.forEach(e => e.draw());
    }

    buildRats() {

    }

    deleteEnemy(enemyDecorator) {
        this.queue = this.queue.filter(i => i !== enemyDecorator);
    }
}