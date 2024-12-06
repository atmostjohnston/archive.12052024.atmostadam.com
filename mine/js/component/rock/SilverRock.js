import { Rock } from "../../base/Rock.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";
import { MineConstants } from "../../configuration/MineConstants.js";

export class SilverRock extends Rock {
    constructor(context) {
        super(context, MineConstants.SILVER_ROCK);

        this.ix = 32;
        this.iy = 0;


        this.type = MineConstants.SILVER;
        this.font = MineConstants.SILVER_FONT;
        this.color = MineConstants.SILVER_COLOR;
        this.tool = this.context.get(MineConstants.SILVER_PICKAXE);



        this.waitTicks = MineConstants.SILVER_ROCK_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .63;
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
            InventoryDecorator.addSilverOre(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}