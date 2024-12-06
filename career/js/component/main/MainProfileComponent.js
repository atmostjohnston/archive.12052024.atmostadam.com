import { BaseMainComponent } from "./BaseMainComponent.js";
import {
    MAIN_JOB_TITLE_TEXT_PERCENT_X,
    MAIN_JOB_TITLE_TEXT_PERCENT_Y,
    MAIN_JOB_TITLE_TEXT_SIZE,
    MAIN_JOB_TITLE_TEXT_COLOR,
    MAIN_DESCRIPTION_TEXT_PERCENT_X,
    MAIN_DESCRIPTION_TEXT_PERCENT_Y,
    MAIN_DESCRIPTION_TEXT_PERCENT_Y_SPACING,
    MAIN_DESCRIPTION_TEXT_SIZE,
    MAIN_DESCRIPTION_TEXT_COLOR,

} from "../../configuration/CareerConfiguration.js";
import { careerGameContext } from "./../../context/CareerGameContext.js";

export class MainProfileComponent extends BaseMainComponent {
    constructor(parent) {
        super(parent);
        this.addTextDrawing(
            careerGameContext.getPlayer().getJob().getTitle(),
            MAIN_JOB_TITLE_TEXT_SIZE,
            MAIN_JOB_TITLE_TEXT_COLOR,
            MAIN_JOB_TITLE_TEXT_PERCENT_X,
            MAIN_JOB_TITLE_TEXT_PERCENT_Y);
        let responsibilities = careerGameContext.getPlayer().getJob().getResponsibilities();
        for (let i = 0; i < responsibilities.length; i++) {
            this.addTextDrawing(
                responsibilities[i],
                MAIN_DESCRIPTION_TEXT_SIZE,
                MAIN_DESCRIPTION_TEXT_COLOR,
                MAIN_DESCRIPTION_TEXT_PERCENT_X,
                MAIN_DESCRIPTION_TEXT_PERCENT_Y + (MAIN_DESCRIPTION_TEXT_PERCENT_Y_SPACING * i)
            )
        }
        careerGameContext.setMainComponent(this);
    }
}