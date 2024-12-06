import { TextDrawing } from "./../drawing/TextDrawing.js";
import {
    HEADER_JOB_TITLE_TEXT_PERCENT_X,
    HEADER_JOB_TITLE_TEXT_PERCENT_Y,
    HEADER_JOB_TITLE_TEXT_TYPE,
    HEADER_JOB_TITLE_TEXT_COLOR,
    HEADER_JOB_SALARY_TEXT_PERCENT_X,
    HEADER_JOB_SALARY_TEXT_PERCENT_Y,
    HEADER_JOB_SALARYE_TEXT_TYPE,
    HEADER_JOB_SALARY_TEXT_COLOR
} from "./../configuration/GameConfiguration.js";
import { NextYearButtonComponent } from "../component/button/NextYearButtonComponent.js";

export class Header {
    constructor(context) {
        this.context = context;
        this.nextYear = new NextYearButtonComponent(this.context);
    }

    update(tick) {
        this.tick = tick;
        this.nextYear.update(tick);
    }

    draw() {
        new TextDrawing(
            this.context,
            this.context.getPlayer().getJob().getTitle(),
            HEADER_JOB_TITLE_TEXT_PERCENT_X,
            HEADER_JOB_TITLE_TEXT_PERCENT_Y,
            HEADER_JOB_TITLE_TEXT_TYPE,
            HEADER_JOB_TITLE_TEXT_COLOR
        )
            .draw();
        new TextDrawing(
            this.context,
            "Salary: $" + this.context.getPlayer().getJob().getSalary(),
            HEADER_JOB_SALARY_TEXT_PERCENT_X,
            HEADER_JOB_SALARY_TEXT_PERCENT_Y,
            HEADER_JOB_SALARYE_TEXT_TYPE,
            HEADER_JOB_SALARY_TEXT_COLOR
        )
            .draw();
        this.nextYear.draw();
    }

    onMouseOver(x, y) {
        this.nextYear.onMouseOver(x, y);
    }

    onClick(x, y) {
        this.nextYear.onClick(x, y);
    }

    onUnclick(x, y) {
        this.nextYear.onUnclick(x, y);
    }
}