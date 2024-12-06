import { HelpfulGameable } from "../../../boot/base/HelpfulGameable.js";
import { loadImage } from "./../../../boot/context/ImageContext.js";

const SRC = "./images/publicdomain/public-domain-red-bomb.png"
const image = await loadImage(SRC, loadImage(SRC));

export class Bomb extends BaseImage {
    constructor(context, percentX, percentY, percentW, percentH) {
        super(context);
        this.ix = 0;
        this.iy = 0;
        this.w = 1500;
        this.h = 1500
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentW = percentW;
        this.percentH = percentH;
    }

    getImage() {
        return image;
    }
}