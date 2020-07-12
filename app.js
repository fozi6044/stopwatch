// var count = 0;
// var interval;

// function timer() {
//     count++
//     console.log(count)

// }
// interval = setInterval(timer, 1000)

// setTimeout(function() {
//     clearInterval(interval)
// }, 5000)

// function timeOut() {

//     console.log("running")
// }

// setTimeout(timeOut, 3000)

var min = 0,
    sec = 0,
    msec = 0,
    minHeading = document.getElementById("min"),
    secHeading = document.getElementById("sec"),
    msecHeading = document.getElementById("msec"),
    interval;

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10)
}

function stop() {
    clearInterval(interval)
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
}