function game() {
  stopTimer();

  var total = 10;
  var score = 0;

  var q1 = document.forms["quiz"]["q1"].value;
  var q2 = document.forms["quiz"]["q2"].value;
  var q3 = document.forms["quiz"]["q3"].value;
  var q4 = document.forms["quiz"]["q4"].value;
  var q5 = document.forms["quiz"]["q5"].value;
  var q6 = document.forms["quiz"]["q6"].value;
  var q7 = document.forms["quiz"]["q7"].value;
  var q8 = document.forms["quiz"]["q8"].value;
  var q9 = document.forms["quiz"]["q9"].value;
  var q10 = document.forms["quiz"]["q10"].value;

  // Counting score
  var answers = ["a", "a", "b", "a", "d", "d", "b", "d", "b", "c"];
  for (i = 1; i <= total; i++) {
    if (eval('q' + i) == answers[i - 1]) {
      score++;
    }
  }

  // Results
  var results = 
  "<h5>All done!</h5>" +
  "<p>Correct Answers: " + score + "</p>" +
  "<p>Incorrect Answers: " + (total - score) + "</p>" +
  "<p>Total Score: " + ((score / total) * 100) + "%";
  document.querySelector('#board').innerHTML = results;

  // Not actually submitting anything
  return false;
}

//Timer
var time = 60;
var timer = setInterval(timerCounter,1000);

function timerCounter() {
  time--;
  document.getElementById("timer").textContent = time;
  if (time <= 10 && time != 0) {
    red();
  } else if (time < 1) {
    clearInterval(timer);
    game();
    reloadButton();
  }
}

// Stops the timer when the form is submitted
function stopTimer() {
  clearTimeout(timer);
  reloadButton();
}

// Color the timer red when under 10 seconds
function red() {
  document.getElementById("timer").style.color = "white";
  document.getElementById("timer").style.background = "red";
}

// Turn timer into restart button
function reloadButton() {
  document.getElementById("timer").innerHTML = "<button id='restart' class='btn' onclick='return reload()'>Restart</button>";
}

//Reload Page on button click
function reload() {
  document.location.reload();
}