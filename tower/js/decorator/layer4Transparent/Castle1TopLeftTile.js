import { BaseImage } from "../../../../boot/base/BaseImage.js";

export class Castle1TopLeftTile extends BaseImage {
   constructor(context, row, column) {
      super(
         context,
         "World_B",
         "../../images/tower/tiles/tilesets/World_B.png",
         0,
         192,
         48,
         48,
         row,
         column
      );
   }
}