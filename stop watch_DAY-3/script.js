let displayTime = document.querySelector(".display");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let timer = "";
let seconds = 0;
let isRunning = false;

function startTimer(){
    if(!isRunning){
        timer = setInterval(updateTimer, 1000)
        isRunning = true;
    }
}

function stopTimer(){
    clearInterval(timer);
    timer = "";
    isRunning = false;
}

function resetTimer(){
    clearInterval(timer);
    timer = "";
    seconds = 0;
    displayTime.innerHTML = "00 : 00 : 00";
    isRunning = false;
}


function updateTimer()
{
    seconds++;

    let hours = Math.floor(seconds/3600); // here logic is 1hr = 3600 second..
    let mints = Math.floor((seconds%3600)/60);
    let sec = seconds % 60;

    let formatted = `${hours.toString().padStart(2,"0")} : ${mints.toString().padStart(2,"0")} : ${sec.toString().padStart(2,"0")}`
    displayTime.innerHTML = formatted;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);