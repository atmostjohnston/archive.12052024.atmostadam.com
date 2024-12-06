import {
    drawCircle, drawRectangle, drawFilledCircle, drawFilledRectangle,
    drawImageSimple, drawText, drawBackgroundById, drawFilledBottomHalfCircle, drawImage
} from "../common/util/DrawingUtils.js";

/**
 * This class is our Drawing and Animation implementation using the
 * Animation Frame Game Loop Design Pattern. This class handles drawing
 * flow of control for the entire game.
 * 
 * @see DrawingUtils
 */
export class CreditsGameLoop {
    constructor() {
        // Ignore constructor() for now. This will be covered in a future lesson.
    }

    update(tick) {
        // Ignore update(tick) for now. This will be covered in a future lesson.
    }

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