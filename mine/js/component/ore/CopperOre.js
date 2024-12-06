import { Ore } from "../../base/Ore.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { InventoryDecorator } from "./../../decorator/InventoryDecorator.js";
import { MineConstants } from "../../configuration/MineConstants.js";

export class CopperOre extends Ore {
    constructor(context) {
        super(context, MineConstants.COPPER_ORE);

        this.ix = 96;
        this.iy = 288;


        this.type = MineConstants.COPPER;
        this.font = MineConstants.COPPER_FONT;
        this.color = MineConstants.COPPER_COLOR;
        this.tool = this.context.get(MineConstants.COPPER_SHOVEL);


        this.waitTicks = MineConstants.COPPER_ORE_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .51;
        this.y = this.screen.getHeight() * .25;

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
            InventoryDecorator.addCopperIngot(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}