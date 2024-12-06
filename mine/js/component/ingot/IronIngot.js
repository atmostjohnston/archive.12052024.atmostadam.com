import { MineConstants } from "../../configuration/MineConstants.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { Ingot } from "../../base/Ingot.js";

export class IronIngot extends Ingot {
    constructor(context) {
        super(context, MineConstants.IRON_INGOT);

        this.ix = 128;
        this.iy = 354;


        this.type = MineConstants.IRON;
        this.font = MineConstants.IRON_FONT;
        this.color = MineConstants.IRON_COLOR;
        this.tool = this.context.get(MineConstants.IRON_HAMMER);


        this.waitTicks = MineConstants.IRON_INGOT_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .31;
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
            InventoryDecorator.addIronWeapon(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}