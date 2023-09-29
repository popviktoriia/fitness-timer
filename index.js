let input = document.querySelector("#input");
const countDown = document.querySelector("#countDown");
const audio = document.querySelector("#player");

const button = document.querySelector("#btn");
button.addEventListener ("click", function(){
    set();
    audio.play();
    input.style.display = "none";
    btn.style.display = "none";
    setTime.style.display = "none";
})

let timerId;
let timeInSeconds;

function set() {
    let enteredTime = input.value;
    timeInSeconds = enteredTime;
    timerId = setInterval(calculateTime, 1000);
}

function calculateTime() {
    let showTime = document.querySelector('#countDown'); 
    let minutes = Math.floor(timeInSeconds/60);
    let seconds = timeInSeconds%60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (timeInSeconds < 1) {
        clearInterval(timerId);
        timeInSeconds = 0;
        audio.pause();
    }

    countDown.textContent = `${minutes}:${seconds}`;
    timeInSeconds--;
}

