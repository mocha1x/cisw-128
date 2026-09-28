// NFL standings
// Ask the user for values)
let teamName = prompt("What team are you checking?");
let wins = Number(prompt("How many wins does the " + teamName + " have?"));
let losses = Number(prompt("How many losses does the " + teamName + " have?"));
let streak = Number(prompt("How many games in a row have they won? (enter 0 if none)"));

console.log(teamName + " record: " + wins + "-" + losses);

// Conditional 1: Is it a winning season?
if (wins > losses) {
  console.log("It's a winning season!");
 
  if (streak >= 3) {
    console.log("And they're on a hot streak!");
  }
} else if (wins === losses) {
  console.log("It's an even season.");
} else {
  console.log("It's a losing season.");
}

// Conditional 2: Current streak
if (streak === 0) {
  console.log("They are not on a winning streak.");
} else {
  console.log("They've won " + streak + " games in a row.");
}

// Conditional 3: Are they undefeated?
if (losses !== 0) {
  console.log("They have lost " + losses + " games.");
} else {
  console.log("They are undefeated!");
}