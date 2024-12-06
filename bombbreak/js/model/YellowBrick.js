import { BaseGridImage } from "./../../../boot/canvas/model/grid/BaseGridImage.js";
import { ImageContext, loadImage } from "./../../../boot/context/ImageContext.js";

const SRC = "./images/opensourcecc/screamingbrainstudios/Colored_Yellow-64x32.png"
await loadImage(SRC, loadImage(SRC));

export class YellowBrick extends BaseGridImage {
    constructor(context, cell) {
        super(context, cell, 0, 0, 64, 32);
        this.imageContext = new ImageContext();
        this.setHp(2);
    }

    getImage() {
        return this.imageContext.getImage(SRC);
    }

    decreaseHp() {
        this.hp--;
        //return new GreenBrickTile(this.context, this.row, this.column);
    }

    getHp() { return this.hp; }
    setHp(hp) { this.hp = hp; }
}