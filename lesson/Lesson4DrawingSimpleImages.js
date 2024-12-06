/**
 * EXIT CRITERIA LESSON 3: Drawing Simple Images
 * ----------------------------
 * 1.) What does the first parameter into drawImageSimple mean?
 * 2.) In which file is the id of the image with the associated image file location?
 * 3.) Where does the width and height come from when drawing a simple image?
 * 4.) When using the simple drawing, can you scale an image bigger or smaller?
 * 5.) When using the simple drawing, how do you crop the image?
 * 6.) To add your own image, what directory should you put the image into?
 * 7.) When adding a file image which image extension(s) should be used?
 */

import { drawImageSimple, drawText } from "../common/util/DrawingUtils.js";
import { CanvasDecorator } from "../corecanvas/CanvasDecorator.js";

export class Lesson4DrawingSimpleImages {
    update(tick) { }

    draw() {
        drawImageSimple("Eve", 0, 0);

        drawImageSimple("CutSapphire", 300, 0);

        drawImageSimple("GreenSparkle", 300, 150);

        drawImageSimple("GoldCoin", 400, 300);

        drawImageSimple("Marshmellow", 600, 500);

        drawImageSimple("biteSymbol", 800, 350);

        drawImageSimple("Heart", 900, 500);
    }

    onClick(x, y) {

    }

    /**
     * 1.) Element id of the HTML img object
     * 2.) index.html -> id attribute and src attribute
     * 3.) The default width and height defined in the .png or .jpg file
     * 4.) No, it can be done in the next lesson only.
     * 5.) It is not possible to do this. It can be done in the next lesson only.
     * 6.) images directory
     * 7.) .png if using transparency. If not using transparency, then .jpg
     */
}