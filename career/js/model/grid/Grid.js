import { sumArr } from "./../../function/MathFunctions.js";
import { RectangleOutline } from "./../../drawing/RectangleOutline.js";

export class Grid {
    constructor(context, rowPercentHs, columnPercentWs) {
        this.context = context;
        this.rowPercentHs = rowPercentHs;
        this.columnPercentWs = columnPercentWs;
        this.numberOfRows = this.rowPercentHs.length;
        this.numberOfColumns = this.columnPercentWs.length;
        this.grid = this.createGrid(this.rowPercentHs.length, this.columnPercentWs.length);
    }

    update(tick, parentX, parentY, parentW, parentH) {
        this.tick = tick;
        for (let r = 0; r < this.numberOfRows; r++) {
            for (let c = 0; c < this.numberOfColumns; c++) {
                for (let a = 0; a < this.grid[r][c].length; a++) {
                    let percentX = sumArr(this.rowPercentHs, c);
                    let percentY = sumArr(this.columnPercentWs, r);
                    let percentW = this.rowPercentHs[column];
                    let percentH = this.columnPercentWs[row];
                    let x = parentX ? parentX * percentX : 0;
                    let y = parentY ? parentY * percentY : 0;
                    let w = parentW ? parentW * percentX : this.context.getWidthPercent(percentX);
                    let h = parentH ? parentH * percentY : this.context.geHeightPercent(percentY);
                    this.grid[r][c][a].update(tick, x, y, w, h);
                }
            }
        }
    }

    draw() {
        for (let r = 0; r < this.numberOfRows; r++) {
            for (let c = 0; c < this.numberOfColumns; c++) {
                for (let a = 0; a < this.grid[r][c].length; a++) {
                    this.grid[r][c][a].draw();
                }
            }
        }
    }

    get(row, column) {
        return this.grid[row][column];
    }

    add(row, column, instance) {
        this.grid[row][column].push(instance);
    }

    isEmpty() {
        for (let r = 0; r < this.numberOfRows; r++) {
            for (let c = 0; c < this.numberOfColumns; c++) {
                if (!this.grid[r][c].isEmpty()) {
                    return false;
                }
            }
        }
        return true;
    }

    createGrid(numberOfRows, numberOfColumns) {
        let grid = [];
        for (let r = 0; r < numberOfRows; r++) {
            let row = [];
            for (let c = 0; c < numberOfColumns; c++) {
                row.push([]);
            }
            grid.push(row);
        }
        return grid;
    }

    getNumberOfRows() {
        return this.numberOfRows;
    }

    getNumberOfColumns() {
        return this.numberOfColumns;
    }

    addBorder(row, column, size, color) {
        this.grid[row][column].push(
            new RectangleOutline(
                this.context,
                sumArr(this.rowPercentHs, column),
                sumArr(this.columnPercentWs, row),
                this.rowPercentHs[column],
                this.columnPercentWs[row],
                size,
                color));
        return this;
    }
}