/**
 * EXIT CRITERIA LESSON 2: Drawing Circles, Backgrounds and Text
 * ----------------------------
 * 1.) What new functionality is introduced in lesson 2?
 * 2.) If you are unsure what text colors are available, what should you do? 
 * 3.) If I give you the choice to pick your own font, but you are unsure what text font is available, what should you do? (NOTE: on my projects ALWAYS use Helvetica font.  Choosing a font is a huge pain since it must be supported by a minimum of 5 separate browsers).  Mine has full support for all 5.)
 * 4.) If you want to draw a circle but are not sure how to mathematically calculate using pi, radians, starting angle, ending angle and clockwise, then what should you do?
 * 5.) Can you draw a circle on top of a rectangle?
 * 6.) Can you draw a smaller rectangle on top of a rectangle?
 * 7.) What makes a background different from every other rectangle?
 */

import {
    drawCircle, drawRectangle, drawFilledCircle, drawFilledRectangle,
    drawImageSimple, drawText, drawBackgroundById, drawFilledBottomHalfCircle, drawImage
} from "../common/util/DrawingUtils.js";

export class Lesson2DrawingCircles {
    update(tick) { }

    draw() {
        drawBackgroundById("grassland");

        drawRectangle(10, "green", 10, 10, 50, 50);
        drawFilledRectangle("orange", 10, 10, 50, 50);

        drawFilledRectangle("purple", 100, 100, 500, 500);
        drawFilledRectangle("orange", 100, 100, 400, 400);
        drawFilledRectangle("red", 100, 100, 300, 300);
        drawFilledRectangle("green", 100, 100, 200, 200);
        drawFilledRectangle("yellow", 100, 100, 100, 100);

        drawCircle(15, "purple", 600, 125, 100, 0, 2 * Math.PI);
        drawFilledCircle("red", 600, 125, 100, 0, 2 * Math.PI);

        drawFilledCircle("purple", 900, 625, 500, 0, 2 * Math.PI);
        drawFilledCircle("orange", 900, 625, 400, 0, 2 * Math.PI);
        drawFilledCircle("red", 900, 625, 300, 0, 2 * Math.PI);
        drawFilledCircle("green", 900, 625, 200, 0, 2 * Math.PI);
        drawFilledCircle("yellow", 900, 625, 100, 0, 2 * Math.PI);

        drawImageSimple("Cowie", 1200, 200);

        drawText("Baby Kittens", "bold 100px Tahoma", "white", 500, 500);

        drawImage(
            "Eve",
            0,
            0,
            500,
            500,
            100,
            600,
            300,
            300
        )

        drawFilledCircle("green", 1375, 475, 40, 0, 2 * Math.PI);
        drawFilledBottomHalfCircle("yellow", 1375, 475, 35, 0, Math.PI);

        drawFilledCircle("green", 1560, 475, 40, 0, 2 * Math.PI);
        drawFilledBottomHalfCircle("yellow", 1560, 475, 35, 0, Math.PI);
    }

    onClick(x, y) {

    }
}

/**
 * ANSWERS:
 * 1.) a) Drawing Circles   b.) Drawing Text   c.) Drawing Backgrounds
 * 2.) Google It!
 * 3.) Google It!
 * 4.) Google It!
 * 5.) Yes
 * 6.) Yes
 * 7.) A background is a rectangle where the width is the width of the browser window and the height is the height of the browser window.
 */