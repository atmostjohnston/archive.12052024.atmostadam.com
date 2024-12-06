import { ALIGN_LEFT, VALIGN_TOP } from "../../../../gamejs/configuration/GameConfiguration.js";
import {
    HEADER_JOB_TITLE_TEXT_SIZE,
    HEADER_JOB_TITLE_TEXT_COLOR,
    HEADER_JOB_TITLE_TEXT_PERCENT_X,
    HEADER_JOB_TITLE_TEXT_PERCENT_Y,
    HEADER_JOB_SALARY_TEXT_PERCENT_X,
    HEADER_JOB_SALARY_TEXT_PERCENT_Y,
    HEADER_JOB_SALARY_TEXT_SIZE,
    HEADER_JOB_SALARY_TEXT_COLOR
} from "../../configuration/CareerConfiguration.js";
import { BaseComponent } from "./../../../../gamejs/base/BaseComponent.js";
import { careerGameContext } from "./../../context/CareerGameContext.js";

export class HeaderTextComponent extends BaseComponent {
    constructor(parent) {
        super(
            parent,
            100,
            100,
            ALIGN_LEFT,
            VALIGN_TOP,
            0,
            0
        );
        this.addTextDrawing(
            careerGameContext.getPlayer().getJob().getTitle(),
            HEADER_JOB_TITLE_TEXT_SIZE,
            HEADER_JOB_TITLE_TEXT_COLOR,
            HEADER_JOB_TITLE_TEXT_PERCENT_X,
            HEADER_JOB_TITLE_TEXT_PERCENT_Y);
        this.addTextDrawing(
            "Salary: $" + careerGameContext.getPlayer().getJob().getSalary(),
            HEADER_JOB_SALARY_TEXT_SIZE,
            HEADER_JOB_SALARY_TEXT_COLOR,
            HEADER_JOB_SALARY_TEXT_PERCENT_X,
            HEADER_JOB_SALARY_TEXT_PERCENT_Y);
    }
}