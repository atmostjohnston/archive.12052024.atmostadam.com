import { Gamer } from "./../model/Gamer.js";
import { MineConstants } from "../configuration/MineConstants.js";

import { GamerDecorator } from "../decorator/GamerDecorator.js";
import { AchievementDecorator } from "../decorator/AchievementDecorator.js";
import { CurrencyDecorator } from "../decorator/CurrencyDecorator.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";

import { Achievement } from "../model/Achievement.js";
import { Unlocked } from "../model/Unlocked.js";
import { Currency } from "../model/Currency.js";
import { Inventory } from "../model/Inventory.js";
import { MineGame } from "../model/MineGame.js";
import { Coin } from "../model/Coin.js";
import { Gem } from "../model/Gem.js";
import { Item } from "../model/Item.js";

import { TinPickaxe } from "./../component/pickaxe/TinPickaxe.js";
import { CopperPickaxe } from "./../component/pickaxe/CopperPickaxe.js";
import { IronPickaxe } from "./../component/pickaxe/IronPickaxe.js";
import { SilverPickaxe } from "./../component/pickaxe/SilverPickaxe.js";
import { GoldPickaxe } from "./../component/pickaxe/GoldPickaxe.js";
import { PlatinumPickaxe } from "./../component/pickaxe/PlatinumPickaxe.js";
import { MithrilPickaxe } from "./../component/pickaxe/MithrilPickaxe.js";

import { TinShovel } from "./../component/shovel/TinShovel.js";
import { CopperShovel } from "./../component/shovel/CopperShovel.js";
import { BronzeShovel } from "./../component/shovel/BronzeShovel.js";
import { IronShovel } from "./../component/shovel/IronShovel.js";
import { SilverShovel } from "./../component/shovel/SilverShovel.js";
import { GoldShovel } from "./../component/shovel/GoldShovel.js";
import { PlatinumShovel } from "./../component/shovel/PlatinumShovel.js";
import { MithrilShovel } from "./../component/shovel/MithrilShovel.js";

import { TinHammer } from "./../component/hammer/TinHammer.js";
import { CopperHammer } from "./../component/hammer/CopperHammer.js";
import { BronzeHammer } from "./../component/hammer/BronzeHammer.js";
import { IronHammer } from "./../component/hammer/IronHammer.js";
import { SilverHammer } from "./../component/hammer/SilverHammer.js";
import { GoldHammer } from "./../component/hammer/GoldHammer.js";
import { PlatinumHammer } from "./../component/hammer/PlatinumHammer.js";
import { MithrilHammer } from "./../component/hammer/MithrilHammer.js";

import { TinRock } from "./../component/rock/TinRock.js";
import { CopperRock } from "./../component/rock/CopperRock.js";
import { IronRock } from "./../component/rock/IronRock.js";
import { SilverRock } from "./../component/rock/SilverRock.js";
import { GoldRock } from "./../component/rock/GoldRock.js";
import { PlatinumRock } from "./../component/rock/PlatinumRock.js";
import { MithrilRock } from "./../component/rock/MithrilRock.js";

import { TinOre } from "./../component/ore/TinOre.js";
import { CopperOre } from "./../component/ore/CopperOre.js";
import { BronzeOre } from "./../component/ore/BronzeOre.js";
import { IronOre } from "./../component/ore/IronOre.js";
import { SilverOre } from "./../component/ore/SilverOre.js";
import { GoldOre } from "./../component/ore/GoldOre.js";
import { PlatinumOre } from "./../component/ore/PlatinumOre.js";
import { MithrilOre } from "./../component/ore/MithrilOre.js";

import { TinIngot } from "./../component/ingot/TinIngot.js";
import { CopperIngot } from "./../component/ingot/CopperIngot.js";
import { BronzeIngot } from "./../component/ingot/BronzeIngot.js";
import { IronIngot } from "./../component/ingot/IronIngot.js";
import { SilverIngot } from "./../component/ingot/SilverIngot.js";
import { GoldIngot } from "./../component/ingot/GoldIngot.js";
import { PlatinumIngot } from "./../component/ingot/PlatinumIngot.js";
import { MithrilIngot } from "./../component/ingot/MithrilIngot.js";
import { notNull } from "../../../boot/function/GameFunctions.js";

