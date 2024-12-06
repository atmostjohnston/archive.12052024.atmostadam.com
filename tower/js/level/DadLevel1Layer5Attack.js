import { TowerContext } from "../context/TowerContext.js";
import { AttackDecorator } from "../decorator/AttackDecorator.js";
import { FireProjectile1 } from "../model/projectile/FireProjectile1.js";
import { IceProjectile1 } from "../model/projectile/IceProjectile1.js";
import { LightningProjectile1 } from "../model/projectile/LightningProjectile1.js";
import { WaterProjectile1 } from "../model/projectile/WaterProjectile1.js";
import { FireExplosion1 } from "../model/explosion/FireExplosion1.js";
import { IceExplosion1 } from "../model/explosion/IceExplosion1.js";
import { LightningExplosion1 } from "../model/explosion/LightningExplosion1.js";
import { WaterExplosion1 } from "../model/explosion/WaterExplosion1.js";
import { FireAttack1 } from "../model/attack/FireAttack1.js";
import { IceAttack1 } from "../model/attack/IceAttack1.js";
import { LightningAttack1 } from "../model/attack/LightningAttack1.js";
import { WaterAttack1 } from "../model/attack/WaterAttack1.js";
import { ProjectileDecorator } from "../decorator/ProjectileDecorator.js";
import { ExplosionDecorator } from "../decorator/ExplosionDecorator.js";
import { CanvasDecorator } from "../../corecanvas/CanvasDecorator.js";
import { notNull } from "../../../corejs/util/ObjUtils.js";

export class DadLevel1Layer5Attack {
    constructor(context) {
        this.context = notNull("context", context, this);

        const WA = "WaterAttack1";
        const FI = "FireAttack1";
        const IC = "IceAttack1";
        const LI = "LightningAttack1";

        this.map = [
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , FI, , , , , , WA, , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , LI, , , , IC, , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,]
        ];

        this.attackQueue = [];
    }

    init() {
        this.screen = notNull("screen", this.context.getScreen(), this);

        let x = CanvasDecorator.getLeft();
        let y = CanvasDecorator.getTop();

        let fireExplosion1 = new ExplosionDecorator(new FireExplosion1(), x, y);
        let iceExplosion1 = new ExplosionDecorator(new IceExplosion1(), x, y);
        let lightningExplosion1 = new ExplosionDecorator(new LightningExplosion1(), x, y);
        let waterExplosion1 = new ExplosionDecorator(new WaterExplosion1(), x, y);

        let fireProjectile1 = new ProjectileDecorator(new FireProjectile1(), fireExplosion1, x, y);
        let iceProjectile1 = new ProjectileDecorator(new IceProjectile1(), iceExplosion1, x, y);
        let lightningProjectile1 = new ProjectileDecorator(new LightningProjectile1(), lightningExplosion1, x, y);
        let waterProjectile1 = new ProjectileDecorator(new WaterProjectile1(), waterExplosion1, x, y);

        let fireAttack1 = new AttackDecorator(new FireAttack1(), this, fireProjectile1, x, y);
        let iceAttack1 = new AttackDecorator(new IceAttack1(), this, iceProjectile1, x, y);
        let lightningAttack1 = new AttackDecorator(new LightningAttack1(), this, lightningProjectile1, x, y);
        let waterAttack1 = new AttackDecorator(new WaterAttack1(), this, waterProjectile1, x, y);

        TowerContext.setAttack(fireAttack1);
        TowerContext.setAttack(iceAttack1);
        TowerContext.setAttack(lightningAttack1);
        TowerContext.setAttack(waterAttack1);

        this.init = true;
    }

    update(tick) {
        this.tick = tick;

        if (!this.init) {
            this.init();
        }

        this.attackQueue.forEach(e => e.update(tick));

        for (let r = 0; r < TowerContext.rows; r++) {
            for (let c = 0; c < TowerContext.columns; c++) {
                var attackDecorator = TowerContext.getAttack(this.map[r][c]);
                if (attackDecorator) {
                    let copyAttackDecorator = attackDecorator.deepCopyIfReady(
                        TowerContext.tileWidth * c,
                        TowerContext.tileHeight * r);
                    if (copyAttackDecorator) {
                        this.attackQueue.push(copyAttackDecorator);
                    }
                }
            }
        }

    }

    draw() {
        this.attackQueue.forEach(e => e.draw());
    }

    deleteAttack(attackDecorator) {
        this.attackQueue = this.attackQueue.filter(i => i !== attackDecorator);
    }

    addAttack(attackDecorator) {
        this.attackQueue.push(attackDecorator);
    }
}