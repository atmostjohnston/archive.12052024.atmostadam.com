import { GameContext } from "../../corejs/context/GameContext.js";
import { CanvasContextDecorator } from "../corecanvas/CanvasContextDecorator.js";
import { CanvasDecorator } from "../corecanvas/CanvasDecorator.js";
import { insideRectangle } from "./../coreutil/MathUtils.js";
import { Drawing } from "./../common/base/Drawing.js";
import { Lesson1DrawingRectangles } from "./Lesson1DrawingRectangles.js";
import { Lesson2DrawingCircles } from "./Lesson2DrawingCircles.js";
import { Lesson3DrawingText } from "./Lesson3DrawingText.js";
import { Lesson4DrawingSimpleImages } from "./Lesson4DrawingSimpleImages.js";
import { Lesson5GitCommands } from "./Lesson5GitCommands.js";
import { Lesson6DrawingWithForLoops } from "./Lesson6DrawingWithForLoops.js";
import { Lesson7DrawingArrays } from "./Lesson7DrawingArrays.js";
import { Lesson8DrawingMatrices } from "./Lesson8DrawingMatrices.js";
import { Lesson9RefactorWithVariablesAndMethods } from "./Lesson9RefactorWithVariablesAndMethods.js";
import { Lesson10ImportingImages } from "./Lesson10ImportingImages.js";
import { Lesson11DrawingImages } from "./Lesson11DrawingImages.js";
import { Lesson12DrawingUsingObjects } from "./Lesson12DrawingUsingObjects.js";
import { LessonDadToday } from "./LessonDadToday.js";

export class LessonGameLoop extends Drawing {
    constructor(canvas, ctx) {
        super();

        this.canvas = canvas;
        this.ctx = ctx;

        this.rows = 5;
        this.columns = 5;

        this.x = CanvasDecorator.getLeft();
        this.y = CanvasDecorator.getTop();
        this.w = CanvasDecorator.getWidth() / this.rows;
        this.h = CanvasDecorator.getHeight() / this.columns;

        this.context.set("GameLoop", this);
        GameContext.addClickSubscriber(this);
    }

    update(tick) {
        if (this.lesson) {
            this.lesson.update(tick);
        }
    }

