import { SelectionPortraitDrawing } from "../selection/SelectionPortraitDrawing.js";
import { SelectionCatPixelDrawing } from "../selection/SelectionCatPixelDrawing.js";
import { SelectionTextDrawing } from "../selection/SelectionTextDrawing.js";
import { SelectionRectangleDrawing } from "../selection/SelectionRectangleDrawing.js";
import { SelectionCatTypeTextDrawing } from "../selection/SelectionCatTypeTextDrawing.js";
import * as cfg from "../config/GameConfiguration.js";
import { CatDecorator } from "../model/CatDecorator.js";
import { Drawing } from "../api/Drawing.js";
import { Cat } from "../model/Cat.js";
import { requireScreen, requireTick } from "../../../boot/function/ValidationFunctions.js";

export class CatSelectionScreen extends Drawing {
    constructor(context) {
        super(context);

        this.catTexts = [];
        this.catPortraits = [];
        this.catPixels = [];
        this.catTypes = [];
        this.catRectangles = [];
    }

    init() {
        try {
            requireScreen(this.context, this);

            this.background = this.context.get("grassland");
            this.catsToSelect = this.context.get("catsToSelect");

            for (var j = 0; j < 2; j++) {
                for (var i = 0; i < 10; i++) {
                    if (this.getIdx(i, j) === 19) {
                        return;
                    }
                    this.drawCatBox(i, j);
                }
            }
            this.loaded = true;
        } catch (e) {
            console.error("FATAL CRASH DURING [CatSelectionScreen] init()!", e);
            console.error("CatSelectionScreen", this);
            console.error(e.stack);
            console.error("errorMessage", e.message);
            throw e;
        }
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
        for (var i = 0; i < 19; i++) {
            this.catRectangles[i].update();
            this.catPortraits[i].update();
            this.catPixels[i].update();
            this.catTexts[i].update();
            this.catTypes[i].update();
        }
    }

    draw() {
        super.drawBackground(this.background);

        for (var i = 0; i < 19; i++) {
            this.catRectangles[i].draw();
            this.catPortraits[i].draw();
            this.catPixels[i].draw();
            this.catTexts[i].draw();
            this.catTypes[i].draw();
        }
    }

    drawCatBox(i, j) {
        var cat = this.catsToSelect[this.getIdx(i, j)];

        var rectangleX = cfg.SELECTION_RECTANGLE_ANCHOR_X + (this.context.get("selectionRectangleWidth") * i) + (cfg.SELECTION_RECTANGLE_SPACING_X * i);
        var rectangleY = cfg.SELECTION_RECTANGLE_ANCHOR_Y + (this.context.get("selectionRectangleHeight") * j) + (cfg.SELECTION_RECTANGLE_SPACING_Y * j);

        this.catRectangles.push(new SelectionRectangleDrawing(cat, this.context.get("selectionRectangleWidth"),
            this.context.get("selectionRectangleHeight"), rectangleX, rectangleY));

        this.catTexts.push(new SelectionTextDrawing(cat, cfg.SELECTION_TEXT_MARGIN_X + rectangleX,
            cfg.SELECTION_TEXT_MARGIN_Y + rectangleY));

        this.catPortraits.push(new SelectionPortraitDrawing(cat, cfg.SELECTION_PORTRAIT_MARGIN_XY + rectangleX,
            cfg.SELECTION_PORTRAIT_MARGIN_XY + rectangleY));

        this.catPixels.push(new SelectionCatPixelDrawing(cat, cfg.SELECTION_PIXEL_LEFT_PAD_X + rectangleX,
            cfg.SELECTION_PIXEL_MARGIN_Y + rectangleY));

        this.catTypes.push(new SelectionCatTypeTextDrawing(cat, cfg.SELECTION_TEXT_TYPE_MARGIN_X + rectangleX,
            cfg.SELECTION_TEXT_TYPE_MARGIN_Y + rectangleY));
    }

    notify(x, y) {
        for (var j = 0; j < 2; j++) {
            for (var i = 0; i < 10; i++) {
                var rectangleX = cfg.SELECTION_RECTANGLE_ANCHOR_X + (this.context.get("selectionRectangleWidth") * i) + (cfg.SELECTION_RECTANGLE_SPACING_X * i);
                var rectangleY = cfg.SELECTION_RECTANGLE_ANCHOR_Y + (this.context.get("selectionRectangleHeight") * j) + (cfg.SELECTION_RECTANGLE_SPACING_Y * j);

                console.log("Gamer clicked X: [" + x + " : should be [" + rectangleX + " to " + (rectangleX + this.context.get("selectionRectangleWidth")) + "]");
                console.log("Gamer clicked Y: [" + y + " : should be [" + rectangleY + " to " + (rectangleY + this.context.get("selectionRectangleHeight")) + "]");
                if (rectangleX < x && x < rectangleX + this.context.get("selectionRectangleWidth") &&
                    rectangleY < y && y < rectangleY + this.context.get("selectionRectangleHeight")) {
                    this.context.set("cat", this.catsToSelect[i + (j * 10)]);
                    this.context.setClass(new CatDecorator(this.catsToSelect[i + (j * 10)]));
                    this.context.nextScreen("WorldScreen");
                    return;
                }
            }
        }
    }

    getIdx(i, j) {
        return i + (j * 10);
    }
}