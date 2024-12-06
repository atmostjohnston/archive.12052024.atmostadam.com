import { notNull, notNulls, isNumber, isNumbers } from "../../../corejs/util/ObjUtils.js";
import { TowerContext } from "../context/TowerContext.js";

export class EnemyDecorator {
    constructor(context, enemy, enemyLayer) {
        this.context = notNull("context", context, this);
        this.screen = notNull("screen", context.getScreen(), this);

        this.setEnemy(enemy)
            .setEnemyLayer(enemyLayer)
            .setX(enemy.x)
            .setY(enemy.y)
            .setInstructions(enemy.instructions)
            .setInstruction(this.instructions.shift())
            .setStartAtTick(enemy.startAtTick)
            .setHp(enemy.hp)
            .setMaxHp(enemy.hp);

        this.distance = this.getDistance();
        this.alive = true;
    }

    init() {
        this.screen = notNull("screen", this.context.getScreen(), this);
        this.init = true;
    }

    update(tick) {
        if (!this.alive) {
            return;
        }
        this.tick = isNumber("this.tick", tick, this);
        if (!this.init) {
            this.init();
        }
        if (this.tick < this.startAtTick || (!this.instruction && this.instructions.length === 0)) {
            TowerContext.removeEnemyOnScreen(this);
            return;
        }
        TowerContext.addEnemyOnScreen(this);
        let hasMore = this.instruction.move(this.x, this.y);
        this.x = this.instruction.getX();
        this.y = this.instruction.getY();
        if (!hasMore) {
            this.instruction = this.instructions.shift();
        }
    }

    draw() {
        if (!this.alive) {
            return;
        }

        if (this.tick < this.startAtTick || (!this.instruction && this.instructions.length === 0)) {
            return;
        }

        this.screen.drawImage(
            this.instruction.getImageId(),
            this.getEnemy().ix,
            this.getEnemy().iy,
            this.getEnemy().w,
            this.getEnemy().h,
            this.getX(),
            this.getY(),
            TowerContext.tileWidth,
            TowerContext.tileHeight
        );

        let hpPercent = this.getHp() / this.getMaxHp();
        let barPercent = 60 * hpPercent;
        if (hpPercent > 0.6) {
            var color = "green";
        } else if (hpPercent > 0.3) {
            var color = "yellow";
        } else {
            var color = "red";
        }

        this.screen.drawFilledRectangle(
            color,
            this.getX() - 5,
            this.getY() + 15,
            barPercent,
            8
        );
    }

    onHit(damage) {
        this.hp -= damage;
        if (this.hp < 1) {
            this.getEnemyLayer().deleteEnemy(this);
        }
        this.damageText = -damage;
    }

    onClick() { }

    getDistance() {
        return this.getX() + this.getY();
    }

    setEnemy(enemy) {
        this.enemy = notNull("Enemy", enemy, this);
        notNulls(["key", "imageId", "instructions", "startAtTick"], enemy);
        isNumbers(["ix", "iy", "w", "h", "x", "y", "hp"], enemy);
        return this;
    }

    setEnemyLayer(enemyLayer) {
        this.enemyLayer = notNull("EnemyLayer", enemyLayer, this);
        return this;
    }

    setX(x) {
        this.x = isNumber("x", x, this);
        return this;
    }

    setY(y) {
        this.y = isNumber("y", y, this);
        return this;
    }

    setInstructions(instructions) {
        this.instructions = notNull("instructions", instructions, this);
        return this;
    }

    setInstruction(instruction) {
        this.instruction = notNull("instruction", instruction, this);
        return this;
    }

    setStartAtTick(startAtTick) {
        this.startAtTick = isNumber("startAtTick", startAtTick, this);
        return this;
    }

    setHp(hp) {
        this.hp = isNumber("hp", hp, this);
        return this;
    }

    setMaxHp(maxHp) {
        this.maxHp = isNumber("maxHp", maxHp, this);
        return this;
    }

    getEnemy() {
        return this.enemy;
    }

    getEnemyLayer() {
        return this.enemyLayer;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getInstructions() {
        return this.instructions;
    }

    getNextInstruction() {
        return this.instruction;
    }

    getStartAtTick() {
        return this.startAtTick;
    }

    getHp() {
        return this.hp;
    }

    getMaxHp() {
        return this.maxHp;
    }
}