import { RachelsLevel1Layer1 } from "./RachelsLevel1Layer1.js";
import { RachelsLevel1Layer2 } from "./RachelsLevel1Layer2.js";
import { TowerContext } from "../../tower/context/TowerContext.js";


export class RachelsTowerGame {
    constructor() {
        new TowerContext();

        this.layer1 = new RachelsLevel1Layer1();
        this.layer2 = new RachelsLevel1Layer2();

        console.log(this);
    }

    update(tick) {
        this.layer1.update(tick);
        this.layer2.update(tick);
    }

    draw() {
        this.layer1.draw();
        this.layer2.draw();
    }

    onClick() {
    }
}