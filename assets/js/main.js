function game() {
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
  
  // // validation
  // for (i = 1; i <= total; i++) {
  //   if (eval('q' + i) == null || eval('q' + i) == '') {
  //     alert('Please provide an answer for #' + i);
  //     return false;
  //   }
  // }

  var answers = ["a", "a", "b", "a", "d", "d", "b", "d", "b", "c"];

  for (i = 1; i <= total; i++) {
    if (eval('q' + i) == answers[i - 1]) {
      score++;
    }
  }

  var results = 
  "<h3>All done!</h3>" +
  "<p>Correct Answers: " + score + "</p>" +
  "<p>Incorrect Answers: " + (total - score) + "</p>" +
  "<p>Total Score: " + ((score / total) * 100) + "%";
  
  document.querySelector('#board').innerHTML = results;


  return false;
}

var time = 15;
var timer = setInterval(function() {
  time--;
  document.getElementById("timer").textContent = time;
  if (time <= 10 && time != 0) {
    document.getElementById("timer").style.color = "white";
    document.getElementById("timer").style.background = "red";
  } else if (time < 1) {
    game();
    clearInterval(timer);
  }
},1000);