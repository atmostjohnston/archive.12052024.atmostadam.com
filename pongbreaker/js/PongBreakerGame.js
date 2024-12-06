import { boot } from "./../../boot/boot.js";
import { GameContext } from "./../../../boot/context/GameContext.js";
import { PongBreakerLevel1 } from "./level/PongBreakerLevel1.js";
import { BlueBrickImage } from "./decorator/layer3solid/BlueBrickImage.js";
import { GrayBrickImage } from "./decorator/layer3solid/GrayBrickImage.js";
import { GreenBrickImage } from "./decorator/layer3solid/GreenBrickImage.js";
import { OrangeBrickImage } from "./decorator/layer3solid/OrangeBrickImage.js";
import { PurpleBrickImage } from "./decorator/layer3solid/PurpleBrickImage.js";
import { RedBrickImage } from "./decorator/layer3solid/RedBrickImage.js";
import { YellowBrickImage } from "./decorator/layer3solid/YellowBrickImage.js";
import { StartPongBreakerScreen } from "./screen/StartPongBreakerScreen.js";
import { PongBreakerScreen } from "./screen/PongBreakerScreen.js";

window.addEventListener("load", function () {
    var context = new GameContext();
    context.setGameLoop(new PongBreakerGame(context));
    context.preloadImage("BlueBrick32x64", "./images/screamingbrainstudios/Colored_Blue-32x64.png");
    context.preloadImage("GrayBrick32x64", "./images/screamingbrainstudios/Colored_Gray-32x64.png");
    context.preloadImage("GreenBrick32x64", "./images/screamingbrainstudios/Colored_Green-32x64.png");
    context.preloadImage("OrangeBrick32x64", "./images/screamingbrainstudios/Colored_Orange-32x64.png");
    context.preloadImage("PurpleBrick32x64", "./images/screamingbrainstudios/Colored_Purple-32x64.png");
    context.preloadImage("RedBrick32x64", "./images/screamingbrainstudios/Colored_Red-32x64.png");
    context.preloadImage("YellowBrick32x64", "./images/screamingbrainstudios/Colored_Yellow-32x64.png");
    boot(context);
});

export class PongBreakerGame {
    constructor(context) {
        this.context = context;
        this.grid = this.context.getFullScreenGrid();
        this.levels = new Map();
        this.screen = new StartPongBreakerScreen();
    }

    init() {
        this.grid.load(10, 40);
        this.loadGrid(new PongBreakerLevel1().level);
        this.screen = new PongBreakerScreen(this.context);
        this.running = true;
    }

    loadGrid(layer) {
        for (let row = 0; row < this.grid.getNumberOfRows(); row++) {
            for (let column = 0; column < this.grid.getNumberOfColumns(); column++) {
                if (layer[row] && layer[row][column]) {
                    if ("BlueBrickImage" == layer[row][column]) {
                        layer[row][column] = new BlueBrickImage(this.context, row, column);
                    }
                    if ("GrayBrickImage" == layer[row][column]) {
                        layer[row][column] = new GrayBrickImage(this.context, row, column);
                    }
                    if ("GreenBrickImage" == layer[row][column]) {
                        layer[row][column] = new GreenBrickImage(this.context, row, column);
                    }
                    if ("OrangeBrickImage" == layer[row][column]) {
                        layer[row][column] = new OrangeBrickImage(this.context, row, column);
                    }
                    if ("PurpleBrickImage" == layer[row][column]) {
                        layer[row][column] = new PurpleBrickImage(this.context, row, column);
                    }
                    if ("RedBrickImage" == layer[row][column]) {
                        layer[row][column] = new RedBrickImage(this.context, row, column);
                    }
                    if ("YellowBrickImage" == layer[row][column]) {
                        layer[row][column] = new YellowBrickImage(this.context, row, column);
                    }
                }
            }
        }
        this.grid.setLayer3SolidImage(layer);
        this.grid.setLayer15Collision(layer);
    }

    update(tick) {
        this.tick = tick;
        if (!this.grid.loaded) {
            this.init();
        }
        this.screen.update(this.tick);
        if (this.running) {
            this.grid.update(this.tick);
        }
    }

    draw() {
        this.screen.draw();
        if (this.running) {
            this.grid.draw();
        }
    }

    onClick() {
        if (!this.running) {
            this.init();
        }
    }
}