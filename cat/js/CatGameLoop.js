
import { CatLoader } from "./load/CatLoader.js";
import { OpponentLoader } from "./load/OpponentLoader.js";
import { BattleLoader } from "./load/BattleLoader.js";
import { ScreenLoader } from "./load/ScreenLoader.js";
import { LoginLoader } from "./load/LoginLoader.js";
import { GameLocalStorage } from "./persistence/GameLocalStorage.js";
import { WorldLoader } from "./load/WorldLoader.js";
import { SelectionLoader } from "./load/SelectionLoader.js";
import { SoundLoader } from "./load/SoundLoader.js";
import { FileLoader } from "./load/FileLoader.js";
import { GameContext } from "../../boot/context/GameContext.js";
import { boot } from "../../boot/boot.js";
import { requireName, requireScreen, requireTick } from "../../boot/function/ValidationFunctions.js";

window.addEventListener("load", function () {
    var context = new GameContext();
    context.setGameLoop(new CatGameLoop(context));
    context.preloadImage("BackgroundTitle", "./images/opensource/backgrounds/BackgroundTitle.png");
    context.preloadImage("BackgroundRachel", "./images/opensource/backgrounds/BackgroundRachel.png");
    context.preloadImage("BackgroundNathan", "./images/opensource/backgrounds/BackgroundNathan.png");
    context.preloadImage("BackgroundDad", "./images/opensource/backgrounds/BackgroundDad.png");
    context.preloadImage("BackgroundMom", "./images/opensource/backgrounds/BackgroundMom.png");

    context.preloadImage("BanditCatPixel", "./images/opensource/cats/pixel/BanditCatPixel.png");
    context.preloadImage("BreezyCatPixel", "./images/opensource/cats/pixel/BreezyCatPixel.png");
    context.preloadImage("CocoaCatPixel", "./images/opensource/cats/pixel/CocoaCatPixel.png");
    context.preloadImage("CowieCatPixel", "./images/opensource/cats/pixel/CowieCatPixel.png");
    context.preloadImage("DottieCatPixel", "./images/opensource/cats/pixel/DottieCatPixel.png");
    context.preloadImage("EveCatPixel", "./images/opensource/cats/pixel/EveCatPixel.png");
    context.preloadImage("FrostyCatPixel", "./images/opensource/cats/pixel/FrostyCatPixel.png");
    context.preloadImage("GanacheCatPixel", "./images/opensource/cats/pixel/GanacheCatPixel.png");
    context.preloadImage("GingerCatPixel", "./images/opensource/cats/pixel/GingerCatPixel.png");
    context.preloadImage("GozerCatPixel", "./images/opensource/cats/pixel/GozerCatPixel.png");
    context.preloadImage("KitkatCatPixel", "./images/opensource/cats/pixel/KitkatCatPixel.png");
    context.preloadImage("MarshmellowCatPixel", "./images/opensource/cats/pixel/MarshmellowCatPixel.png");
    context.preloadImage("MistyCatPixel", "./images/opensource/cats/pixel/MistyCatPixel.png");
    context.preloadImage("PeachesCatPixel", "./images/opensource/cats/pixel/PeachesCatPixel.png");
    context.preloadImage("PepperCatPixel", "./images/opensource/cats/pixel/PepperCatPixel.png");
    context.preloadImage("SocksCatPixel", "./images/opensource/cats/pixel/SocksCatPixel.png");
    context.preloadImage("SpookyCatPixel", "./images/opensource/cats/pixel/SpookyCatPixel.png");
    context.preloadImage("SpreeCatPixel", "./images/opensource/cats/pixel/SpreeCatPixel.png");
    context.preloadImage("WhiskersCatPixel", "./images/opensource/cats/pixel/WhiskersCatPixel.png");

    context.preloadImage("BanditCatPortrait", "./images/opensource/cats/portrait/BanditCatPortrait.png");
    context.preloadImage("BreezyCatPortrait", "./images/opensource/cats/portrait/BreezyCatPortrait.png");
    context.preloadImage("CocoaCatPortrait", "./images/opensource/cats/portrait/CocoaCatPortrait.jpg");
    context.preloadImage("CowieCatPortrait", "./images/opensource/cats/portrait/CowieCatPortrait.png");
    context.preloadImage("DottieCatPortrait", "./images/opensource/cats/portrait/DottieCatPortrait.jpg");
    context.preloadImage("EveCatPortrait", "./images/opensource/cats/portrait/EveCatPortrait.jpg");
    context.preloadImage("FrostyCatPortrait", "./images/opensource/cats/portrait/FrostyCatPortrait.jpg");
    context.preloadImage("GanacheCatPortrait", "./images/opensource/cats/portrait/GanacheCatPortrait.png");
    context.preloadImage("GingerCatPortrait", "./images/opensource/cats/portrait/GingerCatPortrait.png");
    context.preloadImage("GozerCatPortrait", "./images/opensource/cats/portrait/GozerCatPortrait.png");
    context.preloadImage("KitkatCatPortrait", "./images/opensource/cats/portrait/KitkatCatPortrait.jpg");
    context.preloadImage("MarshmellowCatPortrait", "./images/opensource/cats/portrait/MarshmellowCatPortrait.png");
    context.preloadImage("MistyCatPortrait", "./images/opensource/cats/portrait/MistyCatPortrait.png");
    context.preloadImage("PeachesCatPortrait", "./images/opensource/cats/portrait/PeachesCatPortrait.jpg");
    context.preloadImage("PepperCatPortrait", "./images/opensource/cats/portrait/PepperCatPortrait.png");
    context.preloadImage("SocksCatPortrait", "./images/opensource/cats/portrait/SocksCatPortrait.jpg")
    context.preloadImage("SpookyCatPortrait", "./images/opensource/cats/portrait/SpookyCatPortrait.png");
    context.preloadImage("SpreeCatPortrait", "./images/opensource/cats/portrait/SpreeCatPortrait.png");
    context.preloadImage("WhiskersCatPortrait", "./images/opensource/cats/portrait/WhiskersCatPortrait.png");

    context.preloadImage("ClawSymbol", "./images/opensource/attack/ClawSymbol.png");
    context.preloadImage("BiteSymbol", "./images/opensource/attack/BiteSymbol.png");
    context.preloadImage("PuffSymbol", "./images/opensource/attack/PuffSymbol.png");
    context.preloadImage("PounceSymbol", "./images/opensource/attack/PounceSymbol.png");
    context.preloadImage("BiteLowerJaw", "./images/opensource/attack/BiteLowerJaw.png");
    context.preloadImage("BiteUpperJaw", "./images/opensource/attack/BiteUpperJaw.png");
    context.preloadImage("ClawSlashRight", "./images/opensource/attack/ClawSlashRight.png");
    context.preloadImage("ClawSlashLeft", "./images/opensource/attack/ClawSlashLeft.png");

    context.preloadImage("TilesetField", "./images/opensource/tilesets/TilesetField.png");
    context.preloadImage("TilesetNature", "./images/opensource/tilesets/TilesetNature.png");

    context.preloadImage("ChickenOpponentPixel", "./images/opensource/opponents/pixel/ChickenOpponentPixel.png");
    context.preloadImage("SnakeOpponentPixel", "./images/opensource/opponents/pixel/SnakeOpponentPixel.png");
    context.preloadImage("SquirrelOpponentPixel", "./images/opensource/opponents/pixel/SquirrelOpponentPixel.png");

    context.preloadImage("ChickenOpponentPortrait", "./images/opensource/opponents/portrait/ChickenOpponentPortrait.png");
    context.preloadImage("SnakeOpponentPortrait", "./images/opensource/opponents/portrait/SnakeOpponentPortrait.png");
    context.preloadImage("SquirrelOpponentPortrait", "./images/opensource/opponents/portrait/SquirrelOpponentPortrait.png");

    context.preloadImage("mooncat", "./images/opensource/backgrounds/mooncat.png");
    context.preloadImage("grassland", "./images/opensource/backgrounds/grassland.png");
    context.preloadImage("Sunset", "./images/opensource/backgrounds/Sunset.png");
    context.preloadImage("tokyo", "./images/opensource/backgrounds/tokyo.png");

    boot(context);
});

export class CatGameLoop {
    constructor(context) {
        /** Dependency Injection: Do NOT change order. */
        this.context = context;

        this.context.set("introScreenDelay", 3000);

        new CatLoader(this.context);
        new OpponentLoader(this.context);
        new BattleLoader(this.context);
        new ScreenLoader(this.context);
        new LoginLoader(this.context);
        new WorldLoader(this.context);
        new SelectionLoader(this.context);
        new SoundLoader(this.context);
        new FileLoader(this.context);

        this.context.setClass(new GameLocalStorage());
    }

    init() {
        requireScreen(this.context, this);
        this.screen.setCurrentScreen("TitleScreen");
        this.loaded = true;
    }

    update(tick) {
        requireTick(tick, this);
        if (!this.loaded) {
            this.init();
        }
        this.screen.getCurrentScreen().update(tick);
    }

    draw() {
        this.screen.getCurrentScreen().draw();
    }

    getCat() {
        return this.context.get("Cat");
    }

    getCatDecorator() {
        return this.context.get("CatDecorator");
    }

    getOpponent() {
        return this.context.get("Opponent");
    }

    getOpponentDecorator() {
        return this.context.get("OpponentDecorator");
    }
}