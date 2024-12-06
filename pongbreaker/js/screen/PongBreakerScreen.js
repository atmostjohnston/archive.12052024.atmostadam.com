import { PlayerBall } from "./../component/PlayerBall.js";
import { PlayerPaddle } from "./../component/PlayerPaddle.js";
import { OpponentBall } from "./../component/OpponentBall.js";
import { OpponentPaddle } from "./../component/OpponentPaddle.js";

export class PongBreakerScreen {
    constructor(context) {
        this.context = context;
        this.grid = this.context.getFullScreenGrid();
        this.playerBall = new PlayerBall(this.context);
        this.opponentBall = new OpponentBall(this.context);
        this.playerPaddle = new PlayerPaddle(this.context);
        this.opponentPaddle = new OpponentPaddle(this.context);
    }

    update(tick) {
        this.tick = tick;
        this.playerBall.update(tick);
        this.opponentBall.update(tick);
        this.playerPaddle.update(tick);
        this.opponentPaddle.update(tick);
        this.grid.update(tick);
    }

    draw() {
        this.playerBall.draw();
        this.opponentBall.draw();
        this.playerPaddle.draw();
        this.opponentPaddle.draw();
        this.grid.draw();
    }
}