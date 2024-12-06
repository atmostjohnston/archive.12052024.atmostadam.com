import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { MineConstants } from "../../configuration/MineConstants.js";
import { Rock } from "./../../base/Rock.js";

export class CopperRock extends Rock {
    constructor(context) {
        super(context, MineConstants.COPPER_ROCK);



        this.ix = 32;
        this.iy = 0;


        this.type = MineConstants.COPPER;
        this.font = MineConstants.COPPER_FONT;
        this.color = MineConstants.COPPER_COLOR;
        this.tool = this.context.get(MineConstants.COPPER_PICKAXE);



        this.waitTicks = MineConstants.COPPER_ROCK_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .72;
        this.y = this.screen.getHeight() * .25;

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
            InventoryDecorator.addCopperOre(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}