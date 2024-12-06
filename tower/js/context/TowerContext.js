import { GameDeveloperException } from "./../../../corejs/exception/GameDeveloperException.js";
import { isNumber, notNull } from "../../../corejs/util/ObjUtils.js";

export class TowerContext {
    constructor(context) {
        if (TowerContext.instance) {
            throw new GameDeveloperException("[FATAL] Developer Error. GameContext is an enforced SINGLETON so new can only be used once.");
        }
        TowerContext.instance = this;
        /*

        this.context = notNull("context", context, this);
        this.screen = notNull("screen", context.getScreen(), this);
        this.screenWidth = isNumber("screenWidth", this.screen.getWidth(), this);
        this.screenHeight = isNumber("screenHeight", this.screen.getHeight(), this);

        TowerContext.mainWidth = this.screenWidth * .80;
        TowerContext.sideWidth = this.screenWidth * .20;
        TowerContext.rows = 12;
        TowerContext.columns = 20;
        TowerContext.tileWidth = TowerContext.mainWidth / TowerContext.columns;
        TowerContext.tileHeight = this.screenHeight / TowerContext.rows;

        this.solidMap = new Map();
        this.transparentMap = new Map();
        this.towerMap = new Map();
        this.attackMap = new Map();
        this.enemyMap = new Map();
        this.enemiesOnScreen = [];
        */

        /** Solid Tile. */
        /*
        TowerContext.setSolid(new Snow1Tile());
        TowerContext.setSolid(new Waterfall1TopTile());
        TowerContext.setSolid(new Waterfall1Middle1Tile());
        TowerContext.setSolid(new Waterfall1Middle2Tile());
        TowerContext.setSolid(new Waterfall1Middle3Tile());
        TowerContext.setSolid(new Waterfall1Middle4Tile());
        TowerContext.setSolid(new Waterfall1BottomTile());
        TowerContext.setSolid(new Water1BottomLeftTile());
        TowerContext.setSolid(new Water1BottomRightTile());
        TowerContext.setSolid(new Water1BottomTile());
        TowerContext.setSolid(new Water1LeftTile());
        TowerContext.setSolid(new Water1MiddleTile());
        TowerContext.setSolid(new Water1RightTile());
        TowerContext.setSolid(new Water1TopLeftTile());
        TowerContext.setSolid(new Water1TopRightTile());
        TowerContext.setSolid(new Water1TopTile());
        TowerContext.setSolid(new Water1MiddleLandTile());
        TowerContext.setSolid(new Water1MiddlePathTile());
        TowerContext.setSolid(new Tent1());
        TowerContext.setSolid(new Igloo1());
        TowerContext.setSolid(new SnowyVillage4());
        TowerContext.setSolid(new BabyTower1());
        TowerContext.setSolid(new Squaretower1());
        TowerContext.setSolid(new Pyramid1());
        TowerContext.setSolid(new Whirlpool());
        TowerContext.setSolid(new Rainbow1());
        TowerContext.setSolid(new Oasis1());
        TowerContext.setSolid(new Lava1());
        TowerContext.setSolid(new Toprightcorner());
        TowerContext.setSolid(new Bottomleftcorner());
        TowerContext.setSolid(new Bottomrightcorner());
        TowerContext.setSolid(new Topcornerleft());
        */

        /** Transparent. */
        /*
        TowerContext.setTransparent(new Castle1TopLeftTile());
        TowerContext.setTransparent(new Castle1TopRightTile());
        TowerContext.setTransparent(new Castle1BottomLeftTile());
        TowerContext.setTransparent(new Castle1BottomRightTile());
        TowerContext.setTransparent(new PurpleCastle1BottomLeft());
        TowerContext.setTransparent(new PurpleCastle1BottomRight());
        TowerContext.setTransparent(new PurpleCastle1TopLeft());
        TowerContext.setTransparent(new PurpleCastle1TopRight());
        TowerContext.setTransparent(new PalmTree1TopTile());
        TowerContext.setTransparent(new PalmTree1BottomTile());
        */

        /** Towers. */
        /*
        TowerContext.setTower([new FireTower1(), new FireAttack1(), new FireProjectile1(), new FireExplosion1()]);
        TowerContext.setTower([new WaterTower1(), new WaterAttack1(), new WaterProjectile1(), new WaterExplosion1()]);
        TowerContext.setTower([new LightningTower1(), new LightningAttack1(), new LightningProjectile1(), new LightningExplosion1()]);
        TowerContext.setTower([new IceTower1(), new IceAttack1(), new IceProjectile1(), new IceExplosion1()]);
*/

        return TowerContext.instance;
    }

    /*
    static setSolid(solid) { TowerContext.getSolidMap().set(solid.key, solid); }

    static setTransparent(transparent) { TowerContext.getTransparentMap().set(transparent.key, transparent); }

    static setTower(tower) { TowerContext.getTowerMap().set(tower.key, tower); }

    static setEnemy(enemy) { TowerContext.getEnemyMap().set(enemy.key, enemy); }

    static setAttack(attack) { TowerContext.getAttackMap().set(attack.attack.key, attack); }

    static getSolid(key) { return TowerContext.getSolidMap().get(key); }

    static getTransparent(key) { return TowerContext.getTransparentMap().get(key); }

    static getTower(key) { return TowerContext.getTowerMap().get(key); }

    static getEnemy(key) { return TowerContext.getEnemyMap().get(key); }

    static getAttack(key) { return TowerContext.getAttackMap().get(key); }

    static getSolidMap() { return TowerContext.instance.solidMap; }

    static getTransparentMap() { return TowerContext.instance.transparentMap; }

    static getTowerMap() { return TowerContext.instance.towerMap; }

    static getEnemyMap() { return TowerContext.instance.enemyMap; }

    static getAttackMap() { return TowerContext.instance.attackMap; }

    static containsSolid(solid) { return TowerContext.getSolidMap().has(solid); }

    static containsTransparent(transparent) { return TowerContext.getTransparentMap().has(transparent); }

    static containsTower(tower) { return TowerContext.getTowerMap().has(tower); }

    static containsEnemy(enemy) { return TowerContext.getEnemyMap().has(enemy); }

    static addEnemyOnScreen(enemy) { TowerContext.getEnemiesOnScreen().push(enemy); }

    static removeEnemyOnScreen(enemy) {
        TowerContext.instance.enemiesOnScreen =
            TowerContext.getEnemiesOnScreen().filter(i => i !== enemy);
    }

    static containsEnemyOnScreen(enemy) { return TowerContext.getEnemiesOnScreen().includes(enemy); }

    static getEnemiesOnScreen() { return TowerContext.instance.enemiesOnScreen; }

    static getInstance() { return TowerContext.instance; }
    */
}