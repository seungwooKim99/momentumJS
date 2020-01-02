var audio = document.querySelector(".audio");
const range = document.querySelector(".jsRange");
const playBtn = document.querySelector(".playBtn");
const pauseBtn = document.querySelector(".pauseBtn");

function playMusic(){
    audio.play();
    console.log(audio);
}

function pauseMusic(){
    audio.pause();
}

function handleRangeChange(evnet){
    console.log(event);
    audio.volume=event.target.value;
}
function initMusic(){
    
    audio = new Audio();
    audio.src = "./Sia_Snowman.mp3";
    
    playBtn.addEventListener("click", playMusic);
    pauseBtn.addEventListener("click", pauseMusic);
    range.addEventListener("input", handleRangeChange);
}

function init(){
    initMusic();
}

init();