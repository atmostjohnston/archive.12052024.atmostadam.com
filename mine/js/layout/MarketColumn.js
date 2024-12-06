import { Counter } from "./../component/Counter.js";
import { Shopkeep } from "./../component/Shopkeep.js";
import { MineConstants } from "./../configuration/MineConstants.js";
import { InventoryDecorator } from "./../decorator/InventoryDecorator.js";
import { AchievementDecorator } from "./../decorator/AchievementDecorator.js";
import { notNull } from "../../../boot/function/GameFunctions.js";

export class MarketColumn {
    constructor(context) {
        this.context = notNull("context", context, this);
        this.size = 6;
        this.color = "#add8e6";
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getLeft();
        this.y = this.screen.getHeight() * .05;
        this.w = this.screen.getWidth() * .2;
        this.h = this.screen.getHeight() * .9;

        const halfWidth = this.w / 2;

        this.titleX = this.x + (this.w / 8);
        this.titleY = this.y + (this.h * .96);

        this.tinWeaponY = this.y + (this.h * .35);
        this.copperWeaponY = this.tinWeaponY + 50;
        this.bronzeWeaponY = this.copperWeaponY + 50;
        this.ironWeaponY = this.bronzeWeaponY + 50;
        this.silverWeaponY = this.ironWeaponY + 50;
        this.goldWeaponY = this.silverWeaponY + 50;
        this.platinumWeaponY = this.goldWeaponY + 50;
        this.mithrilWeaponY = this.platinumWeaponY + 50;

        const counterIY = 720;
        const counterY = this.y + 170;

        const counterIX = 1200;
        const counterRightX = this.w - 90;
        const counterMiddleRightX = this.w - 144;
        const counterMiddleX = this.w - 216;
        const counterMiddleLeftX = this.w - 288;
        const counterLeftX = this.w - 380;

        this.context.set(MineConstants.COUNTER_RIGHT, new Counter(counterIX, counterIY, counterRightX, counterY));
        this.context.set(MineConstants.COUNTER_MIDDLE_RIGHT, new Counter(counterIX, counterIY, counterMiddleRightX, counterY));
        this.context.set(MineConstants.COUNTER_MIDDLE, new Counter(counterIX, counterIY, counterMiddleX, counterY));
        this.context.set(MineConstants.COUNTER_MIDDLE_LEFT, new Counter(counterIX, counterIY, counterMiddleLeftX, counterY));
        this.context.set(MineConstants.COUNTER_LEFT, new Counter(counterIX + 48, counterIY, counterLeftX, counterY));

        this.shopkeepX = halfWidth - 45;
        this.shopkeepY = this.y + 60;

        this.context.set(MineConstants.SHOPKEEP, new Shopkeep(this.shopkeepX, this.shopkeepY));

        this.loaded = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.loaded) {
            this.init();
        }
        if (AchievementDecorator.isLocked(MineConstants.MARKET_COLUMN)) {
            return;
        }

        this.context.get(MineConstants.COUNTER_RIGHT).update(tick);
        this.context.get(MineConstants.COUNTER_MIDDLE_RIGHT).update(tick);
        this.context.get(MineConstants.COUNTER_MIDDLE).update(tick);
        this.context.get(MineConstants.COUNTER_MIDDLE_LEFT).update(tick);
        this.context.get(MineConstants.COUNTER_LEFT).update(tick);

        this.context.get(MineConstants.SHOPKEEP).update(tick);

        this.marketX = this.x + 10;
        this.marketW = this.w - 20;
        this.marketH = this.h * .05;

