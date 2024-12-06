import { TowerContext } from "../../tower/context/TowerContext.js";
import { MomsLevel1Layer1 } from "./MomsLevel1Layer1.js";
import { MomsLevel1Layer2 } from "./MomsLevel1Layer2.js";
import { preload, registerGameLoop, boot } from "../../../corejs/boot/boot.js";

window.addEventListener("load", function () {
    preinit();
    registerGameLoop(new MomsTowerGame());
    boot();
});

export class MomsTowerGame {
    constructor() {
        new TowerContext();

        this.layer1 = new MomsLevel1Layer1();
        this.layer2 = new MomsLevel1Layer2();

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