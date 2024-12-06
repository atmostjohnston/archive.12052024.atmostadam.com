import { HelpfulGameable } from "./../../boot/base/HelpfulGameable.js";
import { GameContext } from "./../../boot/context/GameContext.js";
import { boot } from "./../../boot/boot.js";
import { Paddle } from "./model/Paddle.js";
import { Ball } from "./model/Ball.js";
import { Grid } from "../../boot/canvas/model/grid/Grid.js";
import { YellowBrick } from "./model/YellowBrick.js";
import { BombBreakLevelConfiguration } from "./level/BombBreakLevelConfiguration.js";
import { Explosion } from "./model/Explosion.js";

window.addEventListener("load", function () {
    try {
        var context = new GameContext();
        context.setGameLoop(new BombBreak(context));
    } catch (e) {
        console.error("[FATAL] GAME LOOP HAS CRASHED ON [LOAD]!", e, this);
        throw e;
    }
    try {
        boot(context);
    } catch (e) {
        console.error("[FATAL] GAME LOOP HAS CRASHED ON [BOOT]!", e, this);
        throw e;
    }
});

export class BombBreak extends HelpfulGameable {
    constructor(context) {
        super(context);

        this.levels = new BombBreakLevelConfiguration();

        this.numberOfRows = 30;
        this.numberOfColumns = 20;
        this.columnPercentArray = this.splitToEqualPartsArray(100, this.numberOfColumns, 0);
        this.rowPercentArray = this.splitToEqualPartsArray(100, this.numberOfRows, 0);
        this.level = 1;

        this.paddleColor = "green";
        this.paddlePercentX = 50;
        this.paddlePercentY = 97;
        this.paddlePercentW = 10;
        this.paddlePercentH = 3;

        this.ballColor = "yellow";
        this.ballPercentX = 10;
        this.ballPercentY = 10;
        this.ballPercentR = 5;
        this.ballSpeedX = 5;
        this.ballSpeedY = 5;
    }

    init() {
        this.grid = new Grid(
            this.context,
            0,
            0,
            this.columnPercentArray,
            this.rowPercentArray);

        var rows = this.levels.getLevel(1, this.numberOfRows, this.numberOfColumns);
        for (let rowNumber = 0; rowNumber < this.numberOfRows; rowNumber++) {
            for (let columnNumber = 0; columnNumber < this.numberOfColumns; columnNumber++) {
                var value = rows[rowNumber][columnNumber].trim();
                if ("Y" == value) {
                    this.grid.get(rowNumber, columnNumber).setImage(new YellowBrick(this.context, this.grid.get(rowNumber, columnNumber)));
                }
            }
        }

        this.ball = new Ball(
            this.context,
            this.grid,
            this.ballColor,
            this.ballPercentX,
            this.ballPercentY,
            this.ballPercentR,
            this.ballSpeedX,
            this.ballSpeedY
        );

        this.paddle = new Paddle(
            this.context,
            this.paddleColor,
            this.paddlePercentX,
            this.paddlePercentY,
            this.paddlePercentW,
            this.paddlePercentH
        );

        this.loaded = true;
        this.context.registerResizeConsumer(this);
    }

    update(tick) {
        super.update(tick);
        //this.paddle.update(tick);
        this.ball.update(tick);

        for (let rowNumber = 0; rowNumber < this.grid.getNumberOfRows(); rowNumber++) {
            for (let columnNumber = 0; columnNumber < this.grid.getNumberOfColumns(); columnNumber++) {
                var cell = this.grid.get(rowNumber, columnNumber);
                var image = cell.getImage();
                if (image) {
                    console.warn("Yes IMAGE! [" + image + "]");
                    if (this.checkCollision(
                        this.ball.getX(),
                        this.ball.getY(),
                        this.ball.getR() * 2,
                        this.ball.getR() * 2,
                        image.getX(),
                        image.getY(),
                        image.getSw(),
                        image.getSh())) {
                        console.warn("Yes NEW EXPLOSION! [" + image + "]");
                        cell.setImage(new Explosion(this.context, cell));
                    }
                }
            }
        }

        this.grid.update(tick);
    }

    draw() {
        //this.paddle.draw();
        this.ball.draw();
        this.grid.draw();
    }

    getPaddleColor() {
        return this.paddleColor;
    }

    setPaddleColor(color) {
        this.color = this.notNull(color);
    }

    getPaddlePercentX() {
        return this.paddlePercentX;
    }

    setPaddlePercentX(paddlePercentX) {
        this.paddlePercentX = this.isNumber(paddlePercentX);
    }

    getPaddlePercentY() {
        return this.paddlePercentY;
    }

    setPaddlePercentY(paddlePercentY) {
        this.paddlePercentY = this.isNumber(paddlePercentY);
    }

    getPaddlePercentW() {
        return this.paddlePercentW;
    }

    setPaddlePercentW(paddlePercentW) {
        this.paddlePercentW = this.isNotZeroNumber(paddlePercentW);
    }

    getPaddlePercentH() {
        return this.paddlePercentW;
    }

    setPaddlePercentH(paddlePercentH) {
        this.paddlePercentH = this.isNotZeroNumber(paddlePercentH);
    }

    getBallColor() {
        return this.ballColor;
    }

    setBallColor(color) {
        this.color = this.notNull(color);
    }

    getBallPercentX() {
        return this.ballPercentX;
    }

    setBallPercentX(ballPercentX) {
        this.ballPercentX = this.isNumber(ballPercentX);
    }

    getBallPercentY() {
        return this.ballPercentY;
    }

    setBallPercentY(ballPercentY) {
        this.ballPercentY = this.isNumber(ballPercentY);
    }

    getBallPercentW() {
        return this.ballPercentW;
    }

    setBallPercentW(ballPercentW) {
        this.ballPercentW = this.isNotZeroNumber(ballPercentW);
    }
}