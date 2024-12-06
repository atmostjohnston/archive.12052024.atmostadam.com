import { TowerGameLoop } from "../../TowerGameLoop.js";

export class Rat1Right {
    constructor(instructions, startAtTick) {
        this.key = "Rat1Right";
        this.imageId = "Rat1Right";
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