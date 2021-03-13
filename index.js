/**
 *
*/
const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
    title: " Titulo Lorem ipsum dolor sit. ",
    artist: "Ouça nosso convidado de hoje!",
    cover: "./Assets/Images/Untitled.jpg",
    file: "./Assets/Audios/VivaLaVida.mp3"
};

cover.style.background = `url(${data.cover}) no-repeat center center / cover`;
title.innerText = data.title;
artist.innerHTML = `<i class='material-icons icon-image-preview'>hearing</i> ${data.artist}`;
audio.src = data.file;