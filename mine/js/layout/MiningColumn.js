import { notNull } from "../../../boot/function/GameFunctions.js";
import { MineConstants } from "./../configuration/MineConstants.js";

export class MiningColumn {
    constructor(context) {
        this.context = notNull("context", context, this);
        this.size = 6;
        this.color = "#add8e6";
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .6;
        this.y = this.screen.getHeight() * .05;
        this.w = this.screen.getWidth() * .2;
        this.h = this.screen.getHeight() * .9;
        this.titleX = this.x + (this.w / 8);
        this.titleY = this.y + (this.h * .96);

        this.loaded = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.loaded) {
            this.init();
        }

        this.context.get(MineConstants.TIN_ROCK).update(tick);
        this.context.get(MineConstants.COPPER_ROCK).update(tick);
        this.context.get(MineConstants.IRON_ROCK).update(tick);
        this.context.get(MineConstants.SILVER_ROCK).update(tick);
        this.context.get(MineConstants.GOLD_ROCK).update(tick);
        this.context.get(MineConstants.PLATINUM_ROCK).update(tick);
        this.context.get(MineConstants.MITHRIL_ROCK).update(tick);

        this.context.get(MineConstants.TIN_PICKAXE).update(tick);
        this.context.get(MineConstants.COPPER_PICKAXE).update(tick);
        this.context.get(MineConstants.IRON_PICKAXE).update(tick);
        this.context.get(MineConstants.SILVER_PICKAXE).update(tick);
        this.context.get(MineConstants.GOLD_PICKAXE).update(tick);
        this.context.get(MineConstants.PLATINUM_PICKAXE).update(tick);
        this.context.get(MineConstants.MITHRIL_PICKAXE).update(tick);
    }

    draw() {
        this.context.get(MineConstants.TIN_ROCK).draw();
        this.context.get(MineConstants.COPPER_ROCK).draw();
        this.context.get(MineConstants.IRON_ROCK).draw();
        this.context.get(MineConstants.SILVER_ROCK).draw();
        this.context.get(MineConstants.GOLD_ROCK).draw();
        this.context.get(MineConstants.PLATINUM_ROCK).draw();
        this.context.get(MineConstants.MITHRIL_ROCK).draw();

        this.context.get(MineConstants.TIN_PICKAXE).draw();
        this.context.get(MineConstants.COPPER_PICKAXE).draw();
        this.context.get(MineConstants.IRON_PICKAXE).draw();
        this.context.get(MineConstants.SILVER_PICKAXE).draw();
        this.context.get(MineConstants.GOLD_PICKAXE).draw();
        this.context.get(MineConstants.PLATINUM_PICKAXE).draw();
        this.context.get(MineConstants.MITHRIL_PICKAXE).draw();
    }

    drawBackground() {
        this.color = "black";
        this.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);

        this.color = "white";
        this.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);

        this.screen.drawText("Mining", MineConstants.COLUMN_FONT, MineConstants.COLUMN_COLOR, this.titleX, this.titleY);
        this.screen.drawImage(
            "MineCart",
            0,
            0,
            852,
            720,
            this.x + (this.w / 4),
            this.y + (this.h / 50),
            200,
            200
        )
    }
}