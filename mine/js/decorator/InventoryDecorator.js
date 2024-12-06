import { MineConstants } from "./../configuration/MineConstants.js";
import { AchievementDecorator } from "./AchievementDecorator.js";

export class InventoryDecorator {
    constructor(inventory) {
        if (!InventoryDecorator.instance) {
            InventoryDecorator.instance = this;
        }
        this.inventory = inventory;
        return InventoryDecorator.instance;
    }

    static addTinOre(amount) {
        if (this.unlockIfReady(MineConstants.TIN_ORE,
            InventoryDecorator.addAmountByName(MineConstants.TIN_ORE, amount),
            MineConstants.TIN_ORE_UNLOCK_AMOUNT)) {
            AchievementDecorator.newAchievement(MineConstants.SMELTING_COLUMN);
            AchievementDecorator.newAchievement(MineConstants.FURNACE);
            InventoryDecorator.showTinIngot = true;
        }
    }

    static addTinIngot(amount) {
        if (this.unlockIfReady(MineConstants.TIN_INGOT,
            InventoryDecorator.addAmountByName(MineConstants.TIN_INGOT, amount),
            MineConstants.TIN_INGOT_UNLOCK_AMOUNT)) {
            InventoryDecorator.showTinWeapon = true;
            AchievementDecorator.newAchievement(MineConstants.SMITHING_COLUMN);
            AchievementDecorator.newAchievement(MineConstants.ANVIL);
        }
    }

    static addTinWeapon(amount) {
        if (this.unlockIfReady(MineConstants.TIN_WEAPON,
            InventoryDecorator.addAmountByName(MineConstants.TIN_WEAPON, amount),
            MineConstants.TIN_WEAPON_UNLOCK_AMOUNT)) {
            InventoryDecorator.showCopperOre = true;
            AchievementDecorator.newAchievement(MineConstants.MARKET_COLUMN);
            AchievementDecorator.newAchievement(MineConstants.COUNTER);
            AchievementDecorator.newAchievement(MineConstants.SHOPKEEP);
            AchievementDecorator.newAchievement(MineConstants.COPPER_ROCK);
        }
    }

    static addCopperOre(amount) {
        if (this.unlockIfReady(MineConstants.COPPER_ORE,
            InventoryDecorator.addAmountByName(MineConstants.COPPER_ORE, amount),
            MineConstants.COPPER_ORE_UNLOCK_AMOUNT)) {
            InventoryDecorator.showCopperIngot = true;
        }
    }

    static addCopperIngot(amount) {
        if (this.unlockIfReady(MineConstants.COPPER_INGOT,
            InventoryDecorator.addAmountByName(MineConstants.COPPER_INGOT, amount),
            MineConstants.COPPER_INGOT_UNLOCK_AMOUNT)) {
            InventoryDecorator.showCopperWeapon = true;
        }
    }

    static addCopperWeapon(amount) {
        if (this.unlockIfReady(MineConstants.COPPER_WEAPON,
            InventoryDecorator.addAmountByName(MineConstants.COPPER_WEAPON, amount),
            MineConstants.COPPER_WEAPON_UNLOCK_AMOUNT)) {
            InventoryDecorator.showBronzeOre = true;
            InventoryDecorator.showBronzeIngot = true;
            AchievementDecorator.newAchievement(MineConstants.BRONZE_ORE);
        }
    }

    static addBronzeOre(amount) {
        if (this.unlockIfReady(MineConstants.BRONZE_ORE,
            InventoryDecorator.addAmountByName(MineConstants.BRONZE_ORE, amount),
            MineConstants.BRONZE_ORE_UNLOCK_AMOUNT)) {

        }
    }

    static addBronzeIngot(amount) {
        if (this.unlockIfReady(MineConstants.BRONZE_INGOT,
            InventoryDecorator.addAmountByName(MineConstants.BRONZE_INGOT, amount),
            MineConstants.BRONZE_INGOT_UNLOCK_AMOUNT)) {
            InventoryDecorator.showBronzeWeapon = true;
        }
    }

    static addBronzeWeapon(amount) {
        if (this.unlockIfReady(MineConstants.BRONZE_WEAPON,
            InventoryDecorator.addAmountByName(MineConstants.BRONZE_WEAPON, amount),
            MineConstants.BRONZE_WEAPON_UNLOCK_AMOUNT)) {
            InventoryDecorator.showIronOre = true;
            AchievementDecorator.newAchievement(MineConstants.IRON_ROCK);
        }
    }

    static addIronOre(amount) {
        if (this.unlockIfReady(MineConstants.IRON_ORE,
            InventoryDecorator.addAmountByName(MineConstants.IRON_ORE, amount),
            MineConstants.IRON_ORE_UNLOCK_AMOUNT)) {
            InventoryDecorator.showIronIngot = true;
        }
    }

    static addIronIngot(amount) {
        if (this.unlockIfReady(MineConstants.IRON_INGOT,
            InventoryDecorator.addAmountByName(MineConstants.IRON_INGOT, amount),
            MineConstants.IRON_INGOT_UNLOCK_AMOUNT)) {
            InventoryDecorator.showIronWeapon = true;
        }
    }

    static addIronWeapon(amount) {
        if (this.unlockIfReady(MineConstants.IRON_WEAPON,
            InventoryDecorator.addAmountByName(MineConstants.IRON_WEAPON, amount),
            MineConstants.IRON_WEAPON_UNLOCK_AMOUNT)) {
            InventoryDecorator.showSilverOre = true;
            AchievementDecorator.newAchievement(MineConstants.SILVER_ROCK);
        }
    }

