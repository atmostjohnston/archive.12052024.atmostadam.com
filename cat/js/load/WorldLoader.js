import { WorldCatPixelDrawing } from "../world/WorldCatPixelDrawing.js";
import { requireContext } from "../../../boot/function/ValidationFunctions.js";

export class WorldLoader {
    constructor(context) {
        requireContext(context, this);

        this.context.setClass(new WorldCatPixelDrawing(this.context));
    }
}