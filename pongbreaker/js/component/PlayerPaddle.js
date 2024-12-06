import { Paddle } from "./Paddle.js";

export class PlayerPaddle extends Paddle {
    constructor(context) {
        // TODO: We want player to select configuration values on StartPongBreakerScreen
        super(context, "green", 1, 50, 1.5, 15);
    }
}