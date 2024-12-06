import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { MineConstants } from "../../configuration/MineConstants.js";
import { Ingot } from "../../base/Ingot.js";

export class GoldIngot extends Ingot {
    constructor(context) {
        super(context, MineConstants.GOLD_INGOT);

        this.ix = 160;
        this.iy = 354;


        this.type = MineConstants.GOLD;
        this.font = MineConstants.GOLD_FONT;
        this.color = MineConstants.GOLD_COLOR;
        this.tool = this.context.get(MineConstants.GOLD_HAMMER);


        this.waitTicks = MineConstants.GOLD_INGOT_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .31;
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
            InventoryDecorator.addGoldWeapon(super.finalPay());
        }
    }



    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}