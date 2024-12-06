import { GameContext } from "./../../boot/context/GameContext.js";
import { boot } from "./../../boot/boot.js";
import { InventoryColumn } from "./layout/InventoryColumn.js";
import { MiningColumn } from "./layout/MiningColumn.js";
import { SmeltingColumn } from "./layout/SmeltingColumn.js";
import { SmithingColumn } from "./layout/SmithingColumn.js";
import { MarketColumn } from "./layout/MarketColumn.js";
import { Footer } from "./layout/Footer.js";
import { Header } from "./layout/Header.js";
import { MineGameContext } from "./context/MineGameContext.js";
import { ScrollingTextHandler } from "./handler/ScrollingTextHandler.js";
import { MineConstants } from "./configuration/MineConstants.js";


window.addEventListener("load", function () {
    var context = new GameContext();
    context.preloadImage("OreSpritesheet", "./images/opensource/OreSpritesheet.png");
    context.preloadImage("GemTileset", "./images/opensource/GemTileset.png");
    context.preloadImage("MineCart", "./images/opensource/MineCart.png");
    context.preloadImage("GoldCoin", "./images/opensource/cainos/GoldCoin.png");
    context.preloadImage("SilverCoin", "./images/opensource/cainos/SilverCoin.png");
    context.preloadImage("CopperCoin", "./images/opensource/cainos/CopperCoin.png");
    context.preloadImage("Sword", "./images/opensource/cainos/Sword.png");
    context.preloadImage("Backpack", "./images/opensource/Backpack.png");
    context.setGameLoop(new MineGameLoop(context));
    boot(context);
});

export class MineGameLoop {
    constructor(context) {
        this.context = context;

        new MineConstants();

        console.info("Executing prerequiste steps for Game Loop in constructor.", this);

        new MineGameContext(this.context);

        new ScrollingTextHandler();

        this.header = new Header(this.context);
        this.footer = new Footer(this.context);
        this.inventory = new InventoryColumn(this.context);
        this.mining = new MiningColumn(this.context);
        this.smelting = new SmeltingColumn(this.context);
        this.smithing = new SmithingColumn(this.context);
        this.market = new MarketColumn(this.context);

        this.context.set(MineConstants.HEADER, this.header);
        this.context.set(MineConstants.FOOTER, this.footer);
        this.context.set(MineConstants.INVENTORY_COLUMN, this.inventory);
        this.context.set(MineConstants.MINING_COLUMN, this.mining);
        this.context.set(MineConstants.SMELTING_COLUMN, this.smelting);
        this.context.set(MineConstants.SMITHING_COLUMN, this.smithing);
        this.context.set(MineConstants.MARKET_COLUMN, this.market);

        this.tick = 0;
    }

    update(tick) {
        this.tick = tick;
        this.header.update(this.tick);
        this.footer.update(this.tick);
        this.inventory.update(this.tick);
        this.mining.update(this.tick);
        this.smelting.update(this.tick);
        this.smithing.update(this.tick);
        this.market.update(this.tick);
    }

    draw() {
        this.header.drawBackground();
        this.footer.drawBackground();
        this.mining.drawBackground();
        this.inventory.drawBackground();
        this.smelting.drawBackground();
        this.smithing.drawBackground();
        this.market.drawBackground();

        this.header.draw();
        this.footer.draw();
        this.mining.draw();
        this.inventory.draw();
        this.smelting.draw();
        this.smithing.draw();
        this.market.draw();
    }
}
