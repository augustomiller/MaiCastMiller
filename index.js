/**
 *
*/
import player from "./player.js";

const path = function (file) {
    return `files/${file}`;
}

window.addEventListener("load", () => {
    player.start();
});