function game() {
  var total = 5;
  var score = 0;

  var q1 = document.forms["quiz"]["q1"].value;
  var q2 = document.forms["quiz"]["q2"].value;
  var q3 = document.forms["quiz"]["q3"].value;
  var q4 = document.forms["quiz"]["q4"].value;
  var q5 = document.forms["quiz"]["q5"].value;
  
  // validation
  for (i = 1; i <= total; i++) {
    if (eval('q' + i) == null || eval('q' + i) == '') {
      alert('Please provide an answer for #' + i);
      return false;
    }
  }

  var answers = ["c", "a", "b", "c", "c"];

  for (i = 1; i <= total; i++) {
    if (eval('q' + i) == answers[i - 1]) {
      score++;
    }
  }

  // alert("You scored " + score + " out of " + total);
  // var results = document.getElementById('results');
  // results.innerHTML = "You scored " + score + " out of " + total;
  
  var results = 
  "<h3>All done!</h3>" +
  "<p>Correct Answers: " + score + "</p>" +
  "<p>Incorrect Answers: " + (total - score) + "</p>";
  
  document.querySelector('.card-body').innerHTML = results;


  return false;
}