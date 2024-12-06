import {
    ASSET_TABLE_COMPONENT_PERCENT_W_ARRAY,
    ASSET_TABLE_COMPONENT_PERCENT_H_ARRAY,
    ASSET_TABLE_COMPONENT_PERCENT_W,
    ASSET_TABLE_COMPONENT_PERCENT_H,
    ASSET_TABLE_COMPONENT_OFFSET_PERCENT_X,
    ASSET_TABLE_COMPONENT_OFFSET_PERCENT_Y,
    ASSET_TABLE_TEXT_COMPONENT_SIZE,
    ASSET_TABLE_TEXT_COMPONENT_COLOR,
    ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
    ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y,
    ASSET_TABLE_BORDER_COMPONENT_SIZE,
    ASSET_TABLE_BORDER_COMPONENT_COLOR,
    MAIN_ASSET_COMPONENT
} from "./../../../configuration/CareerConfiguration.js";
import { careerGameContext } from "../../../context/CareerGameContext.js";
import { BaseMainTableComponent } from "./BaseMainTableComponent.js";
import { ALIGN_LEFT, VALIGN_TOP } from "../../../../../gamejs/configuration/GameConfiguration.js";

export class AssetTableComponent extends BaseMainTableComponent {
    constructor(parent) {
        super(
            parent,
            ASSET_TABLE_COMPONENT_PERCENT_W,
            ASSET_TABLE_COMPONENT_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            ASSET_TABLE_COMPONENT_OFFSET_PERCENT_X,
            ASSET_TABLE_COMPONENT_OFFSET_PERCENT_Y,
            ASSET_TABLE_COMPONENT_PERCENT_H_ARRAY,
            ASSET_TABLE_COMPONENT_PERCENT_W_ARRAY
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
            "Asset Type",
            ASSET_TABLE_TEXT_COMPONENT_SIZE,
            ASSET_TABLE_TEXT_COMPONENT_COLOR,
            ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        ).addText(
            0,
            1,
            "$",
            ASSET_TABLE_TEXT_COMPONENT_SIZE,
            ASSET_TABLE_TEXT_COMPONENT_COLOR,
            ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        );
        let assets = careerGameContext.getPlayer().getAssets().asSortedArray();
        for (let i = 0; i < assets.length; i++) {
            this.addText(
                i + 1,
                0,
                assets[i][0],
                ASSET_TABLE_TEXT_COMPONENT_SIZE,
                ASSET_TABLE_TEXT_COMPONENT_COLOR,
                ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
                ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
            ).addText(
                i + 1,
                1,
                assets[i][1],
                ASSET_TABLE_TEXT_COMPONENT_SIZE,
                ASSET_TABLE_TEXT_COMPONENT_COLOR,
                ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
                ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
            ).addBuyButton(
                i + 1,
                2,
                assets[i][2]
            ).addSellButton(
                i + 1,
                3,
                assets[i][2]
            );
        }
        this.addText(
            assets.length + 1,
            0,
            "Total",
            ASSET_TABLE_TEXT_COMPONENT_SIZE,
            ASSET_TABLE_TEXT_COMPONENT_COLOR,
            ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        ).addBackgroundColor(
            assets.length + 1,
            1,
            "green"
        ).addText(
            assets.length + 1,
            1,
            careerGameContext.getPlayer().getAssets().getValue(),
            ASSET_TABLE_TEXT_COMPONENT_SIZE,
            ASSET_TABLE_TEXT_COMPONENT_COLOR,
            ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_X,
            ASSET_TABLE_TEXT_COMPONENT_OFFSET_PERCENT_Y
        ).addBorderForAll(
            ASSET_TABLE_BORDER_COMPONENT_SIZE,
            ASSET_TABLE_BORDER_COMPONENT_COLOR
        );
    }
}