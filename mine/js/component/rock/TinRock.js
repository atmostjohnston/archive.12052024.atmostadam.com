import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { MineConstants } from "../../configuration/MineConstants.js";
import { Rock } from "./../../base/Rock.js";

export class TinRock extends Rock {
    constructor(context) {
        super(context, MineConstants.TIN_ROCK);

        this.ix = 128;
        this.iy = 0;


        this.type = MineConstants.TIN;
        this.font = MineConstants.TIN_FONT;
        this.color = MineConstants.TIN_COLOR;
        this.tool = this.context.get(MineConstants.TIN_PICKAXE);



        this.waitTicks = MineConstants.TIN_ROCK_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .63;
        this.y = this.screen.getHeight() * .25;

        this.textX = this.x + 30;
        this.textY = this.y + 125;

        this.loaded = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.loaded) {
            this.init();
        }
        if (super.update(tick)) {
            InventoryDecorator.addTinOre(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}