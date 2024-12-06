import { CanvasContextDecorator } from "../../corecanvas/CanvasContextDecorator.js";
import { CanvasDecorator } from "../corecanvas/CanvasDecorator.js";

import { insideRectangle } from "../coreutil/MathUtils.js";

export class NathansSoundBoard {
    constructor() {
        this.clickImageId = "arnoldClick";
        this.clickW = 522;
        this.clickH = 177;

        this.outlineSize = 5;
        this.outlineColor = "white";

        this.rows = 10;
        this.columns = 10;

        this.x = CanvasDecorator.getLeft();
        this.y = CanvasDecorator.getTop();
        this.w = CanvasDecorator.getWidth() / this.rows;
        this.h = CanvasDecorator.getHeight() / this.columns;

        this.soundPaths = [
            "./sound/nathan/old-spice.mp3",
            "./sound/nathan/taylor-swift-goat.mp3"
        ];

        this.soundMap = new Map();

        this.soundPaths.forEach(e => {
            this.sound = new Audio(e);
            this.sound.preload = 'auto';
            this.sound.init();
            this.soundMap.set(e, this.sound);
        });

        console.log(this);
    }


    update(tick) {

    }

    draw() {
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                const x = this.x + (this.w * i);
                const y = this.y + (this.h * j);
                this.drawOutline(x, y);
                if (i == 0 && j == 0) {
                    this.drawButton(x, y);
                    this.drawButtonText("Old Spice", x, y);
                }
                if (i == 1 && j == 0) {
                    this.drawButton(x, y);
                    this.drawButtonText("Taylor Goat", x, y);
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

    onClick(x, y) {
        if (insideRectangle(x, y, 0, 0, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[0]).play();
        }
        if (insideRectangle(x, y, this.w, 0, this.w, this.h)) {
            this.soundMap.get(this.soundPaths[1]).play();
        }
    }
}