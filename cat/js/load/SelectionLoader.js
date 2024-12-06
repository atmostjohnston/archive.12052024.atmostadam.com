import * as cfg from "../config/GameConfiguration.js";
import { requireContext } from "../../../boot/function/ValidationFunctions.js";

export class SelectionLoader {
    constructor(context) {
        requireContext(context, this);
        this.screen = this.context.getScreen();

        this.context.set("selectionRectangleWidth", (this.screen.getWidth() - (cfg.SELECTION_RECTANGLE_SPACING_X * 10)) / 10);
        this.context.set("selectionRectangleHeight", (this.screen.getHeight() - (cfg.SELECTION_RECTANGLE_SPACING_Y * 2)) / 2);
    }

}