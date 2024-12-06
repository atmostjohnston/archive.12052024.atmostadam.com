import { MultiLineText } from "./../../boot/canvas/model/text/MultiLineText.js";
import { AnimatedCircle } from "./../../boot/canvas/model/shapes/AnimatedCircle.js";
import { boot } from "./../../boot/boot.js";
import { MouseFollowRectangle } from "./../../boot/canvas/model/shapes/MouseFollowRectangle.js";
import { GameContext } from "./../../boot/context/GameContext.js";
import { BlueBrickTile } from "./decorator/layer3Solid/BlueBrickTile.js";
import { GrayBrickTile } from "./decorator/layer3Solid/GrayBrickTile.js";
import { GreenBrickTile } from "./decorator/layer3Solid/GreenBrickTile.js";
import { OrangeBrickTile } from "./decorator/layer3Solid/OrangeBrickTile.js";
import { PurpleBrickTile } from "./decorator/layer3Solid/PurpleBrickTile.js";
import { RedBrickTile } from "./decorator/layer3Solid/RedBrickTile.js";
import { YellowBrickTile } from "./decorator/layer3Solid/YellowBrickTile.js";
import { BreakoutStatistics } from "./singleton/BreakoutStatistics.js";
import { BreakoutLevel3 } from "./level/BreakoutLevel3.js";
import { BreakoutLevel2 } from "./level/BreakoutLevel2.js";
import { BreakoutLevel4 } from "./level/BreakoutLevel4.js";

window.addEventListener("load", function () {
    var context = new GameContext();
    context.setGameLoop(new BreakoutGame(context));
    context.preloadImage("BlueBrick64x32", "./images/tiles/screamingbrainstudios/Colored_Blue-64x32.png");
    context.preloadImage("GrayBrick64x32", "./images/tiles/screamingbrainstudios/Colored_Gray-64x32.png");
    context.preloadImage("GreenBrick64x32", "./images/tiles/screamingbrainstudios/Colored_Green-64x32.png");
    context.preloadImage("OrangeBrick64x32", "./images/tiles/screamingbrainstudios/Colored_Orange-64x32.png");
    context.preloadImage("PurpleBrick64x32", "./images/tiles/screamingbrainstudios/Colored_Purple-64x32.png");
    context.preloadImage("RedBrick64x32", "./images/tiles/screamingbrainstudios/Colored_Red-64x32.png");
    context.preloadImage("YellowBrick64x32", "./images/tiles/screamingbrainstudios/Colored_Yellow-64x32.png");
    boot(context);
});

export class BreakoutGame {
    constructor(context) {
        new BreakoutStatistics();
        this.context = context;
        this.grid = this.context.getFullScreenGrid();
        this.running = true;
        this.levels = new Map();
    }

    init() {
        this.screen = this.context.getScreen();

        this.levels.set(3, new BreakoutLevel3().level);

        this.grid.load(30, 20);

        let layer = this.levels.get(BreakoutStatistics.getInstance().getLevel());

        for (let row = 0; row < this.grid.getNumberOfRows(); row++) {
            for (let column = 0; column < this.grid.getNumberOfColumns(); column++) {
                if (layer[row] && layer[row][column]) {
                    if ("BlueBrickTile" == layer[row][column]) {
                        layer[row][column] = new BlueBrickTile(this.context, row, column);
                    }
                    if ("GrayBrickTile" == layer[row][column]) {
                        layer[row][column] = new GrayBrickTile(this.context, row, column);
                    }
                    if ("GreenBrickTile" == layer[row][column]) {
                        layer[row][column] = new GreenBrickTile(this.context, row, column);
                    }
                    if ("OrangeBrickTile" == layer[row][column]) {
                        layer[row][column] = new OrangeBrickTile(this.context, row, column);
                    }
                    if ("PurpleBrickTile" == layer[row][column]) {
                        layer[row][column] = new PurpleBrickTile(this.context, row, column);
                    }
                    if ("RedBrickTile" == layer[row][column]) {
                        layer[row][column] = new RedBrickTile(this.context, row, column);
                    }
                    if ("YellowBrickTile" == layer[row][column]) {
                        layer[row][column] = new YellowBrickTile(this.context, row, column);
                    }
                }
            }
        }
        this.grid.setLayer3SolidImage(layer);
        this.grid.setLayer15Collision(layer);
    }

