//import sound from '../../sound/effects/Bite.wav'

import { requireContext } from "../../../boot/function/ValidationFunctions.js";

export class SoundLoader {
    constructor(context) {
        requireContext(context, this);
        //this.context.set("ClawSoundEffect", sound);

        //var sound = document.getElementById("ClawSoundEffect");
        //var sound = new Audio("/sound/effects/Bite.wav");
        //sound.preload = 'auto';
        //sound.init();


        //var sound = document.getElementById("ClawSoundEffect");

        //var playPromise = document.getElementById('ClawSoundEffect').play();

        //this.context.set("ClawSoundEffect", playPromise);
        /*
        this.context.set("BiteSoundEffect", new Audio("./sound/effects/Bite.wav"));
        this.context.set("PounceSoundEffect", new Audio("./sound/effects/Bite.wav"));
        this.context.set("PuffSoundEffect", new Audio("./sound/effects/Bite.wav"));
        this.context.set("WinSoundEffect", new Audio("./sound/effects/Bite.wav"));
        this.context.set("LoseSoundEffect", new Audio("./sound/effects/Bite.wav"));
        */
        //audio.play();
    }
}