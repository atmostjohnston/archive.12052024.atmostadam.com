import { Rock } from "../../base/Rock.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { MineConstants } from "../../configuration/MineConstants.js";

export class MithrilRock extends Rock {
    constructor(context) {
        super(context, MineConstants.MITHRIL_ROCK);


        this.ix = 32;
        this.iy = 0;


        this.type = MineConstants.MITHRIL;
        this.font = MineConstants.MITHRIL_FONT;
        this.color = MineConstants.MITHRIL_COLOR;
        this.tool = this.context.get(MineConstants.MITHRIL_PICKAXE);



        this.waitTicks = MineConstants.MITHRIL_ROCK_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .72;
        this.y = this.screen.getHeight() * .7;

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
            InventoryDecorator.addMithrilOre(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}