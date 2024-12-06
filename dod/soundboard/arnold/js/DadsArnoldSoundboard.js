import { CanvasContextDecorator } from "../../../corecanvas/CanvasContextDecorator.js";
import { CanvasDecorator } from "../corecanvas/CanvasDecorator.js";
import { insideRectangle } from "../coreutil/MathUtils.js";

export class DadsArnoldSoundboard {
    constructor() {
        this.backgroundImageId = "arnold";
        this.backgroundW = 480;
        this.backgroundH = 269;

        this.clickImageId = "arnoldClick";
        this.clickW = 522;
        this.clickH = 177;

        this.unclickImageId = "arnoldUnclick";

        this.outlineSize = 5;
        this.outlineColor = "white";

        this.rows = 10;
        this.columns = 10;

        this.x = CanvasDecorator.getLeft();
        this.y = CanvasDecorator.getTop();
        this.w = CanvasDecorator.getWidth() / this.rows;
        this.h = CanvasDecorator.getHeight() / this.columns;

        this.soundPaths = [
            "./sound/dod/arnold/and-stop-shouting-im-not-death.mp3",
            "./sound/dod/arnold/answer-the-question.mp3",
            "./sound/dod/arnold/arnold-noises-arnold-schwarzenegger-sound-effects.mp3",
            "./sound/dod/arnold/ask-you-a-bunch-of-questions-and-i-want-to-have-them-answered-immediately.mp3",
            "./sound/dod/arnold/breakfast.mp3",
            "./sound/dod/arnold/but-i-hope-you-live-enough-room-for-my-face-because-im.mp3",
            "./sound/dod/arnold/but-ive-got-news-for-you-you-are-mine-now-you-belong-to-me.mp3",
            "./sound/dod/arnold/choppa.mp3",
            "./sound/dod/arnold/cookie-down.mp3",
            "./sound/dod/arnold/cop.mp3",
            "./sound/dod/arnold/daddy-who-is-your-daddy-and-what-does-he-do.mp3",
            "./sound/dod/arnold/disgusting.mp3",
            "./sound/dod/arnold/do-it.mp3",
            "./sound/dod/arnold/eat-cookies.mp3",
            "./sound/dod/arnold/everything-freezes.mp3",
            "./sound/dod/arnold/hey-im-a-police-officer.mp3",
            "./sound/dod/arnold/iceman-cometh.mp3",
            "./sound/dod/arnold/ill-be-back.mp3",
            "./sound/dod/arnold/revenge-cold.mp3",
            "./sound/dod/arnold/scream-2.mp3",
            "./sound/dod/arnold/you-lie.mp3"
        ];

        this.soundMap = new Map();

        this.soundPaths.forEach(e => {
            this.sound = new Audio(e);
            this.sound.preload = 'auto';
            this.sound.init();
            this.soundMap.set(e, this.sound);
        });
    }

    update(tick) {

    }

