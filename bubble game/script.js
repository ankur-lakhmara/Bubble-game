var timer = 60;
var hitRn;
var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
function getNewHit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitRn;
}
function makeBubble() {
  var clutter = "";
  for (var i = 0; i <= 39; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>game over</h1> <br> <h2>score is ${score}</h2>`;
      //   document.querySelector("hitval").innerHTML = "a";
      clearInterval(timerInt);
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNumber = Number(details.target.textContent);
  if (clickedNumber === hitRn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});
runTimer();
makeBubble();
getNewHit();
