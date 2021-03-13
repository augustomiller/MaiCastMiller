/**
 *
*/
const player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    data: {
        title: " Titulo Lorem ipsum dolor sit. ",
        artist: "Lorem ipsum",
        cover: "./Assets/Images/Untitled.jpg",
        file: "./Assets/Audios/VivaLaVida.mp3"
    },
    start() {
        player.cover.style.background = `url('${player.data.cover}') no-repeat center center / cover`;
        player.title.innerText = player.data.title;
        player.artist.innerHTML = `<i class='material-icons icon-image-preview'>hearing</i> ${player.data.artist}`;
        player.audio.src = player.data.file;
    }
};

player.start();