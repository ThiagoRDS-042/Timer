let btnStart = document.querySelector('#start');
let btnPause = document.querySelector('#pause');
let btnReset = document.querySelector('#reset');

let timer = {
    hour: 0,
    minutes: 0,
    seconds: 0
};

let time = 100;
let cron;
let textTimer = document.querySelector('#timer');

btnStart.onclick = function() {
    btnStart.style = 'display: none;';
    btnReset.style = 'display: none;';
    btnPause.style = 'display: inline;';
    cron = setInterval(() => { showTime(); }, time);
}

btnPause.onclick = function() {
    btnStart.style = 'display: inline;';
    btnStart.innerText = 'Restart';
    btnReset.style = 'display: inline;';
    btnPause.style = 'display: none;';
    clearInterval(cron);
}

btnReset.onclick = function() {
    btnStart.style = 'display: inline;';
    btnStart.innerText = 'Start';
    btnReset.style = 'display: none;';
    btnPause.style = 'display: none;';
    clearInterval(cron);
    timer = {
        hour: 0,
        minutes: 0,
        seconds: 0
    };

    textTimer.innerText = '00:00:00';
}

function showTime() {
    timer.seconds++;

    if (timer.seconds === 60) {
        timer.minutes++;
        timer.seconds = 0;

        if (timer.minutes === 60) {
            timer.hour++;
            timer.minutes = 0;
        }
    }

    let formatHour = `${timer.hour < 10 ? '0' + timer.hour : timer.hour}:${timer.minutes < 10 ? '0' + timer.minutes : timer.minutes}:${timer.seconds < 10 ? '0' + timer.seconds : timer.seconds}`;

    textTimer.innerText = formatHour;

    return formatHour;
}