import { CurrencyDecorator } from "../decorator/CurrencyDecorator.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { MineConstants } from "./../configuration/MineConstants.js";
import { AchievementDecorator } from "../decorator/AchievementDecorator.js";
import { notNull } from "../../../boot/function/GameFunctions.js";

export class InventoryColumn {
    constructor(context) {
        this.context = notNull("context", context, this);

        this.size = 6;

        this.copperCoinY = 115;
        this.silverCoinY = this.copperCoinY + 50;
        this.goldCoinY = this.silverCoinY + 50;

        this.tinOreY = this.goldCoinY + 50;
        this.tinIngotY = this.tinOreY + 50;
        this.tinWeaponY = this.tinIngotY + 50;

        this.copperOreY = this.tinWeaponY + 50;
        this.copperIngotY = this.copperOreY + 50;
        this.copperWeaponY = this.copperIngotY + 50;

        this.bronzeIngotY = this.copperWeaponY + 50;
        this.bronzeWeaponY = this.bronzeIngotY + 50;

        this.ironOreY = this.bronzeWeaponY + 50;
        this.ironIngotY = this.ironOreY + 50;
        this.ironWeaponY = this.ironIngotY + 50;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .8;
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
    }

    draw() {
        const inventoryX = this.x + 10;
        const inventoryW = this.screen.getWidth() * .09;
        const inventoryH = 40;

        // COINS
        if (AchievementDecorator.isUnlocked(MineConstants.COPPER_COIN)) {
            this.drawCoin(this.context.getImage(MineConstants.COPPER_COIN), CurrencyDecorator.getCopperCoins(),
                inventoryX, this.copperCoinY, inventoryW, inventoryH);
        }
        if (AchievementDecorator.isUnlocked(MineConstants.SILVER_COIN)) {
            this.drawCoin(this.context.getImage(MineConstants.SILVER_COIN), CurrencyDecorator.getSilverCoins(),
                inventoryX, this.silverCoinY, inventoryW, inventoryH);
        }
        if (AchievementDecorator.isUnlocked(MineConstants.GOLD_COIN)) {
            this.drawCoin(this.context.getImage(MineConstants.GOLD_COIN), CurrencyDecorator.getGoldCoins(),
                inventoryX, this.goldCoinY, inventoryW, inventoryH);
        }

        if (AchievementDecorator.isUnlocked(MineConstants.TIN_ROCK)) {
            this.drawOre(InventoryDecorator.getAmountByName(MineConstants.TIN_ORE),
                64, 288, inventoryX, this.tinOreY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showTinIngot) {
            this.drawIngot(InventoryDecorator.getAmountByName(MineConstants.TIN_INGOT),
                32, 348, inventoryX, this.tinIngotY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showTinWeapon) {
            this.drawWeapon(InventoryDecorator.getAmountByName(MineConstants.TIN_WEAPON),
                inventoryX, this.tinWeaponY, inventoryW, inventoryH);
        }

        if (InventoryDecorator.showCopperOre) {
            this.drawOre(InventoryDecorator.getAmountByName(MineConstants.COPPER_ORE),
                96, 288, inventoryX, this.copperOreY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showCopperIngot) {
            this.drawIngot(InventoryDecorator.getAmountByName(MineConstants.COPPER_INGOT),
                96, 348, inventoryX, this.copperIngotY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showCopperWeapon) {
            this.drawWeapon(InventoryDecorator.getAmountByName(MineConstants.COPPER_WEAPON),
                inventoryX, this.copperWeaponY, inventoryW, inventoryH);
        }

        if (InventoryDecorator.showBronzeIngot) {
            this.drawIngot(InventoryDecorator.getAmountByName(MineConstants.BRONZE_INGOT),
                192, 348, inventoryX, this.bronzeIngotY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showBronzeWeapon) {
            this.drawWeapon(InventoryDecorator.getAmountByName(MineConstants.BRONZE_WEAPON),
                inventoryX, this.bronzeWeaponY, inventoryW, inventoryH);
        }

        if (InventoryDecorator.showIronOre) {
            this.drawOre(InventoryDecorator.getAmountByName(MineConstants.IRON_ORE),
                128, 288, inventoryX, this.ironOreY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showIronIngot) {
            this.drawIngot(InventoryDecorator.getAmountByName(MineConstants.IRON_INGOT),
                128, 348, inventoryX, this.ironIngotY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showIronWeapon) {
            this.drawWeapon(InventoryDecorator.getAmountByName(MineConstants.IRON_WEAPON),
                inventoryX, this.ironWeaponY, inventoryW, inventoryH);
        }

        if (InventoryDecorator.showSilverOre) {
            this.drawOre(InventoryDecorator.getAmountByName(MineConstants.SILVER_ORE),
                128, 288, inventoryX + inventoryW + 40, this.copperCoinY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showSilverIngot) {
            this.drawIngot(InventoryDecorator.getAmountByName(MineConstants.SILVER_INGOT),
                128, 348, inventoryX + inventoryW + 40, this.silverCoinY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showSilverWeapon) {
            this.drawWeapon(InventoryDecorator.getAmountByName(MineConstants.SILVER_WEAPON),
                inventoryX + inventoryW + 40, this.goldCoinY, inventoryW, inventoryH);
        }

        if (InventoryDecorator.showGoldOre) {
            this.drawOre(InventoryDecorator.getAmountByName(MineConstants.GOLD_ORE),
                128, 288, inventoryX + inventoryW + 40, this.tinOreY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showGoldIngot) {
            this.drawIngot(InventoryDecorator.getAmountByName(MineConstants.GOLD_INGOT),
                128, 348, inventoryX + inventoryW + 40, this.tinIngotY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showGoldWeapon) {
            this.drawWeapon(InventoryDecorator.getAmountByName(MineConstants.GOLD_WEAPON),
                inventoryX + inventoryW + 40, this.tinWeaponY, inventoryW, inventoryH);
        }

        if (InventoryDecorator.showPlatinumOre) {
            this.drawOre(InventoryDecorator.getAmountByName(MineConstants.PLATINUM_ORE),
                128, 288, inventoryX + inventoryW + 40, this.copperOreY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showPlatinumIngot) {
            this.drawIngot(InventoryDecorator.getAmountByName(MineConstants.PLATINUM_INGOT),
                128, 348, inventoryX + inventoryW + 40, this.copperIngotY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showPlatinumWeapon) {
            this.drawWeapon(InventoryDecorator.getAmountByName(MineConstants.PLATINUM_WEAPON),
                inventoryX + inventoryW + 40, this.copperWeaponY, inventoryW, inventoryH);
        }

        if (InventoryDecorator.showMithrilOre) {
            this.drawOre(InventoryDecorator.getAmountByName(MineConstants.MITHRIL_ORE),
                128, 288, inventoryX + inventoryW + 40, this.bronzeIngotY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showMithrilIngot) {
            this.drawIngot(InventoryDecorator.getAmountByName(MineConstants.MITHRIL_INGOT),
                128, 348, inventoryX + inventoryW + 40, this.bronzeWeaponY, inventoryW, inventoryH);
        }
        if (InventoryDecorator.showMithrilWeapon) {
            this.drawWeapon(InventoryDecorator.getAmountByName(MineConstants.MITHRIL_WEAPON),
                inventoryX + inventoryW + 40, this.ironOreY, inventoryW, inventoryH);
        }
    }

    drawBackground() {
        this.color = "black";
        this.screen.drawRectangle("black", this.x, this.y, this.w, this.h);

        this.screen.drawImage(
            this.context.getImage("Backpack"),
            0,
            0,
            442,
            626,
            this.x + (this.w / 3),
            this.y,
            147,
            209
        );

        this.color = "white";
        this.screen.drawRectangleOutlined("white", this.x, this.y, this.w, this.h);

        this.screen.drawText("Inventory", MineConstants.COLUMN_FONT,
            MineConstants.COLUMN_COLOR, this.titleX, this.titleY);

    }

    drawRow(id, amount, x, y, w, h) {
        this.screen.drawRectangle("white", x, y, w, h);
        this.screen.drawRectangleOutlined(3, "green", x, y, w, h);
        this.screen.drawImage(id, 0, 0, 32, 32, x, y, 48, 48);
        this.screen.drawText(amount, "32pt Arial", "black", x + 48, y + 36);
    }

    drawCoin(image, amount, x, y, w, h) {
        this.screen.drawRectangle("white", x, y, w, h);
        this.screen.drawRectangleOutlined(3, "green", x, y, w, h);

        this.screen.drawImage(
            image,
            0,
            0,
            32,
            32,
            x,
            y - 5,
            48,
            48
        );

        this.screen.drawText(amount, "32pt Arial", "black", x + 48, y + 36);
    }

    drawOre(amount, ix, iy, x, y, w, h) {
        this.screen.drawRectangle("white", x, y, w, h);
        this.screen.drawRectangleOutlined(3, "green", x, y, w, h);

        this.screen.drawImage(
            this.context.getImage("OreSpritesheet"),
            ix,
            iy,
            32,
            32,
            x,
            y,
            48,
            48
        );

        this.screen.drawText(amount, "32pt Arial", "black", x + 48, y + 36);
    }

    drawIngot(amount, ix, iy, x, y, w, h) {
        this.screen.drawRectangle("white", x, y, w, h);
        this.screen.drawRectangleOutlined(3, "green", x, y, w, h);

        this.screen.drawImage(
            this.context.getImage("OreSpritesheet"),
            ix,
            iy,
            32,
            32,
            x,
            y - 10,
            48,
            48
        );

        this.screen.drawText(amount, "32pt Arial", "black", x + 48, y + 36);
    }

    drawWeapon(amount, x, y, w, h) {
        this.screen.drawRectangle("white", x, y, w, h);
        this.screen.drawRectangleOutlined(3, "green", x, y, w, h);
        this.screen.drawImage(this.context.getImage("Sword"), 0, 0, 32, 32, x + 7, y + 5, 32, 32);
        this.screen.drawText(amount, "32pt Arial", "black", x + 48, y + 36);
    }
}