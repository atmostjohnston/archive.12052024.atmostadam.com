import { notNull, notNulls, isNumbers, isNumber } from "../../../corejs/util/ObjUtils.js";
import { TowerContext } from "../context/TowerContext.js";
import { AttackDecorator } from "./AttackDecorator.js";
import { ExplosionDecorator } from "./ExplosionDecorator.js";
import { ProjectileDecorator } from "./ProjectileDecorator.js";

export class TowerDecorator {
    constructor(context, tower, attack, projectile, explosion) {
        this.context = notNull("context", context, this);

        this.setTower(tower)
            .setAttack(attack)
            .setProjectile(projectile)
            .setExplosion(explosion);
        this.attackQueue = [];
        this.purchased = false;
    }

    init() {
        this.screen = notNull("screen", this.context.getScreen(), this);
        this.init = true;
    }

    update(tick, x, y, sidebar) {
        this.setTick(tick)
            .setX(x)
            .setY(y);

        if (!this.init) {
            this.init();
        }

        if (this.tick % 30 == 0 && !sidebar) {
            let explosionDecorator = new ExplosionDecorator(this.getExplosion(), this.getX(), this.getY());
            let projectileDecorator = new ProjectileDecorator(this.getProjectile(), explosionDecorator, this.getX(), this.getY());

            if (!projectileDecorator.enemyDecorator) {
                console.log("No enemies on screen. Wait until game starts and enemies have spawned.", this);
                return;
            }
            explosionDecorator.setX(projectileDecorator.enemyDecorator.getX());
            explosionDecorator.setY(projectileDecorator.enemyDecorator.getY());

            let attackDecorator = new AttackDecorator(this.getAttack(), this, projectileDecorator, this.getX(), this.getY());
            this.attackQueue.push(attackDecorator);
        }

        this.attackQueue.forEach(e => e.update(this.getTick()));
    }

    draw() {
        this.screen.drawImage(
            this.getTower().imageId,
            this.getTower().ix,
            this.getTower().iy,
            this.getTower().w,
            this.getTower().h,
            this.getX(),
            this.getY(),
            TowerContext.tileWidth,
            TowerContext.tileHeight * 2
        );

        this.attackQueue.forEach(e => e.draw());
    }

    deleteAttack(attackDecorator) {
        this.attackQueue = this.attackQueue.filter(i => i !== attackDecorator);
    }

    setTick(tick) {
        this.tick = isNumber("Tick", tick, this);
        return this;
    }

    setTower(tower) {
        this.tower = notNull("Tower", tower, this);
        notNulls(["key", "imageId"], tower);
        isNumbers(["ix", "iy", "w", "h"], tower);
        return this;
    }

    setAttack(attack) {
        this.attack = notNull("Attack", attack, this);
        return this;
    }

    setProjectile(projectile) {
        this.projectile = notNull("Projectile", projectile, this);
        return this;
    }

    setExplosion(explosion) {
        this.explosion = notNull("Explosion", explosion, this);
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

    getTick() {
        return this.tick;
    }

    getTower() {
        return this.tower;
    }

    getAttack() {
        return this.attack;
    }

    getProjectile() {
        return this.projectile;
    }

    getExplosion() {
        return this.explosion;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}