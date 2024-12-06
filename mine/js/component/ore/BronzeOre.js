import { GameContext } from "../../../../boot/context/GameContext.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { MineConstants } from "../../configuration/MineConstants.js";
import { Ore } from "../../base/Ore.js";

export class BronzeOre extends Ore {
    constructor(context) {
        super(context, MineConstants.BRONZE_ORE);

        this.ix = 96;
        this.iy = 288;


        this.type = MineConstants.BRONZE;
        this.font = MineConstants.BRONZE_FONT;
        this.color = MineConstants.BRONZE_COLOR;
        this.tool = this.context.get(MineConstants.BRONZE_SHOVEL);



        this.waitTicks = MineConstants.BRONZE_ORE_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .41;
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
            InventoryDecorator.addBronzeIngot(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}