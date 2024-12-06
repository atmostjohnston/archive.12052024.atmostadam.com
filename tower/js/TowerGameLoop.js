import { TowerDecorator } from "./decorator/TowerDecorator.js";
import { IceTower1 } from "./model/tower/IceTower1.js";
import { LightningTower1 } from "./model/tower/LightningTower1.js";
import { WaterTower1 } from "./model/tower/WaterTower1.js";
import { FireTower1 } from "./model/tower/FireTower1.js";
import { FireAttack1 } from "./model/attack/FireAttack1.js";
import { FireProjectile1 } from "./model/projectile/FireProjectile1.js";
import { FireExplosion1 } from "./model/explosion/FireExplosion1.js";
import { WaterAttack1 } from "./model/attack/WaterAttack1.js";
import { WaterProjectile1 } from "./model/projectile/WaterProjectile1.js";
import { LightningAttack1 } from "./model/attack/LightningAttack1.js";
import { LightningProjectile1 } from "./model/projectile/LightningProjectile1.js";
import { IceAttack1 } from "./model/attack/IceAttack1.js";
import { IceProjectile1 } from "./model/projectile/IceProjectile1.js";
import { IceExplosion1 } from "./model/explosion/IceExplosion1.js";
import { Water1MiddleTile } from "./decorator/layer3Solid/Water1MiddleTile.js";
import { Water1TopLeftTile } from "./decorator/layer3Solid/Water1TopLeftTile.js";
import { Water1TopTile } from "./decorator/layer3Solid/Water1TopTile.js";
import { Water1TopRightTile } from "./decorator/layer3Solid/Water1TopRightTile.js";
import { Water1RightTile } from "./decorator/layer3Solid/Water1RightTile.js";
import { Water1BottomLeftTile } from "./decorator/layer3Solid/Water1BottomLeftTile.js";
import { Water1LeftTile } from "./decorator/layer3Solid/Water1LeftTile.js";
import { Water1BottomRightTile } from "./decorator/layer3Solid/Water1BottomRightTile.js";
import { Water1BottomTile } from "./decorator/layer3Solid/Water1BottomTile.js";
import { Water1MiddleLandTile } from "./decorator/layer3Solid/Water1MiddleLandTile.js";
import { Water1MiddlePathTile } from "./decorator/layer3Solid/Water1MiddlePathTile.js";
import { Toprightcorner } from "./decorator/layer3Solid/Toprightcorner.js";
import { Topcornerleft } from "./decorator/layer3Solid/Topcornerleft.js";
import { Bottomrightcorner } from "./decorator/layer3Solid/Bottomrightcorner.js";
import { Bottomleftcorner } from "./decorator/layer3Solid/Bottomleftcorner.js";
import { Castle1TopLeftTile } from "./decorator/layer4Transparent/Castle1TopLeftTile.js";
import { Castle1TopRightTile } from "./decorator/layer4Transparent/Castle1TopRightTile.js";
import { Castle1BottomLeftTile } from "./decorator/layer4Transparent/Castle1BottomLeftTile.js";
import { Castle1BottomRightTile } from "./decorator/layer4Transparent/Castle1BottomRightTile.js";
import { PalmTree1TopTile } from "./decorator/layer4Transparent/PalmTree1TopTile.js";
import { PalmTree1BottomTile } from "./decorator/layer4Transparent/PalmTree1BottomTile.js";
import { notNull, isNumber } from "./../../boot/function/GameFunctions.js";
import { boot } from "./../../boot/boot.js";
import { GameContext } from "./../../boot/context/GameContext.js";

window.addEventListener("load", function () {
    var context = new GameContext();
    context.setGameLoop(new TowerGameLoop(context));
    context.preloadImage("Outside3", "./images/opensource/Outside3.png");
    context.preloadImage("Bottomleftcorner", "./images/opensource/bottom-left-corner.png");
    context.preloadImage("Bottomrightcorner", "./images/opensource/bottom-right-corner.png");
    context.preloadImage("Outside41", "./images/opensource/Outside41.png");
    context.preloadImage("Topcornerleft", "./images/opensource/top-corner-left.png");
    context.preloadImage("Toprightcorner", "./images/opensource/top-right-corner.png");
    context.preloadImage("Outside_A1", "./images/opensource/Outside_A1.png");
    context.preloadImage("Outside_A2", "./images/opensource/Outside_A2.png");
    context.preloadImage("Outside1", "./images/opensource/Outside1.png");
    context.preloadImage("Outside40", "./images/opensource/Outside40.png");
    context.preloadImage("ArabianNights-TileB", "./images/opensource/ArabianNights-TileB.png");
    context.preloadImage("World_B", "./images/opensource/World_B.png");
    boot(context);
});

