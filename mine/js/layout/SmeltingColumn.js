import { Furnace } from "./../component/Furnace.js";
import { MineConstants } from "./../configuration/MineConstants.js";
import { AchievementDecorator } from "./../decorator/AchievementDecorator.js";
import { notNull } from "../../../boot/function/GameFunctions.js";

export class SmeltingColumn {
    constructor(context) {
        this.context = notNull("context", context, this);
        this.context.set(MineConstants.FURNACE, new Furnace(this.context));
        this.size = 6;
        this.color = "#add8e6";
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .4;
        this.y = this.screen.getHeight() * .05;
        this.w = this.screen.getWidth() * .2;
        this.h = this.screen.getHeight() * .9;

        const halfWidth = this.w / 2;

        this.titleX = this.x + (this.w / 8);
        this.titleY = this.y + (this.h * .96);

        //this.context.set(MineConstants.FURNACE, new Furnace(this.x + (this.w / 3.5), this.y));

        this.loaded = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.loaded) {
            this.init();
        }
        if (AchievementDecorator.isLocked(MineConstants.SMELTING_COLUMN)) {
            return;
        }

        this.context.get(MineConstants.FURNACE).update(tick);

        this.context.get(MineConstants.TIN_ORE).update(tick);
        this.context.get(MineConstants.COPPER_ORE).update(tick);
        this.context.get(MineConstants.BRONZE_ORE).update(tick);
        this.context.get(MineConstants.IRON_ORE).update(tick);
        this.context.get(MineConstants.SILVER_ORE).update(tick);
        this.context.get(MineConstants.GOLD_ORE).update(tick);
        this.context.get(MineConstants.PLATINUM_ORE).update(tick);
        this.context.get(MineConstants.MITHRIL_ORE).update(tick);

        this.context.get(MineConstants.TIN_SHOVEL).update(tick);
        this.context.get(MineConstants.COPPER_SHOVEL).update(tick);
        this.context.get(MineConstants.BRONZE_SHOVEL).update(tick);
        this.context.get(MineConstants.IRON_SHOVEL).update(tick);
        this.context.get(MineConstants.SILVER_SHOVEL).update(tick);
        this.context.get(MineConstants.GOLD_SHOVEL).update(tick);
        this.context.get(MineConstants.PLATINUM_SHOVEL).update(tick);
        this.context.get(MineConstants.MITHRIL_SHOVEL).update(tick);
    }

    draw() {
        if (AchievementDecorator.isLocked(MineConstants.SMELTING_COLUMN)) {
            return;
        }

        this.context.get(MineConstants.FURNACE).draw();

        this.context.get(MineConstants.TIN_ORE).draw();
        this.context.get(MineConstants.COPPER_ORE).draw();
        this.context.get(MineConstants.BRONZE_ORE).draw();
        this.context.get(MineConstants.IRON_ORE).draw();
        this.context.get(MineConstants.SILVER_ORE).draw();
        this.context.get(MineConstants.GOLD_ORE).draw();
        this.context.get(MineConstants.PLATINUM_ORE).draw();
        this.context.get(MineConstants.MITHRIL_ORE).draw();

        this.context.get(MineConstants.TIN_SHOVEL).draw();
        this.context.get(MineConstants.COPPER_SHOVEL).draw();
        this.context.get(MineConstants.BRONZE_SHOVEL).draw();
        this.context.get(MineConstants.IRON_SHOVEL).draw();
        this.context.get(MineConstants.SILVER_SHOVEL).draw();
        this.context.get(MineConstants.GOLD_SHOVEL).draw();
        this.context.get(MineConstants.PLATINUM_SHOVEL).draw();
        this.context.get(MineConstants.MITHRIL_SHOVEL).draw();
    }

    drawBackground() {
        this.color = "black";
        this.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);

        this.color = "white";
        this.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);

        if (AchievementDecorator.isLocked(MineConstants.SMELTING_COLUMN)) {
            return;
        }

        this.screen.drawText("Smelting", MineConstants.COLUMN_FONT,
            MineConstants.COLUMN_COLOR, this.titleX, this.titleY);
    }
}