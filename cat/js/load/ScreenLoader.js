import { TitleScreen } from "../screen/TitleScreen.js";
import { RachelScreen } from "../screen/RachelScreen.js";
import { NathanScreen } from "../screen/NathanScreen.js";
import { DadScreen } from "../screen/DadScreen.js";
import { MomScreen } from "../screen/MomScreen.js";
import { LoginScreen } from "../screen/LoginScreen.js";
import { CatSelectionScreen } from "../screen/CatSelectionScreen.js";
import { WorldScreen } from "../screen/WorldScreen.js";
import { BattleScreen } from "../screen/BattleScreen.js";
import { requireContext } from "../../../boot/function/ValidationFunctions.js";

export class ScreenLoader {
    constructor(context) {
        requireContext(context, this);

        /** init */
        var titleScreen = new TitleScreen(this.context);
        var rachelScreen = new RachelScreen(this.context);
        var nathanScreen = new NathanScreen(this.context);
        var dadScreen = new DadScreen(this.context);
        var momScreen = new MomScreen(this.context);
        var loginScreen = new LoginScreen(this.context);
        var catSelectionScreen = new CatSelectionScreen(this.context);
        var worldScreen = new WorldScreen(this.context);
        var battleScreen = new BattleScreen(this.context);

        /** load */
        this.context.setClass(titleScreen);
        this.context.setClass(rachelScreen);
        this.context.setClass(nathanScreen);
        this.context.setClass(dadScreen);
        this.context.setClass(momScreen);
        this.context.setClass(loginScreen);
        this.context.setClass(catSelectionScreen);
        this.context.setClass(worldScreen);
        this.context.setClass(battleScreen);
    }
}