import { ALIGN_LEFT, VALIGN_TOP } from "../../../../gamejs/configuration/GameConfiguration.js";
import {
    HEADER_PERCENT_W,
    HEADER_PERCENT_H,
    HEADER_PERCENT_X,
    HEADER_PERCENT_Y
} from "../../configuration/CareerConfiguration.js";
import { HeaderTextComponent } from "../header/HeaderTextComponent.js";
import { BaseComponent } from "./../../../../gamejs/base/BaseComponent.js";

export class HeaderComponent extends BaseComponent {
    constructor(parent) {
        super(
            parent,
            HEADER_PERCENT_W,
            HEADER_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            HEADER_PERCENT_X,
            HEADER_PERCENT_Y
        );
        this.addChildComponent(new HeaderTextComponent(this));
    }
}