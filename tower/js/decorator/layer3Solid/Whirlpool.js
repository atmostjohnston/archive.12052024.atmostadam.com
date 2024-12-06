import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Whirlpool extends BaseImage {
   constructor(context, row, column) {
      super(
         context,
         "Whirlpool",
         "Outside40", "images/tower/tiles/tilesets/Outside40.png",
         336,
         528,
         48,
         48,
         row,
         column
      );
   }
}