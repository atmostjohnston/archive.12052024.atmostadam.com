import { CatAttackDamageText } from "../battle/CatAttackDamageText.js";
import { CatBottomBiteAnimation } from "../battle/CatBottomBiteAnimation.js";
import { CatHpText } from "../battle/CatHpText.js";
import { CatLeftClawAnimation } from "../battle/CatLeftClawAnimation.js";
import { CatNameText } from "../battle/CatNameText.js";
import { CatPixelAnimation } from "../battle/CatPixelAnimation.js";
import { CatPortraitDrawing } from "../battle/CatPortraitDrawing.js";
import { CatRectangleDrawing } from "../battle/CatRectangleDrawing.js";
import { CatRightClawAnimation } from "../battle/CatRightClawAnimation.js";
import { CatTopBiteAnimation } from "../battle/CatTopBiteAnimation.js";
import { OpponentAttackDamageText } from "../battle/OpponentAttackDamageText.js";
import { OpponentHpText } from "../battle/OpponentHpText.js";
import { OpponentPixelAnimation } from "../battle/OpponentPixelAnimation.js";
import { OpponentPortraitDrawing } from "../battle/OpponentPortraitDrawing.js";
import { OpponentRectangleDrawing } from "../battle/OpponentRectangleDrawing.js";
import { OpponentNameText } from "../battle/OpponentNameText.js";
import { CatLosesText } from "../battle/CatLosesText.js";
import { CatWinsText } from "../battle/CatWinsText.js";
import * as cfg from "../config/GameConfiguration.js";
import { requireContext, requireScreen } from "../../../boot/function/ValidationFunctions.js";

export class BattleLoader {
    constructor(context) {
        requireContext(context, this);
        requireScreen(context, this);

        this.context.set("battleWidth", this.screen.getWidth() - (2 * cfg.BATTLE_ANCHOR_X));
        this.context.set("battleHeight", this.screen.getHeight() - (2 * cfg.BATTLE_ANCHOR_Y));
        this.context.set("battleWidthInEigths", (this.screen.getWidth() - (cfg.BATTLE_ANCHOR_X * 2)) / 8);
        this.context.set("battleHeightInEigths", (this.screen.getHeight() - (cfg.BATTLE_ANCHOR_Y * 2)) / 8);

        this.context.set("battleLeftButtonX", cfg.BATTLE_ANCHOR_X + (this.context.get("battleWidthInEigths") * 3));
        this.context.set("battleRightButtonX", cfg.BATTLE_ANCHOR_X + (this.context.get("battleWidthInEigths") * 5));
        this.context.set("battleTopButtonY", cfg.BATTLE_ANCHOR_Y + (this.context.get("battleHeightInEigths") * 5));
        this.context.set("battleBottomButtonY", cfg.BATTLE_ANCHOR_Y + (this.context.get("battleHeightInEigths") * 7));

        this.context.set("battleClawSymbolX", this.context.get("battleLeftButtonX") - 78);
        this.context.set("battleClawSymbolY", this.context.get("battleTopButtonY") - 78);

        this.context.set("battlePounceSymbolX", this.context.get("battleRightButtonX") - 175);
        this.context.set("battlePounceSymbolY", this.context.get("battleTopButtonY") - 160);

        this.context.set("battleBiteSymbolX", this.context.get("battleLeftButtonX") - 74);
        this.context.set("battleBiteSymbolY", this.context.get("battleBottomButtonY") - 74);

        this.context.set("battlePuffSymbolX", this.context.get("battleRightButtonX") - 100);
        this.context.set("battlePuffSymbolY", this.context.get("battleBottomButtonY") - 100);

        this.context.set("battleCatAttackX", this.screen.getWidth() - cfg.BATTLE_ANCHOR_X - cfg.PORTRAIT_WH + 40);

        this.context.set("battleCatNameTextY", this.screen.getHeight() - cfg.BATTLE_ANCHOR_Y);

        this.context.set("battleOpponentPixelX", this.screen.getWidth() - 350);
        this.context.set("battleOpponentHpTextX", this.screen.getWidth() - cfg.BATTLE_ANCHOR_X - (cfg.PORTRAIT_WH / 2));
        this.context.set("battleOpponentNameTextX", this.screen.getWidth() - cfg.PORTRAIT_WH);
        this.context.set("battleOpponentPortraitDrawingX", this.screen.getWidth() - cfg.BATTLE_ANCHOR_X - cfg.PORTRAIT_WH);
        this.context.set("battleOpponentRectangleDrawingX", this.screen.getWidth() - cfg.BATTLE_PORTRAIT_OPPONENT_X);

        this.context.setClass(new CatAttackDamageText(this.context));
        this.context.setClass(new CatBottomBiteAnimation(this.context));
        this.context.setClass(new CatHpText(this.context));
        this.context.setClass(new CatLeftClawAnimation(this.context));
        this.context.setClass(new CatNameText(this.context));
        this.context.setClass(new CatPixelAnimation(this.context));
        this.context.setClass(new CatPortraitDrawing(this.context));
        this.context.setClass(new CatRectangleDrawing(this.context));
        this.context.setClass(new CatRightClawAnimation(this.context));
        this.context.setClass(new CatTopBiteAnimation(this.context));
        this.context.setClass(new OpponentAttackDamageText(this.context));
        this.context.setClass(new OpponentHpText(this.context));
        this.context.setClass(new OpponentNameText(this.context));
        this.context.setClass(new OpponentPixelAnimation(this.context));
        this.context.setClass(new OpponentPortraitDrawing(this.context));
        this.context.setClass(new OpponentRectangleDrawing(this.context));
        this.context.setClass(new CatLosesText(this.context));
        this.context.setClass(new CatWinsText(this.context));
    }
}