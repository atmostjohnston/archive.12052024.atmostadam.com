import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "./../api/Drawing.js";
import { requireTick } from "../../../boot/function/ValidationFunctions.js";

export class OpponentRectangleDrawing extends Drawing {
    constructor(context) {
        super(context);

        this.size = cfg.BATTLE_RECTANGLE_SIZE;
        this.color = cfg.BATTLE_RECTANGLE_OPPONENT_COLOR;
        this.w = cfg.BATTLE_RECTANGLE_SWSH;
        this.h = cfg.BATTLE_RECTANGLE_SWSH;
        this.y = cfg.BATTLE_RECTANGLE_Y - 3.5;
    }


    init() {
        this.x = this.context.get("battleOpponentRectangleDrawingX");
        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
    }

    draw() {
        super.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);
    }
}