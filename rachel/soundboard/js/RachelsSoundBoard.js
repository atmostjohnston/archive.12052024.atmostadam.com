import { GameContext } from "../../../corejs/context/GameContext.js";
import { boot } from "../../../corejs/boot/boot.js";
import { GridSingleLineText } from "../../../corejs/grid/model/GridSingleLineText.js";
import { GridSound } from "../../../corejs/grid/model/GridSound.js";
import { ImageDecorator } from "../../../corejs/decorator/ImageDecorator.js";

window.addEventListener("load", function () {
    var context = new GameContext();
    context.setGameLoop(new RachelsSoundboard(context));
    boot(context);
});

export class RachelsSoundboard {
    constructor(context) {
        this.context = context;
        this.grid = this.context.getFullScreenGrid();

    }

    update(tick) {
        this.tick = tick;
        if (!this.grid.loaded) {
            this.grid.load(10, 10);
            this.grid.setLayer14BorderForAll(5, "white");
            this.grid.setLayer5MultiLineText(
                [
                    [
                        new GridSingleLineText(this.context, 0, 0, "Few Moments"),
                        new GridSingleLineText(this.context, 0, 1, "Aye Aye"),
                        new GridSingleLineText(this.context, 0, 2, "Bruh"),
                        new GridSingleLineText(this.context, 0, 3, "Crab Meme"),
                        new GridSingleLineText(this.context, 0, 4, "Creeper"),
                        new GridSingleLineText(this.context, 0, 5, "Doge"),
                        new GridSingleLineText(this.context, 0, 6, "Emo Damage"),
                        new GridSingleLineText(this.context, 0, 7, "Pokemon Go"),
                        new GridSingleLineText(this.context, 0, 8, "I'm Ready"),
                        new GridSingleLineText(this.context, 0, 9, "Old Spice"),
                    ],
                    [
                        new GridSingleLineText(this.context, 1, 0, "Peaches"),
                        new GridSingleLineText(this.context, 1, 1, "Skadoosh"),
                        new GridSingleLineText(this.context, 1, 2, "Skidda Bop"),
                        new GridSingleLineText(this.context, 1, 3, "Sus"),
                        new GridSingleLineText(this.context, 1, 4, "Taylor Goat"),
                        new GridSingleLineText(this.context, 1, 5, "Lion Sleeps"),
                        new GridSingleLineText(this.context, 1, 6, "Uwu"),
                        new GridSingleLineText(this.context, 1, 7, "Yeet"),
                    ]
                ]);
            this.grid.setLayer1Sound(
                [
                    [
                        new GridSound(this.context, 0, 0, "./../../sound/rachel/a-few-moments-later.mp3"),
                        new GridSound(this.context, 0, 1, "./../../sound/rachel/aye-aye-captain.mp3"),
                        new GridSound(this.context, 0, 2, "./../../sound/rachel/bruh.mp3"),
                        new GridSound(this.context, 0, 3, "./../../sound/rachel/crab-meme.mp3"),
                        new GridSound(this.context, 0, 4, "./../../sound/rachel/creeper-aw-man.mp3"),
                        new GridSound(this.context, 0, 5, "./../../sound/rachel/doge.mp3"),
                        new GridSound(this.context, 0, 6, "./../../sound/rachel/emotional-damage.mp3"),
                        new GridSound(this.context, 0, 7, "./../../sound/rachel/i-play-pokemon-go.mp3"),
                        new GridSound(this.context, 0, 8, "./../../sound/rachel/im-ready.mp3"),
                        new GridSound(this.context, 0, 9, "./../../sound/rachel/old-spice.mp3"),
                    ],
                    [
                        new GridSound(this.context, 1, 0, "./../../sound/rachel/peaches.mp3"),
                        new GridSound(this.context, 1, 1, "./../../sound/rachel/skadoosh.mp3"),
                        new GridSound(this.context, 1, 2, "./../../sound/rachel/skidda-bop.mp3"),
                        new GridSound(this.context, 1, 3, "./../../sound/rachel/sus.mp3"),
                        new GridSound(this.context, 1, 4, "./../../sound/rachel/taylor-swift-goat.mp3"),
                        new GridSound(this.context, 1, 5, "./../../sound/rachel/the-lion-sleeps-tonight.mp3"),
                        new GridSound(this.context, 1, 6, "./../../sound/rachel/uwu.mp3"),
                        new GridSound(this.context, 1, 7, "./../../sound/rachel/yeet.mp3"),
                    ]
                ]
            );
        }
        this.grid.update(tick, 0.03, 0.2);
    }

    draw() {
        this.grid.draw();
    }

    onClick(x, y) {
        let row = this.grid.getRowIndex(y);
        let column = this.grid.getColumnIndex(x);

        this.grid.getLayer1Sound().forEach(e => {
            if (e.row == row && e.column == column) {
                e.play();
            }
        });
        /*
                if (insideRectangle(x, y, 0, 0, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[0]).play();
                }
                if (insideRectangle(x, y, this.w, 0, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[1]).play();
                }
                if (insideRectangle(x, y, this.w * 2, 0, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[2]).play();
                }
                if (insideRectangle(x, y, this.w * 3, 0, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[3]).play();
                }
                if (insideRectangle(x, y, this.w * 4, 0, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[4]).play();
                }
                if (insideRectangle(x, y, this.w * 5, 0, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[5]).play();
                }
                if (insideRectangle(x, y, this.w * 6, 0, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[6]).play();
                }
                if (insideRectangle(x, y, this.w * 7, 0, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[7]).play();
                }
                if (insideRectangle(x, y, this.w * 8, 0, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[8]).play();
                }
                if (insideRectangle(x, y, this.w * 9, 0, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[9]).play();
                }
                if (insideRectangle(x, y, 0, this.h, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[10]).play();
                }
                if (insideRectangle(x, y, this.w, this.h, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[11]).play();
                }
                if (insideRectangle(x, y, this.w * 2, this.h, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[12]).play();
                }
                if (insideRectangle(x, y, this.w * 3, this.h, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[13]).play();
                }
                if (insideRectangle(x, y, this.w * 4, this.h, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[14]).play();
                }
                if (insideRectangle(x, y, this.w * 5, this.h, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[15]).play();
                }
                if (insideRectangle(x, y, this.w * 6, this.h, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[16]).play();
                }
                if (insideRectangle(x, y, this.w * 7, this.h, this.w, this.h)) {
                    this.soundMap.get(this.soundPaths[17]).play();
                }
                */
    }
}