import { Ore } from "../../base/Ore.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { MineConstants } from "../../configuration/MineConstants.js";

export class GoldOre extends Ore {
    constructor(context) {
        super(context, MineConstants.GOLD_ORE);

        this.ix = 160;
        this.iy = 288;


        this.type = MineConstants.GOLD;
        this.font = MineConstants.GOLD_FONT;
        this.color = MineConstants.GOLD_COLOR;
        this.tool = this.context.get(MineConstants.GOLD_SHOVEL);



        this.waitTicks = MineConstants.GOLD_ORE_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .51;
        this.y = this.screen.getHeight() * .56;

        this.textX = this.x;
        this.textY = this.y + 125;

        this.loaded = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.loaded) {
            this.init();
        }
        if (super.update(tick)) {
            InventoryDecorator.addGoldIngot(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}