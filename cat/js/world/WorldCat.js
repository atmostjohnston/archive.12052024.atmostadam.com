import { Cat } from "../model/Cat.js";

export class WorldCat extends Cat {
    constructor(context, map, x, y) {
        super(context);

        this.SPEED = 256;

        this.map = map;
        this.x = x;
        this.y = y;
        this.width = map.tsize;
        this.height = map.tsize;

        this.image = this.context.get(this.context.getCat().name.toLowerCase() + "Pixel");
    }

    update(delta, dirx, diry) {
        // move hero
        this.x += dirx * this.SPEED * delta;
        this.y += diry * this.SPEED * delta;

        // check if we walked into a non-walkable tile
        //this.collide(dirx, diry);

        // clamp values
        var maxX = this.map.cols * this.map.tsize;
        var maxY = this.map.rows * this.map.tsize;
        this.x = Math.max(0, Math.min(this.x, maxX));
        this.y = Math.max(0, Math.min(this.y, maxY));
    };

    collide(dirx, diry) {
        var row, col;
        // -1 in right and bottom is because image ranges from 0..63
        // and not up to 64
        var left = this.x - this.width / 2;
        var right = this.x + this.width / 2 - 1;
        var top = this.y - this.height / 2;
        var bottom = this.y + this.height / 2 - 1;

        // check for collisions on sprite sides
        var collision =
            this.map.isSolidTileAtXY(left, top) ||
            this.map.isSolidTileAtXY(right, top) ||
            this.map.isSolidTileAtXY(right, bottom) ||
            this.map.isSolidTileAtXY(left, bottom);
        if (!collision) { return; }

        if (diry > 0) {
            row = this.map.getRow(bottom);
            this.y = -this.height / 2 + this.map.getY(row);
        }
        else if (diry < 0) {
            row = this.map.getRow(top);
            this.y = this.height / 2 + this.map.getY(row + 1);
        }
        else if (dirx > 0) {
            col = this.map.getCol(right);
            this.x = -this.width / 2 + this.map.getX(col);
        }
        else if (dirx < 0) {
            col = this.map.getCol(left);
            this.x = this.width / 2 + this.map.getX(col + 1);
        }
    };

    draw() {
        this.context.getCtx().drawImage(
            this.image,
            32,
            32,
            128,
            128,
            this.screen.getWidth() / 2,
            this.screen.getHeight() / 2,
            128,
            128

        );
    }
}