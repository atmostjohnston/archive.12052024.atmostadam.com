import { requireContext } from "../../../boot/function/ValidationFunctions.js";

/** Load by img.src. Might give a performance boost if needed to implement later. */
export class ImageLoader {
    constructor(context) {
        requireContext(context, this);
    }

    loadImage(key, src) {
        var img = new Image();

        var d = new Promise(function (resolve, reject) {
            img.onload = function () {
                this.context.set(key, img);
                resolve(img);
            }.bind(this);

            img.onerror = function () {
                reject('Could not load image: ' + src);
            };
        }.bind(this));

        img.src = src;

        return d;
    };

    getImage = function (key) {
        return (key in this.images) ? this.images[key] : null;
    };
}