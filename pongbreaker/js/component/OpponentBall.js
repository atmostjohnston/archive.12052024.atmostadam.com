import { Ball } from "./Ball.js";

export class OpponentBall extends Ball {
    constructor(context) {
        // TODO: We want player to select configuration values on StartPongBreakerScreen
        super(context, "blue", 7, 95, 50, -10, 10);
    }
}