import { HelpfulGameable } from "../../../boot/base/HelpfulGameable.js";
import { GameContext } from "../../../boot/context/GameContext.js";
import { boot } from "../../../boot/boot.js";

/**

# BEFORE CODING
-Open Windows Powershell and type the following
    git fetch
    git pull origin branch_nathan
-Close Windows Powershell
-Open Visual Studio Code
-Click Go Live in the bottom right

# AFTER CODING
-Open Windows Powershell and type the following
    git add *
    git commit -a -m "feature"
    git push origin branch_nathan
-Close Windows Powershell

 */
window.addEventListener("load", function () {
    try {
        var context = new GameContext();
        context.setGameLoop(new MomsBreakout(context));
    } catch (e) {
        console.error("[FATAL] GAME LOOP HAS CRASHED ON [LOAD]!", e, this);
        throw e;
    }
    try {
        boot(context);
    } catch (e) {
        console.error("[FATAL] GAME LOOP HAS CRASHED ON [BOOT]!", e, this);
        throw e;
    }
});

export class MomsBreakout extends HelpfulGameable {
    constructor(context) {
        super(context);

        //    :)   All game objects are defined here. Remember to use the 'new' command...


    }

    update(tick) {
        super.update(tick);

        //    :O   Tell all game objects to run their 'update(tick)' method...

    }

    draw() {
        //    :(   Tell all game objects to run their 'draw()' method...

    }
}