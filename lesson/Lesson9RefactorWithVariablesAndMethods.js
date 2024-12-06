/**
 * EXIT CRITERIA LESSON 5: Refactor With Variables and Methods
 * ----------------------------
 * 1.) In these examples, why do we want to create helper methods?
 * 2.) What criteria should you use to determine whether or not to replace a value with a constant variable?
 * 3.) Why do we want to use constants instead of actual values
 * 4.) Why do we put constants in all capital letters?
 * 5.) What does 'this.' mean?
 * 6.) Why do we assign constants in the constructor
 * 7.) Does minimizing the lines of code in a class make you a better programmer?
 * 
 * DEPENDS ON ALL PREVIOUS LESSONS
 * @see atmostadam.com/js/lesson/*
 */

import { drawImage, drawText } from "../common/util/DrawingUtils.js";

export class Lesson9RefactorWithVariablesAndMethods {
    constructor() {
        this.DUNGEON_TILE_WIDTH = 64;
        this.DUNGEON_TILE_HEIGHT = 64;
        this.DUNGEON_TILE_SCALED_WIDTH = 128;
        this.DUNGEON_TILE_SCALED_HEIGHT = 128;
        this.DUNGEON_TILE_IMAGE_ID = "TilesetDungeonA2";
    }

    update(tick) { }

    draw() {
        drawImage("Heart", 0, 0, 250, 250, 0, 0, 100, 100);

        drawImage("People3", 0, 0, 32, 32, 125, 0, 128, 128);

        drawImage("People3", 0, 32, 32, 32, 250, 0, 128, 128);

        drawImage("People3", 0, 64, 32, 32, 400, 0, 128, 128);

        drawImage("Marshmellow", 0, 0, 500, 500, 550, 0, 100, 100);

        drawImage("People3", 32, 0, 32, 32, 650, 0, 128, 128);

        drawImage("People3", 32, 32, 32, 32, 800, 0, 128, 128);

        drawImage("People3", 32, 64, 32, 32, 950, 0, 128, 128);


        drawImage("TilesetDungeonA2", 128, 0, this.DUNGEON_TILE_WIDTH, this.DUNGEON_TILE_HEIGHT,
            0, 200, this.DUNGEON_TILE_SCALED_WIDTH, this.DUNGEON_TILE_SCALED_HEIGHT);

        drawImage("TilesetDungeonA2", 192, 448, this.DUNGEON_TILE_WIDTH, this.DUNGEON_TILE_HEIGHT,
            150, 200, this.DUNGEON_TILE_SCALED_WIDTH, this.DUNGEON_TILE_SCALED_HEIGHT);

        drawImage("TilesetDungeonA2", 320, 192, this.DUNGEON_TILE_WIDTH, this.DUNGEON_TILE_HEIGHT,
            300, 200, this.DUNGEON_TILE_SCALED_WIDTH, this.DUNGEON_TILE_SCALED_HEIGHT);

        drawImage("TilesetDungeonA2", 128, 448, this.DUNGEON_TILE_WIDTH, this.DUNGEON_TILE_HEIGHT,
            450, 200, this.DUNGEON_TILE_SCALED_WIDTH, this.DUNGEON_TILE_SCALED_HEIGHT);

        drawImage("TilesetDungeonA2", 320, 336, this.DUNGEON_TILE_WIDTH, this.DUNGEON_TILE_HEIGHT,
            600, 200, this.DUNGEON_TILE_SCALED_WIDTH, this.DUNGEON_TILE_SCALED_HEIGHT);

        drawImage("TilesetDungeonA2", 224, 336, this.DUNGEON_TILE_WIDTH, this.DUNGEON_TILE_HEIGHT,
            750, 200, this.DUNGEON_TILE_SCALED_WIDTH, this.DUNGEON_TILE_SCALED_HEIGHT);

        this.drawDungeonTile(224, 336, 750, 200);

        this.dadSays();
    }

    drawDungeonTile(ix, iy, x, y) {
        drawImage(
            this.DUNGEON_TILE_IMAGE_ID,
            ix,
            iy,
            this.DUNGEON_TILE_WIDTH,
            this.DUNGEON_TILE_HEIGHT,
            x,
            y,
            this.DUNGEON_TILE_SCALED_WIDTH,
            this.DUNGEON_TILE_SCALED_HEIGHT
        );
    }

    dadSays() {
        drawText("The source code, questions and answers (if you are a cheater) can be found at",
            "30pt Helvetica", "white", 150, 400);
        drawText("C:\\Projects\\atmostadam.com\\js\\lesson\\Lesson5RefactorWithVariablesAndMethods.js",
            "30pt Helvetica", "white", 200, 500);
    }

    onClick(x, y) { }
}

/**
 * ANSWERS:
 * 1.) Reusuability; reduction in number of lines of code. Not needing to pass in variables that do not change. (NOTE: There are other reasons later)
 * 2.) If a value is used 3 or more times for the same purpose
 * 3.) So we can change the value in a single place if needed. It is also in English. For example, changing width of a tile from 32 to 64.
 * 4.) This is for readability. There are other conventions, but this is the one dad always prefers. If you are modifying a class that someone else created, always use THEIR convention.
 * 5.) 'this.' means that the variable or method belongs to the class
 * 6.) They are guarenteed to be created when a new object is created and will never be created again unless some idiot breaks convention (very rare bug...even among noob programmers).
 * 7.) Yes and no.
 */


/**
 * PART 1: git push & git pull
 * -----------
 * Open Windows Explorer
 *    Go to 'C:\Projects\atmostadam.com'
 *    Right click and select 'Git Bash Here'
 
 * Copy & Paste the following into the terminal
      git add *
      git commit -a -m "feature"
      git checkout main
      git pull
      git checkout branch_rachel
      git merge main
      git push origin branch_rachel
   
 * When ready to publish on website, open in browser: https://github.com/atmostadam/atmostadam.com/pulls
 *    Select 'New Pull Request'
 *    Select 'base: main' to 'compare: branch_rachel'
 *    'Open Pull Request'
 */