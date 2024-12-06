import { Circle } from "./../../../corejs/canvas/shapes/Circle.js"
import { Rectangle } from "./../../../corejs/canvas/shapes/Rectangle.js"
import { boot } from "./../../../corejs/boot/boot.js";
import { GameContext } from "../../../corejs/context/GameContext.js";

window.addEventListener("load", function () {
    var context = new GameContext();
    context.setGameLoop(new NathansPongGame(context));
    boot(context);
});

export class NathansPongGame {
    constructor(context) {
        this.context = context;
        console.log(this);
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        //let ball = new Circle(this.context, "yellow", 500, 500, 10);
        //ball.draw();
        //let paddle = new Rectangle(this.context, "green", 300, 600, 200, 20);
        //paddle.draw();
    }

    onClick(x, y) {
    }
}