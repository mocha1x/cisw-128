//Do not link this JS file to your html, this is a stand alone file

// 1. Concept (5 pts): Why do we use Number(prompt()) instead of just prompt() when doing math or numeric comparisons?
// Because prompt always returns a string, and if not converted to a number, it may concatenate instead of performing mathematical operations.

// 2. Operators (10 pts): In one sentence each, explain the difference between:

// == vs ===
// == is a loose comparison.
// === is a strict comparison and returns true only if both values and type are identical.

// > vs >=
// > checks if the left side is greater than the right side, while >= checks if the left side is greater than or equal to the right side.











// Part_C 3: Broken code — explain changes in comments, then rewrite correctly below
let score = prompt("Score?"); // Using a prompt meant for string input for a numeric value
if (score >= "90") { // Number is kept as a string by using quotations
  console.log("A");
} else if (score == "80") { // Number is kept as a string by using quotations
  console.log("B");
} else {
  console.log("Keep going") // No semicolon at the end
}
// Write the working version of the above code below: 
let fixed_score = Number(prompt("Score?")); // Convert the string to a number
if (fixed_score >= 90) { // Took number out of quotations
    console.log("A");
} else if (fixed_score == 80) { // Took number out of quotations
    console.log("B");
} else {
    console.log("Keep going"); // Added semicolon
}