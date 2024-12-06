import { Ore } from "../../base/Ore.js";
import { MineConstants } from "../../configuration/MineConstants.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";

export class IronOre extends Ore {
    constructor(context) {
        super(context, MineConstants.IRON_ORE);

        this.ix = 128;
        this.iy = 288;


        this.type = MineConstants.IRON;
        this.font = MineConstants.IRON_FONT;
        this.color = MineConstants.IRON_COLOR;
        this.tool = this.context.get(MineConstants.IRON_SHOVEL);



        this.waitTicks = MineConstants.IRON_ORE_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .51;
        this.y = this.screen.getHeight() * .4;

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
            InventoryDecorator.addIronIngot(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}