import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { MineConstants } from "../../configuration/MineConstants.js";
import { Ingot } from "../../base/Ingot.js";

export class MithrilIngot extends Ingot {
    constructor(context) {
        super(context, MineConstants.MITHRIL_INGOT);

        this.ix = 224;
        this.iy = 354;


        this.type = MineConstants.MITHRIL;
        this.font = MineConstants.MITHRIL_FONT;
        this.color = MineConstants.MITHRIL_COLOR;
        this.tool = this.context.get(MineConstants.MITHRIL_HAMMER);



        this.waitTicks = MineConstants.MITHRIL_INGOT_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .31;
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
            InventoryDecorator.addMithrilWeapon(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}