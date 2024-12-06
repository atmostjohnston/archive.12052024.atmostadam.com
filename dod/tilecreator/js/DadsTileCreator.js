import { CanvasContextDecorator } from "../../corecanvas/CanvasContextDecorator.js";
import { CanvasDecorator } from "../corecanvas/CanvasDecorator.js";
import { insideRectangle } from "../coreutil/MathUtils.js";

export class DadsTileCreator {
    constructor() {
        this.FONT = "18pt Helvetica";
        this.TILE_BORDER = 6;
        this.LEFT_PAD = 50;
        this.TOP_PAD = 120;
        this.TITLE_X = 10;
        this.TITLE_Y = 60;
        this.ROW_TITLE_X = 10;
        this.ROW_PAD_Y = 36;
        this.COL_PAD_X = 16;
        this.COL_TITLE_Y = 100;

        this.TILE_ID = "tile-id";
        this.IMAGE_ID = "image-id";
        this.IMAGE_WIDTH = "image-width";
        this.IMAGE_HEIGHT = "image-height";
        this.CROP_AT_X = "crop-at-x";
        this.CROP_AT_Y = "crop-at-y";
        this.TILE_WIDTH = "tile-width";
        this.TILE_HEIGHT = "tile-height";
        this.GENERATED_CODE = "generated-code";

        document.getElementById(this.TILE_ID).style.display = "inline";
        document.getElementById(this.IMAGE_ID).style.display = "inline";
        document.getElementById(this.IMAGE_WIDTH).style.display = "inline";
        document.getElementById(this.IMAGE_HEIGHT).style.display = "inline";
        document.getElementById(this.CROP_AT_X).style.display = "inline";
        document.getElementById(this.CROP_AT_Y).style.display = "inline";
        document.getElementById(this.TILE_WIDTH).style.display = "inline";
        document.getElementById(this.TILE_HEIGHT).style.display = "inline";
        document.getElementById(this.GENERATED_CODE).style.display = "inline";

        this.setTileId("TEST");
        this.setImageId("Outside_A1");
        this.setImageWidth(768);
        this.setImageHeight(576);
        this.setCropAtX(0);
        this.setCropAtY(0);
        this.setTileWidth(48);
        this.setTileHeight(48);

        this.highlightedRow = 0;
        this.highlightedColumn = 0;
    }

    update(tick) {
        this.tileId = this.getTileId();

        if (!document.getElementById(this.getImageId())) {
            return;
        }

        this.sidebarX = CanvasDecorator.getWidth() * .75;

        this.tileWidth = this.getTileWidth();
        this.tileHeight = this.getTileHeight();

        this.numOfCols = Math.ceil(this.getImageWidth() / this.tileWidth);
        this.numOfRows = Math.ceil(this.getImageHeight() / this.tileHeight);

        this.tileWB = this.tileWidth + this.TILE_BORDER;
        this.tileHB = this.tileHeight + this.TILE_BORDER;

        this.generateCode();
    }

    generateCode() {
        var code =
            "import { Tile } from \"../../common/model/Tile.js\";\n\n" +
            "" +
            "export class " + this.getTileId() + " extends Tile {\n" +
            "   constructor() {\n" +
            "      super(\n" +
            "         \"" + this.getTileId() + "\",\n" +
            "         \"" + this.getImageId() + "\",\n" +
            "         " + this.getCropAtX() + ",\n" +
            "         " + this.getCropAtY() + ",\n" +
            "         " + this.getTileWidth() + ",\n" +
            "         " + this.getTileHeight() + ",\n" +
            "         64,\n" +
            "         64\n" +
            "      );\n" +
            "   }\n" +
            "}";

        document.getElementById(this.GENERATED_CODE).value = code;
    }

    draw() {
        const imageId = this.getImageId();
        if (!document.getElementById(imageId)) {
            return;
        }
        this.drawTitle(imageId);
        this.drawRowNumbers();
        this.drawColumnNumbers();
        this.drawGraph(imageId);
        this.drawSidebar();
    }

    drawTitle(imageId) {
        CanvasContextDecorator.drawText(imageId, "40pt Helvetica", "white",
            this.TITLE_X, this.TITLE_Y);
    }

    drawRowNumbers() {
        for (var j = 0; j < this.numOfRows; j++) {
            const x = this.ROW_TITLE_X;
            const y = this.ROW_PAD_Y + this.TOP_PAD + (this.tileHB * j);
            CanvasContextDecorator.drawText(j, this.FONT, "white", x, y);
        }
    }

