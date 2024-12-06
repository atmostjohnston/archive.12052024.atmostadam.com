import { requireContext } from "../../../boot/function/ValidationFunctions.js";
import { ChickenOpponent } from "../opponents/ChickenOpponent.js";
import { SnakeOpponent } from "../opponents/SnakeOpponent.js";
import { SquirrelOpponent } from "../opponents/SquirrelOpponent.js";

export class OpponentLoader {
    constructor(context) {
        requireContext(context, this);

        this.opponentNames = ["Chicken", "Snake", "Squirrel"];
        this.context.set("opponentNames", this.opponentNames);

        /*
        for (var i = 0; i < 3; i++) {
            this.context.preloadImage(this.opponentNames[i].toLowerCase() + "Pixel");
            this.context.preloadImage(this.opponentNames[i].toLowerCase() + "Portrait");
        }
        */

        this.context.setClass(new ChickenOpponent(this.context));
        this.context.setClass(new SnakeOpponent(this.context));
        this.context.setClass(new SquirrelOpponent(this.context));
    }
}