import { Rock } from "../../base/Rock.js";
import { MineConstants } from "../../configuration/MineConstants.js";
import { InventoryDecorator } from "../../decorator/InventoryDecorator.js";
import { GameContext } from "../../../../boot/context/GameContext.js";

export class IronRock extends Rock {
    constructor(context) {
        super(context, MineConstants.IRON_ROCK);


        this.ix = 64;
        this.iy = 0;


        this.type = MineConstants.IRON;
        this.font = MineConstants.IRON_FONT;
        this.color = MineConstants.IRON_COLOR;
        this.tool = this.context.get(MineConstants.IRON_PICKAXE);



        this.waitTicks = MineConstants.IRON_ROCK_PAYBACK_TICKS;
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getWidth() * .68;
        this.y = this.screen.getHeight() * .40;

        this.textX = this.x + 10;
        this.textY = this.y + 125;

        this.loaded = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.loaded) {
            this.init();
        }
        if (super.update(tick)) {
            InventoryDecorator.addIronOre(super.finalPay());
        }
    }

    draw() {
        super.draw();
    }

    onClick(x, y) {
        super.onClick(x, y);
    }
}