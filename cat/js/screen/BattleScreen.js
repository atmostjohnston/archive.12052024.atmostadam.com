import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";
import { requireTick } from "../../../boot/function/ValidationFunctions.js";

export class BattleScreen extends Drawing {
    constructor(context) {
        super(context);
        this.state = "AttackSelection";
    }

    init() {
        requireScreen(this.context, this);

        this.BATTLE_PORTRAIT_OPPONENT_X = this.screen.getWidth() - cfg.BATTLE_ANCHOR_X - this.PORTRAIT_WH;

        this.BATTLE_FONT = cfg.BATTLE_SCREEN_FONT;
        this.BATTLE_COLOR = cfg.COLOR_ORANGE;
        this.BATTLE_CAT_NAME_TEXT_X = cfg.BATTLE_ANCHOR_X + 100;
        this.BATTLE_CAT_NAME_TEXT_Y = this.screen.getHeight() - cfg.BATTLE_ANCHOR_Y;
        this.BATTLE_OPPONENET_NAME_TEXT_X = this.screen.getWidth() - cfg.BATTLE_ANCHOR_X - this.PORTRAIT_WH + 60;

        this.image = this.context.getImage("grassland");
        this.claw = this.context.getImage("clawSymbol");
        this.bite = this.context.getImage("biteSymbol");
        this.puff = this.context.getImage("puffSymbol");
        this.pounce = this.context.getImage("pounceSymbol");

        this.opponent = this.context.get("OpponentDecorator");
        this.cat = this.context.get("CatDecorator");

        this.catRightClawAnimation = this.context.get("CatRightClawAnimation");
        this.catLeftClawAnimation = this.context.get("CatLeftClawAnimation");

        this.catTopBiteAnimation = this.context.get("CatTopBiteAnimation");
        this.catBottomBiteAnimation = this.context.get("CatBottomBiteAnimation");

        this.catAttackDamageText = this.context.get("CatAttackDamageText");
        this.opponentAttackDamageText = this.context.get("OpponentAttackDamageText");

        this.catPortrait = this.context.get("CatPortraitDrawing").init();
        this.catName = this.context.get("CatNameText").init();
        this.catHp = this.context.get("CatHpText").init();
        this.catRectangle = this.context.get("CatRectangleDrawing").init();

        //this.opponentPortrait = this.context.get("OpponentPortraitDrawing").init();
        this.opponentName = this.context.get("OpponentNameText").init();
        this.opponentHp = this.context.get("OpponentHpText").init();
        this.opponentRectangle = this.context.get("OpponentRectangleDrawing").init();

        this.catPixelAnimation = this.context.get("CatPixelAnimation").init();

        this.opponentPixelAnimation = this.context.get("OpponentPixelAnimation").init();

        this.catLosesText = this.context.get("CatLosesText");
        this.catWinsText = this.context.get("CatWinsText");

        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
        this.catPortrait.update();
        this.catName.update();
        this.catHp.update();
        this.catRectangle.update();
        this.catPixelAnimation.update();
        this.catAttackDamageText.update();

        this.opponentName.update();
        this.opponentHp.update();
        this.opponentRectangle.update();
        this.opponentPixelAnimation.update();
        this.opponentAttackDamageText.update();

        this.catRightClawAnimation.update();
        this.catLeftClawAnimation.update();
        this.catBottomBiteAnimation.update();
        this.catTopBiteAnimation.update();

        this.catLosesText.update();
        this.catWinsText.update();

        this.updateState();
    }

    draw() {
        this.drawBackground();
        this.drawButtons();

        this.catPortrait.draw();
        this.catName.draw();
        this.catHp.draw();
        this.catRectangle.draw();
        this.catPixelAnimation.draw();
        this.catAttackDamageText.draw();

        this.opponent.drawPortrait();
        this.opponentName.draw();
        this.opponentHp.draw();
        this.opponentRectangle.draw();
        this.opponentPixelAnimation.draw();
        this.opponentAttackDamageText.draw();

        this.catLeftClawAnimation.draw();
        this.catRightClawAnimation.draw();
        this.catBottomBiteAnimation.draw();
        this.catTopBiteAnimation.draw();

        this.catLosesText.draw();
        this.catWinsText.draw();
    }

