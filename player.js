/**
 *
*/
import audios from "./data.js";
import { path, secondsToMinutes } from "./utils.js";
import elements from "./playerElements.js"

export default {

    audioData: audios,
    currentAudio: {},
    currentPlaying: 0,
    isPlaying: false,

    start() {
        elements.get.call(this); //Chamando a função o conteúdo dela fica disponível aqui nesse escopo.
        this.update();
    },
    play() {
        this.isPlaying = true;
        this.audio.play();
        this.playPause.innerText = "pause";
    },
    pause() {
        this.isPlaying = false;
        this.audio.pause();
        this.playPause.innerText = "play_arrow";
    },
    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },
    toggleMute() {
        this.audio.muted = !this.audio.muted; //Inverte o estado toda vez que o usuário clicar no botão de mute.
        this.vol.innerText = this.audio.muted ? "volume_down" : "volume_up";
    },
    next() {
        this.currentPlaying++
        if (this.currentPlaying == this.audioData.length) { this.restart(); } //Se o arquivo lido já é o ultimo, volta para o primeiro da fila.
        this.update();
        this.audio.play();//Se remover essa linha não funciona no firefox.
    },
    setVolume(value) {
        this.audio.volume = value / 100;
    },
    setSeekBar(value) {
        this.audio.currentTime = value;
    },
    timeUpdate() {
        this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
        this.seekbar.value = this.audio.currentTime;
    },
    update() {
        this.currentAudio = this.audioData[this.currentPlaying];
        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerHTML = `<i class='material-icons icon-image-preview'>hearing</i> ${path(this.currentAudio.artist)}`;
        elements.createAudioElement.call(this, path(this.currentAudio.file));

        this.audio.onloadeddata = () => { //Aguarda o metadata do audio ser carregado, para poder ser trabalhado.
            elements.actions.call(this);
        }
    },
    restart() {
        this.currentPlaying = 0;
        this.update;
    }
};