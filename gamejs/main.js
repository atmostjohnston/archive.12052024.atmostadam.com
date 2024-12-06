import { GameContext } from "./context/GameContext.js";

export const context = new GameContext();
export const minMsPerFrame = 1000 / 60;

window.addEventListener("load", function () {
    var lastTime = performance.now();
    var tick = 0;
    context.setCanvas(document.getElementById("game-canvas"))
    context.setCtx(context.getCanvas().getContext("2d"));
    function animate() {
        let gameloop = context.getScreen();
        if (gameloop) {
            var time = performance.now();
            var sixtyFps = (time - lastTime) > minMsPerFrame;
            if (sixtyFps) {
                context.clear();
                gameloop.update(++tick);
                gameloop.draw();
            }
        }
        window.requestAnimationFrame(animate);
        if (sixtyFps) {
            lastTime = time;
        }
    }
    animate();
});