import { MineConstants } from "../../configuration/MineConstants.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { Ingot } from "../../base/Ingot.js";

export class CopperIngot extends Ingot {
    constructor(context) {
        super(context, MineConstants.COPPER_INGOT);

        this.ix = 96;
        this.iy = 354;


        this.type = MineConstants.COPPER;
        this.font = MineConstants.COPPER_FONT;
        this.color = MineConstants.COPPER_COLOR;
        this.tool = this.context.get(MineConstants.COPPER_HAMMER);



        this.waitTicks = MineConstants.COPPER_INGOT_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .31;
        this.y = this.screen.getHeight() * .2;
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
            InventoryDecorator.addCopperWeapon(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}