    updateState() {
        switch (this.state) {
            case "AttackSelection":
                break;
            case "ClawState1":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "ClawState2";
                    this.catRightClawAnimation.init();
                    this.catAttackDamageText.setDamage(this.cat.clawAttack());
                    if (this.opponent.getOpponent().currentHp < 1) {
                        setTimeout(() => this.catWinsText.show(), 500);
                    }
                    this.catPixelAnimation.move(this.context.get("battleCatAttackX"), cfg.BATTLE_STATE_CAT_FORWARD_Y, cfg.BATTLE_PIXEL_SPEED_15);
                }
                break;
            case "ClawState2":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "ClawState3";
                    this.catLeftClawAnimation.init();
                    this.catPixelAnimation.move(this.context.get("battleCatAttackX"), cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_15);
                }
                break;
            case "ClawState3":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "OpponentState1";
                    this.catPixelAnimation.move(cfg.BATTLE_CAT_PIXEL_X, cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "BiteState1":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "BiteState2";
                    this.catTopBiteAnimation.init();
                    this.catBottomBiteAnimation.init();
                    this.catAttackDamageText.setDamage(this.cat.biteAttack(this.opponent));
                    if (this.opponent.getOpponent().currentHp < 1) {
                        setTimeout(() => this.catWinsText.show(), 500);
                    }
                    this.catPixelAnimation.move(this.context.get("battleCatAttackX"), cfg.BATTLE_STATE_CAT_FORWARD_Y, cfg.BATTLE_PIXEL_SPEED_20);
                }
                break;
            case "BiteState2":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "BiteState3";
                    this.catPixelAnimation.move(this.context.get("battleCatAttackX"), cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_20);
                }
                break;
            case "BiteState3":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "OpponentState1";
                    this.catPixelAnimation.move(cfg.BATTLE_CAT_PIXEL_X, cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "PounceState1":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "PounceState2";
                    this.catTopBiteAnimation.init();
                    this.catBottomBiteAnimation.init();
                    this.catAttackDamageText.setDamage(this.cat.pounceAttack(this.opponent));
                    if (this.opponent.getOpponent().currentHp < 1) {
                        setTimeout(() => this.catWinsText.show(), 500);
                    }
                    this.catPixelAnimation.move(this.context.get("battleCatAttackX"), cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "PounceState2":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "PounceState3";
                    this.catPixelAnimation.move(this.context.get("battleCatAttackX"), cfg.BATTLE_STATE_CAT_FORWARD_Y, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "PounceState3":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "OpponentState1";
                    this.catPixelAnimation.move(cfg.BATTLE_CAT_PIXEL_X, cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "OpponentState1":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "OpponentState2";
                    this.opponentAttackDamageText.setDamage(this.opponent.primaryAttack(this.cat));
                    if (this.cat.getCat().currentHp < 1) {
                        setTimeout(() => this.catLosesText.show(), 500);
                    }
                    this.opponentPixelAnimation.move(cfg.BATTLE_OPPONENT_ATTACK_X, cfg.BATTLE_CAT_PIXEL_Y + 40, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "OpponentState2":
                if (!this.opponentPixelAnimation.isMoving()) {
                    this.state = "OpponentState3";
                    this.opponentPixelAnimation.move(cfg.BATTLE_OPPONENT_ATTACK_X, cfg.BATTLE_CAT_PIXEL_Y - 110, cfg.BATTLE_PIXEL_SPEED_20);
                }
                break;
            case "OpponentState3":
                if (!this.opponentPixelAnimation.isMoving()) {
                    this.state = "OpponentState4";
                    this.opponentPixelAnimation.move(cfg.BATTLE_OPPONENT_ATTACK_X, cfg.BATTLE_CAT_PIXEL_Y + 40, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "OpponentState4":
                if (!this.opponentPixelAnimation.isMoving()) {
                    this.state = "AttackSelection";
                    this.catPixelAnimation.restoreSize();
                    this.opponentPixelAnimation.move(this.screen.getWidth() - 360, cfg.BATTLE_CAT_PIXEL_Y + 40, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            default:
        }
    }

    drawButtons() {
        this.drawButton("green", this.context.get("battleLeftButtonX"), this.context.get("battleBottomButtonY"));
        this.drawButton("yellow", this.context.get("battleRightButtonX"), this.context.get("battleBottomButtonY"));
        this.drawButton("green", this.context.get("battleLeftButtonX"), this.context.get("battleTopButtonY"));
        this.drawButton("green", this.context.get("battleRightButtonX"), this.context.get("battleTopButtonY"));

        this.drawButtonOutline(this.BATTLE_BUTTON_OUTLINE_COLOR, this.context.get("battleLeftButtonX"), this.context.get("battleBottomButtonY"));
        this.drawButtonOutline(this.BATTLE_BUTTON_OUTLINE_COLOR, this.context.get("battleRightButtonX"), this.context.get("battleBottomButtonY"));
        this.drawButtonOutline(this.BATTLE_BUTTON_OUTLINE_COLOR, this.context.get("battleLeftButtonX"), this.context.get("battleTopButtonY"));
        this.drawButtonOutline(this.BATTLE_BUTTON_OUTLINE_COLOR, this.context.get("battleRightButtonX"), this.context.get("battleTopButtonY"));

        this.drawSymbol(this.claw, this.context.get("battleClawSymbolX"), this.context.get("battleClawSymbolY"), cfg.BATTLE_CLAW_SYMBOL_WIDTH, cfg.BATTLE_CLAW_SYMBOL_HEIGHT);
        this.drawSymbol(this.pounce, this.context.get("battlePounceSymbolX"), this.context.get("battlePounceSymbolY"), cfg.BATTLE_POUNCE_SYMBOL_WIDTH, cfg.BATTLE_POUNCE_SYMBOL_HEIGHT);
        this.drawSymbol(this.bite, this.context.get("battleBiteSymbolX"), this.context.get("battleBiteSymbolY"), cfg.BATTLE_BITE_SYMBOL_WIDTH, cfg.BATTLE_BITE_SYMBOL_HEIGHT);
        this.drawSymbol(this.puff, this.context.get("battlePuffSymbolX"), this.context.get("battlePuffSymbolY"), cfg.BATTLE_PUFF_SYMBOL_WIDTH, cfg.BATTLE_PUFF_SYMBOL_HEIGHT);
    }

    drawBackground() {
        this.context.getCtx().drawImage(
            this.image,
            0,
            0,
            this.screen.getWidth(),
            this.screen.getHeight(),
            0,
            0,
            this.screen.getWidth() * 2,
            this.screen.getHeight() * 2);
    }

    drawButton(color, x, y) {
        this.context.getCtx().beginPath();
        this.context.getCtx().arc(x, y, 100, 0, 2 * Math.PI);
        this.context.getCtx().fillStyle = color;
        this.context.getCtx().fill();
    }

    drawButtonOutline(color, x, y) {
        this.context.getCtx().beginPath();
        this.context.getCtx().arc(x, y, 100, 0, 2 * Math.PI);
        this.context.getCtx().strokeStyle = color;
        this.context.getCtx().lineWidth = 10;
        this.context.getCtx().stroke();
    }

    drawSymbol(image, x, y, sw, sh) {
        this.context.getCtx().drawImage(image, 0, 0, 500, 500, x, y, sw, sh);
    }

    notify(x, y) {
        if (this.state != "AttackSelection") {
            return;
        }
        console.log("ACTUAL: [" + x + ", " + y + "]");
        console.log("CLAW TARGET X [" + (this.context.get("battleLeftButtonX") - 205) + ", " + (this.context.get("battleLeftButtonX") + 5) + "]");
        console.log("CLAW TARGET Y [" + (this.context.get("battleTopButtonY") - 220) + ", " + (this.context.get("battleTopButtonY") - 10) + "]");
        //if (x > this.context.get("battleLeftButtonX") - 220 && x < this.context.get("battleLeftButtonX") - 60 &&
        //    y > this.context.get("battleTopButtonY") - 220 && y < this.context.get("battleTopButtonY") - 60) {
        if (this.context.get("battleLeftButtonX") - 105 < x && x < this.context.get("battleLeftButtonX") + 105 &&
            this.context.get("battleTopButtonY") - 105 < y && y < this.context.get("battleTopButtonY") + 105) {
            console.log("notify() -> Gamer has clicked the mouse on screen [" + this.constructor.name + "] on the [CLAW] [" + x + ", " + y + "]");
            this.state = "ClawState1";
            this.catPixelAnimation.move(this.context.get("battleCatAttackX"), cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_30);
            return;
        }
        if (this.context.get("battleRightButtonX") - 105 < x && x < this.context.get("battleRightButtonX") + 105 &&
            this.context.get("battleTopButtonY") - 105 < y && y < this.context.get("battleTopButtonY") + 105) {
            console.log("notify() -> Gamer has clicked the mouse on screen [" + this.constructor.name + "] on the [POUNCE] [" + x + ", " + y + "]");
            this.state = "PounceState1";
            this.catPixelAnimation.move((this.screen.getWidth() / 2) - 200, -50, cfg.BATTLE_PIXEL_SPEED_15);
            return;
        }
        if (this.context.get("battleLeftButtonX") - 105 < x && x < this.context.get("battleLeftButtonX") + 105 &&
            this.context.get("battleBottomButtonY") - 105 < y && y < this.context.get("battleBottomButtonY") + 105) {
            console.log("notify() -> Gamer has clicked the mouse on screen [" + this.constructor.name + "] on the [BITE] [" + x + ", " + y + "]");
            this.state = "BiteState1";
            this.catPixelAnimation.move(this.context.get("battleCatAttackX"), cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_30);
            return;
        }
        if (this.context.get("battleRightButtonX") - 105 < x && x < this.context.get("battleRightButtonX") + 105 &&
            this.context.get("battleBottomButtonY") - 105 < y && y < this.context.get("battleBottomButtonY") + 105) {
            console.log("notify() -> Gamer has clicked the mouse on screen [" + this.constructor.name + "] on the [PUFF BIG CAT] [" + x + ", " + y + "]");
            this.battleState = "puffUpState1";
            this.catPixelAnimation.puffUp(10, 15);
            return;
        }
        console.log("notify() - Gamer clicked the mouse randomly [" + this.constructor.name + "] and it did nothing [" + x + ", " + y + "]");
    }
}