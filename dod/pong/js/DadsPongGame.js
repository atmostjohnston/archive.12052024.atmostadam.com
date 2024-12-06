import { AnimatedCircle } from "../../../corejs/canvas/shapes/AnimatedCircle.js";
import { boot } from "./../../../corejs/boot/boot.js";
import { MouseFollowRectangle } from "../../../corejs/canvas/shapes/MouseFollowRectangle.js";
import { GameContext } from "../../../corejs/context/GameContext.js";
import { MultiLineText } from "../../../corejs/canvas/text/MultiLineText.js";

window.addEventListener("load", function () {
    var context = new GameContext();
    context.setGameLoop(new DadsPongGame(context));
    boot(context);
});

export class DadsPongGame {
    constructor(context) {
        this.context = context;
        this.grid = this.context.getFullScreenGrid();
        this.running = true;
    }

    init() {
        this.screen = this.context.getScreen();
        this.grid.load(2, 4);
        this.grid.setLayer14BorderForAll(5, "white");
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
        this.ball.bounceIfTouchingRectangleY(this.paddle);

        this.running = !this.ball.isTouchingBottom();

        if (!this.context.getMouseListener().mousePositionX) {
            this.paddle.setX(this.screen.getWidthPercent(50) - 100);
            this.paddle.setY(this.screen.getHeightPercent(95));
        }
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

    draw() {
        if (this.running) {
            this.ball.draw();
            this.paddle.draw();
        } else {
            this.endGame();
        }
    }

    endGame() {
        new MultiLineText(
            this.context,
            ["Game Over, Bruh!", "Click the Mouse to Restart"],
            this.context.getScreen().getWidthPercent(25),
            this.context.getScreen().getHeightPercent(25),
            null,
            "white",
            40,
            "Helvetica").draw();
    }

    onClick() {
        if (!this.running) {
            this.ball.reset();
            this.running = true;
        }
    }
}