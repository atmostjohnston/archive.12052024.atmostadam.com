import { Unlocked } from "./../model/Unlocked.js";

export class AchievementDecorator {
    constructor(achievement) {
        if (!AchievementDecorator.instance) {
            AchievementDecorator.instance = this;
        }
        this.achievement = achievement;
        return AchievementDecorator.instance;
    }

    static isUnlocked(name) {
        var unlocked = false;
        this.instance.achievement.unlockeds.forEach(e => { if (e.className == name) { unlocked = true; } });
        return unlocked;
    }

    static isLocked(name) {
        var locked = true;
        this.instance.achievement.unlockeds.forEach(e => { if (e.className == name) { locked = false; } });
        return locked;
    }

    static newAchievement(className) {
        this.instance.achievement.unlockeds.push(new Unlocked(className));
    }

    static getAchievement() {
        return this.instance.achievement;
    }

    static getInstance() {
        return AchievementDecorator.instance;
    }
}