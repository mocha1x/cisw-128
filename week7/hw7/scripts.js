// Ask the user for two numbers
let userNumber = Number(prompt("What number do you want to count up to?"));
let lines = Number(prompt("How many rows for the triangle?"));

// FizzBuzz
// Counts from 1 up to the user's number.
for (let i = 1; i <= userNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // multiple of both 3 and 5
    } else if (i % 3 === 0) {
        console.log("Fizz"); // multiple of 3
    } else if (i % 5 === 0) {
        console.log("Buzz"); // multiple of 5
    } else {
        console.log(i); // anything else just prints the number
    }
}

// Triangle
// Each time through, add one more star and print the row.
let triangle = "";
for (let line = 1; line <= lines; line++) {
    triangle += "#";
    console.log(triangle);
}