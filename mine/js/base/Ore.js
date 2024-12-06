import { Component } from "./Component.js";
import { AnimatedTextEventHandler } from "../../../common/handler/AnimatedTextEventHandler.js";
import { randomElementValue, randomInt, notNull } from "./../../../boot/function/GameFunctions.js";

export class Ore extends Component {
    constructor(context, name) {
        super(name);
        this.context = notNull("context", context, this);


        this.image = this.context.getImage("OreSpritesheet");

        this.sw = 96;
        this.sh = 96;
        this.bgsw = 81;
        this.bgsh = 82;

        this.textFont = "14pt Helvetica";
    }

    update(tick) {
        var success = super.update(tick);
        if (success) {
            this.tool.show();
            if (!(tick > this.waitUntilTick)) {
                success = false;
            }
        }
        return success;
    }

    draw() {
        if (super.isLocked()) {
            return;
        }

        if (this.miningBacklog > 0 && this.tick > this.automatedTextWaitTick) {
            AnimatedTextEventHandler.run("+1 " + this.name, this.textFont, this.color, this.x, this.y,
                this.x, this.y - 100, 120);
            this.automatedTextWaitTick = this.tick + 20;
            this.miningBacklog--;
        }

        this.screen.drawText(this.type, this.font, this.color, this.textX, this.textY);

        if (this.waiting) {
            this.screen.drawFilledRectangle("white", this.x, this.y, this.bgsw, this.bgsh);
            this.screen.drawImage(this.image, this.ix, this.iy, this.w, this.h,
                this.x, this.y, this.sw, this.sh);
            this.screen.drawRectangle(5, "black", this.x, this.y, this.bgsw, this.bgsh);
        } else {
            this.screen.drawFilledRectangle("white", this.x, this.y, this.bgsw, this.bgsh);
            this.screen.drawImage(this.image, this.ix, this.iy, this.w, this.h,
                this.x, this.y, this.sw, this.sh);
            this.screen.drawRectangle(5, "green", this.x, this.y, this.bgsw, this.bgsh);

            if (this.sparkleImage1 && this.s1Count < this.s1MaxCount) {
                this.s1Count++;
            } else {
                this.sparkleImage1 = randomElementValue(this.sparkleImageList);
                this.s1X = randomInt(this.x, this.x + 35);
                this.s1Y = randomInt(this.y + 45, this.y + 65);
                this.s1Count = 0;
                this.s1MaxCount = randomInt(50, 120);
            }
            this.screen.drawImage(this.sparkleImage1, 0, 0, 500, 500, this.s1X, this.s1Y, 64, 64);

            if (this.sparkleImage2 && this.s2Count < this.s2MaxCount) {
                this.s2Count++;
            } else {
                this.sparkleImage2 = randomElementValue(this.sparkleImageList);
                this.s2X = randomInt(this.x + 35, this.x + 65);
                this.s2Y = randomInt(this.y + 40, this.y + 60);
                this.s2Count = 0;
                this.s2MaxCount = randomInt(50, 120);
            }
            this.screen.drawImage(this.sparkleImage2, 0, 0, 500, 500, this.s2X, this.s2Y, 32, 32);
        }
    }
}