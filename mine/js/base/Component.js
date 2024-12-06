import { AchievementDecorator } from "./../decorator/AchievementDecorator.js";
import { insideRectangle, notNull } from "./../../../boot/function/GameFunctions.js";

export class Component {
    constructor(context, name) {
        this.context = notNull("context", context, this);
        this.name = name;

        this.w = 32;
        this.h = 32;

        this.pay = 1;
        this.miningBacklog = 0;
        this.clickPower = 0;
        this.clickMultiplier = 0;
        this.automatedTextWaitTick = 0;

        this.sparkleImageList = [
            document.getElementById("PinkSparkle"),
            document.getElementById("BlueSparkle"),
            document.getElementById("GreenSparkle"),
            document.getElementById("YellowSparkle"),
            document.getElementById("WhiteSparkle")
        ];
    }

    update(tick) {
        this.tick = tick;
        if (this.isLocked()) {
            return false;
        }

        if (this.clickPower > 1 && tick % 8 === 0) {
            this.clickPower--;
        }

        if (!this.waiting) {
            this.tool.hide();
            return false;
        }

        return true;
    }

    onClick(x, y) {
        if (this.isLocked()) {
            return;
        }

        if (insideRectangle(x, y, this.x, this.y, this.sw, this.sh)) {
            if (!this.waiting) {
                this.waiting = true;
                this.waitUntilTick = this.tick + this.waitTicks;
            }

            if (this.clickPower < 50) {
                this.clickPower++;
                this.clickMultiplier = 1 + (this.clickPower * .1);
            }
        }
    }

    finalPay() {
        const finalPayout = Math.ceil(this.pay * this.clickMultiplier);
        this.miningBacklog += finalPayout;
        this.waiting = false;
        return finalPayout;
    }

    isLocked() {
        return AchievementDecorator.isLocked(this.name);
    }
}