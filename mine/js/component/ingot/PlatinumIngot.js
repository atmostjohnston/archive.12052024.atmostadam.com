import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { MineConstants } from "../../configuration/MineConstants.js";
import { Ingot } from "../../base/Ingot.js";

export class PlatinumIngot extends Ingot {
    constructor(context) {
        super(context, MineConstants.PLATINUM_INGOT);

        this.ix = 128;
        this.iy = 354;


        this.type = MineConstants.PLATINUM;
        this.font = MineConstants.PLATINUM_FONT;
        this.color = MineConstants.PLATINUM_COLOR;
        this.tool = this.context.get(MineConstants.PLATINUM_HAMMER);



        this.waitTicks = MineConstants.PLATINUM_INGOT_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .22;
        this.y = this.screen.getHeight() * .68;

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
            InventoryDecorator.addPlatinumWeapon(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}