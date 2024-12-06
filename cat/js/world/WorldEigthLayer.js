import { Drawing } from "../api/Drawing.js"
import * as cfg from "../config/GameConfiguration.js";

export class WorldEigthLayer extends Drawing {
    constructor(context) {
        super(context);

        this.heartImage = this.context.getImage("heart");
    }

    draw() {
        this.clearCatInfoArea();
        this.drawName();
        this.drawLevel();
        this.drawHp();
        this.drawHeart();
    }

    clearCatInfoArea() {
        super.drawFilledRectangle(
            cfg.COLOR_WHITE,
            this.screen.getWidth() - 700,
            0,
            700,
            64
        );
    }

    drawName() {
        super.drawText(
            this.context.get("CatDecorator").getCat().name,
            cfg.WORLD_SCREEN_FONT_BOLD_30,
            cfg.COLOR_BLUE,
            this.screen.getWidth() - cfg.WORLD_CAT_NAME_TEXT_X - 120,
            cfg.WORLD_CAT_NAME_TEXT_Y
        )
    }

    drawLevel() {
        super.drawText(
            "Level: " + this.context.get("CatDecorator").getCat().level + " (" + this.context.get("CatDecorator").getCat().xp + "xp)",
            cfg.WORLD_SCREEN_FONT_BOLD_30,
            cfg.COLOR_ORANGE,
            this.screen.getWidth() - cfg.WORLD_CAT_LEVEL_TEXT_X - 120,
            cfg.WORLD_CAT_LEVEL_TEXT_Y
        )
    }

    drawHp() {
        super.drawText(
            this.context.get("CatDecorator").getCat().currentHp + "/" + this.context.get("CatDecorator").getCat().maxHp,
            cfg.WORLD_SCREEN_FONT_BOLD_30,
            cfg.COLOR_GREEN,
            this.screen.getWidth() - cfg.WORLD_CAT_HP_TEXT_X,
            cfg.WORLD_CAT_HP_TEXT_Y
        )
    }

    drawHeart() {
        super.drawImage(
            this.heartImage,
            0,
            0,
            256,
            256,
            this.screen.getWidth() - cfg.WORLD_HEART_X,
            cfg.WORLD_HEART_Y,
            50,
            50);
    }
}