let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let seconds = document.querySelector('.secs');
let minutes = document.querySelector('.mins');
let hours = document.querySelector('.hrs');
let milliseconds = document.querySelector('.ms');

let timerId;

function updateTimer() {
    milliseconds.innerText++;
    if (parseInt(milliseconds.innerText) === 100) {
        milliseconds.innerText = 0;
        seconds.innerText++;
        if (parseInt(seconds.innerText) === 60) {
            seconds.innerText = 0;
            minutes.innerText++;
            if (parseInt(minutes.innerText) === 60) {
                minutes.innerText = 0;
                hours.innerText++;
            }
        }
    }

    timerId = setTimeout(updateTimer, 10);
}

function startTimer() {
    startButton.disabled = true;
    stopButton.innerHTML = 'Stop';
    stopButton.removeEventListener('click', resetTimer); // Remove resetTimer listener
    stopButton.addEventListener('click', stopTimer);
    updateTimer();
}

function stopTimer() {
    clearTimeout(timerId);
    startButton.disabled = false;
    stopButton.innerHTML = 'Reset';
    stopButton.removeEventListener('click', stopTimer); // Remove stopTimer listener
    stopButton.addEventListener('click', resetTimer);
}

function resetTimer() {
    clearTimeout(timerId);
    seconds.innerText = 0;
    minutes.innerText = 0;
    hours.innerText = 0;
    milliseconds.innerText = 0;
    startButton.disabled = false;
    stopButton.innerHTML = 'Stop';
    stopButton.removeEventListener('click', resetTimer); // Remove resetTimer listener
    stopButton.addEventListener('click', stopTimer);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

document.querySelector(".theme-toggle").addEventListener("click", theme);

function theme() {
    console.log("theme change");
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme");

}