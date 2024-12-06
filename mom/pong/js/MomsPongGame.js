import { Circle } from "./../../../corejs/canvas/shapes/Circle.js"
import { Rectangle } from "./../../../corejs/canvas/shapes/Rectangle.js"
import { boot } from "./../../../corejs/boot/boot.js";
import { GameContext } from "../../../corejs/context/GameContext.js";

window.addEventListener("load", function () {
    var context = new GameContext();
    context.setGameLoop(new MomsPongGame(context));
    boot(context);
});

export class MomsPongGame {
    constructor(context) {
        console.log(this);
        this.context = context;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        //let ball = new Circle(this.context, "red", 100, 100, 10);
        //ball.draw();
        //let paddle = new Rectangle(this.context, "purple", 800, 400, 200, 20);
        //paddle.draw();
    }

    onClick(x, y) {

    }
}