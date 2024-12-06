import { Ingot } from "../../base/Ingot.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { MineConstants } from "../../configuration/MineConstants.js";

export class TinIngot extends Ingot {
    constructor(context) {
        super(context, MineConstants.TIN_INGOT);

        this.ix = 128;
        this.iy = 354;


        this.type = MineConstants.TIN;
        this.font = MineConstants.TIN_FONT;
        this.color = MineConstants.TIN_COLOR;
        this.tool = this.context.get(MineConstants.TIN_HAMMER);



        this.waitTicks = MineConstants.TIN_INGOT_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .22;
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
            InventoryDecorator.addTinWeapon(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}