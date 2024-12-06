import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { MineConstants } from "../../configuration/MineConstants.js";
import { Ingot } from "../../base/Ingot.js";

export class SilverIngot extends Ingot {
    constructor(context) {
        super(context, MineConstants.SILVER_INGOT);

        this.ix = 64;
        this.iy = 354;

        this.type = MineConstants.SILVER;
        this.font = MineConstants.SILVER_FONT;
        this.color = MineConstants.SILVER_COLOR;
        this.tool = this.context.get(MineConstants.SILVER_HAMMER);



        this.waitTicks = MineConstants.SILVER_INGOT_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .22;
        this.y = this.screen.getHeight() * .52;

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
            InventoryDecorator.addSilverWeapon(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}