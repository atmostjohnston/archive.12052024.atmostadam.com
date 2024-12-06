import { Ore } from "../../base/Ore.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { MineConstants } from "../../configuration/MineConstants.js";

export class PlatinumOre extends Ore {
    constructor(context) {
        super(context, MineConstants.PLATINUM_ORE);

        this.ix = 128;
        this.iy = 288;


        this.type = MineConstants.PLATINUM;
        this.font = MineConstants.PLATINUM_FONT;
        this.color = MineConstants.PLATINUM_COLOR;
        this.tool = this.context.get(MineConstants.PLATINUM_SHOVEL);



        this.waitTicks = MineConstants.PLATINUM_ORE_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .41;
        this.y = this.screen.getHeight() * .7;

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
            InventoryDecorator.addPlatinumIngot(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}