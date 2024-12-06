import { Ore } from "../../base/Ore.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { MineConstants } from "../../configuration/MineConstants.js";

export class TinOre extends Ore {
    constructor(context) {
        super(context, MineConstants.TIN_ORE);

        this.ix = 64;
        this.iy = 288;


        this.type = MineConstants.TIN;
        this.font = MineConstants.TIN_FONT;
        this.color = MineConstants.TIN_COLOR;
        this.tool = this.context.get(MineConstants.TIN_SHOVEL);



        this.waitTicks = MineConstants.TIN_ORE_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .41;
        this.y = this.screen.getHeight() * .25;

        this.textX = this.x + 30;
        this.textY = this.y + 125;

        this.loaded = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.loaded) {
            this.init();
        }
        if (super.update(tick)) {
            InventoryDecorator.addTinIngot(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}