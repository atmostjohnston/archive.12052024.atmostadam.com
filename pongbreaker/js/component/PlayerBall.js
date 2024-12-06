import { Ball } from "./Ball.js";

export class PlayerBall extends Ball {
    constructor(context) {
        // TODO: We want player to select configuration values on StartPongBreakerScreen
        super(context, "yellow", 7, 5, 50, 10, 10);
    }
}