import { TowerGameLoop } from "../../TowerGameLoop.js";

export class Rat1Left {
    constructor(instructions, startAtTick) {
        this.key = "Rat1Left";
        this.imageId = "Rat1Left";
        this.ix = 0;
        this.iy = 0;
        this.w = 128;
        this.h = 128;
        this.x = 5;
        this.y = 15;
        this.hp = 50;
        this.instructions = instructions;
        this.startAtTick = startAtTick;
    }
}