export class TowerGameLoop {
    constructor(context) {
        this.context = notNull("context", context, this);
        this.context.setClassAndClickSubscriber(this);
        this.grid = this.context.getFullScreenGrid();
    }

    init() {
        this.screen = notNull("screen", this.context.getScreen(), this);
        this.grid.load(12, 20);
        this.buildLayer3Solid();
        this.buildLayer4Transparent();
        this.buildLayer7Enemy();


        /*
this.layer2 = new DadLevel1Layer2Enemy(this.context);



new TowerContext(this.context);
this.layer1 = new DadLevel1Layer1SolidTile(this.context);
this.layer2 = new DadLevel1Layer2Enemy(this.context);
this.layer3 = new DadLevel1Layer3TransparentTile(this.context);
this.layer4 = new DadLevel1Layer4Tower(this.context);
//this.layer5 = new DadLevel1Layer5Attack(this.context);
this.sideLayer = new DadLevel1LayerSidebar(this.context);
*/

        ;







        this.init = true;
    }

    buildLayer3Solid() {
        const MI = "Water1MiddleTile";
        const TL = "GrayBrickTile";
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

        let layer = [
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
        ]

        for (let row = 0; row < this.grid.getNumberOfRows(); row++) {
            for (let column = 0; column < this.grid.getNumberOfColumns(); column++) {
                if (layer[row] && layer[row][column]) {
                    if (MI == layer[row][column]) {
                        layer[row][column] = new Water1MiddleTile(this.context, row, column);
                    }
                    if (TL == layer[row][column]) {
                        layer[row][column] = new Water1TopLeftTile(this.context, row, column)
                    }
                    if (TP == layer[row][column]) {
                        layer[row][column] = new Water1TopTile(this.context, row, column);
                    }
                    if (TR == layer[row][column]) {
                        layer[row][column] = new Water1TopRightTile(this.context, row, column);
                    }
                    if (RT == layer[row][column]) {
                        layer[row][column] = new Water1RightTile(this.context, row, column);
                    }
                    if (BL == layer[row][column]) {
                        layer[row][column] = new Water1BottomLeftTile(this.context, row, column);
                    }
                    if (LT == layer[row][column]) {
                        layer[row][column] = new Water1LeftTile(this.context, row, column);
                    }
                    if (BR == layer[row][column]) {
                        layer[row][column] = new Water1BottomRightTile(this.context, row, column);
                    }
                    if (BT == layer[row][column]) {
                        layer[row][column] = new Water1BottomTile(this.context, row, column);
                    }
                    if (LD == layer[row][column]) {
                        layer[row][column] = new Water1MiddleLandTile(this.context, row, column);
                    }
                    if (PT == layer[row][column]) {
                        layer[row][column] = new Water1MiddlePathTile(this.context, row, column);
                    }
                    if (C1 == layer[row][column]) {
                        layer[row][column] = new Toprightcorner(this.context, row, column);
                    }
                    if (C2 == layer[row][column]) {
                        layer[row][column] = new Topcornerleft(this.context, row, column);
                    }
                    if (C3 == layer[row][column]) {
                        layer[row][column] = new Bottomrightcorner(this.context, row, column);
                    }
                    if (C4 == layer[row][column]) {
                        layer[row][column] = new Bottomleftcorner(this.context, row, column);
                    }
                }
            }
        }

        this.grid.setLayer3SolidImage(layer);
    }

    buildLayer4Transparent() {
        const TL = "Castle1TopLeftTile";
        const TR = "Castle1TopRightTile";
        const BL = "Castle1BottomLeftTile";
        const BR = "Castle1BottomRightTile";
        const PT = "PalmTree1TopTile";
        const PB = "PalmTree1BottomTile";

        let layer = [
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , , , , , , , , , , , , , , , , ,],
            [, , , PT, , PT, , PT, , PT, , PT, , PT, , PT, , PT, ,],
            [, TL, TR, PB, , PB, , PB, , PB, , PB, , PB, , PB, , PB, ,],
            [, BL, BR, PT, , PT, , PT, , PT, , PT, , PT, , PT, , PT, , PT],
            [, , , PB, , PB, , PB, , PB, , PB, , PB, , PB, , PB, , PB]
        ];

        for (let row = 0; row < this.grid.getNumberOfRows(); row++) {
            for (let column = 0; column < this.grid.getNumberOfColumns(); column++) {
                if (layer[row] && layer[row][column]) {
                    if (TL == layer[row][column]) {
                        layer[row][column] = new Castle1TopLeftTile(this.context, row, column);
                    }
                    if (TR == layer[row][column]) {
                        layer[row][column] = new Castle1TopRightTile(this.context, row, column)
                    }
                    if (BL == layer[row][column]) {
                        layer[row][column] = new Castle1BottomLeftTile(this.context, row, column)
                    }
                    if (BR == layer[row][column]) {
                        layer[row][column] = new Castle1BottomRightTile(this.context, row, column)
                    }
                    if (PT == layer[row][column]) {
                        layer[row][column] = new PalmTree1TopTile(this.context, row, column)
                    }
                    if (PB == layer[row][column]) {
                        layer[row][column] = new PalmTree1BottomTile(this.context, row, column)
                    }
                }
            }
        }

