import { requireContext, requireScreen, requireTick } from "../../../boot/function/ValidationFunctions.js";

export class LoginScreen {
    constructor(context) {
        requireContext(context, this);
    }

    init() {
        requireScreen(this.context, this);
        this.image = this.context.getImage("grassland");
        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
    }

    draw() {
        this.screen.drawBackground(
            this.image,
            1920,
            1080
        );
        if (this.context.get("GameLocalStorage").containsCat()) {
            this.context.get("LoginNewCatRectangleDrawing").draw();
            this.context.get("LoginDeleteRectangleDrawing").draw();
            this.context.get("LoginLoadRectangleDrawing").draw();
        } else {
            this.nextScreen();
        }
    }

    notify(x, y) {
        console.log("[" + x + ", " + y + "]");
        if (100 < x && x < this.screen.getWidth() - 100) {
            if (100 < y && y < 300) {
                this.nextScreen();
            }
            if (400 < y && y < 600) {
                this.context.get("GameLocalStorage").init();
                this.screen.setCurrentScreen("WorldScreen");
            } else if (700 < y && y < 900) {
                this.context.get("GameLocalStorage").clear();
            }
        }
    }

    nextScreen() {
        this.screen.setCurrentScreen("CatSelectionScreen");
    }
}