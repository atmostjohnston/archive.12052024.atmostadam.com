import { drawText } from "../common/util/DrawingUtils.js";

/**
 * It is critically important to PULL before coding and PUSH immediately after coding.
 */
export class Lesson5GitCommands {
    update(tick) { }

    draw() {
        drawText("BEFORE CODING", "40px Helvetica", "orange", 300, 100);
        drawText("- Open Windows Powershell and type the following", "22px Helvetica", "white", 300, 150);
        drawText("git fetch", "bold 22px Helvetica", "yellow", 350, 200);
        drawText("git pull origin branch_rachel", "bold 22px Helvetica", "yellow", 350, 250);
        drawText("- Close Windows Powershell", "22px Helvetica", "white", 300, 300);
        drawText("- Open Visual Studio Code", "22px Helvetica", "white", 300, 350);
        drawText("- Click ** Go Live ** in the bottom right", "22px Helvetica", "white", 300, 400);
        drawText("--------------------------------------------", "22px Helvetica", "white", 300, 450);
        drawText("AFTER CODING", "40px Helvetica", "orange", 300, 500);
        drawText("Open Windows Powershell and type the following", "22px Helvetica", "white", 300, 550);
        drawText("git add *", "bold 22px Helvetica", "yellow", 350, 600);
        drawText('git commit - a - m "feature"', "bold 22px Helvetica", "yellow", 350, 650);
        drawText("git push origin branch_rachel", "bold 22px Helvetica", "yellow", 350, 700);
        drawText("Close Windows Powershell", "22px Helvetica", "white", 300, 750);
    }

    onClick(x, y) {

    }
} 