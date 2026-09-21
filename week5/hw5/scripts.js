// Variables
let teamName = "Seattle Seahawks";
let quarterback = "Drew Lock"; // most recent game
let touchdowns = 4;
let fieldGoals = 1;
let wonGame = true;
 
// Math operations
let touchdownPoints = touchdowns * 7; // each touchdown is counted as 7 points for simplicity
let total = touchdownPoints + (fieldGoals * 3);
 
// String concatenations
let message1 = "The " + teamName + " scored " + total + " points.";
let message2 = quarterback + " threw " + touchdowns + " touchdowns.";
 
console.log(teamName);
console.log(quarterback);
console.log(touchdowns);
console.log(fieldGoals);
console.log(wonGame);
console.log(touchdownPoints);
console.log(total);
console.log(message1);
console.log(message2);
 
// This line adds a new paragraph at the end of the web page that prints the result of the total variable.
// It uses the += operator to add to the existing HTML instead of replacing it.
document.body.innerHTML += "<p>Result: " + total + "</p>";