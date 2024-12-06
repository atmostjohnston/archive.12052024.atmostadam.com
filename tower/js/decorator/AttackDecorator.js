import { notNull, isNumber } from "../../../corejs/util/ObjUtils.js";
import { ProjectileDecorator } from "./ProjectileDecorator.js";
import { ExplosionDecorator } from "./ExplosionDecorator.js";

export class AttackDecorator {
    constructor(context, attack, towerDecorator, projectileDecorator, x, y) {
        this.context = notNull("context", context, this);
        Object.assign(this, { attack, towerDecorator, projectileDecorator, x, y });
        this.resetSpeedCounter();
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
        this.projectileDecorator.update(this.tick);
        this.speedCounter--;
    }

    draw() {
        this.projectileDecorator.draw();
        if (this.speedCounter == 0) {
            this.projectileDecorator.enemyDecorator.onHit(30);
            this.towerDecorator.deleteAttack(this);
        }
    }

    getDistance() {
        return Math.abs(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    }

    deepCopyIfReady(x, y) {
        this.x = x;
        this.y = y;

        if (this.speedCounter == 0) {
            this.resetSpeedCounter();

            let copyExplosionDecorator = new ExplosionDecorator(
                this.projectileDecorator.getExplosionDecorator().getExplosion(),
                this.x,
                this.y);

            let copyProjectileDecorator = new ProjectileDecorator(
                this.projectileDecorator.getProjectile(),
                copyExplosionDecorator,
                this.x,
                this.y
            );

            if (!copyProjectileDecorator.enemyDecorator) {
                return;
            }

            copyExplosionDecorator.setX(copyProjectileDecorator.enemyDecorator.getX())
            copyExplosionDecorator.setY(copyProjectileDecorator.enemyDecorator.getY());

            let copyAttackDecorator = new AttackDecorator(
                this.attack,
                this.towerDecorator,
                copyProjectileDecorator,
                this.x,
                this.y
            );

            return copyAttackDecorator;
        }
        this.speedCounter--;
    }

    resetSpeedCounter() {
        this.speedCounter = isNumber("speed", this.attack.speed, this);
    }

    deleteAttack(attackDecorator) {
        this.attackQueue = this.attackQueue.filter(i => i !== attackDecorator);
    }
}