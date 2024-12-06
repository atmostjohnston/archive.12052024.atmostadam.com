import { Ore } from "../../base/Ore.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { MineConstants } from "../../configuration/MineConstants.js";

export class MithrilOre extends Ore {
    constructor(context) {
        super(context, MineConstants.MITHRIL_ORE);

        this.ix = 64;
        this.iy = 288;


        this.type = MineConstants.MITHRIL;
        this.font = MineConstants.MITHRIL_FONT;
        this.color = MineConstants.MITHRIL_COLOR;
        this.tool = this.context.get(MineConstants.MITHRIL_SHOVEL);



        this.waitTicks = MineConstants.MITHRIL_ORE_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .51;
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
            InventoryDecorator.addMithrilIngot(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}