    draw() {
        if (this.lesson) {
            this.lesson.draw();
            return;
        }
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                const x = this.x + (this.w * i);
                const y = this.y + (this.h * j);
                CanvasContextDecorator.drawRectangle(5, "white", x, y, this.w, this.h);
                if (i == 0 && j == 0) {
                    CanvasContextDecorator.drawText("Lesson 1", "30pt Helvetica", "white", x + 35, y + 45);
                    CanvasContextDecorator.drawText("Drawing Rectangles", "20pt Helvetica", "white", x + 25, y + 90);
                }
                if (i == 1 && j == 0) {
                    CanvasContextDecorator.drawText("Lesson 2", "30pt Helvetica", "white", x + 35, y + 45);
                    CanvasContextDecorator.drawText("Drawing Circles", "20pt Helvetica", "white", x + 25, y + 90);
                }
                if (i == 2 && j == 0) {
                    CanvasContextDecorator.drawText("Lesson 3", "30pt Helvetica", "white", x + 35, y + 45);
                    CanvasContextDecorator.drawText("Drawing Text", "20pt Helvetica", "white", x + 25, y + 90);
                }
                if (i == 3 && j == 0) {
                    CanvasContextDecorator.drawText("Lesson 4", "30pt Helvetica", "white", x + 35, y + 45);
                    CanvasContextDecorator.drawText("Drawing Simple", "20pt Helvetica", "white", x + 25, y + 90);
                    CanvasContextDecorator.drawText("Images", "20pt Helvetica", "white", x + 25, y + 130);
                }
                if (i == 4 && j == 0) {
                    CanvasContextDecorator.drawText("Lesson 5", "30pt Helvetica", "white", x + 35, y + 45);
                    CanvasContextDecorator.drawText("Git Commands", "20pt Helvetica", "white", x + 25, y + 90);
                }
                if (i == 0 && j == 1) {
                    CanvasContextDecorator.drawText("Lesson 6", "30pt Helvetica", "white", x + 35, y + 45);
                    CanvasContextDecorator.drawText("Drawing With", "20pt Helvetica", "white", x + 25, y + 90);
                    CanvasContextDecorator.drawText("For Loops", "20pt Helvetica", "white", x + 25, y + 130);
                }
                if (i == 1 && j == 1) {
                    CanvasContextDecorator.drawText("Lesson 7", "30pt Helvetica", "white", x + 35, y + 45);
                    CanvasContextDecorator.drawText("Drawing Arrays", "20pt Helvetica", "white", x + 25, y + 90);
                }
                if (i == 2 && j == 1) {
                    CanvasContextDecorator.drawText("Lesson 8", "30pt Helvetica", "white", x + 35, y + 45);
                    CanvasContextDecorator.drawText("Drawing Matrices", "20pt Helvetica", "white", x + 25, y + 90);
                }
                if (i == 3 && j == 1) {
                    CanvasContextDecorator.drawText("Lesson 9", "30pt Helvetica", "white", x + 35, y + 45);
                    CanvasContextDecorator.drawText("Refactor With", "20pt Helvetica", "white", x + 25, y + 90);
                    CanvasContextDecorator.drawText("Variables And Methods", "20pt Helvetica", "white", x + 25, y + 130);
                }
                if (i == 4 && j == 1) {
                    CanvasContextDecorator.drawText("Lesson 10", "30pt Helvetica", "white", x + 35, y + 45);
                    CanvasContextDecorator.drawText("Importing Images", "20pt Helvetica", "white", x + 25, y + 90);
                }
                if (i == 0 && j == 2) {
                    CanvasContextDecorator.drawText("Lesson 11", "30pt Helvetica", "white", x + 35, y + 45);
                    CanvasContextDecorator.drawText("Drawing Images", "20pt Helvetica", "white", x + 25, y + 90);
                }
                if (i == 1 && j == 2) {
                    CanvasContextDecorator.drawText("Lesson 12", "30pt Helvetica", "white", x + 35, y + 45);
                    CanvasContextDecorator.drawText("Drawing Using", "20pt Helvetica", "white", x + 25, y + 90);
                    CanvasContextDecorator.drawText("Objects", "20pt Helvetica", "white", x + 25, y + 130);
                }
                if (i == 2 && j == 2) {
                    CanvasContextDecorator.drawText("Lesson 13", "30pt Helvetica", "white", x + 35, y + 45);
                    CanvasContextDecorator.drawText("Refactor With", "20pt Helvetica", "white", x + 25, y + 90);
                    CanvasContextDecorator.drawText("Objects", "20pt Helvetica", "white", x + 25, y + 130);
                }

                if (i == 4 && j == 4) {
                    CanvasContextDecorator.drawText("TODAY'S", "60pt Helvetica", "white", x + 25, y + 85);
                    CanvasContextDecorator.drawText("LESSON", "60pt Helvetica", "white", x + 30, y + 160);
                }
            }
        }
    }

    onClick(x, y) {
        if (this.lesson) {
            this.lesson.onClick(x, y);
            return;
        }
        if (insideRectangle(x, y, 0, 0, this.w, this.h)) {
            this.lesson = new Lesson1DrawingRectangles();
        }
        if (insideRectangle(x, y, this.w, 0, this.w, this.h)) {
            this.lesson = new Lesson2DrawingCircles();
        }
        if (insideRectangle(x, y, this.w * 2, 0, this.w, this.h)) {
            this.lesson = new Lesson3DrawingText();
        }
        if (insideRectangle(x, y, this.w * 3, 0, this.w, this.h)) {
            this.lesson = new Lesson4DrawingSimpleImages();
        }
        if (insideRectangle(x, y, this.w * 4, 0, this.w, this.h)) {
            this.lesson = new Lesson5GitCommands();
        }
        if (insideRectangle(x, y, 0, this.h, this.w, this.h)) {
            this.lesson = new Lesson6DrawingWithForLoops();
        }
        if (insideRectangle(x, y, this.w, this.h, this.w, this.h)) {
            this.lesson = new Lesson7DrawingArrays();
        }
        if (insideRectangle(x, y, this.w * 2, this.h, this.w, this.h)) {
            this.lesson = new Lesson8DrawingMatrices();
        }
        if (insideRectangle(x, y, this.w * 3, this.h, this.w, this.h)) {
            this.lesson = new Lesson9RefactorWithVariablesAndMethods();
        }
        if (insideRectangle(x, y, this.w * 4, this.h, this.w, this.h)) {
            this.lesson = new Lesson10ImportingImages();
        }
        if (insideRectangle(x, y, 0, this.h * 2, this.w, this.h)) {
            this.lesson = new Lesson11DrawingImages();
        }

        if (insideRectangle(x, y, this.w * 4, this.h * 4, this.w, this.h)) {
            this.lesson = new LessonDadToday();
        }
    }
}