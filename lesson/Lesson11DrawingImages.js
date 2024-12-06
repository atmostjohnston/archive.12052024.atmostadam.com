/**
 * EXIT CRITERIA LESSON 4: Drawing Images With git instructions
 * ----------------------------
 * 1.) What does "pull" code mean?
 * 2.) What does "push" code mean?
 * 3.) What does "merge" code mean?
 * 4.) In which file is the id of the image mapped to the image file location? (i.e. id="Eve" src="images/cats/eve.jpg")
 * 5.) How could you make an image available for your sibling and mom to use?
 * 6.) How can you determine w and h?
 * 7.) What are the scaled width and scaled height measure in?
 * 8.) How do you use ix and iy when cropping an image?
 *  
 * 
 * DEPENDS ON
 * @see Lesson4DrawingSimpleImages
 * @see Lesson5GitCommands
 * @see Lesson9ImportingImages
 * 
 */

import { drawImage, drawText } from "../common/util/DrawingUtils.js";

export class Lesson11DrawingImages {
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

        drawImage("TilesetDungeonA2", 128, 0, 64, 64, 0, 200, 128, 128);

        drawImage("TilesetDungeonA2", 192, 448, 64, 64, 150, 200, 128, 128);

        drawImage("TilesetDungeonA2", 320, 192, 64, 64, 300, 200, 128, 128);

        drawImage("TilesetDungeonA2", 128, 448, 64, 64, 450, 200, 128, 128);

        drawImage("TilesetDungeonA2", 320, 336, 64, 64, 600, 200, 128, 128);

        drawImage("TilesetDungeonA2", 224, 336, 64, 64, 750, 200, 128, 128);

        this.dadSays();
    }

    dadSays() {
        drawText("The source code, questions and answers (if you are a cheater) can be found at",
            "30pt Helvetica", "white", 150, 400);
        drawText("C:\\Projects\\atmostadam.com\\js\\lesson\\Lesson4DrawingImages.js",
            "30pt Helvetica", "white", 200, 500);
    }

    onClick(x, y) { }
}
/**
 * ANSWERS:
 * 1.) Copy code from the server to your local computer
 * 2.) Copy code from your local computer to the server
 * 3.) Copy the code from one branch to another branch
 * 4.) index.html
 * 5.) a) Copy the image to the images folder   b) Add an image element to index.html   c) 'git push' your code   d) Ask dad to merge your code to main
 * 6.) Open an image editor like GIMP or Paint to look up the size such as 350 x 700 meaning 350px in width and 700px in height. 
 * 7.) pixels
 * 8.) These are the x and y coordinates on the image that will be drawn as opposed to standard x and y which are the coordinates on the canvas
 * 
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