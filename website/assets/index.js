import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const button = document.getElementById("playButton");
const button2 = document.getElementById("muteButton");

const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay()] });
button.onclick = () => player.togglePlay();
button2.onclick = () => player.toggleMute();