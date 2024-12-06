import { Rock } from "../../base/Rock.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { MineConstants } from "../../configuration/MineConstants.js";

export class GoldRock extends Rock {
    constructor(context) {
        super(context, MineConstants.GOLD_ROCK);


        this.ix = 32;
        this.iy = 0;


        this.type = MineConstants.GOLD;
        this.font = MineConstants.GOLD_FONT;
        this.color = MineConstants.GOLD_COLOR;
        this.tool = this.context.get(MineConstants.GOLD_PICKAXE);


        this.waitTicks = MineConstants.GOLD_ROCK_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .72;
        this.y = this.screen.getHeight() * .55;

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
            InventoryDecorator.addGoldOre(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}