export class MineGameContext {
    constructor(context) {
        this.context = notNull("context", context, this);

        new AchievementDecorator(
            new Achievement([
                new Unlocked(MineConstants.TIN_ROCK),
                new Unlocked(MineConstants.COPPER_COIN),
                new Unlocked(MineConstants.SILVER_COIN),
                new Unlocked(MineConstants.GOLD_COIN)]));

        new CurrencyDecorator(
            new Currency(
                [
                    this.buildCoin(MineConstants.COPPER_COIN, MineConstants.COPPER_COIN_IMAGE_ID, 0),
                    this.buildCoin(MineConstants.SILVER_COIN, MineConstants.SILVER_COIN_IMAGE_ID, 0),
                    this.buildCoin(MineConstants.GOLD_COIN, MineConstants.GOLD_COIN_IMAGE_ID, 0)
                ],
                [
                    this.buildGem(MineConstants.DIAMOND, MineConstants.DIAMOND_IMAGE_ID, 0),
                    this.buildGem(MineConstants.RUBY, MineConstants.RUBY_IMAGE_ID, 0),
                    this.buildGem(MineConstants.SAPPHIRE, MineConstants.SAPPHIRE_IMAGE_ID, 0),
                    this.buildGem(MineConstants.EMERALD, MineConstants.EMERALD_IMAGE_ID, 0),
                    this.buildGem(MineConstants.AMETHYST, MineConstants.AMETHYST_IMAGE_ID, 0)
                ]
            ));

        new InventoryDecorator(
            new Inventory([
                this.buildItem(MineConstants.TIN_ORE, MineConstants.TIN_ORE_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.TIN_INGOT, MineConstants.TIN_INGOT_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.TIN_WEAPON, MineConstants.TIN_WEAPON_IMAGE_ID, MineConstants.ORE_TYPE, 0),

                this.buildItem(MineConstants.COPPER_ORE, MineConstants.COPPER_ORE_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.COPPER_INGOT, MineConstants.COPPER_INGOT_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.COPPER_WEAPON, MineConstants.COPPER_WEAPON_IMAGE_ID, MineConstants.ORE_TYPE, 0),

                this.buildItem(MineConstants.BRONZE_ORE, MineConstants.BRONZE_ORE_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.BRONZE_INGOT, MineConstants.BRONZE_INGOT_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.BRONZE_WEAPON, MineConstants.BRONZE_WEAPON_IMAGE_ID, MineConstants.ORE_TYPE, 0),

                this.buildItem(MineConstants.IRON_ORE, MineConstants.IRON_ORE_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.IRON_INGOT, MineConstants.IRON_INGOT_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.IRON_WEAPON, MineConstants.IRON_WEAPON_IMAGE_ID, MineConstants.ORE_TYPE, 0),

                this.buildItem(MineConstants.SILVER_ORE, MineConstants.SILVER_ORE_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.SILVER_INGOT, MineConstants.SILVER_INGOT_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.SILVER_WEAPON, MineConstants.SILVER_WEAPON_IMAGE_ID, MineConstants.ORE_TYPE, 0),

                this.buildItem(MineConstants.GOLD_ORE, MineConstants.GOLD_ORE_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.GOLD_INGOT, MineConstants.GOLD_INGOT_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.GOLD_WEAPON, MineConstants.GOLD_WEAPON_IMAGE_ID, MineConstants.ORE_TYPE, 0),

                this.buildItem(MineConstants.PLATINUM_ORE, MineConstants.PLATINUM_ORE_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.PLATINUM_INGOT, MineConstants.PLATINUM_INGOT_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.PLATINUM_WEAPON, MineConstants.PLATINUM_WEAPON_IMAGE_ID, MineConstants.ORE_TYPE, 0),

                this.buildItem(MineConstants.MITHRIL_ORE, MineConstants.MITHRIL_ORE_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.MITHRIL_INGOT, MineConstants.MITHRIL_INGOT_IMAGE_ID, MineConstants.ORE_TYPE, 0),
                this.buildItem(MineConstants.MITHRIL_WEAPON, MineConstants.MITHRIL_WEAPON_IMAGE_ID, MineConstants.ORE_TYPE, 0)
            ])
        );

        new GamerDecorator(new Gamer(
            crypto.randomUUID(),
            new MineGame(
                AchievementDecorator.getAchievement(),
                CurrencyDecorator.getCurrency(),
                InventoryDecorator.getInventory()
            )));

        this.context.setClass(new TinPickaxe(this.context));
        this.context.setClass(new CopperPickaxe(this.context));
        this.context.setClass(new IronPickaxe(this.context));
        this.context.setClass(new SilverPickaxe(this.context));
        this.context.setClass(new GoldPickaxe(this.context));
        this.context.setClass(new PlatinumPickaxe(this.context));
        this.context.setClass(new MithrilPickaxe(this.context));

        this.context.setClass(new TinShovel(this.context));
        this.context.setClass(new CopperShovel(this.context));
        this.context.setClass(new BronzeShovel(this.context));
        this.context.setClass(new IronShovel(this.context));
        this.context.setClass(new SilverShovel(this.context));
        this.context.setClass(new GoldShovel(this.context));
        this.context.setClass(new PlatinumShovel(this.context));
        this.context.setClass(new MithrilShovel(this.context));

        this.context.setClass(new TinHammer(this.context));
        this.context.setClass(new CopperHammer(this.context));
        this.context.setClass(new BronzeHammer(this.context));
        this.context.setClass(new IronHammer(this.context));
        this.context.setClass(new SilverHammer(this.context));
        this.context.setClass(new GoldHammer(this.context));
        this.context.setClass(new PlatinumHammer(this.context));
        this.context.setClass(new MithrilHammer(this.context));


        this.context.setClassAndClickSubscriber(new TinRock(this.context));
        this.context.setClassAndClickSubscriber(new CopperRock(this.context));
        this.context.setClassAndClickSubscriber(new IronRock(this.context));
        this.context.setClassAndClickSubscriber(new SilverRock(this.context));
        this.context.setClassAndClickSubscriber(new GoldRock(this.context));
        this.context.setClassAndClickSubscriber(new PlatinumRock(this.context));
        this.context.setClassAndClickSubscriber(new MithrilRock(this.context));

        this.context.setClassAndClickSubscriber(new TinOre(this.context));
        this.context.setClassAndClickSubscriber(new CopperOre(this.context));
        this.context.setClassAndClickSubscriber(new BronzeOre(this.context));
        this.context.setClassAndClickSubscriber(new IronOre(this.context));
        this.context.setClassAndClickSubscriber(new SilverOre(this.context));
        this.context.setClassAndClickSubscriber(new GoldOre(this.context));
        this.context.setClassAndClickSubscriber(new PlatinumOre(this.context));
        this.context.setClassAndClickSubscriber(new MithrilOre(this.context));

        this.context.setClassAndClickSubscriber(new TinIngot(this.context));
        this.context.setClassAndClickSubscriber(new CopperIngot(this.context));
        this.context.setClassAndClickSubscriber(new BronzeIngot(this.context));
        this.context.setClassAndClickSubscriber(new IronIngot(this.context));
        this.context.setClassAndClickSubscriber(new SilverIngot(this.context));
        this.context.setClassAndClickSubscriber(new GoldIngot(this.context));
        this.context.setClassAndClickSubscriber(new PlatinumIngot(this.context));
        this.context.setClassAndClickSubscriber(new MithrilIngot(this.context));
    }

    buildCoin(name, imageId, amount) {
        const coin = new Coin(name, imageId, amount);
        this.context.set(name, coin);
        return coin;
    }

    buildGem(name, imageId, amount) {
        const gem = new Gem(name, imageId, amount);
        this.context.set(name, gem);
        return gem;
    }

    buildItem(name, imageId, type, amount) {
        const item = new Item(name, imageId, type, amount);
        this.context.set(name, item);
        return item;
    }
}