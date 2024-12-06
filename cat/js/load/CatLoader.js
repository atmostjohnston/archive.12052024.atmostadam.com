import { notNull } from "../../../boot/function/GameFunctions.js";
import { BanditCat } from "../cats/BanditCat.js";
import { BreezyCat } from "../cats/BreezyCat.js";
import { CocoaCat } from "../cats/CocoaCat.js";
import { CowieCat } from "../cats/CowieCat.js";
import { DottieCat } from "../cats/DottieCat.js";
import { EveCat } from "../cats/EveCat.js";
import { FrostyCat } from "../cats/FrostyCat.js";
import { GanacheCat } from "../cats/GanacheCat.js";
import { GingerCat } from "../cats/GingerCat.js";
import { GozerCat } from "../cats/GozerCat.js";
import { KitkatCat } from "../cats/KitkatCat.js";
import { MarshmellowCat } from "../cats/MarshmellowCat.js";
import { MistyCat } from "../cats/MistyCat.js";
import { PeachesCat } from "../cats/PeachesCat.js";
import { PepperCat } from "../cats/PepperCat.js";
import { SocksCat } from "../cats/SocksCat.js";
import { SpookyCat } from "../cats/SpookyCat.js";
import { SpreeCat } from "../cats/SpreeCat.js";
import { WhiskersCat } from "../cats/WhiskersCat.js";
import { requireContext } from "../../../boot/function/ValidationFunctions.js";

export class CatLoader {
    constructor(context) {
        requireContext(context, this);

        this.context = notNull("context", context, this);
        this.context.setClass(new BanditCat());
        this.context.setClass(new BreezyCat());
        this.context.setClass(new CocoaCat());
        this.context.setClass(new CowieCat());
        this.context.setClass(new DottieCat());
        this.context.setClass(new EveCat());
        this.context.setClass(new FrostyCat());
        this.context.setClass(new GanacheCat());
        this.context.setClass(new GingerCat());
        this.context.setClass(new GozerCat());
        this.context.setClass(new KitkatCat());
        this.context.setClass(new MarshmellowCat());
        this.context.setClass(new MistyCat());
        this.context.setClass(new PeachesCat());
        this.context.setClass(new PepperCat());
        this.context.setClass(new SocksCat());
        this.context.setClass(new SpookyCat());
        this.context.setClass(new SpreeCat());
        this.context.setClass(new WhiskersCat());

        var catsToSelect = [
            this.context.get("BanditCat"),
            this.context.get("BreezyCat"),
            this.context.get("CocoaCat"),
            this.context.get("CowieCat"),
            this.context.get("DottieCat"),
            this.context.get("EveCat"),
            this.context.get("FrostyCat"),
            this.context.get("GanacheCat"),
            this.context.get("GingerCat"),
            this.context.get("GozerCat"),
            this.context.get("KitkatCat"),
            this.context.get("MarshmellowCat"),
            this.context.get("MistyCat"),
            this.context.get("PeachesCat"),
            this.context.get("PepperCat"),
            this.context.get("SocksCat"),
            this.context.get("SpookyCat"),
            this.context.get("SpreeCat"),
            this.context.get("WhiskersCat")];
        this.context.set("catsToSelect", catsToSelect);

        /*
        for (var i = 0; i < 19; i++) {
            this.context.preloadImage(catsToSelect[i].name.toLowerCase() + "Pixel");
            this.context.preloadImage(catsToSelect[i].name.toLowerCase() + "Portrait");
        }
        */
    }
}