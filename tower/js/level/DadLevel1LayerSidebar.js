import { FireTower1 } from "../model/tower/FireTower1.js";
import { WaterTower1 } from "../model/tower/WaterTower1.js";
import { LightningTower1 } from "../model/tower/LightningTower1.js";
import { IceTower1 } from "../model/tower/IceTower1.js";
import { TowerDecorator } from "../decorator/TowerDecorator.js";
import { FireAttack1 } from "../model/attack/FireAttack1.js";
import { FireProjectile1 } from "../model/projectile/FireProjectile1.js";
import { FireExplosion1 } from "../model/explosion/FireExplosion1.js";
import { WaterAttack1 } from "../model/attack/WaterAttack1.js";
import { WaterProjectile1 } from "../model/projectile/WaterProjectile1.js";
import { WaterExplosion1 } from "../model/explosion/WaterExplosion1.js";
import { LightningAttack1 } from "../model/attack/LightningAttack1.js";
import { LightningProjectile1 } from "../model/projectile/LightningProjectile1.js";
import { IceAttack1 } from "../model/attack/IceAttack1.js";
import { IceProjectile1 } from "../model/projectile/IceProjectile1.js";
import { IceExplosion1 } from "../model/explosion/IceExplosion1.js";
import { LightningExplosion1 } from "../model/explosion/LightningExplosion1.js";
import { notNull } from "../../../corejs/util/ObjUtils.js";

export class DadLevel1LayerSidebar {
    constructor(context) {
        this.context = notNull("context", context, this);
    }

