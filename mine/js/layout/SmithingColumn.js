import { notNull } from "../../../boot/function/GameFunctions.js";
import { Anvil } from "./../component/Anvil.js";
import { MineConstants } from "./../configuration/MineConstants.js";
import { AchievementDecorator } from "./../decorator/AchievementDecorator.js";

export class SmithingColumn {
    constructor(context) {
        this.context = notNull("context", context, this);
        this.size = 6;
        this.color = "#add8e6";
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .2;
        this.y = this.screen.getHeight() * .05;
        this.w = this.screen.getWidth() * .2;
        this.h = this.screen.getHeight() * .9;

        const halfWidth = this.w / 2;

        this.titleX = this.x + (this.w / 8);
        this.titleY = this.y + (this.h * .96);

        this.context.set(MineConstants.ANVIL, new Anvil(this.x + (this.w / 3.5), this.y - (this.h * .03)));

        this.loaded = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.loaded) {
            this.init();
        }

        if (AchievementDecorator.isLocked(MineConstants.SMITHING_COLUMN)) {
            return;
        }

        this.context.get(MineConstants.ANVIL).update(tick);

        this.context.get(MineConstants.TIN_INGOT).update(tick);
        this.context.get(MineConstants.COPPER_INGOT).update(tick);
        this.context.get(MineConstants.BRONZE_INGOT).update(tick);
        this.context.get(MineConstants.IRON_INGOT).update(tick);
        this.context.get(MineConstants.SILVER_INGOT).update(tick);
        this.context.get(MineConstants.GOLD_INGOT).update(tick);
        this.context.get(MineConstants.PLATINUM_INGOT).update(tick);
        this.context.get(MineConstants.MITHRIL_INGOT).update(tick);

        this.context.get(MineConstants.TIN_HAMMER).update(tick);
        this.context.get(MineConstants.COPPER_HAMMER).update(tick);
        this.context.get(MineConstants.BRONZE_HAMMER).update(tick);
        this.context.get(MineConstants.IRON_HAMMER).update(tick);
        this.context.get(MineConstants.SILVER_HAMMER).update(tick);
        this.context.get(MineConstants.GOLD_HAMMER).update(tick);
        this.context.get(MineConstants.PLATINUM_HAMMER).update(tick);
        this.context.get(MineConstants.MITHRIL_HAMMER).update(tick);
    }

    draw() {
        if (AchievementDecorator.isLocked(MineConstants.SMITHING_COLUMN)) {
            return;
        }

        this.context.get(MineConstants.TIN_INGOT).draw();
        this.context.get(MineConstants.COPPER_INGOT).draw();
        this.context.get(MineConstants.BRONZE_INGOT).draw();
        this.context.get(MineConstants.IRON_INGOT).draw();
        this.context.get(MineConstants.SILVER_INGOT).draw();
        this.context.get(MineConstants.GOLD_INGOT).draw();
        this.context.get(MineConstants.PLATINUM_INGOT).draw();
        this.context.get(MineConstants.MITHRIL_INGOT).draw();

        this.context.get(MineConstants.TIN_HAMMER).draw();
        this.context.get(MineConstants.COPPER_HAMMER).draw();
        this.context.get(MineConstants.BRONZE_HAMMER).draw();
        this.context.get(MineConstants.IRON_HAMMER).draw();
        this.context.get(MineConstants.SILVER_HAMMER).draw();
        this.context.get(MineConstants.GOLD_HAMMER).draw();
        this.context.get(MineConstants.PLATINUM_HAMMER).draw();
        this.context.get(MineConstants.MITHRIL_HAMMER).draw();
    }

    drawBackground() {
        this.color = "black";
        this.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);

        this.color = "white";
        this.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);

        if (AchievementDecorator.isLocked(MineConstants.SMITHING_COLUMN)) {
            return;
        }

        this.screen.drawText("Smithing", MineConstants.COLUMN_FONT,
            MineConstants.COLUMN_COLOR, this.titleX, this.titleY);

        this.context.get(MineConstants.ANVIL).draw();
    }
}