    update(tick) {
        if (!this.grid.loaded) {
            this.init();
        }
        if (!this.running) {
            return;
        }
        if (!this.ball) {
            this.createBall();
        }
        if (!this.paddle) {
            this.createPaddle();
        }

        this.tick = tick;

        this.ball.update(tick);
        this.paddle.update(tick, -100, 0);

        this.ball.bounceIfTouchingLeft();
        this.ball.bounceIfTouchingRight();
        this.ball.bounceIfTouchingTop();
        this.ball.bounceIfTouchingRectangleY(this.paddle.x, this.paddle.y, this.paddle.w, this.paddle.h);

        this.running = !this.ball.isTouchingBottom();

        if (!this.context.getMouseListener().mousePositionX) {
            this.paddle.setX(this.screen.getWidthPercent(50) - 100);
            this.paddle.setY(this.screen.getHeightPercent(95));
        }

        this.grid.update(tick);
        this.bounceIfCollision();
    }

    createBall() {
        this.ball = new AnimatedCircle(
            this.context,
            "yellow",
            this.screen.getWidthPercent(50),
            this.screen.getHeightPercent(50),
            7,
            10,
            -10
        );
    }

    createPaddle() {
        this.paddle = new MouseFollowRectangle(
            this.context,
            "orange",
            0,
            this.context.getScreen().getHeightPercent(95),
            200,
            15,
            true,
            false
        );
    }

    bounceIfCollision() {
        let layer = this.context.getFullScreenGrid().getLayer15Collision();
        for (let row = 0; row < this.grid.getNumberOfRows(); row++) {
            for (let column = 0; column < this.grid.getNumberOfColumns(); column++) {
                if (layer[row] && layer[row][column]) {
                    layer[row][column].update(this.tick);
                    let x = layer[row][column].x;
                    let y = layer[row][column].y;
                    let w = layer[row][column].sw;
                    let h = layer[row][column].sh;
                    if (this.ball.bounceIfTouchingRectangleX(x, y, w, h) ||
                        this.ball.bounceIfTouchingRectangleY(x, y, w, h)) {
                        this.breakBrick(row, column);
                        return;
                    }
                }
            }
        }
    }

    breakBrick(row, column) {
        let brick = this.context.getFullScreenGrid().getLayer15Collision()[row][column];
        if (brick.constructor.name == "GreenBrickTile") {
            BreakoutStatistics.getInstance().increaseScore(100);
        }
        if (brick.constructor.name == "YellowBrickTile") {
            BreakoutStatistics.getInstance().increaseScore(200);
        }
        if (brick.constructor.name == "BlueBrickTile") {
            BreakoutStatistics.getInstance().increaseScore(300);
        }
        if (brick.constructor.name == "PurpleBrickTile") {
            BreakoutStatistics.getInstance().increaseScore(400);
        }
        if (brick.constructor.name == "OrangeBrickTile") {
            BreakoutStatistics.getInstance().increaseScore(500);
        }
        if (brick.constructor.name == "RedBrickTile") {
            BreakoutStatistics.getInstance().increaseScore(600);
        }
        let nextBrick = brick.decreaseHp();
        if (nextBrick) {
            this.context.getFullScreenGrid().getLayer15Collision()[row][column] = nextBrick;
        } else {
            this.context.getFullScreenGrid().getLayer15Collision()[row][column] = null;
        }
    }

    draw() {
        if (this.running) {
            this.ball.draw();
            this.paddle.draw();
            this.grid.draw();
            this.drawStatistics();
        } else {
            if (!this.endGame) {
                BreakoutStatistics.getInstance().setHiscore(BreakoutStatistics.getInstance().getScore());
                BreakoutStatistics.getInstance().increaseGamesPlayed();
                this.endGame = true;
            }
            this.endGameStatistics();
        }
    }

    drawStatistics() {
        this.screen.drawText(
            BreakoutStatistics.getInstance().getScore(),
            "20pt Helvetica",
            "white",
            this.screen.getWidthPercent(97),
            this.screen.getHeightPercent(3)
        );
    }

    endGameStatistics() {
        new MultiLineText(
            this.context,
            ["Game Over, Bruh or Sistuh!", "Click the Mouse to Restart",
                "Current Score: " + BreakoutStatistics.getInstance().getScore(),
                "Hiscore Score: " + BreakoutStatistics.getInstance().getHiscore(),
                "Total Games Played: " + BreakoutStatistics.getInstance().getGamesPlayed()],
            this.context.getScreen().getWidthPercent(25),
            this.context.getScreen().getHeightPercent(5),
            null,
            "white",
            40,
            "Helvetica").draw();
    }

    nextLevel() {

    }

    onClick() {
        if (!this.running) {
            this.ball.reset();
            BreakoutStatistics.getInstance().resetScore();
            this.init();
            this.running = true;
            this.endGame = false;
        }
    }
}