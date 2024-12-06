import { CanvasDecorator } from "../corecanvas/CanvasDecorator.js";
import { CanvasContextDecorator } from "../corecanvas/CanvasContextDecorator.js";
import { GameContext } from "../../corejs/context/GameContext.js";
import { NathansSoundBoard } from "../nathan/NathansSoundBoard.js";
import { RachelsSoundBoard } from "../rachel/RachelsSoundBoard.js";
import { DadsArnoldSoundboard } from "../dod/DadsArnoldSoundboard.js";
import { insideRectangle } from "../coreutil/MathUtils.js";
import { DadsSoundboard } from "../dod/DadsSoundboard.js";

export class SoundboardChoice {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.context.set("GameLoop", this);
        GameContext.addClickSubscriber(this);

        this.rows = 2;
        this.columns = 2;

        this.x = CanvasDecorator.getLeft();
        this.y = CanvasDecorator.getTop();
        this.w = CanvasDecorator.getWidth() / this.rows;
        this.h = CanvasDecorator.getHeight() / this.columns;
    }

    update(tick) {
        if (this.game) {
            this.game.update(tick);
        }
    }

    draw() {
        if (this.game) {
            this.game.draw();
            return;
        }

        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                const x = this.x + (this.w * i);
                const y = this.y + (this.h * j);
                CanvasContextDecorator.drawRectangle(5, "white", x, y, this.w, this.h);
                if (i == 0 && j == 0) {
                    CanvasContextDecorator.drawText("Rachel's", "60pt Helvetica", "white", CanvasDecorator.getWidth() / 6, CanvasDecorator.getHeight() / 5);
                    CanvasContextDecorator.drawText("Soundboard", "100pt Helvetica", "white", CanvasDecorator.getWidth() / 12, CanvasDecorator.getHeight() / 3);
                }
                if (i == 1 && j == 0) {
                    CanvasContextDecorator.drawText("Nathans's", "60pt Helvetica", "white", CanvasDecorator.getWidth() * 0.7, CanvasDecorator.getHeight() / 5);
                    CanvasContextDecorator.drawText("Soundboard", "100pt Helvetica", "white", CanvasDecorator.getWidth() * 0.6, CanvasDecorator.getHeight() / 3);
                }
                if (i == 0 && j == 1) {
                    CanvasContextDecorator.drawText("Dad's", "60pt Helvetica", "white", CanvasDecorator.getWidth() / 6, CanvasDecorator.getHeight() * 0.7);
                    CanvasContextDecorator.drawText("Soundboard", "100pt Helvetica", "white", CanvasDecorator.getWidth() / 12, CanvasDecorator.getHeight() * 0.8);
                }
                if (i == 1 && j == 1) {
                    CanvasContextDecorator.drawText("Arnolds", "60pt Helvetica", "white", CanvasDecorator.getWidth() * 0.7, CanvasDecorator.getHeight() * 0.7);
                    CanvasContextDecorator.drawText("Soundboard", "100pt Helvetica", "white", CanvasDecorator.getWidth() * 0.6, CanvasDecorator.getHeight() * 0.8);
                }
            }
        }
    }

    onClick(x, y) {
        if (this.game) {
            this.game.onClick(x, y);
            return;
        }
        let halfW = CanvasDecorator.getWidth() / 2;
        let halfH = CanvasDecorator.getHeight() / 2;
        if (insideRectangle(x, y, 0, 0, halfW, halfH)) {
            this.game = new NathansSoundBoard(this.canvas, this.ctx);
        }
        if (insideRectangle(x, y, halfW, 0, halfW, halfH)) {
            this.game = new RachelsSoundBoard(this.canvas, this.ctx);
        }
        if (insideRectangle(x, y, 0, halfH, halfW, halfH)) {
            this.game = new DadsSoundboard(this.canvas, this.ctx);
        }
        if (insideRectangle(x, y, halfW, halfH, halfW, halfH)) {
            this.game = new DadsArnoldSoundboard(this.canvas, this.ctx);
        }
    }
}