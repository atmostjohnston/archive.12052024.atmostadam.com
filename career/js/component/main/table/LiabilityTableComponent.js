import { ALIGN_LEFT, VALIGN_TOP } from "../../../../../gamejs/configuration/GameConfiguration.js";
import { careerGameContext } from "../../../context/CareerGameContext.js";
import {
    LIABILITY_TABLE_COMPONENT_PERCENT_W_ARRAY,
    LIABILITY_TABLE_COMPONENT_PERCENT_H_ARRAY,
    LIABILITY_TABLE_COMPONENT_PERCENT_W,
    LIABILITY_TABLE_COMPONENT_PERCENT_H,
    LIABILITY_TABLE_COMPONENT_OFFSET_PERCENT_X,
    LIABILITY_TABLE_COMPONENT_OFFSET_PERCENT_Y,
    LIABILITY_TABLE_TEXT_COMPONENT_SIZE,
    LIABILITY_TABLE_TEXT_COMPONENT_COLOR,
    LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
    LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y,
    LIABILITY_TABLE_BORDER_COMPONENT_SIZE,
    LIABILITY_TABLE_BORDER_COMPONENT_COLOR
} from "./../../../configuration/CareerConfiguration.js";
import { BaseMainTableComponent } from "./BaseMainTableComponent.js";

export class LiabilityTableComponent extends BaseMainTableComponent {
    constructor(parent) {
        super(
            parent,
            LIABILITY_TABLE_COMPONENT_PERCENT_W,
            LIABILITY_TABLE_COMPONENT_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            LIABILITY_TABLE_COMPONENT_OFFSET_PERCENT_X,
            LIABILITY_TABLE_COMPONENT_OFFSET_PERCENT_Y,
            LIABILITY_TABLE_COMPONENT_PERCENT_H_ARRAY,
            LIABILITY_TABLE_COMPONENT_PERCENT_W_ARRAY
        );

        this.addBackgroundColor(
            0,
            0,
            "red"
        ).addBackgroundColor(
            0,
            1,
            "red"
        ).addText(
            0,
            0,
            "Liability Type",
            LIABILITY_TABLE_TEXT_COMPONENT_SIZE,
            LIABILITY_TABLE_TEXT_COMPONENT_COLOR,
            LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        ).addText(
            0,
            1,
            "$",
            LIABILITY_TABLE_TEXT_COMPONENT_SIZE,
            LIABILITY_TABLE_TEXT_COMPONENT_COLOR,
            LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        );
        let liabilities = careerGameContext.getPlayer().getLiabilities().asSortedArray();
        for (let i = 0; i < liabilities.length; i++) {
            this.addText(
                i + 1,
                0,
                liabilities[i][0],
                LIABILITY_TABLE_TEXT_COMPONENT_SIZE,
                LIABILITY_TABLE_TEXT_COMPONENT_COLOR,
                LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
                LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
            ).addText(
                i + 1,
                1,
                liabilities[i][1],
                LIABILITY_TABLE_TEXT_COMPONENT_SIZE,
                LIABILITY_TABLE_TEXT_COMPONENT_COLOR,
                LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
                LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
            ).addPayButton(
                i + 1,
                2,
                liabilities[i][2]
            ).addBorrowButton(
                i + 1,
                3,
                liabilities[i][2]
            );
        }
        this.addText(
            liabilities.length + 1,
            0,
            "Total",
            LIABILITY_TABLE_TEXT_COMPONENT_SIZE,
            LIABILITY_TABLE_TEXT_COMPONENT_COLOR,
            LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        ).addBackgroundColor(
            liabilities.length + 1,
            1,
            "red"
        ).addText(
            liabilities.length + 1,
            1,
            careerGameContext.getPlayer().getLiabilities().getValue(),
            LIABILITY_TABLE_TEXT_COMPONENT_SIZE,
            LIABILITY_TABLE_TEXT_COMPONENT_COLOR,
            LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            LIABILITY_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        ).addBorderForAll(
            LIABILITY_TABLE_BORDER_COMPONENT_SIZE,
            LIABILITY_TABLE_BORDER_COMPONENT_COLOR
        );
    }
}