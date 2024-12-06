import { Rock } from "../../base/Rock.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { MineConstants } from "../../configuration/MineConstants.js";

export class PlatinumRock extends Rock {
    constructor(context) {
        super(context, MineConstants.PLATINUM_ROCK);

        this.ix = 32;
        this.iy = 0;


        this.type = MineConstants.PLATINUM;
        this.font = MineConstants.PLATINUM_FONT;
        this.color = MineConstants.PLATINUM_COLOR;
        this.tool = this.context.get(MineConstants.PLATINUM_PICKAXE);



        this.waitTicks = MineConstants.PLATINUM_ROCK_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .63;
        this.y = this.screen.getHeight() * .7;

        this.textX = this.x - 10;
        this.textY = this.y + 125;

        this.loaded = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.loaded) {
            this.init();
        }
        if (super.update(tick)) {
            InventoryDecorator.addPlatinumOre(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}