        this.grid.setLayer4TransparentImage(layer);
    }

    buildLayer7Enemy() {
        const N = "N";
        const E = "S";
        const S = "E";
        const W = "W";

        let layer = [
            [, , , , , , , , , , , , , , , , , , ,],
            [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, S,],
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

        //this.grid.setLayer7Enemy(layer);
    }

    update(tick) {
        this.tick = isNumber("tick", tick, this);
        if (!this.grid.loaded) {
            this.init();
        }
        this.grid.update(this.tick);
        //this.layer2.update(this.tick);

        /*
        this.layer1.update(this.tick);
        this.layer2.update(this.tick);
        this.layer3.update(this.tick);
        this.layer4.update(this.tick);
        //this.layer5.update(this.tick);
        this.sideLayer.update(this.tick);


        if (this.cursorTower) {
            this.cursorTower.update(
                this.tick,
                Math.floor(this.context.get("MouseListener").mousePositionX / TowerContext.tileWidth) * TowerContext.tileWidth,
                Math.floor(this.context.get("MouseListener").mousePositionY / TowerContext.tileHeight) * TowerContext.tileHeight
            );
        }
                */
    }

    draw() {
        this.grid.draw();
        //this.layer2.draw();
        /*
        this.layer1.draw();
        this.layer2.draw();
        this.layer3.draw();
        this.layer4.draw();
        //this.layer5.draw();
        this.sideLayer.draw();

        if (this.cursorTower) {
            this.cursorTower.draw();
        }
        */
    }

    onClick(x, y) {
        if (this.cursorTower) {
            this.layer4.addTower(this.cursorTower, x, y);
            this.cursorTower = null;
            return;
        }

        this.fireButtonX = this.screen.getWidth() * .815;
        this.fireButtonY = this.screen.getHeight() * .33;

        this.waterButtonX = this.screen.getWidth() * .91;
        this.waterButtonY = this.screen.getHeight() * .33;

        this.lightningButtonX = this.screen.getWidth() * .815;
        this.lightningButtonY = this.screen.getHeight() * .68;

        this.iceButtonX = this.screen.getWidth() * .91;
        this.iceButtonY = this.screen.getHeight() * .68;

        this.buttonW = 150;
        this.buttonH = 75;

        this.setCursorTowerIfClicked(x, y, this.fireButtonX, this.fireButtonY,
            new FireTower1(), new FireAttack1(), new FireProjectile1(), new FireExplosion1());
        this.setCursorTowerIfClicked(x, y, this.waterButtonX, this.waterButtonY,
            new WaterTower1(), new WaterAttack1(), new WaterProjectile1(), new FireExplosion1());
        this.setCursorTowerIfClicked(x, y, this.lightningButtonX, this.lightningButtonY,
            new LightningTower1(), new LightningAttack1(), new LightningProjectile1(), new FireExplosion1());
        this.setCursorTowerIfClicked(x, y, this.iceButtonX, this.iceButtonY,
            new IceTower1(), new IceAttack1(), new IceProjectile1(), new IceExplosion1());

        /*
        if (insideRectangle(x, y, this.fireButtonX, this.fireButtonY, this.buttonW, this.buttonH)) {
            this.cursorTower = new TowerDecorator(new FireTower1(), new FireAttack1(), new FireProjectile1(), new FireExplosion1());
        }
        if (insideRectangle(x, y, this.waterButtonX, this.waterButtonY, this.buttonW, this.buttonH)) {
            this.cursorTower = new TowerDecorator(new WaterTower1(), new WaterAttack1(), new WaterProjectile1(), new WaterExplosion1());
        }
        if (insideRectangle(x, y, this.lightningButtonX, this.lightningButtonY, this.buttonW, this.buttonH)) {
            this.cursorTower = new TowerDecorator(new LightningTower1(), new LightningAttack1(), new LightningProjectile1(), new LightningExplosion1());
        }
        if (insideRectangle(x, y, this.iceButtonX, this.iceButtonY, this.buttonW, this.buttonH)) {
            this.cursorTower = new TowerDecorator(new IceTower1(), new IceAttack1(), new IceProjectile1(), new IceExplosion1());
        }
        */
    }

    setCursorTowerIfClicked(x, y, buttonX, buttonY, tower, attack, projectile, explosion) {
        if (insideRectangle(x, y, buttonX, buttonY, this.buttonW, this.buttonH)) {
            this.cursorTower = new TowerDecorator(tower, attack, projectile, explosion);
        }
    }
}