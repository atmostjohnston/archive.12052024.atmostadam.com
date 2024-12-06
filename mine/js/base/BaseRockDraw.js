import { AchievementDecorator } from "./../decorator/AchievementDecorator.js";
import { GameDeveloperException } from "./../../../corejs/exception/GameDeveloperException.js";

export class BaseRockDraw {
    constructor() {
        super();
    }

    update(name, tick) {
        super.update(tick);
        return this.isLocked(name);
    }

    isLocked(name) {
        if (!name) {
            throw new GameDeveloperException("Class MUST have a mapped this.name");
        }
        return AchievementDecorator.isLocked(name);
    }
}