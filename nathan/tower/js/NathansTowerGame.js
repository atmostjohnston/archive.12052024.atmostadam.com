import { TowerContext } from "../../tower/context/TowerContext.js";
import { NathansLevel1Layer1 } from "./NathansLevel1Layer1.js";
import { NathansLevel1Layer2 } from "./NathansLevel1Layer2.js";

export class NathansTowerGame {
    constructor() {
        new TowerContext();

        this.layer1 = new NathansLevel1Layer1();
        this.layer2 = new NathansLevel1Layer2();

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

    onclick(x, y) { }
}