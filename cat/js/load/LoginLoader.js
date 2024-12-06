import { LoginDeleteRectangleDrawing } from "../login/LoginDeleteRectangleDrawing.js"
import { LoginLoadRectangleDrawing } from "../login/LoginLoadRectangleDrawing.js"
import { LoginNewCatRectangleDrawing } from "../login/LoginNewCatRectangleDrawing.js"
import { requireContext } from "../../../boot/function/ValidationFunctions.js";

export class LoginLoader {
    constructor(context) {
        requireContext(context, this);

        this.context.setClass(new LoginDeleteRectangleDrawing(this.context));
        this.context.setClass(new LoginLoadRectangleDrawing(this.context));
        this.context.setClass(new LoginNewCatRectangleDrawing(this.context));
    }
}