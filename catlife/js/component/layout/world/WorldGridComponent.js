import {
    WORLD_GRID_PERCENT_W,
    WORLD_GRID_PERCENT_H,
    WORLD_GRID_OFFSET_PERCENT_X,
    WORLD_GRID_OFFSET_PERCENT_Y,
    WORLD_GRID_PERCENT_W_ARRAY,
    WORLD_GRID_PERCENT_H_ARRAY,
    WORLD_GRID_TEXT_SIZE,
    WORLD_GRID_TEXT_COLOR,
    WORLD_GRID_TEXT_OFFSET_PERCENT_X,
    WORLD_GRID_TEXT_OFFSET_PERCENT_Y,
    WORLD_GRID_BORDER_SIZE,
    WORLD_GRID_BORDER_COLOR
} from "./../configuration/CatLifeConfiguration.js";
import { BaseTableComponent } from "./../../../gamejs/base/BaseTableComponent.js";
import { ALIGN_LEFT } from "../../../../../gamejs/configuration/GameConfiguration.js";


export class WorldGridComponent extends BaseTableComponent {
    constructor(parent) {
        super(
            this,
            WORLD_GRID_PERCENT_W,
            WORLD_GRID_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP, 
            WORLD_GRID_OFFSET_PERCENT_X, 
            WORLD_GRID_OFFSET_PERCENT_Y, 
            WORLD_GRID_PERCENT_W_ARRAY,
            WORLD_GRID_PERCENT_H_ARRAY);
    }
}