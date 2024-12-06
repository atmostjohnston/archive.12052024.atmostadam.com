import { drawText, drawImage } from "../common/util/DrawingUtils.js";

/**
 * 
 * DEPENDS ON
 * @see Lesson4DrawingSimpleImages
 * @see Lesson5GitCommands
 * @see Lesson6DrawingWithForLoops
 */
export class Lesson7DrawingArrays {
    constructor() {
        this.TILE_SIZE = 512;
        this.TILE_SCALED_SIZE = 64;
        this.TILE1_IMAGE_ID = "nftile1";
        this.TILE2_IMAGE_ID = "nftile2";
        this.TILE3_IMAGE_ID = "nftile3";
        this.TILE4_IMAGE_ID = "nftile4";
        this.TILE5_IMAGE_ID = "nftile5";
        this.TILE6_IMAGE_ID = "nftile6";
        this.TILE7_IMAGE_ID = "nftile7";
        this.TILE8_IMAGE_ID = "nftile8";
        this.TILE9_IMAGE_ID = "nftile9";
        this.TILE10_IMAGE_ID = "nftile10";
        this.TILE11_IMAGE_ID = "nftile11";
        this.TILE12_IMAGE_ID = "nftile12";
        this.TILE13_IMAGE_ID = "nftile13";
        this.TILE14_IMAGE_ID = "nftile14";
        this.TILE15_IMAGE_ID = "nftile15";
        this.DEFAULT_Y = 192;
        this.DEFAULT_FONT = "22pt Helvetica";
        this.DEFAULT_COLOR = "white";
        this.ARRAY = [
            this.TILE1_IMAGE_ID,
            this.TILE15_IMAGE_ID,
            this.TILE7_IMAGE_ID,
            this.TILE10_IMAGE_ID,
            this.TILE13_IMAGE_ID,
            this.TILE13_IMAGE_ID,
            this.TILE7_IMAGE_ID,
            this.TILE10_IMAGE_ID,
            this.TILE15_IMAGE_ID,
            this.TILE15_IMAGE_ID,
            this.TILE15_IMAGE_ID,
            this.TILE15_IMAGE_ID,
            this.TILE15_IMAGE_ID,
            this.TILE4_IMAGE_ID,
            this.TILE5_IMAGE_ID,
            this.TILE6_IMAGE_ID,
            this.TILE7_IMAGE_ID,
            this.TILE8_IMAGE_ID,
            this.TILE9_IMAGE_ID,
            this.TILE10_IMAGE_ID
        ];
    }

    update(tick) { }

    draw() {
        for (var i = 0; i < this.ARRAY.length; i++) {
            const x = this.TILE_SCALED_SIZE * i;
            const y = this.DEFAULT_Y;
            drawImage(
                this.ARRAY[i],               // image id
                0,                           // x for cropping
                0,                           // y for cropping
                this.TILE_SIZE,              // w
                this.TILE_SIZE,              // h
                x,                           // x
                y,                           // y
                this.TILE_SCALED_SIZE,       // scaled x
                this.TILE_SCALED_SIZE        // scaled y
            );
            drawText(
                i,                               // text
                this.DEFAULT_FONT,               // font
                this.DEFAULT_COLOR,              // color
                x + (this.TILE_SCALED_SIZE / 2), // x
                y + (this.TILE_SCALED_SIZE / 2)  // y
            );
        }
    }



    /*************** For later lessons ***************************/

    drawWithCropping() {
        this.TILE_IMAGE_ID = "TileDB";
        this.TILE_SIZE = 64;
        this.ARRAY = [64, 128, 192, 256, 320, 384, 448];

        for (var i = 0; i < this.ARRAY.length; i++) {
            drawImage(
                this.TILE_IMAGE_ID,  // image id
                this.ARRAY[i],       // x for cropping
                192,                 // y for cropping
                this.TILE_SIZE,      // w
                this.TILE_SIZE,      // h
                this.ARRAY[i],       // x
                this.TILE_SIZE * 4,  // y
                this.TILE_SIZE,      // scaled x
                this.TILE_SIZE       // scaled y
            );
        }
    }

    /** Newest, Fastest, but array MUST never be able to change [immutable]. */
    drawWithLambdas() {
        this.ARRAY.forEach(e => drawImage(this.TILE_IMAGE_ID, e, 192, this.TILE_SIZE, this.TILE_SIZE,
            e, 0, this.TILE_SIZE, this.TILE_SIZE));
    }

    /** Newer version of for loop when calculations are not required off of index. */
    drawWithEnhancedForLoop() {
        for (const e of this.ARRAY) {
            drawImage(this.TILE_IMAGE_ID, e, 192, this.TILE_SIZE, this.TILE_SIZE,
                e, this.TILE_SIZE * 2, this.TILE_SIZE, this.TILE_SIZE, this.TILE_SIZE);
        }
    }

    onClick(x, y) { }
}