        this.sellX = this.marketX + (this.marketW * .73);
    }

    draw() {
        if (AchievementDecorator.isLocked(MineConstants.MARKET_COLUMN)) {
            return;
        }

        const marketX = this.x + 10;
        const marketW = this.w - 20;
        const marketH = this.h * .05;

        if (AchievementDecorator.isUnlocked(MineConstants.TIN_WEAPON)) {
            this.drawWeapon(MineConstants.TIN, MineConstants.TIN_COLOR,
                InventoryDecorator.getAmountByName(MineConstants.TIN_WEAPON),
                marketX, this.tinWeaponY, marketW, marketH);
        }
        if (AchievementDecorator.isUnlocked(MineConstants.COPPER_WEAPON)) {
            this.drawWeapon(MineConstants.COPPER, MineConstants.COPPER_COLOR,
                InventoryDecorator.getAmountByName(MineConstants.COPPER_WEAPON),
                marketX, this.copperWeaponY, marketW, marketH);
        }
        if (AchievementDecorator.isUnlocked(MineConstants.BRONZE_WEAPON)) {
            this.drawWeapon(MineConstants.BRONZE, MineConstants.BRONZE_COLOR,
                InventoryDecorator.getAmountByName(MineConstants.BRONZE_WEAPON),
                marketX, this.bronzeWeaponY, marketW, marketH);
        }
        if (AchievementDecorator.isUnlocked(MineConstants.IRON_WEAPON)) {
            this.drawWeapon(MineConstants.IRON, MineConstants.IRON_COLOR,
                InventoryDecorator.getAmountByName(MineConstants.IRON_WEAPON),
                marketX, this.ironWeaponY, marketW, marketH);
        }
        if (AchievementDecorator.isUnlocked(MineConstants.SILVER_WEAPON)) {
            this.drawWeapon(MineConstants.SILVER, MineConstants.SILVER_COLOR,
                InventoryDecorator.getAmountByName(MineConstants.SILVER_WEAPON),
                marketX, this.silverWeaponY, marketW, marketH);
        }
        if (AchievementDecorator.isUnlocked(MineConstants.GOLD_WEAPON)) {
            this.drawWeapon(MineConstants.GOLD, MineConstants.GOLD_COLOR,
                InventoryDecorator.getAmountByName(MineConstants.GOLD_WEAPON),
                marketX, this.goldWeaponY, marketW, marketH);
        }
        if (AchievementDecorator.isUnlocked(MineConstants.PLATINUM_WEAPON)) {
            this.drawWeapon(MineConstants.PLATINUM, MineConstants.PLATINUM_COLOR,
                InventoryDecorator.getAmountByName(MineConstants.PLATINUM_WEAPON),
                marketX, this.platinumWeaponY, marketW, marketH);
        }
        if (AchievementDecorator.isUnlocked(MineConstants.MITHRIL_WEAPON)) {
            this.drawWeapon(MineConstants.MITHRIL, MineConstants.MITHRIL_COLOR,
                InventoryDecorator.getAmountByName(MineConstants.MITHRIL_WEAPON),
                marketX, this.mithrilWeaponY, marketW, marketH);
        }

        this.screen.drawText("Market", MineConstants.COLUMN_FONT,
            MineConstants.COLUMN_COLOR, this.titleX, this.titleY);

        this.context.get(MineConstants.COUNTER_RIGHT).draw();
        this.context.get(MineConstants.COUNTER_MIDDLE_RIGHT).draw();
        this.context.get(MineConstants.COUNTER_MIDDLE).draw();
        this.context.get(MineConstants.COUNTER_MIDDLE_LEFT).draw();
        this.context.get(MineConstants.COUNTER_LEFT).draw();

        this.context.get(MineConstants.SHOPKEEP).draw();
    }

    drawBackground() {
        this.color = "black";
        this.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);

        this.color = "white";
        this.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);

        if (AchievementDecorator.isLocked(MineConstants.MARKET_COLUMN)) {
            return;
        }

        this.screen.drawText("Market", MineConstants.COLUMN_FONT, MineConstants.COLUMN_COLOR, this.titleX, this.titleY);
    }

    drawWeapon(name, color, amount, x, y, w, h) {
        this.screen.drawFilledRectangle("white", x, y, w, h);
        this.screen.drawRectangle(3, "green", x, y, w, h);

        this.screen.drawImage(
            document.getElementById("Sword"),
            0,
            0,
            32,
            32,
            x + 7,
            y + 5,
            32,
            32
        );

        this.screen.drawText(name + ": " + amount, "26pt Arial", color, x + 48, y + 34);

        this.screen.drawFilledRectangle("green", x + (w * .73), y + (h * .1), w * .25, h * .8);
        this.screen.drawRectangle(3, "magenta", x + (w * .73), y + (h * .1), w * .25, h * .8);
        this.screen.drawText("SELL", "22pt Arial", "white", x + (w * .75), y + (h * .8));
    }

    onClick(x, y) {
        if (this.isLocked()) {
            return;
        }

        if (insideRectangle(x, y, this.x, this.y, this.sw, this.sh)) {

        }
    }
}