import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class PurpleCastle1TopRight extends BaseImage {
   constructor(context, row, column) {
      super(
         context,
         "Outside3",
         "../../images/tower/tiles/tilesets/Outside3.png",
         576,
         96,
         48,
         48,
         row,
         column
      );
   }
}