import { ALIGN_LEFT, VALIGN_TOP } from "../../../../gamejs/configuration/GameConfiguration.js";
import {
    FOOTER_PERCENT_W,
    FOOTER_PERCENT_H,
    FOOTER_PERCENT_X,
    FOOTER_PERCENT_Y,
} from "../../configuration/CareerConfiguration.js";
import { FooterTextComponent } from "../footer/FooterTextComponent.js";
import { BaseComponent } from "./../../../../gamejs/base/BaseComponent.js";

export class FooterComponent extends BaseComponent {
    constructor(parent) {
        super(
            parent,
            FOOTER_PERCENT_W,
            FOOTER_PERCENT_H,
            ALIGN_LEFT,
            VALIGN_TOP,
            FOOTER_PERCENT_X,
            FOOTER_PERCENT_Y
        );
        this.addChildComponent(new FooterTextComponent(this));
    }
}