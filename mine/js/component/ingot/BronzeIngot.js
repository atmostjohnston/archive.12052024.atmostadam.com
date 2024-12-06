import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { MineConstants } from "../../configuration/MineConstants.js";
import { Ingot } from "../../base/Ingot.js";

export class BronzeIngot extends Ingot {
    constructor(context) {
        super(context, MineConstants.BRONZE_INGOT);

        this.ix = 192;
        this.iy = 354;


        this.type = MineConstants.BRONZE;
        this.font = MineConstants.BRONZE_FONT;
        this.color = MineConstants.BRONZE_COLOR;
        this.tool = this.context.get(MineConstants.BRONZE_HAMMER);



        this.waitTicks = MineConstants.BRONZE_INGOT_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .22;
        this.y = this.screen.getHeight() * .36;

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
            InventoryDecorator.addBronzeWeapon(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}