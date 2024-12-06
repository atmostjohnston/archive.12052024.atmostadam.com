import { ALIGN_LEFT, VALIGN_TOP } from "../../../../../gamejs/configuration/GameConfiguration.js";
import { careerGameContext } from "../../../context/CareerGameContext.js";
import {
    REVENUE_TABLE_COMPONENT_PERCENT_W_ARRAY,
    REVENUE_TABLE_COMPONENT_PERCENT_H_ARRAY,
    REVENUE_TABLE_COMPONENT_PERCENT_W,
    REVENUE_TABLE_COMPONENT_PERCENT_H,
    REVENUE_TABLE_COMPONENT_OFFSET_PERCENT_X,
    REVENUE_TABLE_COMPONENT_OFFSET_PERCENT_Y,
    REVENUE_TABLE_TEXT_COMPONENT_SIZE,
    REVENUE_TABLE_TEXT_COMPONENT_COLOR,
    REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
    REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y,
    REVENUE_TABLE_BORDER_COMPONENT_SIZE,
    REVENUE_TABLE_BORDER_COMPONENT_COLOR,
    MAIN_REVENUE_COMPONENT
} from "./../../../configuration/CareerConfiguration.js";
import { BaseMainTableComponent } from "./BaseMainTableComponent.js";

export class RevenueTableComponent extends BaseMainTableComponent {
    constructor(parent) {
        super(
            parent,
            REVENUE_TABLE_COMPONENT_PERCENT_W,
            REVENUE_TABLE_COMPONENT_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            REVENUE_TABLE_COMPONENT_OFFSET_PERCENT_X,
            REVENUE_TABLE_COMPONENT_OFFSET_PERCENT_Y,
            REVENUE_TABLE_COMPONENT_PERCENT_H_ARRAY,
            REVENUE_TABLE_COMPONENT_PERCENT_W_ARRAY
        );
        this.addBackgroundColor(
            0,
            0,
            "green"
        ).addBackgroundColor(
            0,
            1,
            "green"
        ).addText(
            0,
            0,
            "Revenue Type",
            REVENUE_TABLE_TEXT_COMPONENT_SIZE,
            REVENUE_TABLE_TEXT_COMPONENT_COLOR,
            REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        ).addText(
            0,
            1,
            "$",
            REVENUE_TABLE_TEXT_COMPONENT_SIZE,
            REVENUE_TABLE_TEXT_COMPONENT_COLOR,
            REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        );
        let revenues = careerGameContext.getPlayer().getRevenue().asSortedArray();
        for (let i = 0; i < revenues.length; i++) {
            this.addText(
                i + 1,
                0,
                revenues[i][0],
                REVENUE_TABLE_TEXT_COMPONENT_SIZE,
                REVENUE_TABLE_TEXT_COMPONENT_COLOR,
                REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
                REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
            ).addText(
                i + 1,
                1,
                revenues[i][1],
                REVENUE_TABLE_TEXT_COMPONENT_SIZE,
                REVENUE_TABLE_TEXT_COMPONENT_COLOR,
                REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
                REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
            );
        }
        this.addText(
            revenues.length + 1,
            0,
            "Total",
            REVENUE_TABLE_TEXT_COMPONENT_SIZE,
            REVENUE_TABLE_TEXT_COMPONENT_COLOR,
            REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        ).addBackgroundColor(
            revenues.length + 1,
            1,
            "green"
        ).addText(
            revenues.length + 1,
            1,
            careerGameContext.getPlayer().getRevenue().getValue(),
            REVENUE_TABLE_TEXT_COMPONENT_SIZE,
            REVENUE_TABLE_TEXT_COMPONENT_COLOR,
            REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            REVENUE_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        ).addBorderForAll(
            REVENUE_TABLE_BORDER_COMPONENT_SIZE,
            REVENUE_TABLE_BORDER_COMPONENT_COLOR
        );
    }
}