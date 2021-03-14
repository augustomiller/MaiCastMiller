import { secondsToMinutes } from "./utils.js";

export default {
    get() {
        this.cover = document.querySelector(".card-image");
        this.title = document.querySelector(".card-content h5");
        this.artist = document.querySelector(".artist");
        this.playPause = document.querySelector("#play-pause");
        this.vol = document.querySelector("#vol");
        this.volumeRange = document.querySelector("#vol-control");
        this.seekbar = document.querySelector("#seekbar");
        this.currentDuration = document.querySelector("#current-duration");
        this.totalDuration = document.querySelector("#total-duration");
    },

    /**
     * Criando um novo objeto de audio totalmente controlado pelo JS
     * e que não está aplicado a DOM.
    */
    createAudioElement(audio) {

        this.audio = new Audio(audio);
    },
    actions() {
        this.audio.onended = () => this.next();
        this.audio.ontimeupdate = () => this.timeUpdate();
        this.playPause.onclick = () => this.togglePlayPause();
        this.vol.onclick = () => this.toggleMute();
        this.volumeRange.oninput = () => this.setVolume(this.volumeRange.value);
        this.volumeRange.onchange = () => this.setVolume(this.volumeRange.value);
        this.seekbar.oninput = () => this.setSeekBar(this.seekbar.value);
        this.seekbar.onchange = () => this.setSeekBar(this.seekbar.value);
        this.seekbar.max = this.audio.duration;
        this.totalDuration.innerText = secondsToMinutes(this.audio.duration);
    }
};