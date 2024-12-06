import { GameException } from "../../../boot/exception/GameException.js";

/** 
 * AWS S3 is blocking CSV fetch config files for security reasons. Fetch works fine locally, but there are
 * polices in place on AWS that prevent it from working. We now create CSV Strings instead of config files.
 * Do not change this pattern unless moving to an AWS service other than S3.
 */
export class BombBreakLevelConfiguration {
    constructor() {
        this.levels = [];
        this.levels.push(this.constructLevel1());
    }

    constructLevel1() {
        return `, , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , , Y, Y,  ,  , ,  , Y, Y,  , , , Y, Y,  ,  ,  , 
 , , , Y,  , Y,  , , Y,  ,  , Y, , , Y,  , Y,  ,  , 
 , , , Y,  ,  , Y, , Y,  ,  , Y, , , Y,  ,  , Y,  , 
 , , , Y,  ,  , Y, , Y,  ,  , Y, , , Y,  ,  , Y,  , 
 , , , Y,  ,  , Y, , Y, Y, Y, Y, , , Y,  ,  , Y,  , 
 , , , Y,  , Y,  , , Y,  ,  , Y, , , Y,  , Y,  ,  , 
 , , , Y, Y,  ,  , , Y,  ,  , Y, , , Y, Y,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  , 
 , , ,  ,  ,  ,  , ,  ,  ,  ,  , , ,  ,  ,  ,  ,  ,`;
    }

    getLevel(levelNumber, numberOfRows, numberOfColumns) {
        var rows = this.levels[levelNumber - 1].split("\n");
        if (rows.length != numberOfRows) {
            throw new GameException("Level [" + levelNumber + "] is misconfigured! Should have [" +
                numberOfRows + "] rows, but only has [" + rows.length + "] rows! " + rows, this);
        }
        var arrayOfArrays = [];
        for (let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
            var columns = rows[rowNumber].split(",");
            if (columns.length != numberOfColumns) {
                throw new GameException("Level [" + (levelNumber - 1) + "] is misconfigured! Row [" + rowNumber + "] should have [" +
                    numberOfColumns + "] rows, but only has [" + columns.length + "] rows! " + columns, this);
            }
            arrayOfArrays.push(columns);
        }
        return arrayOfArrays;
    }
}