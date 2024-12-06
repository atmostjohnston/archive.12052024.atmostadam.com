import { MineConstants } from "./../configuration/MineConstants.js";

export class CurrencyDecorator {
    constructor(currency) {
        if (!CurrencyDecorator.instance) {
            CurrencyDecorator.instance = this;
        }
        this.currency = currency;
        return CurrencyDecorator.instance;
    }

    static getCopperCoins() {
        return this.instance.getAmountByName(MineConstants.COPPER_COINS);
    }

    static getSilverCoins() {
        return this.instance.getAmountByName(MineConstants.SILVER_COINS);
    }

    static getGoldCoins() {
        return this.instance.getAmountByName(MineConstants.GOLD_COINS);
    }

    static getDiamonds() {
        return this.instance.getGemAmountByName(MineConstants.DIAMOND);
    }

    static getRubies() {
        return this.instance.getGemAmountByName(MineConstants.RUBY);
    }

    static getSapphires() {
        return this.instance.getGemAmountByName(MineConstants.SAPPHIRE);
    }

    static geEmeralds() {
        return this.instance.getGemAmountByName(MineConstants.EMERALD);
    }

    static getAmethysts() {
        return this.instance.getGemAmountByName(MineConstants.AMETHYST);
    }

    getAmountByName(coinName) {
        var amount = 0;
        this.currency.coins.forEach(e => { if (coinName == e.name) { amount = e.amount; } });
        return amount;
    }

    getGemAmountByName(gemName) {
        var amount = 0;
        this.currency.gems.forEach(e => { if (gemName == e.name) { amount = e.amount; } });
        return amount;
    }

    static getCurrency() {
        return this.instance.currency;
    }

    static getGems() {
        return this.instance.gems;
    }

    static getInstance() {
        return CurrencyDecorator.instance;
    }
}