import { ImageContext, loadImage } from "./../../../boot/context/ImageContext.js";
import { BaseImage } from "../../../boot/base/BaseImage.js";

const SRC = "./images/publicdomain/public-domain-boom.png"
await loadImage(SRC, loadImage(SRC));

export class Explosion extends BaseImage {
    constructor(context, cell) {
        super(
            context,
            0,
            0,
            1500,
            1500,
            cell.x,
            cell.y,
            cell.w * 1.2,
            cell.w * 1.2
        );
        this.cell = cell;
        this.imageContext = new ImageContext();
    }

    init() {
        this.finalTick = this.tick + 20;
        this.loaded = true;
    }

    update(tick) {
        super.update(tick);
    }

    draw() {
        super.draw();
        if (this.finalTick < this.tick) {
            this.cell.setImage(null);
        }
    }

    getImage() {
        return this.imageContext.getImage(SRC);
    }
}