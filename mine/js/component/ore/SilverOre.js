import { Ore } from "../../base/Ore.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { MineConstants } from "../../configuration/MineConstants.js";

export class SilverOre extends Ore {
    constructor(context) {
        super(context, MineConstants.SILVER_ORE);

        this.ix = 64;
        this.iy = 288;


        this.type = MineConstants.SILVER;
        this.font = MineConstants.SILVER_FONT;
        this.color = MineConstants.SILVER_COLOR;
        this.tool = this.context.get(MineConstants.SILVER_SHOVEL);



        this.waitTicks = MineConstants.SILVER_ORE_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .41;
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
            InventoryDecorator.addSilverIngot(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}