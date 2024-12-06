import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Lava1 extends BaseImage {
   constructor(context, row, column) {
      super(
         context,
         "Outside41",
         "../../images/tower/tiles/tilesets/Outside41.png",
         336,
         288,
         48,
         48,
         row,
         column
      );
   }
}