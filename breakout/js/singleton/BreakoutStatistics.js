import { GameDeveloperException } from "../../../corejs/exception/GameDeveloperException.js";

export class BreakoutStatistics {
    constructor() {
        if (BreakoutStatistics.instance) {
            throw new GameDeveloperException("[FATAL] Developer Error. BreakoutStatistics is an enforced SINGLETON so new can only be used once.");
        }
        BreakoutStatistics.instance = this;
        if (!this.getGamesPlayed()) {
            this.setGamesPlayed(0);
        }
        if (!this.getHiscore()) {
            this.setHiscore(0);
        }
        this.setScore(0);
        this.setLevel(3);
        return BreakoutStatistics.instance;
    }

    increaseScore(increase) {
        this.setScore(this.getScore() + increase);
    }

    increaseGamesPlayed() {
        this.setGamesPlayed(this.getGamesPlayed() + 1);
    }

    nextLevel() {
        this.setLevel(this.getLevel() + 1);
    }

    resetScore() {
        this.setScore(0);
    }

    getHiscore() { return Number(localStorage.getItem("game.breakout.hiscore")); }
    setHiscore(hiscore) {
        if (hiscore > this.getHiscore()) {
            localStorage.setItem("game.breakout.hiscore", hiscore);
        }
        return this;
    }

    getScore() { return this.score; }
    setScore(score) {
        this.score = score;
        if (this.score > this.getHiscore()) {
            this.setHiscore(this.score);
        }
        return this;
    }

    getGamesPlayed() { return Number(localStorage.getItem("game.breakout.games.played")); }
    setGamesPlayed(gamesPlayed) {
        this.gamesPlayed = gamesPlayed;
        localStorage.setItem("game.breakout.games.played", this.gamesPlayed);
        return this;
    }

    getLevel() { return Number(localStorage.getItem("game.breakout.level")); }
    setLevel(level) {
        this.level = level;
        localStorage.setItem("game.breakout.level", this.level);
        return this;
    }

    static getInstance() {
        return BreakoutStatistics.instance;
    }
}