let start_button, stop_button, reset_button;
let msecond, second, minute, hour;
let span;
let interval;

window.onload = function () {
    start_button = document.getElementById('start_button')
    stop_button = document.getElementById('stop_button')
    reset_button = document.getElementById('reset_button')
    stop_button.disabled = true
    reset_button.disabled = true
    
    msecond = 0
    second = 0
    minute = 0
    hour = 0

    span = document.getElementsByTagName('span')
}

function update_chrono_front() {
    span[0].innerHTML = hour + " h"
    span[1].innerHTML = minute + " min"
    span[2].innerHTML = second + " s"
    span[3].innerHTML = msecond + " ms"
}

function time() {
    msecond += 1
    if (msecond === 10){
        msecond = 0
        second += 1
    }
    if (second === 60){
        second = 0
        minute += 1
    }
    if (minute === 60){
        minute = 0
        hour += 1
    }

    update_chrono_front()
}

function start_func()
{
    start_button.disabled = true
    stop_button.disabled = false
    reset_button.disabled = false

    interval = setInterval(time, 100)
}

function stop_func()
{
    start_button.disabled = false
    stop_button.disabled = true
    clearInterval(interval)
}

function reset_func()
{
    start_button.disabled = false
    stop_button.disabled = true
    reset_button.disabled = true
    
    clearInterval(interval)

    msecond = 0
    second = 0
    minute = 0
    hour = 0

    update_chrono_front()
}