    drawColumnNumbers() {
        for (var i = 0; i < this.numOfCols; i++) {
            const x = this.COL_PAD_X + this.LEFT_PAD + (this.tileWB * i);
            const y = this.COL_TITLE_Y;
            CanvasContextDecorator.drawText(i, this.FONT, "white", x, y);
        }
    }

    drawGraph(imageId) {
        for (var j = 0; j < this.numOfRows; j++) {
            for (var i = 0; i < this.numOfCols; i++) {
                const x = this.LEFT_PAD + (this.tileWB * i);
                const y = this.TOP_PAD + (this.tileHB * j);
                CanvasContextDecorator.drawImage(
                    imageId,
                    this.tileWidth * i,
                    this.tileHeight * j,
                    this.tileWidth,
                    this.tileHeight,
                    x,
                    y,
                    this.tileWidth,
                    this.tileHeight
                );
                if (this.highlightedRow == i && this.highlightedColumn == j) {
                    CanvasContextDecorator.drawRectangle(
                        6,
                        "white",
                        x,
                        y,
                        this.tileWidth,
                        this.tileHeight
                    );
                    CanvasContextDecorator.drawRectangle(
                        3,
                        "green",
                        x,
                        y,
                        this.tileWidth,
                        this.tileHeight
                    );
                }
            }
        }
    }

    drawSidebar() {
        CanvasContextDecorator.drawText("NEW TILE NAME: ", this.FONT, "white",
            this.sidebarX, 50);
        CanvasContextDecorator.drawText("IMAGE ID: ", this.FONT, "white",
            this.sidebarX, 100);
        CanvasContextDecorator.drawText("IMAGE WIDTH: ", this.FONT, "white",
            this.sidebarX, 150);
        CanvasContextDecorator.drawText("IMAGE HEIGHT: ", this.FONT, "white",
            this.sidebarX, 200);
        CanvasContextDecorator.drawText("CROP AT X: ", this.FONT, "white",
            this.sidebarX, 250);
        CanvasContextDecorator.drawText("CROP AT Y: ", this.FONT, "white",
            this.sidebarX, 300);
        CanvasContextDecorator.drawText("TILE WIDTH: ", this.FONT, "white",
            this.sidebarX, 350);
        CanvasContextDecorator.drawText("TILE HEIGHT: ", this.FONT, "white",
            this.sidebarX, 400);
    }

    onClick(x, y) {
        for (var j = 0; j < this.numOfRows; j++) {
            for (var i = 0; i < this.numOfCols; i++) {
                const minX = this.LEFT_PAD + (this.tileWB * i);
                const minY = this.TOP_PAD + (this.tileHB * j);
                if (insideRectangle(x, y, minX, minY, this.tileWidth, this.tileHeight)) {
                    this.cropAtX = this.tileWidth * i;
                    this.cropAtY = this.tileHeight * j;

                    this.setCropAtX(this.cropAtX);
                    this.setCropAtY(this.cropAtY);

                    this.highlightedRow = i;
                    this.highlightedColumn = j;

                    return;
                }
            }
        }
    }

    setTileId(tileId) {
        document.getElementById(this.TILE_ID).value = tileId;
    }

    setImageId(imageId) {
        document.getElementById(this.IMAGE_ID).value = imageId;
    }

    setImageWidth(imageWidth) {
        document.getElementById(this.IMAGE_WIDTH).value = Number(imageWidth);
    }

    setImageHeight(imageHeight) {
        document.getElementById(this.IMAGE_HEIGHT).value = Number(imageHeight);
    }

    setCropAtX(cropAtX) {
        document.getElementById(this.CROP_AT_X).value = Number(cropAtX);
    }

    setCropAtY(cropAtY) {
        document.getElementById(this.CROP_AT_Y).value = Number(cropAtY);
    }

    setTileWidth(tileWidth) {
        document.getElementById(this.TILE_WIDTH).value = Number(tileWidth);
    }

    setTileHeight(tileHeight) {
        document.getElementById(this.TILE_HEIGHT).value = Number(tileHeight);
    }

    getTileId() {
        return document.getElementById(this.TILE_ID).value;
    }

    getImageId() {
        return document.getElementById(this.IMAGE_ID).value;
    }

    getImageWidth() {
        return Number(document.getElementById(this.IMAGE_WIDTH).value);
    }

    getImageHeight() {
        return Number(document.getElementById(this.IMAGE_HEIGHT).value);
    }

    getCropAtX() {
        return Number(document.getElementById(this.CROP_AT_X).value);
    }

    getCropAtY() {
        return Number(document.getElementById(this.CROP_AT_Y).value);
    }

    getTileWidth() {
        return Number(document.getElementById(this.TILE_WIDTH).value);
    }

    getTileHeight() {
        return Number(document.getElementById(this.TILE_HEIGHT).value);
    }
}