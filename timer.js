let minutes = 14,
  seconds = 59;

const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

function updateTimer() {
  minutesSpan.textContent = String(minutes).padStart(2, "0");
  secondsSpan.textContent = String(seconds).padStart(2, "0");
}

function countdown() {
  if (seconds == -1) {
    seconds = 59;
    minutes--;
  }

  if (minutes == -1) {
    minutes = 14;
    seconds = 59;
  }

  updateTimer();

  setTimeout(() => {
    seconds--;
    countdown();
  }, 1000);
}

countdown();
