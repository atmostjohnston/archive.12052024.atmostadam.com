/**
 * EXIT CRITERIA LESSON 1: Drawing Rectangles
 * ----------------------------
 * 1.) What class are we working in today? (NOTE: We will continue to use through Lesson 7)
 * 2.) What method are we working in today? (NOTE: We will continue to use through Lesson 7)
 * 3.) What character belongs at the end of every completed code statement?
 * 4.) Does capitalization matter when coding?
 * 5.) What does export do?
 * 6.) What does import do?
 * 7.) Why does drawRectangle have 1 additional parameter than drawFilledRectangle?
 * 8.) Are x, y, w, h required as input parameters into drawRectangle?
 * 9.) What do they stand for?
 * 10.) How are they measured?
 * 11.) If you are unsure what colors are available, what should you do? 
 */

import {
    drawCircle, drawRectangle, drawFilledCircle, drawFilledRectangle,
    drawImageSimple, drawText, drawBackgroundById, drawFilledBottomHalfCircle, drawImage
} from "../common/util/DrawingUtils.js";

export class Lesson1DrawingRectangles {
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
 * 1.) *GameLoop   -> Game Loop Class Name varies by person's name
 * 2.) draw
 * 3.) Semi-colon
 * 4.) Yes!
 * 5.) Let's code that lives in other files use your code that lives in this file
 * 6.) Let's your code in this file use code that lives in other files
 * 7.) drawRectangle takes an additional argument to specify the size of the outline being drawn
 * 8.) Yes! x, y, height and width are required
 * 9.) coordinate on the X axis, coordinate on the Y axis, rectangle width, rectangle height
 * 10.)  x, y, height and width are measured in pixels
 * 11.) Google it!   *Hint this is a repeating theme in programming.  Developer Forums and Programming Manuals served this purpose prior to Google being created.
 */