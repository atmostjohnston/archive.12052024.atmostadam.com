import * as cfg from "../config/GameConfiguration.js";
import { requireContext, requireOpponent } from "./../../../boot/function/ValidationFunctions.js";

/**
 * Reptiles -> 10xp
 * Birds -> 5xp
 * Bugs -> 1pt
 * Small Mammals & Rodents - 7pts
 * Big mammals - 25pts
 * Other Cats - their level
 */

export class OpponentDecorator {
    constructor(context, opponent) {
        requireContext(context, this);
        requireOpponent(opponent, this);

        this.x = 0;
        this.y = 0;
    }

    load(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    drawWorld() {
        super.drawImageLoaded();
        var catX = this.context.get("CatDecorator").x;
        var catY = this.context.get("CatDecorator").y;

        if (catX - cfg.MAP_TILE_SIZE < this.x && this.x < catX + cfg.MAP_TILE_SIZE &&
            catY - cfg.MAP_TILE_SIZE < this.y && this.y < catY + cfg.MAP_TILE_SIZE) {
            this.context.set("opponent", this.opponent);
            this.context.set("OpponentDecorator", this);
            this.context.nextScreen("BattleScreen");
        }
    }

    drawPixel(image) {
        requireImage(image, this);
        super.drawImage(
            this.getPixelImage(image),
            this.pixelIX,
            this.pixelIY,
            this.pixelW,
            this.pixelH,
            this.x,
            this.y,
            this.pixelSW,
            this.pixelSH);
    }

    getOpponent() {
        return this.opponent;
    }

    drawPortrait(image) {
        requireImage(image, this);
        super.drawImage(
            image,
            0,
            0,
            cfg.PORTRAIT_WH,
            cfg.PORTRAIT_WH,
            this.context.get("battleOpponentPortraitDrawingX"),
            cfg.BATTLE_PORTRAIT_Y,
            cfg.PORTRAIT_WH,
            cfg.PORTRAIT_WH);
    }

    primaryAttack() {
        var damage = this.getRandom(this.opponent.minPrimaryAttackDamage, this.opponent.maxPrimaryAttackDamage);
        this.context.getCatDecorator().removeHp(damage);
        return damage;
    }

    removeHp(damage) {
        this.opponent.currentHp -= damage;
    }

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}