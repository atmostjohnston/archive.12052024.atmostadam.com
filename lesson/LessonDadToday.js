import { CanvasDecorator } from "../corecanvas/CanvasDecorator.js";
import { CanvasContextDecorator } from "../corecanvas/CanvasContextDecorator.js";
import { Lesson5GitCommands } from "./Lesson5GitCommands.js";
import { insideRectangle } from "./../coreutil/MathUtils.js";
import { GameContext } from "../../corejs/context/GameContext.js";
import { drawText, drawImage } from "../common/util/DrawingUtils.js";

export class LessonDadToday {
    constructor() {
        // Constants
        this.TILE_SIZE = 512;
        this.TILE_SCALED_SIZE = 64;
        this.DEFAULT_FONT = "22pt Helvetica";
        this.DEFAULT_COLOR = "white";

        // Displays images based on key to image map lookup
        this.keyArray = [
            "nftile1", "nftile2", "nftile3", "nftile4", "nftile5",
            "nftile6", "nftile7", "nftile8", "nftile9", "nftile10",
            "nftile1", "nftile2", "nftile3", "nftile4", "nftile5",
            "nftile6", "nftile7", "nftile8", "nftile9", "nftile10",
            "nftile1", "nftile2", "nftile3", "nftile4", "nftile5",
            "nftile6", "nftile7", "nftile8", "nftile9", "nftile10",
            "nftile1", "nftile2", "nftile3", "nftile4", "nftile5",
            "nftile6", "nftile7", "nftile8", "nftile9", "nftile10"
        ];

        this.keyMatrix = [
            ["nftile1", "nftile2", "nftile3", "nftile4", "nftile5", "nftile6", "nftile7", "nftile8", "nftile9", "nftile10"],
            ["nftile1", "nftile2", "nftile3", "nftile4", "nftile5", "nftile6", "nftile7", "nftile8", "nftile9", "nftile10"],
            ["nftile1", "nftile2", "nftile3", "nftile4", "nftile5", "nftile6", "nftile7", "nftile8", "nftile9", "nftile10"],
            ["nftile1", "nftile2", "nftile3", "nftile4", "nftile5", "nftile6", "nftile7", "nftile8", "nftile9", "nftile10"],
            ["nftile1", "nftile2", "nftile3", "nftile4", "nftile5", "nftile6", "nftile7", "nftile8", "nftile9", "nftile10"],
            ["nftile1", "nftile2", "nftile3", "nftile4", "nftile5", "nftile6", "nftile7", "nftile8", "nftile9", "nftile10"],
            ["nftile1", "nftile2", "nftile3", "nftile4", "nftile5", "nftile6", "nftile7", "nftile8", "nftile9", "nftile10"],
            ["nftile1", "nftile2", "nftile3", "nftile4", "nftile5", "nftile6", "nftile7", "nftile8", "nftile9", "nftile10"],
            ["nftile1", "nftile2", "nftile3", "nftile4", "nftile5", "nftile6", "nftile7", "nftile8", "nftile9", "nftile10"],
            ["nftile1", "nftile2", "nftile3", "nftile4", "nftile5", "nftile6", "nftile7", "nftile8", "nftile9", "nftile10"],
            ["nftile1", "nftile2", "nftile3", "nftile4", "nftile5", "nftile6", "nftile7", "nftile8", "nftile9", "nftile10"]
        ];

        // For Dad
        this.x = CanvasDecorator.getWidth() / 3;
        this.by = CanvasDecorator.getHeight() * .02;
        this.ay = CanvasDecorator.getHeight() - this.by;
    }

    update(tick) { }

    draw() {
        this.drawGitLessonLink("BEFORE - GIT PULL", this.x, this.by);

        for (var i = 0; i < this.keyArray.length; i++) {
            drawImage(
                this.keyArray[i],          // image id
                0,                         // x for cropping
                0,                         // y for cropping
                this.TILE_SIZE,            // w
                this.TILE_SIZE,            // h
                this.TILE_SCALED_SIZE * i, // x
                50,                        // y
                this.TILE_SCALED_SIZE,     // scaled x
                this.TILE_SCALED_SIZE      // scaled y
            );
        }

        for (var i = 0; i < this.keyArray.length; i++) {
            drawText(
                i,                  // text
                this.DEFAULT_FONT,  // font
                this.DEFAULT_COLOR, // color
                50 * i,             // x
                150                 // y
            );
        }

        for (var row = 0; row < this.keyMatrix.length; row++) {
            for (var column = 0; column < this.keyMatrix[row].length; column++) {
                drawImage(
                    this.keyMatrix[row][column],            // image id
                    0,                                      // x for cropping
                    0,                                      // y for cropping
                    this.TILE_SIZE,                         // w
                    this.TILE_SIZE,                         // h
                    this.TILE_SCALED_SIZE * row,            // x
                    250 + (this.TILE_SCALED_SIZE * column), // y
                    this.TILE_SCALED_SIZE,                  // scaled x
                    this.TILE_SCALED_SIZE                   // scaled y
                );
            }
        }

        this.drawGitLessonLink("AFTER - GIT PUSH", this.x, this.ay);
    }

    drawGitLessonLink(text, x, y) {
        CanvasContextDecorator.drawText(text, "20pt Helvetica", "blue", x, y);
        CanvasContextDecorator.drawFilledRectangle("blue", x, y + 3, 250, 2);
    }

    onClick(x, y) {
        if (insideRectangle(x, y, this.x, this.by - 30, 250, 30) ||
            insideRectangle(x, y, this.x, this.ay - 30, 250, 30)) {
            this.context.get("GameLoop").lesson = new Lesson5GitCommands();
        }
    }
} 