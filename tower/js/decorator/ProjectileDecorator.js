import { notNull, notNulls, isNumbers, isNumber } from "../../../corejs/util/ObjUtils.js";
import { TowerContext } from "../context/TowerContext.js";

export class ProjectileDecorator {
    constructor(context, projectile, explosionDecorator, x, y) {
        this.context = notNull("context", context, this);
        this.screen = notNull("screen", context.getScreen(), this);

        this.setProjectile(projectile)
            .setExplosionDecorator(explosionDecorator)
            .setX(x)
            .setY(y)
            .setProjectileTicksLeft(projectile.speed);

        this.enemyDecorator = this.getClosestEnemy();

        this.halfTileWidth = TowerContext.tileWidth / 2;
        this.halfTileHeight = TowerContext.tileHeight / 2;
    }

    init() {
        this.screen = notNull("screen", this.context.getScreen(), this);
        this.init = true;
    }

    update(tick) {
        this.setTick(tick);
        if (!this.enemyDecorator) {
            console.log("No enemies on screen. Wait until game starts and enemies have spawned.", this);
            return;
        }

        if (!this.init) {
            this.init();
        }

        let enemyX = isNumber("Enemy X", this.enemyDecorator.getX(), this);
        let enemyY = isNumber("Enemy Y", this.enemyDecorator.getY(), this);

        if (this.projectileTicksLeft > 0) {
            let x = isNumber("x", this.getX(), this);
            let y = isNumber("y", this.getY(), this);
            let ticksLeft = this.getProjectileTicksLeft();
            let fullDistanceX = enemyX + this.halfTileWidth - x;
            let tickDistanceX = (fullDistanceX / ticksLeft) + x;
            let fullDistanceY = enemyY + this.halfTileHeight - y;
            let tickDistanceY = (fullDistanceY / ticksLeft) + y;

            this.setX(tickDistanceX);
            this.setY(tickDistanceY);
        }
        this.getExplosionDecorator().update(tick, enemyX, enemyY);
    }

    draw() {
        if (!this.enemyDecorator) {
            console.log("No enemies on screen. Wait until game starts and enemies have spawned.", this);
            return;
        }
        if (this.enemyDecorator.damageText) {
            this.screen.drawText(
                this.enemyDecorator.damageText,
                "10pt Helvetica",
                "red",
                this.enemyDecorator.getX() + this.halfTileWidth,
                this.enemyDecorator.getY() + this.halfTileHeight);
        }

        if (this.projectileTicksLeft > 0) {
            this.screen.drawImage(
                this.projectile.imageId,
                this.projectile.ix,
                this.projectile.iy,
                this.projectile.w,
                this.projectile.h,
                this.getX(),
                this.getY(),
                this.projectile.sw,
                this.projectile.sh
            );
            this.projectileTicksLeft--;
        } else {
            this.explosionDecorator.draw();
        }
    }

    getClosestEnemy() {
        if (TowerContext.getEnemiesOnScreen().length === 0) {
            console.log("No enemies on screen. Wait until game starts and enemies have spawned.", this);
            return;
        }
        let closestEnemy = TowerContext.getEnemiesOnScreen()[0];
        let closestDistance = TowerContext.getEnemiesOnScreen()[0].getDistance();
        TowerContext.getEnemiesOnScreen().forEach(e => {
            const deltaOld = Math.abs(closestDistance - this.getDistance());
            const deltaNew = Math.abs(e.getDistance() - this.getDistance());
            if (deltaNew < deltaOld) {
                closestEnemy = e;
                closestDistance = e.getDistance();
            }
        });
        return closestEnemy;
    }

    getDistance() {
        return Math.abs(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    }

    setProjectile(projectile) {
        this.projectile = notNull("ProjectileDecorator", projectile, this);
        notNulls(["key", "imageId"], projectile);
        isNumbers(["ix", "iy", "w", "h", "sw", "sh", "speed"], projectile);
        return this;
    }

    setExplosionDecorator(explosionDecorator) {
        this.explosionDecorator = notNull("Explosion Decorator", explosionDecorator, this);
        this.explosionTicksLeft = isNumber("Explosion Speed", this.explosionDecorator.explosion.speed, this);
        return this;
    }

    setEnemyDecorator(enemyDecorator) {
        this.enemyDecorator = enemyDecorator;
        return this;
    }

    setAttackDecorator(attackDecorator) {
        this.attackDecorator = notNull("Attack Decorator", attackDecorator, this);
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

    setTick(tick) {
        this.tick = isNumber("tick", tick, this);
        return this;
    }

    getProjectile() {
        return this.projectile;
    }

    getExplosionDecorator() {
        return this.explosionDecorator;
    }

    getAttackDecorator() {
        return this.attackDecorator;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getTick() {
        return this.tick;
    }

    setProjectileTicksLeft(projectileTicksLeft) {
        this.projectileTicksLeft = isNumber("projectileTicksLeft", projectileTicksLeft, this);
        return this;
    }

    getProjectileTicksLeft() {
        return this.projectileTicksLeft;
    }
}