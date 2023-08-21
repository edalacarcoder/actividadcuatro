// Código JAVASCRIPT para reproducción de AUDIO DE FONDO (MP3)

let sound = new Audio("https://res.cloudinary.com/dsay3mbrf/video/upload/v1691799764/good-vibe-7669_exzu3a.mp3");


btn_play_audio.addEventListener("click", () =>{
    sound.play();
  
});

btn_pause_audio.addEventListener("click", () =>{
    sound.pause();
  
});