    draw() {
        this.drawBackground();
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                const x = this.x + (this.w * i);
                const y = this.y + (this.h * j);
                this.drawOutline(x, y);
                if (i == 0 && j == 0) {
                    this.drawButton(x, y);
                    this.drawButtonText("Stop Shouting", x, y);
                }
                if (i == 1 && j == 0) {
                    this.drawButton(x, y);
                    this.drawButtonText("Answer the Question", x, y);
                }
                if (i == 2 && j == 0) {
                    this.drawButton(x, y);
                    this.drawButtonText("Arnold Noises", x, y);
                }
                if (i == 3 && j == 0) {
                    this.drawButton(x, y);
                    this.drawButtonText("Ask Questions", x, y);
                }
                if (i == 4 && j == 0) {
                    this.drawButton(x, y);
                    this.drawButtonText("Breakfast", x, y);
                }
                if (i == 5 && j == 0) {
                    this.drawButton(x, y);
                    this.drawButtonText("Ram Fist", x, y);
                }
                if (i == 6 && j == 0) {
                    this.drawButton(x, y);
                    this.drawButtonText("You are mine", x, y);
                }
                if (i == 7 && j == 0) {
                    this.drawButton(x, y);
                    this.drawButtonText("Choppa", x, y);
                }
                if (i == 8 && j == 0) {
                    this.drawButton(x, y);
                    this.drawButtonText("Cookie", x, y);
                }
                if (i == 9 && j == 0) {
                    this.drawButton(x, y);
                    this.drawButtonText("Cop", x, y);
                }
                if (i == 0 && j == 1) {
                    this.drawButton(x, y);
                    this.drawButtonText("Daddy", x, y);
                }
                if (i == 1 && j == 1) {
                    this.drawButton(x, y);
                    this.drawButtonText("Disgusting", x, y);
                }
                if (i == 2 && j == 1) {
                    this.drawButton(x, y);
                    this.drawButtonText("Do It", x, y);
                }
                if (i == 3 && j == 1) {
                    this.drawButton(x, y);
                    this.drawButtonText("Cookie", x, y);
                }
                if (i == 4 && j == 1) {
                    this.drawButton(x, y);
                    this.drawButtonText("Everything Freezes", x, y);
                }
                if (i == 5 && j == 1) {
                    this.drawButton(x, y);
                    this.drawButtonText("Police Officer", x, y);
                }
                if (i == 6 && j == 1) {
                    this.drawButton(x, y);
                    this.drawButtonText("Iceman", x, y);
                }
                if (i == 7 && j == 1) {
                    this.drawButton(x, y);
                    this.drawButtonText("I'll Be Back", x, y);
                }
                if (i == 8 && j == 1) {
                    this.drawButton(x, y);
                    this.drawButtonText("Revenge Cold", x, y);
                }
                if (i == 9 && j == 1) {
                    this.drawButton(x, y);
                    this.drawButtonText("Scream 2", x, y);
                }
                if (i == 0 && j == 2) {
                    this.drawButton(x, y);
                    this.drawButtonText("You Lie", x, y);
                }
            }
        }
    }

    drawOutline(x, y) {
        CanvasContextDecorator.drawRectangle(
            this.outlineSize,
            this.outlineColor,
            x,
            y,
            this.w,
            this.h
        );
    }

    drawButton(x, y) {
        CanvasContextDecorator.drawImage(
            this.clickImageId,
            0,
            0,
            this.clickW,
            this.clickH,
            x + (this.w * .1),
            y + (this.h * .2),
            this.w * .8,
            this.h * .6
        );
    }

    drawButtonText(text, x, y) {
        var font = "20px Helvetica";
        CanvasContextDecorator.drawText(
            text,
            font,
            "white",
            x + (this.w * .2),
            y + (this.h * .5)
        );
    }

    drawBackground() {
        CanvasContextDecorator.drawImage(
            this.backgroundImageId,
            0,
            0,
            this.backgroundW,
            this.backgroundH,
            0,
            0,
            CanvasDecorator.getWidth(),
            CanvasDecorator.getHeight()
        );
    }

    onClick(x, y) {
        if (insideRectangle(x, y, 0, 0, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[0]).play();
        }
        if (insideRectangle(x, y, this.w, 0, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[1]).play();
        }
        if (insideRectangle(x, y, this.w * 2, 0, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[2]).play();
        }
        if (insideRectangle(x, y, this.w * 3, 0, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[3]).play();
        }
        if (insideRectangle(x, y, this.w * 4, 0, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[4]).play();
        }
        if (insideRectangle(x, y, this.w * 5, 0, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[5]).play();
        }
        if (insideRectangle(x, y, this.w * 6, 0, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[6]).play();
        }
        if (insideRectangle(x, y, this.w * 7, 0, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[7]).play();
        }
        if (insideRectangle(x, y, this.w * 8, 0, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[8]).play();
        }
        if (insideRectangle(x, y, this.w * 9, 0, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[9]).play();
        }
        if (insideRectangle(x, y, 0, this.h, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[10]).play();
        }
        if (insideRectangle(x, y, this.w, this.h, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[11]).play();
        }
        if (insideRectangle(x, y, this.w * 2, this.h, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[12]).play();
        }
        if (insideRectangle(x, y, this.w * 3, this.h, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[13]).play();
        }
        if (insideRectangle(x, y, this.w * 4, this.h, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[14]).play();
        }
        if (insideRectangle(x, y, this.w * 5, this.h, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[15]).play();
        }
        if (insideRectangle(x, y, this.w * 6, this.h, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[16]).play();
        }
        if (insideRectangle(x, y, this.w * 7, this.h, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[17]).play();
        }
        if (insideRectangle(x, y, this.w * 8, this.h, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[18]).play();
        }
        if (insideRectangle(x, y, this.w * 9, this.h, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[19]).play();
        }
        if (insideRectangle(x, y, 0, this.h * 2, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[20]).play();
        }
    }
}