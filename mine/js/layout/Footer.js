import { notNull } from "../../../boot/function/GameFunctions.js";

export class Footer {
    constructor(context) {
        this.context = notNull("context", context, this)
        this.font = "26pt Helvetica";
        this.color = "black";
    }

    init() {
        this.screen = this.context.getScreen();

        this.x = this.screen.getLeft();
        this.y = this.screen.getHeight() * .95;
        this.w = this.screen.getWidth();
        this.h = this.screen.getHeight() * .05;

        this.gemImage = this.context.getImage("GemTileset");
        this.imageW = 64;
        this.imageH = 64;

        this.diamondX = this.x + (this.screen.getWidth() * .01);
        this.diamondY = this.y + (this.screen.getHeight() * .005);
        this.diamondTextX = this.x + (this.screen.getWidth() * .05);
        this.diamondTextY = this.y + (this.screen.getHeight() * .045);
        this.diamondSW = 55;
        this.diamondSH = 55;

        this.rubyX = this.x + (this.screen.getWidth() * .23);
        this.rubyY = this.y + (this.screen.getHeight() * .005);
        this.rubyTextX = this.x + (this.screen.getWidth() * .27);
        this.rubyTextY = this.y + (this.screen.getHeight() * .045);
        this.rubySW = 55;
        this.rubySH = 55;

        this.sapphireX = this.x + (this.screen.getWidth() * .41);
        this.sapphireY = this.y + (this.screen.getHeight() * .01);
        this.sapphireTextX = this.x + (this.screen.getWidth() * .44);
        this.sapphireTextY = this.y + (this.screen.getHeight() * .045);
        this.sapphireSW = 50;
        this.sapphireSH = 50;

        this.emeraldX = this.x + (this.screen.getWidth() * .62);
        this.emeraldY = this.y + (this.screen.getHeight() * .01);
        this.emeraldTextX = this.x + (this.screen.getWidth() * .65);
        this.emeraldTextY = this.y + (this.screen.getHeight() * .045);
        this.emeraldSW = 40;
        this.emeraldSH = 40;

        this.amethystX = this.x + (this.screen.getWidth() * .81);
        this.amethystY = this.y + (this.screen.getHeight() * .01);
        this.amethystTextX = this.x + (this.screen.getWidth() * .84);
        this.amethystTextY = this.y + (this.screen.getHeight() * .045);
        this.amethystSW = 40;
        this.amethystSH = 40;

        this.loaded = true;
    }

    update(tick) {
        this.tick = tick;
        if (!this.loaded) {
            this.init();
        }
    }

    draw() {
        this.screen.drawImage(this.gemImage, 480, 128, this.imageW, this.imageH,
            this.diamondX, this.diamondY, this.diamondSW, this.diamondSH);
        this.screen.drawText("Diamond: 0", this.font, "cyan",
            this.diamondTextX, this.diamondTextY);

        this.screen.drawImage(this.gemImage, 480, 320, this.imageW, this.imageH,
            this.rubyX, this.rubyY, this.rubySW, this.rubySH);
        this.screen.drawText("Ruby: 0", this.font, "red",
            this.rubyTextX, this.rubyTextY);

        this.screen.drawImage(this.gemImage, 352, 416, this.imageW, this.imageH,
            this.sapphireX, this.sapphireY, this.sapphireSW, this.sapphireSH);
        this.screen.drawText("Sapphire: 0", this.font, "blue",
            this.sapphireTextX, this.sapphireTextY);

        this.screen.drawImage(this.gemImage, 112, 224, this.imageW, this.imageH,
            this.emeraldX, this.emeraldY, this.emeraldSW, this.emeraldSH);
        this.screen.drawText("Emerald: 0", this.font, "green",
            this.emeraldTextX, this.emeraldTextY);

        this.screen.drawImage(this.gemImage, 196, 512, this.imageW, this.imageH,
            this.amethystX, this.amethystY, this.amethystSW, this.amethystSH);
        this.screen.drawText("Amethyst: 0", this.font, "purple",
            this.amethystTextX, this.amethystTextY);
    }

    drawBackground() {
        this.screen.drawRectangle(this.context, this.color, this.x, this.y, this.w, this.h);
    }
}