    init() {
        this.screen = notNull("screen", this.context.getScreen(), this);

        this.x = this.screen.getWidth() * .80;
        this.y = 0
        this.w = this.screen.getWidth() * .20;
        this.h = this.screen.getHeight();

        this.coinImageId = "GoldCoin";
        this.coinWidth = 32;
        this.coinHeight = 32;
        this.coinImageX = this.screen.getWidth() * .805;
        this.coinImageY = this.screen.getHeight() * .02;
        this.coinSW = 40;
        this.coinSH = 40;

        this.coinTextX = this.screen.getWidth() * .83;
        this.coinTextY = this.screen.getHeight() * .053;

        this.fireTower1 = new TowerDecorator(this.context, new FireTower1(), new FireAttack1(), new FireProjectile1(), new FireExplosion1());
        this.fireTextX = this.screen.getWidth() * .81;
        this.fireTextY = this.screen.getHeight() * .14;
        this.fireX = this.screen.getWidth() * .83;
        this.fireY = this.screen.getHeight() * .15;
        this.fireButtonX = this.screen.getWidth() * .815;
        this.fireButtonY = this.screen.getHeight() * .33;
        this.fireBuyX = this.screen.getWidth() * .835;
        this.fireBuyY = this.screen.getHeight() * .385;

        this.waterTower1 = new TowerDecorator(this.context, new WaterTower1(), new WaterAttack1(), new WaterProjectile1(), new WaterExplosion1());
        this.waterTextX = this.screen.getWidth() * .89;
        this.waterTextY = this.screen.getHeight() * .14;
        this.waterX = this.screen.getWidth() * .92;
        this.waterY = this.screen.getHeight() * .15;
        this.waterButtonX = this.screen.getWidth() * .91;
        this.waterButtonY = this.screen.getHeight() * .33;
        this.waterBuyX = this.screen.getWidth() * .93;
        this.waterBuyY = this.screen.getHeight() * .385;

        this.lightningTower1 = new TowerDecorator(this.context, new LightningTower1(), new LightningAttack1(), new LightningProjectile1(), new LightningExplosion1());
        this.lightningTextX = this.screen.getWidth() * .8;
        this.lightningTextY = this.screen.getHeight() * .49;
        this.lightningX = this.screen.getWidth() * .83;
        this.lightningY = this.screen.getHeight() * .5;
        this.lightningButtonX = this.screen.getWidth() * .815;
        this.lightningButtonY = this.screen.getHeight() * .68;
        this.lightningBuyX = this.screen.getWidth() * .835;
        this.lightningBuyY = this.screen.getHeight() * .735;

        this.iceTower1 = new TowerDecorator(this.context, new IceTower1(), new IceAttack1(), new IceProjectile1(), new IceExplosion1());
        this.iceTextX = this.screen.getWidth() * .916;
        this.iceTextY = this.screen.getHeight() * .49;
        this.iceX = this.screen.getWidth() * .92;
        this.iceY = this.screen.getHeight() * .5;
        this.iceButtonX = this.screen.getWidth() * .91;
        this.iceButtonY = this.screen.getHeight() * .68;
        this.iceBuyX = this.screen.getWidth() * .93;
        this.iceBuyY = this.screen.getHeight() * .735;

        this.buttonW = 150;
        this.buttonH = 75;

        this.init = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.init) {
            this.init();
        }
    }

    draw() {
        this.drawBackground();
        this.drawCoins();
        this.drawTowers();
        this.drawNames();
        this.drawButtons();
    }

    drawBackground() {
        this.screen.drawFilledRectangle(
            "white",
            this.x,
            this.y,
            this.w,
            this.h);
    }

    drawCoins() {
        this.screen.drawImage(
            this.coinImageId,
            0,
            0,
            this.coinWidth,
            this.coinHeight,
            this.coinImageX,
            this.coinImageY,
            this.coinSW,
            this.coinSH);

        this.screen.drawText("Gold: $5000", "20pt Helvetica", "green", this.coinTextX, this.coinTextY);
    }

    drawTowers() {
        this.drawTower(this.fireTower1, this.fireX, this.fireY);
        this.drawTower(this.waterTower1, this.waterX, this.waterY);
        this.drawTower(this.lightningTower1, this.lightningX, this.lightningY);
        this.drawTower(this.iceTower1, this.iceX, this.iceY);
    }

    drawTower(tower, x, y) {
        tower.update(this.tick, x, y, true);
        tower.draw();
    }

    drawNames() {
        this.screen.drawText("Fire ($5)", "26pt Helvetica", "red", this.fireTextX, this.fireTextY);
        this.screen.drawText("Water ($5)", "26pt Helvetica", "blue", this.waterTextX, this.waterTextY);
        this.screen.drawText("Lightning ($5)", "26pt Helvetica", "orange", this.lightningTextX, this.lightningTextY);
        this.screen.drawText("Ice ($5)", "26pt Helvetica", "cyan", this.iceTextX, this.iceTextY);
    }

    drawButtons() {
        this.screen.drawFilledRectangle("red", this.fireButtonX, this.fireButtonY, this.buttonW, this.buttonH);
        this.screen.drawRectangle(2, "black", this.fireButtonX, this.fireButtonY, this.buttonW, this.buttonH);
        this.screen.drawText("Buy", "30pt Helvetica", "white", this.fireBuyX, this.fireBuyY);

        this.screen.drawFilledRectangle("blue", this.waterButtonX, this.waterButtonY, this.buttonW, this.buttonH);
        this.screen.drawRectangle(2, "black", this.waterButtonX, this.waterButtonY, this.buttonW, this.buttonH);
        this.screen.drawText("Buy", "30pt Helvetica", "white", this.waterBuyX, this.waterBuyY);

        this.screen.drawFilledRectangle("orange", this.lightningButtonX, this.lightningButtonY, this.buttonW, this.buttonH);
        this.screen.drawRectangle(2, "black", this.lightningButtonX, this.lightningButtonY, this.buttonW, this.buttonH);
        this.screen.drawText("Buy", "30pt Helvetica", "black", this.lightningBuyX, this.lightningBuyY);

        this.screen.drawFilledRectangle("cyan", this.iceButtonX, this.iceButtonY, this.buttonW, this.buttonH);
        this.screen.drawRectangle(2, "black", this.iceButtonX, this.iceButtonY, this.buttonW, this.buttonH);
        this.screen.drawText("Buy", "30pt Helvetica", "black", this.iceBuyX, this.iceBuyY);
    }
}