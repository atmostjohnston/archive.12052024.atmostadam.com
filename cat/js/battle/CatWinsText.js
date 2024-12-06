import * as cfg from "../config/GameConfiguration.js";
import { Hideable } from "../api/Hideable.js";
import { requireTick } from "../../../boot/function/ValidationFunctions.js";

export class CatWinsText extends Hideable {
    constructor(context) {
        super(context, true);

        //this.text = "CAT WINS";
        //this.font = "170pt 'Helvetica', 'sans-serif'";
        //this.color = cfg.COLOR_GREEN;
        this.iy = 0;
        this.ix = 0
        this.w = 1200;
        this.h = 688;
        this.x = 400;
        this.y = 0;
        this.sw = 1200;
        this.sh = 688;
    }

    init() {
        this.image = this.context.getImage("successfulHunt");
        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
        if (super.isHidden()) {
            return;
        }
        if (this.y > 800) {
            super.hide();
            this.context.get("CatDecorator").getCat().currentHp += this.amountHealed;
            if (this.context.get("CatDecorator").getCat().maxHp < this.context.get("CatDecorator").getCat().currentHp) {
                this.context.get("CatDecorator").getCat().currentHp = this.context.get("CatDecorator").getCat().maxHp;
            }
            this.context.get("CatDecorator").getCat().xp += this.context.get("OpponentDecorator").getOpponent().xp;
            if (this.context.get("CatDecorator").getCat().xp > this.context.get("CatDecorator").getXpToNextLevel()) {
                this.context.get("CatDecorator").levelUp();
            }
            this.context.get("GameLocalStorage").storeCat();
            this.context.deleteCache("OpponentDecorator");
            this.context.deleteCache("opponent");
            this.context.nextScreen("WorldScreen");
        }
        this.y += 5;
    }

    draw() {
        if (super.isHidden()) {
            return;
        }
        super.drawFilledRectangle(
            cfg.COLOR_WHITE,
            0,
            0,
            this.screen.getWidth(),
            this.screen.getHeight()
        );
        super.drawImageLoaded();
        super.drawText(
            this.amountHealed + "hp of MEAT",
            "100pt 'Helvetica', 'sans-serif'",
            cfg.COLOR_GREEN,
            this.x + 200,
            this.y - 50
        );
        super.drawImage(
            this.context.getImage("ham"),
            0,
            0,
            32,
            32,
            this.x,
            this.y - 150,
            128,
            128
        );
        super.drawImage(
            this.context.getImage("meat"),
            0,
            0,
            32,
            32,
            this.x + 1030,
            this.y - 150,
            128,
            128
        );
    }

    show() {
        super.show();
        this.amountHealed = super.getRandom(2, 8);
    }
}