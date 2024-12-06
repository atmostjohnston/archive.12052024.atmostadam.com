import { Paddle } from "./Paddle.js";

export class OpponentPaddle extends Paddle {
    constructor(context) {
        // TODO: We want player to select configuration values on StartPongBreakerScreen
        super(context, "orange", 99, 50, 1.5, 15);

    }
}