    static addSilverOre(amount) {
        if (this.unlockIfReady(MineConstants.SILVER_ORE,
            InventoryDecorator.addAmountByName(MineConstants.SILVER_ORE, amount),
            MineConstants.SILVER_ORE_UNLOCK_AMOUNT)) {
            InventoryDecorator.showSilverIngot = true;
        }
    }

    static addSilverIngot(amount) {
        if (this.unlockIfReady(MineConstants.SILVER_INGOT,
            InventoryDecorator.addAmountByName(MineConstants.SILVER_INGOT, amount),
            MineConstants.SILVER_INGOT_UNLOCK_AMOUNT)) {
            InventoryDecorator.showSilverWeapon = true;
        }
    }

    static addSilverWeapon(amount) {
        if (this.unlockIfReady(MineConstants.SILVER_WEAPON,
            InventoryDecorator.addAmountByName(MineConstants.SILVER_WEAPON, amount),
            MineConstants.SILVER_WEAPON_UNLOCK_AMOUNT)) {
            InventoryDecorator.showGoldOre = true;
            AchievementDecorator.newAchievement(MineConstants.GOLD_ROCK);
        }
    }

    static addGoldOre(amount) {
        if (this.unlockIfReady(MineConstants.GOLD_ORE,
            InventoryDecorator.addAmountByName(MineConstants.GOLD_ORE, amount),
            MineConstants.GOLD_ORE_UNLOCK_AMOUNT)) {
            InventoryDecorator.showGoldIngot = true;
        }
    }

    static addGoldIngot(amount) {
        if (this.unlockIfReady(MineConstants.GOLD_INGOT,
            InventoryDecorator.addAmountByName(MineConstants.GOLD_INGOT, amount),
            MineConstants.GOLD_INGOT_UNLOCK_AMOUNT)) {
            InventoryDecorator.showGoldWeapon = true;
        }
    }

    static addGoldWeapon(amount) {
        if (this.unlockIfReady(MineConstants.GOLD_WEAPON,
            InventoryDecorator.addAmountByName(MineConstants.GOLD_WEAPON, amount),
            MineConstants.GOLD_WEAPON_UNLOCK_AMOUNT)) {
            InventoryDecorator.showPlatinumOre = true;
            AchievementDecorator.newAchievement(MineConstants.PLATINUM_ROCK);
        }
    }

    static addPlatinumOre(amount) {
        if (this.unlockIfReady(MineConstants.PLATINUM_ORE,
            InventoryDecorator.addAmountByName(MineConstants.PLATINUM_ORE, amount),
            MineConstants.PLATINUM_ORE_UNLOCK_AMOUNT)) {
            InventoryDecorator.showPlatinumIngot = true;
        }
    }

    static addPlatinumIngot(amount) {
        if (this.unlockIfReady(MineConstants.PLATINUM_INGOT,
            InventoryDecorator.addAmountByName(MineConstants.PLATINUM_INGOT, amount),
            MineConstants.PLATINUM_INGOT_UNLOCK_AMOUNT)) {
            InventoryDecorator.showPlatinumWeapon = true;
        }
    }

    static addPlatinumWeapon(amount) {
        if (this.unlockIfReady(MineConstants.PLATINUM_WEAPON,
            InventoryDecorator.addAmountByName(MineConstants.PLATINUM_WEAPON, amount),
            MineConstants.PLATINUM_WEAPON_UNLOCK_AMOUNT)) {
            InventoryDecorator.showMithrilOre = true;
            AchievementDecorator.newAchievement(MineConstants.MITHRIL_ROCK);
        }
    }

    static addMithrilOre(amount) {
        if (this.unlockIfReady(MineConstants.MITHRIL_ORE,
            InventoryDecorator.addAmountByName(MineConstants.MITHRIL_ORE, amount),
            MineConstants.MITHRIL_ORE_UNLOCK_AMOUNT)) {
            InventoryDecorator.showMithrilIngot = true;
        }
    }

    static addMithrilIngot(amount) {
        if (this.unlockIfReady(MineConstants.MITHRIL_INGOT,
            InventoryDecorator.addAmountByName(MineConstants.MITHRIL_INGOT, amount),
            MineConstants.MITHRIL_INGOT_UNLOCK_AMOUNT)) {
            InventoryDecorator.showMithrilWeapon = true;
        }
    }

    static addMithrilWeapon(amount) {
        if (this.unlockIfReady(MineConstants.MITHRIL_WEAPON,
            InventoryDecorator.addAmountByName(MineConstants.MITHRIL_WEAPON, amount),
            MineConstants.MITHRIL_WEAPON_UNLOCK_AMOUNT)) {
            // Placeholder for Adamantium Steel
        }
    }

    static getAmountByName(itemName) {
        var amount = 0;
        this.instance.inventory.items.forEach(e => { if (e.name == itemName) { amount = e.amount; } });
        return amount;
    }

    static addAmountByName(itemName, itemAmount) {
        this.instance.inventory.items.forEach(e => { if (e.name == itemName) { e.amount += itemAmount; } });
        return InventoryDecorator.getAmountByName(itemName);
    }

    static unlockIfReady(name, amount, unlockAmount) {
        if (!AchievementDecorator.isUnlocked(name) && amount > unlockAmount) {
            AchievementDecorator.newAchievement(name);
            return true;
        }
        return false;
    }

    static getInventory() {
        return this.instance.inventory;
    }

    static getInstance() {
        return InventoryDecorator.instance;
    }
}