import { TextDrawing } from "./../drawing/TextDrawing.js";
import { ProfilePictureComponent } from "./../component/ProfilePictureComponent.js";
import {
    PROFILE_SCREEN_TITLE_PERCENT_X,
    PROFILE_SCREEN_TITLE_PERCENT_Y,
    PROFILE_SCREEN_TITLE_TEXT,
    PROFILE_SCREEN_TITLE_COLOR,
    PROFILE_SCREEN_DESCRIPTION_PERCENT_X,
    PROFILE_SCREEN_DESCRIPTION_PERCENT_Y,
    PROFILE_SCREEN_DESCRIPTION_PERCENT_Y_SPACING,
    PROFILE_SCREEN_DESCRIPTION_TEXT,
    PROFILE_SCREEN_DESCRIPTION_COLOR,
    PROFILE_SCREEN
} from "./../configuration/GameConfiguration.js";

export class ProfileScreen {
    constructor(context) {
        this.context = context;
        this.profilePicture = new ProfilePictureComponent(this.context);
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (PROFILE_SCREEN != this.context.getScreen()) {
            return;
        }
        this.profilePicture.draw();
        new TextDrawing(
            this.context,
            this.context.getPlayer().getJob().getTitle(),
            PROFILE_SCREEN_TITLE_PERCENT_X,
            PROFILE_SCREEN_TITLE_PERCENT_Y,
            PROFILE_SCREEN_TITLE_TEXT,
            PROFILE_SCREEN_TITLE_COLOR
        )
            .draw();
        let responsibilities = this.context.getPlayer().getJob().getResponsibilities();
        for (let i = 0; i < responsibilities.length; i++) {
            new TextDrawing(
                this.context,
                responsibilities[i],
                PROFILE_SCREEN_DESCRIPTION_PERCENT_X,
                PROFILE_SCREEN_DESCRIPTION_PERCENT_Y + (PROFILE_SCREEN_DESCRIPTION_PERCENT_Y_SPACING * i),
                PROFILE_SCREEN_DESCRIPTION_TEXT,
                PROFILE_SCREEN_DESCRIPTION_COLOR
            )
                .draw();
        }
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}