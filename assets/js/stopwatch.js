// time section
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let milliSeconds = document.getElementById("milli-seconds");

// buttons section
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let [milliSec,sec,min,hrs] = [0,0,0,0];
let myInterval;

startBtn.addEventListener("click", function start() {
  myInterval = setInterval(function () {
    milliSec += 10;
    milliSeconds.innerText = milliSec/10;
    if (milliSec == 1000) {
      milliSec = 0;
      seconds.innerText = sec++;
      if (sec == 60) {
        sec = 0;
        minutes.innerText = min++;
        if (min == 60) {
            min = 0;
            hours.innerText = hrs++;
          }
      }
    }
    
  }, 10);
});

pauseBtn.addEventListener("click", function () {
  clearInterval(myInterval);
});

resetBtn.addEventListener("click", function () {
  clearInterval(myInterval);
  [milliSec,sec,min,hrs] = [0,0,0,0];
  milliSeconds.innerText = seconds.innerText = minutes.innerText =hours.innerText= 0;
});
